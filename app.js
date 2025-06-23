const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>🚀 GitHub Actions + Docker Deployment</title>
      <style>
        body {
          background: linear-gradient(to right, #00c6ff, #0072ff);
          font-family: 'Segoe UI', sans-serif;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
          text-align: center;
        }
        .container {
          max-width: 700px;
          padding: 30px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0,0,0,0.4);
        }
        h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.6;
        }
        code {
          background-color: rgba(255,255,255,0.1);
          padding: 4px 8px;
          border-radius: 5px;
          font-size: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Deployed with GitHub Actions & Docker</h1>
        <p>This Node.js application is:</p>
        <ul style="text-align: left;">
          <li>✅ Built with <strong>Express</strong></li>
          <li>✅ Packaged in a <strong>Docker container</strong></li>
          <li>✅ Deployed on a <strong>remote server (EC2)</strong></li>
          <li>✅ CI/CD powered by <strong>GitHub Actions</strong></li>
        </ul>
        <p>You can edit <code>app.js</code> to update this content.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`🚀 App running on http://localhost:${port}`);
});
