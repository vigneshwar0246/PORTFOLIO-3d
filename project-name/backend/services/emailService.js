exports.sendEmail = async (payload) => {
  console.log('Sending email with payload:', payload);
  return { success: true, message: 'Email service ready' };
};
