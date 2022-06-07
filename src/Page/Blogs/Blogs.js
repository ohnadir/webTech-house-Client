import React from 'react';

const Blogs = () => {
    return (
        <div className='grid grid-cols-1 gap-2 max-w-7xl mx-auto px-2 mt-7'>
            <div className="collapse border">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title ">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content  border border-t-1 border-b-0"> 
                    <p className='pt-2'>
                        
                        অপ্রয়োজনীয় রি-রেন্ডার প্রতিরোধ করার জন্য রিয়েক্ট কম্পোনেন্ট স্মরণ করা।
                        ইমেজ র সাইজ অপটিমাইজ করা । প্রয়োজন অনুসারে কম্পোনেন্টের স্টেট লোকাল রাখা  । 
                        কোড গতিশীল করার  জন্য ডায়নামিক ইম্পোর্ট ব্যবহার করা ।

                        আমাদের রিয়েক্ট অ্যাপ্লিকেশনটিকে সফলভাবে অপ্টিমাইজ করার জন্য,
                        প্রথমে সংশোধন করার জন্য আমাদের অ্যাপ্লিকেশনটিতে একটি
                        সমস্যা খুঁজে বের করতে হবে।
                        

                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title border ">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content border border-x-1"> 
                    <p className='pt-2'>
                        আমরা চার ভাবে রিয়েক্ট আপ্লিকেশনকে ম্যানেজ করতে পারি ।  
                        লোকাল স্টেট, হল ডেটা যা আমরা এক বা অন্য উপাদানে পরিচালনা করি। এহা প্রায়ই useState হুক ব্যবহার করে রিয়েক্ট পরিচালিত হয় । 

                        গ্লোবাল স্টেট,  গ্লোবাল স্টেট হল ডেটা যা আমরা একাধিক উপাদান জুড়ে পরিচালনা করি। আমরা যখন আমাদের অ্যাপের যেকোনো জায়গায় বা অন্তত একাধিক উপাদানে ডেটা পেতে এবং আপডেট করতে চাই তখন গ্লোবাল স্টেট প্রয়োজনীয়।

                        সার্ভারের স্টেট - একটি বহিরাগত সার্ভার থেকে আসা ডেটা যা অবশ্যই আমাদের UI অবস্থার সাথে একত্রিত হতে হবে।
                        সার্ভার স্টেট একটি সাধারণ ধারণা, কিন্তু আমাদের লোকাল এবং গ্লোবাল  UI অবস্থার পাশাপাশি পরিচালনা করা কঠিন হতে পারে।
                    </p>ইউআরএল স্টেট - পাথনাম এবং কোয়েরি প্যারামিটার সহ আমাদের ইউআরএল-এ বিদ্যমান ডেটা। ইউআরএল স্টেট প্রায়ই রাজ্যের একটি বিভাগ হিসাবে অনুপস্থিত, কিন্তু এটি একটি গুরুত্বপূর্ণ।
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title border">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content border "> 
                    <p className='pt-2'>
                        জাভাস্ক্রিপ্ট একটি প্রোটোটাইপ-ভিত্তিক, অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং ভাষা।
                        ES6 আপডেটের পরে, জাভাস্ক্রিপ্ট  এর জন্য অনুমতি দিয়েছে, যার অর্থ বস্তু এবং পদ্ধতিগুলি ভাগ করা, প্রসারিত এবং অনুলিপি করা যেতে পারে।

                        অবজেক্টের মধ্যে ভাগ করা ডেটা ,  ফাংশন এবং স্টেট  এর সহজ উত্তরাধিকার তৈরি করে।

                        জাভাস্ক্রিপ্ট হল প্রোটোটাইপ-সক্ষম ভাষার মধ্যে সবচেয়ে সাধারণ, এবং এর ক্ষমতা তুলনামূলকভাবে অনন্য।
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title border">
                    You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content border "> 
                    <p className='pt-2'>আরে থেকে কোন প্রোডাক্ট সার্চ করতে সম্ভব নাম  কোয়েরি দ্বারা । ডাটাবেইজ থেকে কোন নির্দিষ্ট প্রোডাক্ট খুজে বের করার জন্য কোয়েরি করে কালেকশন থেকে কোয়েরির মাধ্যমে করা সম্ভব । আর এই প্রক্রিয়া টি করার জন্য সর্ব প্রথম ক্লাইন্ট সাইট থেকে ব্যাকেন্ডে রিকোয়েষ্ট পাঠাতে হবে ।
                    ক্লাইন্ট সাইট সেই রিকোয়েষ্ট গ্রহন করের নাম দিয়ে খুজে দিবে । আর এই প্রক্রিয়া দিয়েই সার্চ করার সম্ভব / 
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title border">
                    What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content border "> 
                    <p className='pt-2'>ইউনিট টেস্টিং হল একটি সফ্টওয়্যার পরীক্ষার কৌশল যার মাধ্যমে সফ্টওয়্যারের পৃথক ইউনিটগুলি যেমন কম্পিউটার প্রোগ্রাম মডিউলের গ্রুপ, ব্যবহারের পদ্ধতি এবং অপারেটিং পদ্ধতিগুলি ব্যবহারের জন্য উপযুক্ত কিনা তা নির্ধারণ করতে পরীক্ষা করা হয় ।
                    ইউনিট টেস্টিং ডেভেলপারদের একটি ইউনিট দ্বারা কী কার্যকারিতা প্রদান করা হয় এবং ইউনিট API এর একটি প্রাথমিক বোঝার জন্য কীভাবে এটি ব্যবহার করতে হয় তা শিখতে দেয়।
                    ইউনিট টেস্টিং প্রোগ্রামারকে কোড পরিমার্জন করতে এবং মডিউলটি সঠিকভাবে কাজ করে তা নিশ্চিত করতে দেয়।
                    ইউনিট পরীক্ষা অন্যদের সম্পূর্ণ হওয়ার জন্য অপেক্ষা না করে প্রকল্পের অংশগুলি পরীক্ষা করতে সক্ষম করে।
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;