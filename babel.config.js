module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    [
      'prismjs',
      {
        languages: ['json','java','css','javascript','c','sql','python','xml','swift'],
      },
    ],
  ],
}
