import { Container } from './shared/Container';
import Image from 'next/image';
import { Button } from './ui/button';
export const Hero = () => {
  return (
    <section>
      <Container>
        <div className='mt-10 flex items-center justify-center'>
          <Image
            src={'/hero_laptop.jpg'}
            alt='hero image'
            width={500}
            height={500}
          />
        </div>
      </Container>
      <div className='flex flex-col space-y-4 md:container md:mx-auto lg:flex-row lg:items-center md:justify-between md:px-4'>
        <div className='space-y-2 text-center md:text-left'>
          <p className='text-xl md:text-2xl font-bold text-white'>MacBook Pro</p>
          <h1 className='md: mx-auto max-w-[82%] bg-gradient-to-r from-blue-100 to-cyan-800 bg-clip-text text-3xl md:text-6xl  font-bold text-transparent md:max-w-full'>
            14‑inch model. Now  <br className='hidden md:block'/> supercharged by M5.
          </h1>
          <p className='text-sm md:text-base text-white'>
            Pre-order now. Available starting 10.22
          </p>
        </div>
        <div className='bg-zinc-800 md:rounded-full md:max-w-lg  p-1 md:py-2'>
          <Container className='flex items-center justify-between  md:space-x-5'>
            <p className='font-bold text-white'>
              From $1599 <br /> or $133.25/mo. for 12 mo.*{' '}
            </p>
            <Button className='rounded-full bg-blue-500 px-3 text-white hover:bg-blue-600 hover:cursor-pointer'>
              Shop
            </Button>
          </Container>
        </div>
      </div>
    </section>
  );
};
