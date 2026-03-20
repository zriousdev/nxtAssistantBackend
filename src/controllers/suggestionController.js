const CATALOGUE = [
  { id: 1,  title: 'Check live offers',           description: 'See current cashback & discount offers on BharatNXT' },
  { id: 2,  title: 'HDFC card offers',            description: 'Exclusive deals available for HDFC credit card users' },
  { id: 3,  title: 'ICICI card cashback',         description: 'Active cashback offers for ICICI Bank cardholders' },
  { id: 4,  title: 'Limited-time promotions',     description: 'Time-sensitive deals expiring soon on the platform' },
  { id: 5,  title: 'How to sign up',              description: 'Step-by-step registration guide for new users' },
  { id: 6,  title: 'GST registration required?',  description: 'Do I need a GST number to create a BharatNXT account?' },
  { id: 7,  title: 'KYC verification process',    description: 'How to complete KYC and activate your account' },
  { id: 8,  title: 'OTP not received',            description: 'Troubleshoot mobile OTP issues during sign up' },
  { id: 9,  title: 'Settlement timeline',         description: 'When will my payment settle — T+1 explained' },
  { id: 10, title: 'Track a transaction',         description: 'Check the status of a specific payment in history' },
  { id: 11, title: 'Transaction failed',          description: 'What to do when a payment is deducted but not processed' },
  { id: 12, title: 'Raise a payment dispute',     description: 'How to flag an incorrect or failed transaction' },
  { id: 13, title: 'Settlement not received',     description: 'My settlement is overdue — steps to check and escalate' },
  { id: 14, title: 'Which cards are accepted?',   description: 'Visa, Mastercard, RuPay, Amex — full list of supported cards' },
  { id: 15, title: 'Add a credit card',           description: 'How to link a new credit card to your BharatNXT account' },
  { id: 16, title: 'Card activation time',        description: 'How long does it take for a newly added card to activate?' },
  { id: 17, title: 'Can I use someone else\'s card?', description: 'KYC norms and why only your own cards are allowed' },
  { id: 18, title: 'Card payment limit',          description: 'Daily and monthly transaction limits for card payments' },
  { id: 19, title: 'How cashback works',          description: 'Earn up to 2% cashback on every invoice payment' },
  { id: 20, title: 'Cashback credit timeline',    description: 'When cashback is credited to your BharatNXT wallet' },
  { id: 21, title: 'Redeem cashback',             description: 'Use your wallet balance on future transactions' },
  { id: 22, title: 'Referral rewards',            description: 'Earn bonus cashback by referring other businesses' },
  { id: 23, title: 'Cashback not credited',       description: 'My cashback is missing — how to raise an issue' },
  { id: 24, title: 'Pay electricity bill',        description: 'Settle electricity bills directly through BharatNXT' },
  { id: 25, title: 'Mobile recharge via BharatNXT', description: 'Top up prepaid numbers using your BharatNXT account' },
  { id: 26, title: 'Pay gas & water bills',       description: 'Utility bill payments supported on the platform' },
  { id: 27, title: 'Broadband / internet bill',   description: 'Pay broadband bills and earn cashback' },
  { id: 28, title: 'How to pay an invoice',       description: 'Upload or enter invoice number and settle instantly' },
  { id: 29, title: 'B2B invoice payments',        description: 'Pay vendor invoices and earn rewards on every transaction' },
  { id: 30, title: 'Digital payment receipt',     description: 'Get an instant receipt after every invoice payment' },
  { id: 31, title: 'Bulk invoice payments',       description: 'Can I pay multiple invoices in a single transaction?' },
  { id: 32, title: 'Invoice payment failed',      description: 'Steps to retry or dispute a failed invoice payment' },
  { id: 33, title: 'Pay GST via UPI',             description: 'Settle GST dues directly using any UPI handle' },
  { id: 34, title: 'GSTIN verification',          description: 'How to verify a GST number instantly on BharatNXT' },
  { id: 35, title: 'GST payment confirmation',    description: 'Instant confirmation after GST payment via UPI' },
  { id: 36, title: 'GST filing assistance',       description: 'Understand how BharatNXT helps with GST compliance' },
  { id: 37, title: 'Current promoted deals',      description: 'Browse partner deals and special merchant promotions' },
  { id: 38, title: 'Axis Bank promotions',        description: 'Active offers for Axis Bank cardholders this month' },
  { id: 39, title: 'Fuel surcharge waiver',       description: 'How to get fuel surcharge waivers on BharatNXT' },
  { id: 40, title: 'Zero-fee transactions',       description: 'Which transactions are free of charge on BharatNXT?' },
  { id: 41, title: 'Reset my password',           description: 'Steps to recover access to your BharatNXT account' },
  { id: 42, title: 'Update mobile number',        description: 'How to change the registered phone number on your account' },
  { id: 43, title: 'Contact support',             description: 'Reach BharatNXT support via chat, email, or call' },
  { id: 44, title: 'Account blocked / suspended', description: 'Why was my account blocked and how to restore it' },
  { id: 45, title: 'Download payment history',    description: 'Export your full transaction history as a PDF or CSV' },
  { id: 46, title: 'Is BharatNXT secure?',        description: 'How your card and payment data is protected' },
  { id: 47, title: 'KYC name mismatch',           description: 'What happens if your card name doesn\'t match KYC' },
  { id: 48, title: 'Zero tolerance policy',       description: 'BharatNXT\'s policy on KYC violations explained' },
  { id: 49, title: 'Two-factor authentication',   description: 'Enable extra security on your BharatNXT login' },
  { id: 50, title: 'Report suspicious activity',  description: 'Flag unauthorised transactions or phishing attempts' },
];

