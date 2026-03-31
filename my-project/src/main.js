// @ts-nocheck
const pages = {
    home: `
        <h1 class="text-2xl font-bold text-gray-800 mb-3">Home</h1>
        <p class="text-gray-500">Welcome to SnapShoot!</p>
    `,
    faq: `
        <h1 class="text-5xl font-bold text-gray-800 mb-3">FAQ</h1>
        <div class = " grid grid-cols-2 gap-4 p-4">
            <div class = "bg-white rounded-xl border border-gray-200 p-4">
                <h4 class="text-gray-500 text-xl"> What is snapshoot?</h4>
                <p class="text-gray-500 ">Snapshoot is a YSWS where you can get grants for camera or visual related items when you ship a project usind openCV</p>
            </div>

            <div class = "bg-white rounded-xl border border-gray-200 p-4">
                <h4 class = "text-gray-500 text-xl"> Is this legit?</h4>
                <p class = "text-gray-500"> Snapshoot is under Hack Club, a 501(c)3 nonprofit and is primarily run by @erook on slack"</p>
            </div>

            <div class = "bg-white rounded-xl border border-gray-200 p-4">
                <h4 class = "text-gray-500 text-xl"> I'm a beginner, can I still do this?</h4>
                <p class = "text-gray-500"> Of course! OpenCV has plenty of doccumentation online, not to mention we will have tutorials avalible for you to follow on various languages!"</p>
            </div>

            <div class = "bg-white rounded-xl border border-gray-200 p-4 transform hover: scale-105">
                <h4 class = "text-gray-500 text-xl"> Am I elegible to participate in SnapShoot?</h4>
                <p class = "text-gray-500"> You must be 13-18 to participate in Snapshoot!</p>
            </div>

            <div class = "bg-white rounded-xl border border-gray-200 p-4 transform hover: scale-105">
                <h4 class = "text-gray-500 text-xl"> How do I get started?</h4>
                <p class = "text-gray-500"> You can get started by filling out the RSVP form and getting yourself on hack club slack (join channel #SnapShoot)</p>
                <button class = "bg-white rounded-xl border hover: scale-105"> RSVP </button>
                <button class = "bg-white rounded-xl border"> Slack! </button>

            </div>

            <div class = "bg-white rounded-xl border-gray-200 p-4">

            </div>

                
    `,
    prizes: `
        <h1 class="text-2xl font-bold text-gray-800 mb-3">Prizes</h1>
        <p class="text-gray-500"> When you finish shipping your project, you will be granted many prizes </p>
    `,
}

function loadPage(name){
    document.getElementById('window').innerHTML = pages [name]
}

