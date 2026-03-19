const Chat = require('../models/chat');

const _dummyReply = (message) => {
  const m = message.toLowerCase();

  if (m.includes('offer') || m.includes('live offer'))
    return 'We currently have exclusive cashback offers for HDFC, ICICI, and Axis Bank cards on B2B purchases above ₹10,000. Check the Offers tab in the app for live deals updated daily.';

  if (m.includes('sign up') || m.includes('register') || m.includes('onboard'))
    return 'Signing up is simple! Download the BharatNxt app, tap "Register", enter your GST number and mobile, and verify via OTP. Your account is activated within minutes.';

  if (m.includes('card'))
    return 'BharatNxt accepts Visa, Mastercard, Rupay, and all major debit/credit cards. American Express and Diners Club cards are supported for select merchants.';

  if (m.includes('cashback') || m.includes('reward'))
    return 'Earn up to 2% cashback on every invoice payment. Rewards are credited to your BharatNxt wallet within 3 business days and can be redeemed on future transactions.';

  if (m.includes('upi') || m.includes('gst'))
    return 'You can pay GST invoices directly via UPI on BharatNxt. Go to Pay → GST Payments, enter your GSTIN, and settle dues using any UPI handle. Payments are confirmed instantly.';

  if (m.includes('invoice') || m.includes('pay invoice'))
    return 'To pay an invoice, go to the Payments tab → Pay Invoice, upload or enter the invoice number, choose your payment method, and confirm. You\'ll receive a digital receipt immediately.';

  if (m.includes('transaction') || m.includes('settlement'))
    return 'Settlements are processed within T+1 business days. You can track the status of any transaction in the Payments → History section. For disputes, tap "Raise Issue" next to the transaction.';

  if (m.includes('hello') || m.includes('hi') || m.includes('hey'))
    return 'Hi there! 👋 I\'m the BharatNxt assistant. I can help with payments, offers, card queries, GST, and more. What do you need help with?';

  return `Thanks for reaching out! Our team is reviewing your query: "${message}". For urgent support, you can also email us at support@bharatnxt.in or call 1800-XXX-XXXX (Mon–Sat, 9am–6pm).`;
};


const sendMessage = async (req, res) => {
  try {
    const { uid } = req.user;     
    const { message } = req.body;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({
        status:  'error',
        message: 'Message cannot be empty',
      });
    }

    await Chat.create({
      userId:  uid,
      sender:  'user',
      message: message.trim(),
    });

    const replyText = _dummyReply(message);

    await Chat.create({
      userId:  uid,
      sender:  'assistant',
      message: replyText,
    });

    return res.status(200).json({
      status: 'success',
      reply:  replyText,
    });
  } catch (error) {
    console.error('Chat sendMessage error:', error);
    return res.status(500).json({
      status:  'error',
      message: 'Server error while processing message',
    });
  }
};

const getChatHistory = async (req, res) => {
  try {
    const { uid } = req.user;

    const messages = await Chat.find({ userId: uid })
      .sort({ createdAt: 1 }) 
      .limit(200)               
      .lean();

    return res.status(200).json({
      status: 'success',
      data:   messages,
    });
  } catch (error) {
    console.error('Chat getHistory error:', error);
    return res.status(500).json({
      status:  'error',
      message: 'Server error while loading history',
    });
  }
};

module.exports = { sendMessage, getChatHistory , _dummyReply};