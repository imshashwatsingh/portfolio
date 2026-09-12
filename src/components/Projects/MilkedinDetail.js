import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import milklogs from "../../Assets/Projects/milklogs.png";
import { BsArrowLeft, BsGithub, BsStars, BsShieldLock, BsCalendar3, BsGraphUp, BsRobot, BsPhone, BsLightningCharge, BsBoxArrowUpRight } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineApi, AiOutlineDatabase } from "react-icons/ai";

function MilkedinDetail() {
  const navigate = useNavigate();
  return (
    <Container fluid className="milkedin-detail-section">
      <Particle />
      <Container>
        <button onClick={() => navigate("/project")} className="milkedin-back" type="button">
          <BsArrowLeft /> Back to Projects
        </button>

        {/* Hero */}
        <Row className="milkedin-hero">
          <Col lg={6} className="milkedin-hero-text">
            <span className="milkedin-eyebrow">
              <BsStars /> Featured • Production-ready • 2026
            </span>
            <h1 className="milkedin-title">
              milkedin <span className="purple">— Daily Milk Expense Tracker</span>
            </h1>
            <p className="milkedin-one-liner">
              Cross-platform app to log daily milk consumption & spending by category — with
              price-snapshot history, heatmap calendar, insights, PDF/Excel export, and milkedin AI
              for natural-language queries over your data.
            </p>

            <div className="milkedin-badges">
              <Badge className="milkedin-badge">Expo (React Native)</Badge>
              <Badge className="milkedin-badge">Express + PostgreSQL</Badge>
              <Badge className="milkedin-badge">Gemini AI</Badge>
              <Badge className="milkedin-badge-accent">Android • iOS • Web</Badge>
            </div>

            <p className="milkedin-path">
              <AiOutlineDatabase /> milk_logs_frontend <span className="sep">/</span> milk_logs_backend
            </p>

            <div className="milkedin-hero-actions">
              <a href="https://milkedin-frontend.vercel.app/" target="_blank" rel="noreferrer" className="milkedin-btn milkedin-btn-primary">
                <CgWebsite /> Live Demo
              </a>
              <a href="https://github.com/imshashwatsingh/milkedin-frontend" target="_blank" rel="noreferrer" className="milkedin-btn milkedin-btn-ghost">
                <BsGithub /> Frontend
              </a>
              <a href="https://github.com/imshashwatsingh/milkedin-backend" target="_blank" rel="noreferrer" className="milkedin-btn milkedin-btn-ghost">
                <BsGithub /> Backend
              </a>
            </div>

            <div className="milkedin-stack-line">
              <strong>Stack:</strong> React Native (Expo 57, React 19, TypeScript, Expo Router, Reanimated, SecureStore) • Express 5, PostgreSQL (pg), Joi, JWT + bcrypt, Nodemailer • Gemini 2.5/3.5 via @google/genai (6 tools, temp 0.4) • pdfkit / jspdf, xlsx, Vercel
            </div>
          </Col>

          <Col lg={6} className="milkedin-hero-media">
            <div className="milkedin-img-wrap">
              <img src={milklogs} alt="milkedin preview" className="milkedin-hero-img" />
              <div className="milkedin-img-caption">
                Single Expo codebase • Secure REST API • IST-aware AI
              </div>
            </div>
            <div className="milkedin-mini-stats">
              <div className="milkedin-stat"><span>60s</span> GET cache</div>
              <div className="milkedin-stat"><span>401</span> auto-refresh</div>
              <div className="milkedin-stat"><span>6</span> AI tools</div>
              <div className="milkedin-stat"><span>SHA256</span> refresh rotation</div>
            </div>
          </Col>
        </Row>

        {/* Standard detail paragraph */}
        <div className="milkedin-section">
          <h2 className="milkedin-h2"><BsBoxArrowUpRight /> Overview</h2>
          <p className="milkedin-p">
            milkedin is a production-ready household ledger for daily milk tracking — built as a
            single Expo codebase for Android/iOS/Web backed by a secure Express + PostgreSQL REST API.
            Users create milk categories with live prices, log quantity by date (historical price
            snapshot preserved), and review daily/monthly summaries, streaks, heatmap calendar, and
            spending breakdowns with PDF/Excel export.
          </p>
          <p className="milkedin-p">
            Features JWT dual-token auth (OTP recovery), and <strong>milkedin AI</strong> — a
            Gemini-powered assistant that answers questions like <em>&quot;How much did I spend last month?&quot;</em> via
            authenticated tool-calling over live data (IST-aware, fallback model chain).
          </p>
        </div>

        {/* Highlights */}
        <div className="milkedin-section">
          <h2 className="milkedin-h2"><BsLightningCharge /> Key Highlights</h2>
          <Row className="milkedin-highlights">
            <Col md={6} lg={4} className="milkedin-highlight">
              <div className="milkedin-hl-icon"><BsCalendar3 /></div>
              <h4>Category-wise logging</h4>
              <p>Immutable <code>price_per_liter</code> snapshot per entry & soft-delete. Edit price without rewriting history — monthly totals stay correct.</p>
            </Col>
            <Col md={6} lg={4} className="milkedin-highlight">
              <div className="milkedin-hl-icon"><BsGraphUp /></div>
              <h4>Heatmap + Insights</h4>
              <p>Heatmap calendar, Today / History / Insights with custom charts, streaks & monthly breakdown. Spot gaps and spending patterns at a glance.</p>
            </Col>
            <Col md={6} lg={4} className="milkedin-highlight">
              <div className="milkedin-hl-icon"><BsShieldLock /></div>
              <h4>Secure auth</h4>
              <p>Register/login, refresh-token rotation (SHA256), OTP forgot/reset via Nodemailer, Bearer guard. No plaintext tokens stored.</p>
            </Col>
            <Col md={6} lg={4} className="milkedin-highlight">
              <div className="milkedin-hl-icon"><BsRobot /></div>
              <h4>milkedin AI — POST /api/ai/chat</h4>
              <p>6 deterministic tools (<code>get_records</code>, <code>compare_periods</code>, etc.), allow-listed execution, user-scoped queries. Gemini 2.5/3.5, temp 0.4.</p>
            </Col>
            <Col md={6} lg={4} className="milkedin-highlight">
              <div className="milkedin-hl-icon"><BsPhone /></div>
              <h4>Resilient client</h4>
              <p>Auto-refresh on 401, 60s GET cache, offline-friendly networking. Works on flaky mobile data without losing logs.</p>
            </Col>
            <Col md={6} lg={4} className="milkedin-highlight">
              <div className="milkedin-hl-icon"><AiOutlineApi /></div>
              <h4>PDF / Excel export</h4>
              <p>One-tap exports via <code>pdfkit</code> & <code>xlsx</code>. Share monthly milk expense reports with family or accountants.</p>
            </Col>
          </Row>
        </div>

        {/* Tech stack */}
        <div className="milkedin-section">
          <h2 className="milkedin-h2"><BsStars /> Tech Stack</h2>
          <Row>
            <Col md={4} className="milkedin-tech-col">
              <h5>Frontend — milkedin-frontend</h5>
              <ul>
                <li>React Native + Expo 57, React 19, TypeScript</li>
                <li>Expo Router (file routing), Reanimated, SecureStore</li>
                <li>60s GET cache, auto-refresh on 401, resilient networking</li>
                <li>Custom BarChart, heatmap calendar, jspdf/xlsx export</li>
              </ul>
            </Col>
            <Col md={4} className="milkedin-tech-col">
              <h5>Backend — milkedin-backend</h5>
              <ul>
                <li>Express 5 + PostgreSQL (pg) + Joi validation</li>
                <li>JWT dual-token, SHA256 refresh rotation, Bearer guard</li>
                <li>OTP forgot/reset via Nodemailer, soft-delete categories</li>
                <li>Price snapshot per log, daily/monthly aggregates, pdfkit/xlsx</li>
              </ul>
            </Col>
            <Col md={4} className="milkedin-tech-col">
              <h5>AI — milkedin</h5>
              <ul>
                <li>@google/genai — Gemini 2.5/3.5 fallback chain</li>
                <li>6 tools: get_records, compare_periods, spending_summary, etc.</li>
                <li>Allow-listed execution, user-scoped, IST-aware dates</li>
                <li>Temp 0.4 for deterministic finance answers</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* AI deep dive */}
        <div className="milkedin-section milkedin-ai-section">
          <h2 className="milkedin-h2"><BsRobot /> milkedin AI — Why it&apos;s different</h2>
          <Row>
            <Col lg={7}>
              <p className="milkedin-p">
                Not a prompt-wrapper. milkedin calls <strong>authenticated backend tools</strong> — every query
                is resolved against your live Postgres rows, scoped to <code>req.user.id</code>. No hallucinated numbers.
              </p>
              <div className="milkedin-tools">
                <span>get_records</span>
                <span>compare_periods</span>
                <span>spending_summary</span>
                <span>category_breakdown</span>
                <span>monthly_trend</span>
                <span>streak_insight</span>
              </div>
              <ul className="milkedin-list">
                <li>Natural queries: &quot;How much did I spend last month vs this month?&quot; → tool chain → verified math</li>
                <li>IST-aware: all date windows computed in Asia/Kolkata, not UTC</li>
                <li>Fallback model chain: Gemini 2.5 → 3.5 if rate-limited</li>
                <li>Allow-list prevents arbitrary SQL / prompt injection</li>
              </ul>
            </Col>
            <Col lg={5}>
              <div className="milkedin-code">
                <div className="milkedin-code-head">POST /api/ai/chat</div>
                <pre>{`{ "message": "milk kharch last 2 months?" }
// → get_records(period: last_60d)
// → compare_periods(prev vs curr)
// → "You spent ₹2,840 in Apr vs ₹3,120 in May (+9.8%).\n   Cow milk: 62% of total."`}</pre>
              </div>
            </Col>
          </Row>
        </div>

        {/* USP suggestions */}
        <div className="milkedin-section">
          <h2 className="milkedin-h2"><BsGraphUp /> USP & Next Steps</h2>
          <Row>
            <Col md={6}>
              <h5 className="milkedin-h5">What makes it portfolio-strong</h5>
              <ul className="milkedin-list">
                <li>Price-snapshot immutability — finance correctness, not CRUD demo</li>
                <li>Single Expo codebase shipping to 3 platforms + web</li>
                <li>Tool-calling AI over real user data (not mock)</li>
                <li>Production auth patterns: rotation, OTP, hashing</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="milkedin-h5">Suggested next upgrades</h5>
              <ul className="milkedin-list">
                <li>Voice logging: &quot;1.5L cow milk today&quot; → milkedin tool</li>
                <li>UPI / household split & subscription reminder</li>
                <li>Push streak nudge + monthly PDF auto-mail</li>
                <li>Public API keys for family-share dashboards</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className="milkedin-cta">
          <h3>Want the full walkthrough?</h3>
          <p>Check the live demo or dive into code — frontend & backend both open source.</p>
          <div className="milkedin-hero-actions" style={{ justifyContent: "center" }}>
            <a href="https://milkedin-frontend.vercel.app/" target="_blank" rel="noreferrer" className="milkedin-btn milkedin-btn-primary">
              <CgWebsite /> Open Live Demo
            </a>
            <button onClick={() => navigate("/project")} className="milkedin-btn milkedin-btn-ghost" type="button">
              <BsArrowLeft /> Back to Projects
            </button>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default MilkedinDetail;
