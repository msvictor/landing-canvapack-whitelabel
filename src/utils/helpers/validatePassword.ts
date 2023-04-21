export const validatePasswordComplexity = (value?: string): boolean => {
  const regex =
    /^(?=.*[\W|_/\\])(?=.*[0-9])(?=.*[A-Z])[\W|_/\\a-zA-Zà-úÀ-Ú0-9]{10,}$/;
  return !!value && regex.test(value);
};
