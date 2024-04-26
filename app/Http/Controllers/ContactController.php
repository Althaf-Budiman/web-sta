<?php

namespace App\Http\Controllers;

use App\Mail\InquiryMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function sendInquiry(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'company' => 'required',
            'phoneNumber' => 'required|numeric',
            'inquiry' => 'required|min:10',
        ]);

        Mail::to('supertaskoaria@gmail.com')->send(new InquiryMail(
            $request->name,
            $request->email,
            $request->company,
            $request->phoneNumber,
            $request->inquiry,
        ));

        return redirect('/about#contact');
    }
}
