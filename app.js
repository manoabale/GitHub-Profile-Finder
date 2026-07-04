async function findProfile() {
  const username = document.getElementById("usernameInput").value;
  if (!username) return alert("Please enter a username");

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  const container = document.getElementById("profileContainer");
  if (data.message === "Not Found") {
    container.innerHTML = "<p>User not found.</p>";
    return;
  }

  container.innerHTML = `
    <img src="${data.avatar_url}" alt="Avatar" />
    <h2>${data.name || data.login}</h2>
    <p>${data.bio || "No bio available"}</p>
    <p>Followers: ${data.followers} | Following: ${data.following}</p>
    <p>Public Repos: ${data.public_repos}</p>
    <a href="${data.html_url}" target="_blank">View Profile</a>
  `;
}
