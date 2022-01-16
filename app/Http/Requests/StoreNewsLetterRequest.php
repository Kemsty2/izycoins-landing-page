<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNewsLetterRequest extends FormRequest
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
            'email' => 'required',
            'firstname' => 'required',
            'phone' => 'required',
            'surname' => 'required',
            'sector' => 'required',
            'position' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'email.required' => "Email is required",
            'firstname.required' => "First Name is required",
            'phone.required' => "Phone is required",
            'surname.required' => "Surname is required",
            'sector.required' => "Sector is required",
            'position.required' => "Position is required",
        ];
    }
}
