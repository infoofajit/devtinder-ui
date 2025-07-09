# DevTinder UI

## UI Part-1
- Create Vite + React application
- Remove unnecessary code
- Install Tailwind CSS
- Install Daisy UI
- Add NavBar component to App.jsx
- Create a separate NavBar component
- React router declarative <npm i react-router>
- Create BrowserRouter > Routes > Route = Body > Route Children
- Create Outlet in Body component
- Create a footer

## UI Part-2
- Create a login page
- Install axios
- CORS: Install CORS in backend => Add middleware with {origin, credentials}
- Axios: Set {withCredentials: tru} when call make API call (axios) from UI
- Install react-redux, @reduxjs/toolkit "https://redux-toolkit.js.org/tutorials/quick-start"
- configureStore => Provider => cleateSlice => add reducer to store
- Add redux tool in Chrome
- Navbar should update as soon as you login
- Refactor code and add constants file + components directory

## UI Part-3
- User should not access private route without login
- Redirect user to login if token is invalid or not present
- Logout Feature
- Get the feed from API, and add the feed in the store
- Build the user card on feed
- Edit Profile feature
- Show toast message on save of profile

## UI Part-4
- New Page: See all my connections
- New Page: Connection Request
- Feature: Accept/Reject connection request
- Send/ignore the user card from Feed
- Singup new user

Remaining
- E2E testing

# Deployment
- Signup on AWS
- Launch instance
- chmod 400 <secret>.pem
- Connect with instance using 'ssh i "devTinder-secret.pem" ...'
- Install node js version save as local
- Git clone
- Frontend
  - npm install (install dependency)
  - npm run build
  - sudo apt update
  - sudo app install ngnix
  - sudo systemctl start ngnix
  - sudo systemctl enable ngnix
  - Copy code from dist (build files) to /var/www/html
  - sudo scp -r  dist/* /var/www/html
  - Enable port :80 of your instance
- Backend
  - Update DB password
  - Allowed ec2 instance public IP on mongo DB server
  - npm install pm2 -g
  - pm2 start npm /pm2 start npm --name "devTinder-backend" -- start
  - pm2 logs
  - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
  - Config nginx - /etc/ngnix/sites-available/default
  - Restart ngnix "sudo systemctl start ngnix"
  - Modify the BASE_URL in frontend project to /api

# Ngnix config

  Frontend = devtinder.com
  Backend = devtinder.com:7777 => devtinder.com/api

  ngnix config:

  server_name: 43.204.96.49;

  location /api/ {
    
  }

# Adding a custom domain name
  - Purchased domain name from godaddy
  - Signup on cloudfare and add a new domain name
  - Change the nameserver on godaddy and point it to cloudflare
  - Wait for sometime till your nameservers are updated
  - DNS record: A devtinder.in = xx.xxx.xx.xx
  - Enable SSL for website
  