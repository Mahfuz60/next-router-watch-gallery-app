import Products from '@/components/UI/Products';

//!process-2
// const getData=async()=>{
//   const res=await fetch("http://localhost:5000/watches",{cache:"force-cache"});
//   const data=await res.json();

//   return data;

// }

const HomePage = async () => {
  //!process-1
  const res = await fetch('http://localhost:5000/watches', {
    cache: 'force-cache',
    next: {
      revalidate: 10,
    },
  });
  const data = await res.json();

  // const data=await getData();

  return (
    <div>
      <h1 className='text-4xl text-center my-10'>Welcome To Watch Gallery</h1>
      <div className='col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto'>
        {data.map((product) => (
          <Products product={product} key={product.id}></Products>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
