function About() {
    return (
<>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.
      </p>
      <p>Created using Tailwind CSS, daisyUI, and React 17.0.2</p>
      <p>Data is being pulled from the github rest API</p>
      <p>Link to <a href="https://www.tylerantoni.com" target='_blank' rel="noreferrer" className="text-primary">personal website</a></p>
    </>
    )
}

export default About
