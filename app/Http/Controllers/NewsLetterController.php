<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\NewsLetter;
use Illuminate\Http\Request;
use App\Mail\NewsLetterSaved;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use App\Http\Resources\NewsLetterResource;
use App\Http\Requests\StoreNewsLetterRequest;
use App\Http\Requests\UpdateNewsLetterRequest;

class NewsLetterController extends Controller
{

    /**
     * List of all invitations requests
     * @param \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    function list(Request $request) {
        $status = $request->query('status', 'pending');

        $invitations = NewsLetter::where('status', '=', $status)
            ->latest()
            ->paginate(10);

        return response()->json($invitations);
    }

    /**
     * Get an invitation request by his identifier
     */
    function fetch($id){
        $newsLetter = NewsLetter::find($id);
        if ($newsLetter == null) {
            return response()->json(['message' => "Invitation with id $id not found"], 404);
        }
        return response()->json(new NewsLetterResource($newsLetter));
    }

    /**
     * Validate an invitation
     * @param \Illuminate\Http\UpdateNewsLetterRequest
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateNewsLetterRequest $request, $id)
    {
        $validated = $request->validated();
        $newsLetter = NewsLetter::find($id);
        if ($newsLetter == null) {
            return response()->json(['message' => "Invitation with id $id not found"], 404);
        }
        $newsLetter->validated_at = Carbon::createFromFormat('Y-m-d H:i', now()->format('Y-m-d H:i'))->toDateTimeString();
        $newsLetter->status = $validated['status'];
        $newsLetter->message = $validated['message'];

        $newsLetter->save();

        return response()->json(new NewsLetterResource($newsLetter));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreNewsLetterRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreNewsLetterRequest $request)
    {
        $validated = $request->validated();

        //Check if newsletter already exist
        $exist = NewsLetter::where('phone', '=', $validated['phone'])
            ->orWhere('email', '=', $validated['email'])->count();
        if ($exist > 0) {
            $request->session()->flash('message', 'Telephone number or email address already used');
            $request->session()->flash('type', 'error');
        } else {
            $newsLetter = NewsLetter::fromRequest($validated);
            $request->session()->flash('message', "Your request have been successfully save. An email will be send you to $newsLetter->email");
            $request->session()->flash('type', 'success');

            Mail::to($validated['email'])
                ->send(new NewsLetterSaved($newsLetter));
        }

        return Redirect::route('welcome');
    }
}
