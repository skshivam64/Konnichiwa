This repository comprises of a web application designed for an intranet environment for real-time messaging. It allows the users (staff) to add other users in their list to communicate with them through text and images. The contact between a pair of users has been implemented as two unidirectional pipes, both of which are by default blocked. Once a user adds some other user, the pipe of which he is the receiver gets unblocked and he can then receive messages for the other user. A user can block incoming messages from any other user which implies that the flow of messages between to users can be unidirectional or bidirectional depending on the need or convenience of the pair of users.

Instructions to use:

1. Clone the repository.
git clone https://github.com/skshivam64/Konnichiwa

2. Install dependencies.
npm install

3. Run the application.
npm start

4. Go to any device on your local network and open the app on the browser.
<IP address of the server device>/auth:8888

Note:
1. Make sure that your server device is not using port 8888 already.
2. Make sure that the server device's firewall doesn't block access to localhost.