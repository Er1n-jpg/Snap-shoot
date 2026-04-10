const pages = {
    home: `
        <h1 class="text-2xl font-bold text-gray-800 mb-3">Home</h1>
        <p class="text-gray-500">Welcome to SnapShoot!</p>
    `,
    faq: `
        <h1 class="text-5xl font-bold text-gray-800 mb-3">FAQ</h1>
        <div class="grid grid-cols-2 gap-4 p-4">
            <div class="bg-white rounded-xl border border-gray-200 p-4 hover:scale-105">
                <h4 class="text-gray-500 text-xl">What is snapshoot?</h4>
                <p class="text-gray-500 text-xs">Snapshoot is a YSWS where you can get grants for camera or visual related items when you ship a project using openCV</p>
            </div>

            <div class="bg-white rounded-xl border border-gray-200 p-4 hover:scale-105">
                <h4 class="text-gray-500 text-xl">Is this legit?</h4>
                <p class="text-gray-500 text-sm">Snapshoot is under Hack Club, a 501(c)3 nonprofit and is primarily run by @erook on slack</p>
            </div>

            <div class="bg-white rounded-xl border border-gray-200 p-4 hover:scale-105">
                <h4 class="text-gray-500 text-xl">I'm a beginner, can I still do this?</h4>
                <p class="text-gray-500 text-sm">Of course! OpenCV has plenty of documentation online, not to mention we will have tutorials available for you to follow on various languages!</p>
            </div>

            <div class="bg-white rounded-xl border border-gray-200 p-4 hover:scale-105 transform">
                <h4 class="text-gray-500 text-xl">Am I eligible to participate in SnapShoot?</h4>
                <p class="text-gray-500 text-sm">You must be 13-18 to participate in Snapshoot!</p>
            </div>

            <div class="bg-white rounded-xl border border-gray-200 p-4 hover:scale-105 transform">
                <h4 class="text-gray-500 text-xl">How do I get started?</h4>
                <p class="text-gray-500 text-sm">You can get started by filling out the RSVP form and getting yourself on hack club slack (join channel #SnapShoot)</p>
                <div class = "flex-row">
                <button class="bg-white rounded-sm border hover:scale-105 transform text-lg w-auto px-3 py-1">RSVP</button>
                <button class="bg-white rounded-sm border hover:scale-105 w-auto text-lg px-3 py-1">Slack!</button>
                </div>
            </div>

            <div class="bg-white rounded-xl border border-gray-200 p-4"></div>
        </div>
    `,
    prizes: `

        <h1 class="text-5xl font-bold text-gray-800 ">Prizes</h1>
        <p class="text-gray-500 text-sm">Prizes are a WIP</p>

    `,
    what: `
        <h1 class="text-4xl font-bold mb-7">What is this?</h1>
        <p class = "text-sm"> Snap-shoot is a YSWS (You ship we ship) where you ship a project using a form of</p>
        <p class = "text-sm"> facial detection (prefferably openCV) and we ship you photography or visual related items!</p>
    `
}

function loadPage(name) {
    document.getElementById('window').innerHTML = pages[name]
}


