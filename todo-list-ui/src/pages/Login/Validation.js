const rules = {
  username: {
    required: { value: true, message: 'Username harus diisi.' },
    minLength: {
      value: 3,
      message: 'Panjang username minimal 3 karakter.',
    },
  },

  password: {
    required: { value: true, message: 'Password harus diisi.' },
    minLength: {
      value: 4,
      message: 'Panjang password minimal 4 karakter.',
    },
  },
}

// (1) export rules
export { rules }
