import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'

export default NextAuth({
  providers: [
    // // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    TwitterProvider({
        clientId: process.env.TWITTER_ID,
        clientSecret: process.env.TWITTER_SECRET,
        version: "2.0",
    }),
//     // Passwordless / email sign in
//     EmailProvider({
//       server: process.env.MAIL_SERVER,
//       from: 'NextAuth.js <no-reply@example.com>'
//     }),
//   ]
  ]
})