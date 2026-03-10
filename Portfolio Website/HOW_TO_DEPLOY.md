# How To Deploy Your Portfolio

Since your portfolio is now a Full Stack application, you have two separate pieces to deploy: the **Frontend** (HTML/CSS/JS) and the **Backend** (Node.js/Express server). 

Here is the easiest, most cost-effective path to getting both online!

---

## 1. Deploy the Backend API (Render)
*Render offers a great free tier for Node.js apps.*

1. **Push your code to GitHub.**
2. Go to [Render](https://render.com) and create an account.
3. Click "New +" and select **Web Service**.
4. Connect your GitHub repository.
5. In the Render settings, configure it like this:
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Click **Create Web Service**. 
7. Wait a few minutes. Render will give you a live URL for your backend (e.g., `https://my-backend-api.onrender.com`).
   - *Note: Keep a record of this URL, we need it for Step 2!*

---

## 2. Update the Frontend to Point to Production 
Before deploying the frontend, we must tell it where your API lives on the internet (instead of `localhost`).

1. Open `src/main.js`.
2. Find the form submission `fetch` call (around Line 64).
3. Change `'http://localhost:5000/api/contact'` to your new Render URL:
   `'https://my-backend-api.onrender.com/api/contact'`
4. Do the exact same thing in `admin/index.html` (Line 137). Change `const API_URL = 'http://localhost:5000/api';` to your production URL.
5. Save the files and commit/push these changes to GitHub.

---

## 3. Deploy the Frontend (Vercel or Netlify)
*Vercel and Netlify are perfect and free for building fast Vite static sites.*

**Using Vercel:**
1. Go to [Vercel](https://vercel.com) and log in.
2. Click "Add New" -> "Project" and connect your GitHub repo.
3. Ensure the Root Directory is the top level of your project. 
4. Vercel automatically detects Vite. Leave the default settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

## 4. Test Everything
1. Go to your live Vercel URL.
2. Submit the contact form.
3. Go to `your-vercel-url.com/admin/index.html`.
4. Log in with `admin` and `admin123`.
5. Verify your test lead shows up in your admin panel!
