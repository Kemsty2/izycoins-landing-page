<?php

namespace App\Http\Controllers;

use App\Models\NewsLetter;
use App\Mail\NewsLetterSaved;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use App\Http\Requests\StoreNewsLetterRequest;

class NewsLetterController extends Controller
{
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
                ->queue(new NewsLetterSaved($newsLetter));
        }

        return Redirect::route('welcome');
    }
}
