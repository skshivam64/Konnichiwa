This repository comprises of a web application designed for an intranet environment for real-time messaging. It allows the users (staff) to add other users in their list to communicate with them through text and images. The contact between a pair of users has been implemented as two unidirectional pipes, both of which are by default blocked. Once a user adds some other user, the pipe of which he is the receiver gets unblocked and he can then receive messages for the other user. A user can block incoming messages from any other user which implies that the flow of messages between to users can be unidirectional or bidirectional depending on the need or convenience of the pair of users.

Instructions to use:

<ol>
  <li>
    Clone the repository.<br>
    <code>git clone https://github.com/skshivam64/Konnichiwa</code>
  </li>
  <li>
    Install dependencies.<br>
    <code>npm install</code>
  </li>
  <li>
    Run the application.<br>
    <code>npm start</code>
  </li>
  <li>
    Go to any device on your local network and open the app on the browser.
    <code><IP address of the server device>:8888</code>
  </li>
</ol>

Note:
<ul>
  <li>
    Make sure that your server device is not using port 8888 already.
  </li>
  <li>
    Make sure that the server device's firewall doesn't block access to <i>localhost</i>.
  </li>
</ul>
