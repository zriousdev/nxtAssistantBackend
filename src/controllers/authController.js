const User = require('../models/User');

const syncUser = async (req, res) => {
  try {
    const { uid, email, name, picture } = req.user;

    let user = await User.findOne({ firebaseUid: uid });

    if (!user) {
      user = new User({
        firebaseUid: uid,
        email: email,
        name: name || 'Google User',
        photoUrl: picture || ''
      });
      await user.save();
    }

    res.status(200).json({
      success: true,
      message: 'User authenticated and synced with database',
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        photoUrl: user.photoUrl
      }
    });
  } catch (error) {
    console.error('Auth Controller Error:', error);
    res.status(500).json({ success: false, message: 'Server error during authentication' });
  }
};

module.exports = { syncUser };