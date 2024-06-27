const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

//   function playAnimation()
//   {
//     const f_a1 = alice1.animate(aliceTumbling,aliceTiming);
//     f_a1.finished.then(() => {
//         const f_a2 = alice2.animate(aliceTumbling,aliceTiming);
//         f_a2.finished.then(()=>{
//             alice3.animate(aliceTumbling,aliceTiming);
//         })
//     });
//   }

  async function playAnimation()
  {
    const f_a1 = alice1.animate(aliceTumbling,aliceTiming);
    await f_a1.finished;
    const f_a2 = alice2.animate(aliceTumbling,aliceTiming);
    await f_a2.finished;
    const f_a3 = alice3.animate(aliceTumbling,aliceTiming);
    console.log('in async');
  }

  playAnimation();