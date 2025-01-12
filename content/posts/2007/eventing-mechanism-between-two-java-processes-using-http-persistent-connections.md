---
title: Eventing mechanism between two java processes using HTTP persistent connections
tags:
  - coding
date: '2007-02-14'
description: Eventing mechanism between two java processes using HTTP persistent connections
---

I have been twidling with HTTP Persistent connections in the last few weeks. Let me start at the beginning

I needed to replace CORBA in a legacy application with something new. Ofcourse, there are a few alternatives out there, but I needed something very lightweight. The problem had two major parts

1. Command Execution - Let the client, execute a function on the server-side and process the output data
2. Eventing - Make clients register for events and wait until some events occur and the server transmits the required objects to the client side.

The Command execution was simple. Expose all services provided by the server as SOAP services and make the clients talk SOAP/XML, however SOAP involves a lot of overhead in terms of serialising the object into an XML stream and later decoding that. Since both the client and server were completely in Java, I just had to transport the Java object itself  
The event part, however, provided a challenge. I had restrictions on opening ports on the clients (Issues like firewalls, NAT, SSL support etc etc). So I chose to use HTTP itself to do eventing.

So how do we do that?!

You will need a servlet container like Tomcat. Tomcat supports HTTP 1.1 connections and sends a keep-alive until the servlet servicing is complete. Doing eventing requires the following:

1. The connection between client and server should remain for the entire life of the client or server (whichever is shorter ;) )
2. Both ends should listen at the ends of the connection for any event.
3. Server should have an eventing mechanism to forward events to the required clients.
