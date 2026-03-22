// @ts-nocheck
const pages = {
    home: `
        <h1 class="text-2xl font-bold text-gray-800 mb-3">Home</h1>
        <p class="text-gray-500">Welcome to SnapShoot!</p>
    `,
    faq: `
        <h1 class="text-2xl font-bold text-gray-800 mb-3">FAQ</h1>
        <div class = " grid grid-cols-2 gap-4 p-4">
            <div class = "bg-white rounded-xl border border-gray-200 p-4">
                <h4 class="text-gray-500">Q:  What is snapshoot?</p>
                <p class="text-gray-500">A: Snapshoot is a YSWS where you can get grants for camera or visual related items when you ship a project usind openCV</p>
            </div>

            <div class = "bg-white rounded-xl border border-gray-200 p-4">
                <h4 class = "text-gray-500> What is Hack Club?</h4>
                <p class = "text-gray-500> Hack Club is a non-profit organization under the (501)c thingy"</p>
            </div>

            <div class = "bg-white rounded-x1 border border-gray-200 p-4">
                <h4 class = "text-gray-500"> I'm a beginner, can I still do this?</h4>
                <p class = "text-gray-500"> Of course! OpenCV has plenty of doccumentation online, not to mention we will have tutorials avalible for you to follow on various languages!"</p>
            </div>
    `,
    prizes: `
        <h1 class="text-2xl font-bold text-gray-800 mb-3">Prizes</h1>
        <p class="text-gray-500"> When you finish shipping your project, you will be granted many prizes </p>
        <p class="text-gray-500">🥈 Second place: $250</p>
    `,
}

function loadPage(name){
    document.getElementById('window').innerHTML = pages [name]
}

