import { useState } from 'react'

import { AuthBgImage } from '~/assets/images'
import LoginForm from '~/routes/auth/login/components/login-form'
import SelectAccountType from '~/routes/auth/login/components/select-account-type'
import { eLoginStep } from '~/types'

const Login = () => {
  const [loginStep, setLoginStep] = useState(eLoginStep.LoginForm)
  return (
    <section
      className='w-full h-[100vh] flex items-center justify-center bg-cover bg-center'
      style={{ backgroundImage: `url(${AuthBgImage})` }}
    >
      {loginStep === eLoginStep.LoginForm && <LoginForm onChangeStep={setLoginStep} />}
      {loginStep === eLoginStep.SelectAccountType && <SelectAccountType />}
    </section>
  )
}

export default Login
