window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

// Make a variable for the ride data
let rides = json
// Loop through the ride data
  for (i = 0; i < rides.length; i++) {
// Create a variable to store each ride order
    let ride = rides[i]
// Create a variable for the HTML element we're going to add to, found using the rides class already included in the html file
    let rideSection = document.querySelector(`.rides`)
// Insert HTML into each ride element using the service level logic from week 3, using the data from each ride in the json

//conditional for Noober XL with added larger text size
if (ride.numberOfPassengers > 3) {
  rideSection.insertAdjacentHTML(`beforeend`, `
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
  <i class="fas fa-car-side"></i>
  <span>Noober XL</span>
</h1>

<div class="border-4 border-gray-900 p-4 my-4 text-left">
  <div class="flex">
    <div class="w-1/2">
      <h2 class="text-2xl py-1">"${ride.passengerDetails.first} ${ride.passengerDetails.last}"</h2>
      <p class="font-bold text-gray-600">(312) 555-1212</p>
    </div>
    <div class="w-1/2 text-right">
      <span class="rounded-xl bg-gray-600 text-white p-2">
      "${ride.numberOfPassengers} passengers"
      </span>
    </div>
  </div>
  <div class="mt-4 flex">
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">PICKUP</div>
      <p>${ride.pickupLocation.address}</p>
      <p>"${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}"</p>
    </div>
    <div class="w-1/2">
      <div class="text-sm font-bold text-gray-600">DROPOFF</div>
      <p>${ride.dropoffLocation.address}</p>
      <p>"${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}"</p>
    </div>
  </div>
</div>
 `)
} 

//conditional for Noober X
else {
  rideSection.insertAdjacentHTML(`beforeend`, `
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>Noober X</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">"${ride.passengerDetails.first} ${ride.passengerDetails.last}"</h2>
          <p class="font-bold text-gray-600">(312) 555-1212</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            "${ride.numberOfPassengers} passengers"
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${ride.pickupLocation.address}</p>
          <p>"${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}"</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${ride.dropoffLocation.address}</p>
          <p>"${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}"</p>
        </div>
      </div>
    </div> 
  `)
}

//conditional for Noober Purple with added purple border
  if (ride.purpleRequested) {
    rideSection.insertAdjacentHTML(`beforeend`, `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober Purple</span>
      </h1>

      <div class="border-4 border-purple-500 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">"${ride.passengerDetails.first} ${ride.passengerDetails.last}"</h2>
            <p class="font-bold text-gray-600">(312) 555-1212</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            "${ride.numberOfPassengers} passengers"
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride.pickupLocation.address}</p>
            <p>"${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}"</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride.dropoffLocation.address}</p>
            <p>"${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}"</p>
          </div>
        </div>
      </div>
    `)
  }
}

}
)
