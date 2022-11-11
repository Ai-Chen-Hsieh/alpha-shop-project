
import StepForm from './StepForm/StepForm.js'
import StepProgress from './StepProgress/StepProgress.js'
import ProgressControl from './ProgressControl/progressControl.js'


export default function Register() {
    return(
    <section className='RegisterSection'>
    <StepProgress />
    <StepForm />
    <ProgressControl/>
    </section>
    )
}
