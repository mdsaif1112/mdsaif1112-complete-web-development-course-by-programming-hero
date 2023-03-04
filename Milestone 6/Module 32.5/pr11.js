// ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট ) 

const member = {
    name: 'Saif',
    roll: 12,
    marks: {
        physics: {
            firstPaper: 80,
            secondPaper: 88
        },
        math: {
            firstPaper: 80,
            secondPaper: 88
        },
        chemistry: {
            firstPaper: 80,
            secondPaper: 88
        }
    }
}

const chemistry2ndPaperMarks = member.marks?.chemistry?.secondPaper

console.log(chemistry2ndPaperMarks);