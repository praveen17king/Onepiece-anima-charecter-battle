// Team player one

let imageUrls = [
    'luffy.png',
      'gear-5.png',
          'shanks.png',
 //     // Add URLs of other images here
  ];
 // // Function to start rolling all images and then display a random image
 function playerOne() {
     let imageContainer = document.getElementById('imageContainer');
     let rollDuration = 1500; // Adjust the duration of the rolling animation
     let rollInterval = setInterval(() => {
         imageContainer.innerHTML = ''; // Clear existing images
         imageUrls.forEach((imageUrl, index) => {
             let imgElement = document.createElement('img');
             imgElement.src = imageUrl;
             imgElement.style.animation = `roll ${rollDuration}ms linear ${index * 50}ms`;
             imageContainer.appendChild(imgElement);
         });
         setTimeout(() => {
             clearInterval(rollInterval); // Stop rolling after animation completes
             let randomIndex = Math.floor(Math.random() * imageUrls.length);
             let randomImageUrl = imageUrls[randomIndex];
             imageContainer.innerHTML = ''; // Clear existing images
             let imgElement = document.createElement('img');
             imgElement.src = randomImageUrl;
             imageContainer.appendChild(imgElement); // Display random image
         }, rollDuration * imageUrls.length); // Set timeout to match total animation duration
     }, rollDuration * imageUrls.length + 100); // Set interval to match total animation duration plus some buffer
  }
 
 // Team player one
 
 let PlayerTwoImgUrls = [
     'luffy.png',
       'gear-5.png',
           'shanks.png',
  //     // Add URLs of other images here
   ];
  // // Function to start rolling all images and then display a random image
  function playerTwo() {
      let imageContainerTeamTwo = document.getElementById('imageContainerTeamTwo');
      let rollDuration = 1500; // Adjust the duration of the rolling animation
      let rollInterval = setInterval(() => {
         imageContainerTeamTwo.innerHTML = ''; // Clear existing images
          PlayerTwoImgUrls.forEach((PlayerTwoImgUrls, index) => {
              let imgElement = document.createElement('img');
              imgElement.src = PlayerTwoImgUrls;
              imgElement.style.animation = `roll ${rollDuration}ms linear ${index * 50}ms`;
              imageContainerTeamTwo.appendChild(imgElement);
          });
          setTimeout(() => {
              clearInterval(rollInterval); // Stop rolling after animation completes
              let randomIndex = Math.floor(Math.random() * PlayerTwoImgUrls.length);
              let randomImageUrl = PlayerTwoImgUrls[randomIndex];
              imageContainerTeamTwo.innerHTML = ''; // Clear existing images
              let imgElement = document.createElement('img');
              imgElement.src = randomImageUrl;
              imageContainerTeamTwo.appendChild(imgElement); // Display random image
          }, rollDuration * PlayerTwoImgUrls.length); // Set timeout to match total animation duration
      }, rollDuration * PlayerTwoImgUrls.length + 100); // Set interval to match total animation duration plus some buffer
   }
 
 
 //   PlayerThree
 
 let PlayerThreeImgUrls = [
     'luffy.png',
       'gear-5.png',
           'shanks.png',
  //     // Add URLs of other images here
   ];
  // // Function to start rolling all images and then display a random image
  function playerThree() {
      let imageContainerTeamThree = document.getElementById('imageContainerTeamThree');
      let rollDuration = 1500; // Adjust the duration of the rolling animation
      let rollInterval = setInterval(() => {
         imageContainerTeamThree.innerHTML = ''; // Clear existing images
         PlayerThreeImgUrls.forEach((PlayerThreeImgUrls, index) => {
              let imgElement = document.createElement('img');
              imgElement.src = PlayerThreeImgUrls;
              imgElement.style.animation = `roll ${rollDuration}ms linear ${index * 50}ms`;
              imageContainerTeamThree.appendChild(imgElement);
          });
          setTimeout(() => {
              clearInterval(rollInterval); // Stop rolling after animation completes
              let randomIndex = Math.floor(Math.random() * PlayerThreeImgUrls.length);
              let randomImageUrl = PlayerThreeImgUrls[randomIndex];
              imageContainerTeamThree.innerHTML = ''; // Clear existing images
              let imgElement = document.createElement('img');
              imgElement.src = randomImageUrl;
              imageContainerTeamThree.appendChild(imgElement); // Display random image
          }, rollDuration * PlayerThreeImgUrls.length); // Set timeout to match total animation duration
      }, rollDuration * PlayerThreeImgUrls.length + 100); // Set interval to match total animation duration plus some buffer
   }
 
 // Opponents team
 
 
 
 // Opponent one
 
 let OpponentOneImgUrls = [
     'luffy.png',
       'gear-5.png',
           'shanks.png',
  //     // Add URLs of other images here
   ];
  // // Function to start rolling all images and then display a random image
  function OpponentOne() {
      let imageContainerOpponentOne = document.getElementById('imageContainerOpponentOne');
      let rollDuration = 1500; // Adjust the duration of the rolling animation
      let rollInterval = setInterval(() => {
         imageContainerOpponentOne.innerHTML = ''; // Clear existing images
          OpponentOneImgUrls.forEach((imageUrl, index) => {
              let imgElement = document.createElement('img');
              imgElement.src = imageUrl;
              imgElement.style.animation = `roll ${rollDuration}ms linear ${index * 50}ms`;
              imageContainerOpponentOne.appendChild(imgElement);
          });
          setTimeout(() => {
              clearInterval(rollInterval); // Stop rolling after animation completes
              let randomIndex = Math.floor(Math.random() * OpponentOneImgUrls.length);
              let randomImageUrl = OpponentOneImgUrls[randomIndex];
              imageContainerOpponentOne.innerHTML = ''; // Clear existing images
              let imgElement = document.createElement('img');
              imgElement.src = randomImageUrl;
              imageContainerOpponentOne.appendChild(imgElement); // Display random image
          }, rollDuration * OpponentOneImgUrls.length); // Set timeout to match total animation duration
      }, rollDuration * OpponentOneImgUrls.length + 100); // Set interval to match total animation duration plus some buffer
   }
 
   // Opponent one
 
 let OpponentTwoImgUrls = [
     'luffy.png',
       'gear-5.png',
           'shanks.png',
  //     // Add URLs of other images here
   ];
  // // Function to start rolling all images and then display a random image
  function OpponentTwo() {
      let imageContainerOpponentTwo = document.getElementById('imageContainerOpponentTwo');
      let rollDuration = 1500; // Adjust the duration of the rolling animation
      let rollInterval = setInterval(() => {
         imageContainerOpponentTwo.innerHTML = ''; // Clear existing images
         OpponentTwoImgUrls.forEach((imageUrl, index) => {
              let imgElement = document.createElement('img');
              imgElement.src = imageUrl;
              imgElement.style.animation = `roll ${rollDuration}ms linear ${index * 50}ms`;
              imageContainerOpponentTwo.appendChild(imgElement);
          });
          setTimeout(() => {
              clearInterval(rollInterval); // Stop rolling after animation completes
              let randomIndex = Math.floor(Math.random() * OpponentTwoImgUrls.length);
              let randomImageUrl = OpponentTwoImgUrls[randomIndex];
              imageContainerOpponentTwo.innerHTML = ''; // Clear existing images
              let imgElement = document.createElement('img');
              imgElement.src = randomImageUrl;
              imageContainerOpponentTwo.appendChild(imgElement); // Display random image
          }, rollDuration * OpponentTwoImgUrls.length); // Set timeout to match total animation duration
      }, rollDuration * OpponentTwoImgUrls.length + 100); // Set interval to match total animation duration plus some buffer
   }
 
 
 // Opponent 3
 
 let OpponentThreeImgUrls = [
     'luffy.png',
       'gear-5.png',
           'shanks.png',
  //     // Add URLs of other images here
   ];
  // // Function to start rolling all images and then display a random image
  function OpponentThree() {
      let imageContainerOpponentThree = document.getElementById('imageContainerOpponentThree');
      let rollDuration = 1500; // Adjust the duration of the rolling animation
      let rollInterval = setInterval(() => {
         imageContainerOpponentThree.innerHTML = ''; // Clear existing images
         OpponentThreeImgUrls .forEach((imageUrl, index) => {
              let imgElement = document.createElement('img');
              imgElement.src = imageUrl;
              imgElement.style.animation = `roll ${rollDuration}ms linear ${index * 50}ms`;
              imageContainerOpponentThree.appendChild(imgElement);
          });
          setTimeout(() => {
              clearInterval(rollInterval); // Stop rolling after animation completes
              let randomIndex = Math.floor(Math.random() * OpponentThreeImgUrls .length);
              let randomImageUrl = OpponentThreeImgUrls [randomIndex];
              imageContainerOpponentThree.innerHTML = ''; // Clear existing images
              let imgElement = document.createElement('img');
              imgElement.src = randomImageUrl;
              imageContainerOpponentThree.appendChild(imgElement); // Display random image
          }, rollDuration * OpponentThreeImgUrls .length); // Set timeout to match total animation duration
      }, rollDuration * OpponentThreeImgUrls .length + 100); // Set interval to match total animation duration plus some buffer
   }
 
 
 //   document.querySelector("button").addEventListener("click",buttonClick)
 
 //   let buttonClick = new Audio("Sound/crash.mp3");
 //     buttonClick.play();
 
 
 
 document.querySelector("button").addEventListener("click",drumClick);
 
 function drumClick(){
     let buttonSound = new Audio("Sound/crash.mp3");
     buttonSound.play();
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 