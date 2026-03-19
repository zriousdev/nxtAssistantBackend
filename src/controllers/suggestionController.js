// src/controllers/suggestionsController.js
//
// Serves paginated suggestions from a hardcoded catalogue.
// Swap the CATALOGUE array for a MongoDB model query when you have real data.

const CATALOGUE = [
  { id: 1,  title: 'Summarize my notes',         description: 'Get a concise summary of your text' },
  { id: 2,  title: 'Generate email reply',        description: 'Create a professional email response' },
  { id: 3,  title: 'Explain quantum computing',   description: 'Break down complex topics simply' },
  { id: 4,  title: 'Debug my code',               description: 'Find and fix errors in your code' },
  { id: 5,  title: 'Write a cover letter',        description: 'Craft a compelling job application' },
  { id: 6,  title: 'Research market trends',      description: 'Analyse industry data and insights' },
  { id: 7,  title: 'Translate to Hindi',          description: 'Translate text into Hindi accurately' },
  { id: 8,  title: 'Create a study plan',         description: 'Build a personalised learning schedule' },
  { id: 9,  title: 'Analyse financial data',      description: 'Interpret numbers and spot patterns' },
  { id: 10, title: 'Draft a business proposal',   description: 'Write a persuasive project pitch' },
  { id: 11, title: 'Write a Python script',       description: 'Automate tasks with clean Python code' },
  { id: 12, title: 'Explain GST filing',          description: 'Understand GST returns step by step' },
  { id: 13, title: 'Compare insurance plans',     description: 'Evaluate policy options side by side' },
  { id: 14, title: 'Summarise a legal document',  description: 'Extract key clauses from contracts' },
  { id: 15, title: 'Write product description',   description: 'Compose engaging e-commerce copy' },
  { id: 16, title: 'Explain machine learning',    description: 'Understand ML concepts in plain English' },
  { id: 17, title: 'Create a budget template',    description: 'Organise monthly income and expenses' },
  { id: 18, title: 'Write a LinkedIn post',       description: 'Craft a professional thought-leadership post' },
  { id: 19, title: 'Review my resume',            description: 'Improve structure, wording, and impact' },
  { id: 20, title: 'Explain UPI payments',        description: 'How UPI works for B2B transactions' },
  { id: 21, title: 'Generate SQL query',          description: 'Write optimised database queries' },
  { id: 22, title: 'Write meeting notes',         description: 'Turn bullet points into a clean summary' },
  { id: 23, title: 'Calculate loan EMI',          description: 'Break down repayment schedules clearly' },
  { id: 24, title: 'Draft WhatsApp campaign',     description: 'Write short, punchy promotional messages' },
  { id: 25, title: 'Analyse customer feedback',   description: 'Identify themes from reviews or surveys' },
  { id: 26, title: 'Explain blockchain basics',   description: 'Understand distributed ledgers simply' },
  { id: 27, title: 'Create social media calendar',description: 'Plan posts across platforms for a month' },
  { id: 28, title: 'Write API documentation',     description: 'Document endpoints clearly for developers' },
  { id: 29, title: 'Summarise research paper',    description: 'Extract the key findings from any paper' },
  { id: 30, title: 'Translate invoice to English',description: 'Convert vernacular billing documents' },
  { id: 31, title: 'Write cold outreach email',   description: 'Personalised B2B prospecting templates' },
  { id: 32, title: 'Explain Docker basics',       description: 'Containerisation for beginners' },
  { id: 33, title: 'Draft performance review',    description: 'Write balanced employee evaluations' },
  { id: 34, title: 'Analyse website traffic',     description: 'Interpret analytics data and suggest actions' },
  { id: 35, title: 'Explain credit score',        description: 'What affects your CIBIL score and how' },
  { id: 36, title: 'Write product roadmap',       description: 'Define features, timelines, and priorities' },
  { id: 37, title: 'Convert PDF to summary',      description: 'Extract and condense long documents' },
  { id: 38, title: 'Write terms & conditions',    description: 'Draft basic T&C for a web product' },
  { id: 39, title: 'Explain Flutter state management', description: 'Provider vs Riverpod vs Bloc explained' },
  { id: 40, title: 'Plan a product launch',       description: 'Build a go-to-market checklist' },
  { id: 41, title: 'Research competitors',        description: 'Compare features, pricing, and positioning' },
  { id: 42, title: 'Write investor update',       description: 'Keep stakeholders informed concisely' },
  { id: 43, title: 'Explain GSTIN lookup',        description: 'How to verify a GST number instantly' },
  { id: 44, title: 'Draft NDA agreement',         description: 'Basic non-disclosure agreement template' },
  { id: 45, title: 'Write app store description', description: 'Compelling copy for Google Play / App Store' },
  { id: 46, title: 'Analyse profit & loss',       description: 'Interpret P&L statements clearly' },
  { id: 47, title: 'Explain React hooks',         description: 'useState, useEffect and friends explained' },
  { id: 48, title: 'Create onboarding checklist', description: 'Steps for smooth employee or user onboarding' },
  { id: 49, title: 'Write FAQ section',           description: 'Generate common questions with clear answers' },
  { id: 50, title: 'Summarise sales call',        description: 'Key takeaways and follow-up actions from a call' },
];

// ── GET /api/suggestions ───────────────────────────────────────────────────
const getSuggestions = (req, res) => {
  try {
    const page  = Math.max(1, parseInt(req.query.page,  10) || 1);
    const limit = Math.min(50, Math.max(1,
                    parseInt(req.query.limit, 10) || 10));

    const total      = CATALOGUE.length;
    const totalPages = Math.ceil(total / limit);
    const start      = (page - 1) * limit;
    const end        = Math.min(start + limit, total);
    const data       = CATALOGUE.slice(start, end);

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
      status: 'error', message: 'Server error loading suggestions' });
  }
};

module.exports = { getSuggestions };