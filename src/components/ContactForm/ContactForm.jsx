import Button from '../Button/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { inputLabelClasses } from '@mui/material/InputLabel';

const StyledTextField = styled(TextField)({
  [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: 'white',
  },
  [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: 'white',
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
    borderColor: 'white',
  },
  [`& .${outlinedInputClasses.input}`]: {
    color: 'white',
  },
  [`&:hover .${outlinedInputClasses.input}`]: {
    color: 'white',
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
    color: 'white',
  },
  [`& .${inputLabelClasses.outlined}`]: {
    color: 'white',
  },
  [`&:hover .${inputLabelClasses.outlined}`]: {
    color: 'white',
  },
  [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
    color: 'white',
  },
});

const ContactForm = () => {
  return (
    <section id="contact" className="flex flex-col items-center w-full pb-7 bg-gradient-to-t from-dark-pink to-dark-blue">
      <h2 className="animateText text-4xl font-bold mt-12 mb-1 lg:text-5xl">Contact me</h2>
      <p className="text-xs text-white mb-4">If you like Tesseract like I do, let&apos;s talk...</p>
      <form className="w-[320px] md:w-1/2 flex flex-col gap-3 p-2 item-center" action="https://formspree.io/f/xzbwnlee" method="post">
        <StyledTextField id="outlined-basic" label="Name" variant="outlined" name={'name'} type="text" required />
        <StyledTextField id="outlined-basic" label="Email" variant="outlined" name={'email'} type="email" required />
        <StyledTextField id="outlined-basic" label="Comments" variant="outlined" name={'comment'} multiline rows={4} required />
        {/* <InputComponent label={'Email'} type={'email'} inputName={'email'} /> */}
        {/* <TextArea inputName={'comment'} /> */}
        <Button
          name="Get in touch"
          style={
            'px-4 py-1 text-sm font-semibold border-2 xl:w-1/3 m-auto border-letter-blue bg-letter-blue rounded-lg text-dark-blue hover:border-white hover:scale-110 duration-300'
          }
          liveDemo={''}
          modalConf={{}}
          projectId={0}
          type={'submit'}
        />
      </form>
    </section>
  );
};

export default ContactForm;
