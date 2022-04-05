import TextInput from '$lib/components/Text Input/index.svelte'

export const contact = {
  inputs: [
    {
      component: TextInput,
      data: {
        label: 'name',
        className: 'md:w-[45%]',
        value: '',
        validations: [{ type: 'required', error: 'required field' }],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'email',
        className: 'md:w-[45%]',
        value: '',
        validations: [
          { type: 'required', error: 'required field' },
          { type: 'email', error: 'must be a valid email' },
        ],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'phone',
        className: 'md:w-[45%]',
        value: '',
        validations: [{ type: 'required', error: 'required field' }],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'company',
        className: 'md:w-[45%]',
        value: '',
      },
    },
    {
      component: TextInput,
      data: {
        label: 'message',
        className: 'w-full',
        value: '',
        validations: [{ type: 'required', error: 'required field' }],
        type: 'text area',
      },
    },
  ],
  button: {
    label: 'send message',
    shape: 'round',
    type: 'secondary',
  },
}

export const profile = {
  phone: '+201005584543',
  email: 'am8594@nyu.edu',
  location: 'https://goo.gl/maps/A2YC5MZU65mLVm58A',
  siteOwner: 'Shereef Mostafa',
  siteName: 'shereefmostafa.site',
  siteEmail: 'youssef@getbrewsy.com',
}
