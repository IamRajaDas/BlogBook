# 🌟 **BlogBook** 🌟  
*A Modern Blogging Platform Built with React and Appwrite*

## 🚀 Overview

*BlogBook* is a sleek, feature-rich blogging application where users can **create**, **view**, **update**, and **delete** their posts. The platform supports user authentication, post management, image uploads, rich-text formatting, and dark mode—all wrapped in a clean, responsive UI.

### ✨ Key Features

- **🔐 User Authentication**:
  - Secure login and signup via Appwrite.
  - Role-based options: Logged-in users can create, edit, and delete their posts.

- **📝 Rich Text Editor**:
  - Format your posts with bold, italic, colored text, underlining, and more with the *TinyMCE* editor.
  - Enhance readability with various text styling options.

- **🖼 Image Uploads**:
  - Add featured images to your posts. Preview images load quickly on the home page, while full-quality images are displayed on the post details page.

- **⚡ Responsive Design**:
  - Fully responsive across desktop, tablet, and mobile devices for a seamless experience.

- **🌗 Dark Mode**:
  - Toggle between light and dark themes with a simple switch.

---

## 🏗 Project Structure

### Navigation

- **Top Navbar**:
  - Options like *Home*, *All Posts*, *Login*, *Sign Up*, *Logout*, and *Add Post* dynamically adjust based on authentication state.

- **Home Page**:
  - Displays all posts created by users, with image previews and post summaries.

- **Post Detail Page**:
  - View the full content and original image of a selected post.
  - Edit or delete options are available for the post creator.

- **Add Post Page**:
  - Create a new blog post by filling in the title, description, and uploading a featured image.

---

## 🛠 Tools & Technology

- **Frontend**:
  - *ReactJS*: Component-based framework for building the UI.
  - *HTML / CSS*: Structure and styling.
  - *JavaScript*: For functionality and interactivity.
  - *TinyMCE*: Rich text editor for formatting the post content.
  - *HTML-React-Parser*: Renders HTML content created by TinyMCE.
  - *React Hook Form*: Manages form submission and slug generation (auto-converts spaces in titles to dashes).
  - *Redux*: State management for handling user sessions and other global states.

- **Backend**:
  - *Appwrite*: A powerful Backend-as-a-Service (BaaS) for handling user authentication, data storage, and file uploads.

---

## 💻 How It Works

1. **User Sign Up & Login**:
   - Users can sign up and log in to access the post creation features.

2. **Creating a Post**:
   - Once logged in, users can create a post by providing a title, content (via the rich text editor), and a featured image.
   - The title is automatically transformed into a unique *slug* using React Hook Form.

3. **Viewing and Editing Posts**:
   - All users can browse posts, but only the creator of a post can edit or delete their own posts.

4. **Theming**:
   - Toggle between *light* and *dark* mode for a personalized reading experience.

---

## 🔧 Getting Started

### Prerequisites

- *Node.js* (v14.x or higher)
- *Appwrite* (Backend setup for authentication and database)

### Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/IamRajaDas/BlogBook.git
    ```

2. **Navigate to the project folder**:

    ```bash
    cd BlogBook
    ```

3. **Install Dependencies**:

    ```bash
    npm install
    ```

4. **Set up Appwrite**:
   - Install and configure [Appwrite](https://appwrite.io/) for backend services.
   - Update your Appwrite credentials in the environment variables.

### Running the Application

1. **Start the development server**:

    ```bash
    npm start
    ```

2. Open your browser and go to:

    ```
    http://localhost:3000
    ```

---

## 🚀 Deployment

You can easily deploy this application to platforms like *Vercel* or *Netlify*. Make sure your Appwrite CORS settings allow your deployed URL (to avoid CORS issues).

### Steps for Vercel:

1. Link your GitHub repository to Vercel.
2. Ensure environment variables for Appwrite are correctly set up.
3. Deploy with a single click.

---

## 💡 Future Enhancements

- **Comment System**: Allow users to comment on posts.
- **Post Categorization**: Add categories/tags to better organize posts.
- **Search Functionality**: Enable users to search posts by title or tags.

---

## 🛡 License

This project is licensed under the *MIT License*. See the [LICENSE](LICENSE) file for more details.

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or raise issues. Let’s make *BlogBook* better together!

---

## 📞 Contact

For any inquiries or feedback, please feel free to reach out:

- GitHub: [IamRajaDas](https://github.com/IamRajaDas)
- Email: [your-email@example.com](mailto:your-email@example.com)


 
