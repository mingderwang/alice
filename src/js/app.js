import { h, render, Component } from "preact";

let Header = () => {
  return (
<div>
    <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"> 
  <div class="sm:flex sm:items-center px-6 py-4"> 
    <img class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://c.gitcoin.co/avatars/6c1066b29c0473595ace03078ab78920/mingderwang.png" alt=""> 
  </img>
  <div class="text-center sm:text-left sm:flex-grow"> 
      <div class="mb-4"> 
        <p class="text-xl leading-tight">Ming-der Wang</p> 
        <p class="text-sm leading-tight text-grey-dark">Developer at Muzamint.</p> 
      </div> 
      <div> 
        <button class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Connect</button> 
      </div> 
    </div> 
  </div>
  </div>
</div>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  render(<Header />, document.body);
});
