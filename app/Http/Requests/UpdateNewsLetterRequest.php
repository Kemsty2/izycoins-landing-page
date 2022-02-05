<?php

namespace App\Http\Requests;

use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateNewsLetterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'status' => ['required', Rule::in(['validated', 'rejected'])],
            'message' => ['required', 'max:255']
        ];
    }

    public function messages()
    {
        return [
            'status.required' => "Status is required",
            'status.in' => "Status must be 'Validated' or 'Reject'",
            'message.required' => "Message is required",
            'message.max' => "Message mush be less than 255 characters"
        ];
    }
}
