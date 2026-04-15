import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { ScrollTransition } from '@/components/animations/ScrollTransition';
import strategyImage from '@/data/Strategyimage.png';

const blogPosts: Record<string, any> = {
  'growth-architecture': {
    id: 'growth-architecture',
    slug: 'growth-architecture',
    title: 'Growth Architecture: Turning Your Website Into an Asset',
    categories: ['Strategy', 'Business'],
    author: 'Amit Sahni',
    publishDate: '2026-04-15',
    tableOfContents: [
      'Defining Performance Web Design',
      'Pillar 1: Technical Speed and Infrastructure',
      'Pillar 2: The Logic of a Strategic Landing Page',
      'Pillar 3: Search and AI Visibility',
      'The Math of Growth: Conversion ROI',
      'The Hidden Risk of Cheap Builders',
      'Strategic Roadmap for 2026',
      'Maintaining Long-Term Scalability',
      'Frequently Asked Questions',
      'Conclusion: Focus on the Long Term',
      'Implementation Steps',
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Strategic leaders recognize that a digital presence represents far more than a static expense. While many view a corporate web page as a digital business card, a high-growth company understands that this view invites a large opportunity cost. In the competitive market of 2026, a website serves not as a passive brochure, but as the primary growth engine for the entire enterprise.',
      },
      {
        type: 'paragraph',
        text: 'When high-growth companies invest in digital tools, they prioritize long-term value over simple looks. The goal remains to build a site that functions as a powerful financial asset. Such an asset operates with total consistency, executing sales tasks without the errors or fatigue found in human staff. Reaching these results requires a move away from traditional web design toward a plan centered on a higher conversion rate.',
      },
      {
        type: 'heading',
        text: 'Defining Performance Web Design',
      },
      {
        type: 'paragraph',
        text: 'Performance web design acts as a strategic digital framework where technical skill meets the way people think. Unlike standard creative methods, a website designed for high performance focuses on three vital areas:',
      },
      {
        type: 'list',
        items: [
          'Technical Speed: The system must allow users to interact in real time.',
          'Psychological Pathing: The design must guide the target audience toward a specific product or service.',
          'Search Visibility: The data structure must allow a search engine or an AI-powered tool to find and suggest the brand.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Building this specific architecture ensures the system can generate leads through steady, automated steps.',
      },
      {
        type: 'heading',
        text: 'Pillar 1: Technical Speed and Infrastructure',
      },
      {
        type: 'paragraph',
        text: 'Solid technical health forms the base of any digital asset. In a fast-moving economy, page load times define the first impression of your brand. When page loads take more than two seconds, the business suffers measurable revenue loss and a drop in visitor trust.',
      },
      {
        type: 'paragraph',
        text: 'User experience starts the moment a request reaches your server. Today\'s buyers demand real-time results; therefore, a high-performance site focuses on "Core Web Vitals." This technical work involves three main tasks:',
      },
      {
        type: 'list',
        items: [
          'Asset Streamlining: Shrinking image sizes and cleaning up code prevents the heavy feel found in low-cost templates.',
          'Code Health: Removing unnecessary third-party scripts ensures the site remains fast and responsive.',
          'Local Delivery: Using global networks sends data from servers physically close to the user, which reduces wait times.',
        ],
      },
      {
        type: 'paragraph',
        text: 'A designed website that prioritizes these metrics will always beat a slower rival on a search engine. Speed builds professional trust. If you fail to maintain a fast site, a prospect may doubt your ability to manage a complex project for them.',
      },
      {
        type: 'heading',
        text: 'Pillar 2: The Logic of a Strategic Landing Page',
      },
      {
        type: 'paragraph',
        text: 'Attracting visitors is only the first part of the sales path. A strategic web design uses "visual flow" to influence how users act. This process moves past personal art choices and focuses on engineering a path toward a sale.',
      },
      {
        type: 'paragraph',
        text: 'Every landing page must support a clear business goal. Whether you want a free trial sign-up or the direct sale of a product or service, your call to action must stay easy to see and easy to use.',
      },
      {
        type: 'list',
        items: [
          'Scan Patterns: Research shows users scan digital pages in a shape like the letter "F". Strategic design puts the most important facts where eyes land first.',
          'Social Proof: Adding reviews and case studies at the point of decision builds brand authority.',
          'Easy Conversion: Modern sites let users learn about the brand first. They do not ask for a credit card too early. This helps more people enter the sales funnel.',
        ],
      },
      {
        type: 'paragraph',
        text: 'A higher conversion rate serves as the direct result of finding and removing the friction that stops a visitor from buying.',
      },
      {
        type: 'heading',
        text: 'Pillar 3: Search and AI Visibility',
      },
      {
        type: 'paragraph',
        text: 'A site that stays hidden does not work as an asset. It results in wasted money and zero sales. To meet your business goals, the platform must maintain high visibility across both old search tools and new AI-powered platforms.',
      },
      {
        type: 'paragraph',
        text: 'Search engine optimization now includes generative discovery. These new systems look for "Trusted Data" rather than just keywords. By using clear data labels, your financial asset becomes a top source for AI answers and suggestions.',
      },
      {
        type: 'paragraph',
        text: 'This plan ensures you reach your target audience at the exact moment they want a fix. It turns "quiet" traffic into "active" leads. This approach ensures the long-term success of your marketing spend.',
      },
      {
        type: 'heading',
        text: 'The Math of Growth: Conversion ROI',
      },
      {
        type: 'paragraph',
        text: 'Measuring the bottom line impact of your website requires a shift from feelings to facts. Most owners think that more traffic is the only way to grow. While traffic is helpful, a higher conversion rate provides a much faster path to revenue.',
      },
      {
        type: 'paragraph',
        text: 'Consider this strategic web design comparison:',
      },
      {
        type: 'list',
        items: [
          'Plan A: 10,000 visitors at a 1% conversion rate = 100 leads.',
          'Plan B: 10,000 visitors at a 2% conversion rate = 200 leads.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Doubling the conversion rate doubles your lead volume without spending more on social media ads or search marketing. This efficiency defines a true growth engine.',
      },
      {
        type: 'table',
        headers: ['Performance Stat', 'Old Web Design', 'New Financial Asset'],
        rows: [
          ['Load Speed', '4.5 Seconds', '1.2 Seconds'],
          ['Mobile Feel', 'Basic / Clunky', 'Smooth / Fast'],
          ['Conversion Rate', '0.5% to 1.0%', '2.0% to 5.0%'],
          ['ROI Results', 'Unclear', 'High and Steady'],
        ],
      },
      {
        type: 'heading',
        text: 'The Hidden Risk of Cheap Builders',
      },
      {
        type: 'paragraph',
        text: 'Low-cost builders often attract attention due to low start-up costs or the promise of a free trial. However, for high-growth companies, these tools often act as a "slow tax" on future earnings.',
      },
      {
        type: 'paragraph',
        text: 'Cheap templates often contain extra, heavy code designed for features you do not need. This weight slows down your page load times. It also limits your ability to change the site for your specific business goals.',
      },
      {
        type: 'paragraph',
        text: 'Generic builders also make it hard to rank well on a search engine. A custom financial asset pays for itself by winning the sales that cheap sites leave behind.',
      },
      {
        type: 'heading',
        text: 'Strategic Roadmap for 2026',
      },
      {
        type: 'paragraph',
        text: 'To turn a corporate site into a growth engine, follow this four-stage plan:',
      },
      {
        type: 'list',
        items: [
          'The Audit: Measure your current page loads and find where users leave the site.',
          'The Build: Create a unique landing page for every product or service you offer.',
          'The AI Fix: Use AI-powered data labels so AI search tools can read your site easily.',
          'The Update: Use real-time data to move your call-to-action buttons based on what users actually click.',
        ],
      },
      {
        type: 'heading',
        text: 'Maintaining Long-Term Scalability',
      },
      {
        type: 'paragraph',
        text: 'Growth is not a one-time event; it is a steady process. Your digital asset must grow as your company grows. This means moving beyond "launch and forget" and into a phase of steady improvement.',
      },
      {
        type: 'paragraph',
        text: 'Technical debt occurs when you take shortcuts in your site build. Over time, these shortcuts slow down the site and make updates harder. A high-growth company avoids this by using clean code and a solid strategic web design from the start. This ensures the site remains an asset for years to come.',
      },
      {
        type: 'heading',
        text: 'Frequently Asked Questions',
      },
      {
        type: 'paragraph',
        text: 'How does a site help the bottom line? A site helps the bottom line by lowering the cost to find a new customer. When more users become leads, you get more value for every dollar you spend. This turns the site into a profitable financial asset.',
      },
      {
        type: 'paragraph',
        text: 'What defines a high-performance site? Success comes from a mix of fast page load times, a good mobile feel, and a clear path to a higher conversion rate. The site must satisfy both the human user and the search engine.',
      },
      {
        type: 'paragraph',
        text: 'Why is AI-powered search so important? By 2026, most people use AI to find answers. If your site is not designed to talk to these AI-powered tools, your brand will become invisible to a large part of the market.',
      },
      {
        type: 'heading',
        text: 'Conclusion: Focus on the Long Term',
      },
      {
        type: 'paragraph',
        text: 'Stop thinking of your website as a job that ends when you launch. For any high-growth company, the website serves as a living financial asset. It needs strategic web design and a focus on long-term health.',
      },
      {
        type: 'paragraph',
        text: 'Choosing performance web design ensures you stay ahead in an automated market. High-growth firms must stop building "sites" and start building growth.',
      },
      {
        type: 'heading',
        text: 'Implementation Steps',
      },
      {
        type: 'list',
        items: [
          'Check Speed: Use tools to see if your page loads are under 1.5 seconds.',
          'Map Leads: Connect every call to action to your sales team.',
          'Audit AI: Ensure your AI-powered data is set up to be read by new search engines.',
        ],
      },
    ],
  },
};

export default function Blog() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();

  if (!slug || !blogPosts[slug]) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button onClick={() => navigate('/insights')}>Back to Insights</Button>
        </div>
      </div>
    );
  }

  const post = blogPosts[slug];

  return (
    <>
      {/* Header with Back Button */}
      <div className="border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-6 py-4 flex items-center">
          <button
            onClick={() => navigate('/insights')}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <article>
        {/* Hero Section */}
        <section
          className="pt-20 pb-4 relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, hsl(220 14% 96%) 0%, hsl(0 0% 100%) 100%)',
          }}
        >
          <div className="container mx-auto px-6 max-w-3xl">
            <ScrollTransition>
              {/* Categories */}
              <div className="mb-6 flex flex-wrap gap-2">
                {post.categories.map((cat: string, idx: number) => (
                  <span key={idx} className="text-sm font-semibold text-slate-600">
                    {cat}
                    {idx < post.categories.length - 1 && <span className="ml-2">,</span>}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{
                  color: 'hsl(0 0% 8%)',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  letterSpacing: '-0.02em',
                }}
              >
                {post.title}
              </h1>

              {/* Author and Date in one line */}
              <div className="text-slate-600 text-sm font-medium mb-0">
                By: {post.author} | {new Date(post.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </ScrollTransition>
          </div>
        </section>

        {/* Content Section */}
        <section className="pt-0 pb-8 md:pb-12 relative">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Placeholder for featured image - Full width */}
            <img
              src={strategyImage}
              alt="Growth Architecture: Turning Your Website Into an Asset"
              className="w-full h-[550px] object-cover rounded-lg mb-4"
              style={{
                boxShadow: '0 16px 48px -16px hsl(0 0% 0% / 0.15)',
              }}
            />

            {/* Two Column Layout: TOC Left, Content Right */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12">
              {/* Table of Contents Sidebar */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <div className="lg:col-span-1">
                  <div className="sticky top-24 p-6 rounded-lg" style={{ backgroundColor: 'hsl(210 14% 92%)' }}>
                    <h3
                      className="text-lg font-bold mb-4"
                      style={{
                        color: 'hsl(0 0% 8%)',
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    >
                      Table of Contents
                    </h3>
                    <ul className="space-y-3">
                      {post.tableOfContents.map((item: string, idx: number) => (
                        <li key={idx}>
                          <a
                            href={`#section-${idx}`}
                            className="text-sm text-purple-600 hover:text-purple-700 font-medium transition-colors block"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Article Body */}
              <div className={`prose prose-lg max-w-none ${post.tableOfContents && post.tableOfContents.length > 0 ? 'lg:col-span-3' : 'col-span-1'}`}>
                {post.content.map((block: any, idx: number) => {
                switch (block.type) {
                  case 'heading':
                    // Find the section index from tableOfContents
                    const sectionIdx = post.tableOfContents?.indexOf(block.text) ?? -1;
                    const headingId = sectionIdx >= 0 ? `section-${sectionIdx}` : `heading-${idx}`;
                    return (
                      <h2
                        key={idx}
                        id={headingId}
                        className="text-3xl md:text-4xl font-bold mt-12 mb-6 leading-tight scroll-mt-24"
                        style={{
                          color: 'hsl(0 0% 8%)',
                          fontFamily: "'Inter', system-ui, sans-serif",
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {block.text}
                      </h2>
                    );

                  case 'paragraph':
                    return (
                      <p
                        key={idx}
                        className="text-lg text-slate-700 leading-relaxed mb-6"
                        style={{
                          fontFamily: "'Inter', system-ui, sans-serif",
                          lineHeight: '1.8',
                        }}
                      >
                        {block.text}
                      </p>
                    );

                  case 'list':
                    return (
                      <ul key={idx} className="space-y-3 mb-8 ml-6">
                        {block.items.map((item: string, i: number) => (
                          <li
                            key={i}
                            className="text-lg text-slate-700 leading-relaxed flex items-start"
                          >
                            <span
                              className="inline-block w-2 h-2 rounded-full mt-2.5 mr-4 flex-shrink-0"
                              style={{ backgroundColor: 'hsl(270 77% 39%)' }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    );

                  case 'table':
                    return (
                      <div key={idx} className="overflow-x-auto mb-8">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr style={{ borderBottom: '2px solid hsl(270 77% 39%)' }}>
                              {block.headers.map((header: string, i: number) => (
                                <th
                                  key={i}
                                  className="text-left p-4 font-semibold text-slate-900"
                                  style={{
                                    backgroundColor: 'hsl(270 90% 85% / 0.3)',
                                  }}
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row: string[], i: number) => (
                              <tr
                                key={i}
                                style={{
                                  borderBottom: '1px solid hsl(210 14% 85%)',
                                }}
                              >
                                {row.map((cell: string, j: number) => (
                                  <td key={j} className="p-4 text-slate-700">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );

                  default:
                    return null;
                }
              })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-16 md:py-24 relative"
          style={{
            background: 'linear-gradient(135deg, hsl(270 77% 39%) 0%, hsl(270 77% 45%) 100%)',
          }}
        >
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to architect your growth?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's turn your website into a financial asset that drives real revenue.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100"
            >
              <a href="/book-a-call">Schedule a Strategy Call</a>
            </Button>
          </div>
        </section>
      </article>
    </>
  );
}
