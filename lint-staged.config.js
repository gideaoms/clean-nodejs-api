module.exports = {
  'src/**/*.ts': [
    'npm run lint -- --fix',
    'npm run test -- --findRelatedTests --passWithNoTests --bail',
    'prettier --write',
  ],
};