const CATEGORY_KEYWORDS = {
  Offers: [
    'offer', 'deal', 'promo', 'cashback', 'reward', 'referral',
    'hdfc', 'icici', 'axis', 'surcharge', 'fuel', 'zero-fee',
    'free of charge', 'promotion',
  ],
  Payments: [
    'payment', 'pay ', 'invoice', 'upi', 'gst', 'gstin',
    'transaction', 'settlement', 'bulk', 'receipt', 'bill',
    'electricity', 'recharge', 'broadband', 'internet', 'water',
    'gas', 'vendor', 'compliance',
  ],
  Cards: [
    'card', 'credit', 'debit', 'visa', 'mastercard', 'rupay', 'amex',
    'activate', 'activation', 'limit',
  ],
  Support: [
    'sign up', 'register', 'registration', 'kyc', 'otp', 'support',
    'contact', 'help', 'password', 'mobile number', 'phone number',
    'blocked', 'suspended', 'download', 'export', 'history',
  ],
  Security: [
    'secure', 'security', 'fraud', 'suspicious', 'mismatch',
    'zero tolerance', 'two-factor', 'authentication', 'phishing',
    'unauthorised', 'unauthorized', 'protected',
  ],
};

const matchesCategory = (item, category) => {
  if (!category || category === 'All') return true;

  const keywords = CATEGORY_KEYWORDS[category];
  if (!keywords) return true;

  const combined = `${item.title} ${item.description}`.toLowerCase();
  return keywords.some((keyword) => combined.includes(keyword));
};

const getSuggestions = (req, res) => {
  try {
    const category = req.query.category?.toString().trim() || 'All';
    const page  = Math.max(1, parseInt(req.query.page,  10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 10));

    const filteredCatalogue = CATALOGUE.filter((item) =>
      matchesCategory(item, category)
    );

    const total      = filteredCatalogue.length;
    const totalPages = Math.ceil(total / limit);
    const start      = (page - 1) * limit;
    const end        = Math.min(start + limit, total);
    const data       = filteredCatalogue.slice(start, end);

    return res.status(200).json({
      status: 'success',
      data,
      pagination: {
        current_page: page,
        total_pages:  totalPages,
        total_items:  total,
        limit,
        has_next:     page < totalPages,
        has_previous: page > 1,
      },
    });
  } catch (error) {
    console.error('Suggestions error:', error);
    return res.status(500).json({
      status: 'error', message: 'Server error loading suggestions',
    });
  }
};

module.exports = { getSuggestions };
