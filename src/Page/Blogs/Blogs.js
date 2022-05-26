import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <div class="collapse border">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title ">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content  border border-t-1 border-b-0"> 
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
            <div class="collapse">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title border ">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content border border-x-1"> 
                    <p className='pt-2'>
                        আমরা চার ভাবে রিয়েক্ট আপ্লিকেশনকে ম্যানেজ করতে পারি ।  
                        লোকাল স্টেট, হল ডেটা যা আমরা এক বা অন্য উপাদানে পরিচালনা করি। এহা প্রায়ই useState হুক ব্যবহার করে রিয়েক্ট পরিচালিত হয় । 

                        গ্লোবাল স্টেট,  গ্লোবাল স্টেট হল ডেটা যা আমরা একাধিক উপাদান জুড়ে পরিচালনা করি। আমরা যখন আমাদের অ্যাপের যেকোনো জায়গায় বা অন্তত একাধিক উপাদানে ডেটা পেতে এবং আপডেট করতে চাই তখন গ্লোবাল স্টেট প্রয়োজনীয়।

                        সার্ভারের স্টেট - একটি বহিরাগত সার্ভার থেকে আসা ডেটা যা অবশ্যই আমাদের UI অবস্থার সাথে একত্রিত হতে হবে।
                        সার্ভার স্টেট একটি সাধারণ ধারণা, কিন্তু আমাদের লোকাল এবং গ্লোবাল  UI অবস্থার পাশাপাশি পরিচালনা করা কঠিন হতে পারে।
                    </p>ইউআরএল স্টেট - পাথনাম এবং কোয়েরি প্যারামিটার সহ আমাদের ইউআরএল-এ বিদ্যমান ডেটা। ইউআরএল স্টেট প্রায়ই রাজ্যের একটি বিভাগ হিসাবে অনুপস্থিত, কিন্তু এটি একটি গুরুত্বপূর্ণ।
                </div>
            </div>
            <div class="collapse">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title border">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content border "> 
                    <p className='pt-2'>
                        প্রোটোটাইপল ইনহেরিট্যান্স হল জাভাস্ক্রিপ্টের একটি বৈশিষ্ট্য যা বস্তুতে পদ্ধতি এবং বৈশিষ্ট্য যোগ করতে ব্যবহৃত হয়।
                        এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি বস্তু অন্য বস্তুর বৈশিষ্ট্য এবং পদ্ধতির উত্তরাধিকারী হতে পারে।
                        ঐতিহ্যগতভাবে, একটি বস্তুর প্রোটোটাইপ পেতে এবং সেট করার জন্য,
                        আমরা Object.getPrototypeOf এবং Object.setPrototypeOf ব্যবহার করি।
                    </p>
                </div>
            </div>
            <div class="collapse">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title border">
                    You have an array of products. Each object has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content border "> 
                    <p className='pt-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae perspiciatis dicta aperiam ducimus expedita deleniti harum provident at? Illum inventore nam dignissimos quas ullam mollitia, eum cum tempore recusandae. Eaque placeat doloremque nesciunt perferendis quos autem obcaecati magnam voluptatibus, mollitia aut aliquid a nam adipisci odio magni blanditiis consectetur ut itaque accusantium totam reiciendis. Sunt unde dolorum optio, expedita, sint voluptates velit dolor ea porro ullam doloremque possimus quibusdam amet perspiciatis soluta excepturi cum iusto doloribus? Minima natus beatae delectus.</p>
                </div>
            </div>
            <div class="collapse">
                <input type="checkbox" class="peer" /> 
                <div class="collapse-title border">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content border "> 
                    <p className='pt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint odio impedit, soluta quibusdam saepe tempora ullam voluptatum. Maxime quos quidem, illo natus officiis nobis dolore nisi, iure et non at sequi reiciendis enim pariatur soluta, aliquid voluptatem rem laborum aperiam earum cupiditate. Animi accusantium harum illum iure in ipsam architecto vitae inventore ut officia sit, voluptatum facilis voluptate cupiditate aperiam! Optio similique doloremque expedita repellat sed iure adipisci. Necessitatibus numquam possimus nihil iste accusamus dolores quasi quis minus placeat vero itaque praesentium illum a illo tenetur, dolor nisi dicta magni, aliquam earum nulla commodi, blanditiis velit vitae? Magnam, recusandae labore!</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;