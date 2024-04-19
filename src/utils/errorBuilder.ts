export const errorBuilder = (error: unknown) => {
  if (error instanceof Error) {
    return error.message
  } else {
    return 'Something went wrong'
  }
}