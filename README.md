🍎 Fruity App

A modern Angular application that fetches and displays fruit information using the FruityVice API.

🚀 Features
Display a list of fruits
View detailed information for each fruit
Angular Routing
HTTP requests with HttpClient
Dynamic navigation between pages
Error handling
Not Found page (404)
Responsive layout
API integration using FruityVice
🛠️ Technologies Used
Angular
TypeScript
HTML5
CSS3
RxJS
Angular Router
Angular HttpClient
FruityVice API
📂 Project Structure
Plain Text
src/
├── app/
│ ├── models/
│ │ └── fruit.ts
│ ├── pages/
│ │ ├── home/
│ │ ├── fruit-detail/
│ │ └── not-found/
│ ├── services/
│ │ └── fruit.service.ts
│ ├── app.config.ts
│ └── app.routes.ts
│
├── assets/
├── styles.css
└── main.ts
🌐 API

The project uses the public FruityVice API:

Plain Text
https://www.fruityvice.com
 

Example endpoint:

Plain Text
/api/fruit/all
⚙️ Installation

Clone the repository:

Shell
git clone https://github.com/TUO-USERNAME/fruity-app.git

Move into the project folder:

Shell
cd fruity-app

Install dependencies:

Shell
npm install

Start the development server:

Shell
ng serve

Open:

Plain Text
http://localhost:4200
 
🔄 Development Notes

To avoid CORS issues during development, the application uses an Angular proxy configuration:

JSON
{
"/api": {
"target": "https://www.fruityvice.com",
"secure": true,
"changeOrigin": true
}
}
📸 Screenshots

Add screenshots of:

Home page
Fruit detail page
Custom 404 page

Example:

Markdown
![Home Page](./screenshots/home.png)
![Fruit Detail](./screenshots/detail.png)
 
🎯 Learning Objectives

This project was built to practice:

Angular fundamentals
Standalone Components
Routing
Services
Dependency Injection
API consumption
TypeScript interfaces
Project organization
👨‍💻 Author

Raff

GitHub:

Plain Text
https://github.com/TUO-USERNAME
📄 License

This project is open source and available under the MIT License.

⭐ If you like this project, consider giving it a star on GitHub!
