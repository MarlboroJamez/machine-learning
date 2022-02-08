import React from 'react';
import TextDivider from '../dividers/text';

function faq() {
  return (
    <div className="w-74 ml-40">
    <div className="flex">
        <div className="flex-4">
            <TextDivider/>
            <h3 className="font-bold text-lg text-stone-200">
                How do I start creating AI Generated Art?
            </h3>
        </div>
        <div className="flex-6 ml-20">
            <p className="text-stone-200 text-lg">
                Simply choose or upload a content image and a style image. When you click "Create", our AI will recreate your content image in your chosen style.
            </p>
        </div>
    </div>

    <div className="mt-14">
        <div className="flex">
            <div className="flex-4">
                <TextDivider/>
                <h3 className="font-bold text-lg text-stone-200">
                    Does it cost money to make use of this application?
                </h3>
            </div>
            <div className="flex-6 ml-20">
                <p className="text-stone-200 text-lg">
                    No, it does not cost any money to make use of our application as this is a contribution to the public and completely free to use at all times.
                </p>
            </div>
        </div>
    </div>

    <div className="mt-14">
        <div className="flex">
            <div className="flex-4">
                <TextDivider/>
                <h3 className="font-bold text-lg text-stone-200">
                    Do we obtain any unique features?
                </h3>
            </div>
            <div className="flex-6 ml-20">
                <p className="text-stone-200 text-lg">
                    Yes! We have power tools not offered by any other AI Art application. These include things like multiple style images, bulk creation and native notifications.
                </p>
            </div>
        </div>
    </div>

    <div className="mt-14">
        <div className="flex">
            <div className="flex-4">
                <TextDivider/>
                <h3 className="font-bold text-lg text-stone-200">
                    Do I own the artwork that I create?
                </h3>
            </div>
            <div className="flex-6 ml-20">
                <p className="text-stone-200 text-lg">
                    Yes! As long as you own (or have permission to use) the original assets, your creations belong to you.
                </p>
            </div>
        </div>
    </div>
    
    <div className="mt-14">
        <div className="flex">
            <div className="flex-4">
                <TextDivider/>
                <h3 className="font-bold text-lg text-stone-200">
                    Are you planning on adding future features to the application?
                </h3>
            </div>
            <div className="flex-6 ml-20">
                <p className="text-stone-200 text-lg">
                    Yes we are! Our goal to this application is to create a AI toolkit covering different use cases, from Art, Natural Language processing and a lot more to be mentioned
                    on our own Neural Network, so stay tuned.
                </p>
            </div>
        </div>
    </div>
</div>
  );
}

export default faq;
