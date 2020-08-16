# How the request gets served?

> In this article, it will describe how the URL request is served by the browser using HTTP/1.1 protocol
> 
 ### Hypertext Transfer Protocol
HTTP is a protocol which is used by (WWW)World Wide Web which helps us to exchange the data between server and clients. When the clients who are usually web browser sends the message to the server, it is called a **request** and when the server sends the answer to the client, it is called a **response**.

The sequence of the communication between server and client are:
1. The client will send the HTTP **request**.
2. The web server will receive the request and process it.
3. The server returns the HTTP **response** to the client.

![HTTP working](https://i0.wp.com/blogs.innovationm.com/wp-content/uploads/2016/10/HTTP-Protocol.png?fit=624,248)

###  Analyze URL requests 
Modern browsers have the capability of knowing if the thing you wrote in the address bar is an actual URL or a search term, and they will alos use the default search engine if it’s not a valid URL.
When you enter the URL and press enter, the browser first builds the full URL.
> **If you just entered a domain, like `flaviocopes.com`, the browser by default will prepend `HTTP://` to it, defaulting to the HTTP protocol.**
### DNS Lookup phase
The browser starts the DNS lookup to get the server IP address.

The domain name is a handy shortcut for us humans, but the internet is organized in such a way that computers can look up the exact location of a server through its IP address, which is a set of numbers like  `222.324.3.1`  (IPv4).

Chrome has a handy DNS cache visualizer you can see  [here](chrome://net-internals/#dns).
### TCP request handshaking

With the server IP address available, now the browser can initiate a TCP connection to that.

A TCP connection requires a bit of handshaking before it can be fully initialized and you can start sending data.

Once the connection is established, we can send the request

### Sending the request
The request is a plain text document structured in a precise way determined by the communication protocol.

It’s composed of 3 parts:

-   the request line
-   the request header
-   the request body
![HTTP body](https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/images/HTTP_RequestMessageExample.png)
 ### The Response
 Once the request is sent, the server processes it and sends back a response.

The response starts with the status code and the status message. If the request is successful and returns a 200, it will start with:
```
200 OK
```
The request might return a different status code and message, like one of these:
```txt
404 Not Found
403 Forbidden
301 Moved Permanently
500 Internal Server Error
304 Not Modified
401 Unauthorized
```

### Parse the HTML
The browser now has received the HTML and starts to parse it, and will repeat the exact same process we did for all the resources required by the page:

-   CSS files
-   images
-   the favicon
-   JavaScript files

