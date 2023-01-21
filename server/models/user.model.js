export default mongoose => {
  const User = mongoose.model('user', mongoose.Schema({
    name: String,
    email: String
  }, {
    timestamps: true
  }))

  return User
}