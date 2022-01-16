<?php

namespace App\Mail;

use App\Models\NewsLetter;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NewsLetterSaved extends Mailable
{
    use Queueable, SerializesModels;

    public $newsLetter;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(NewsLetter $newsLetter)
    {
        $this->newsLetter = $newsLetter;
        $this->theme = 'newsletter';
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->subject('Congratulations on requesting access to IzyCoins')
            ->from('contact@izycoins.com', 'IzyCoins')
            ->markdown('emails.newsletters.saved');
    }
}
