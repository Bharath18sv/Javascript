function getPostUsingThen(postId) {
  // TODO: Fetch post using .then()/.catch()
  fetch(` https://jsonplaceholder.typicode.com/posts/${postId}
`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(`Post Title : ${response.title}`);
      console.log(`Post Body : ${response.body}`);
    })
    .catch((error) => {
      console.log("Error while fetching the post: ", error);
    });
}

async function getPostUsingAsync(postId) {
  // TODO: Fetch post using async/await
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  //   console.log("response object: ", response);
  const post = await response.json(); //forgot to use await
  //   console.log("parsed response: ", post);
  let wordCount = post.body.split(" ").length;
  console.log(`Title in upper case: ${post.title.toUpperCase()}`);
  console.log(`Word count of body: ${wordCount}`);
}

function simulateDelay(ms) {
  // TODO: Return a Promise that resolves after ms milliseconds
  return new Promise((resolve) => {
    setTimeout(() => console.log(`Waited for ${ms} ms`), ms); // forgot to add a callback function earlier.
  });
}

//function to get multiple posts
async function getMultiplePosts(count) {
  const promises = [];
  try {
    for (let i = 1; i <= count; i++) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${i}`
      );
      const post = response.json();
      promises.push(post);

      const posts = await Promise.all(promises);
      posts.forEach((post, i) => {
        console.log(`Title for ${i + 1} : ${post.title}`);
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function loadPost(postId) {
  // TODO: Integrate delay and fetch logic
  simulateDelay(1000); //add await here also
  await getPostUsingAsync(postId);
  await getMultiplePosts(3);
}

// Call loadPost
loadPost(1);
