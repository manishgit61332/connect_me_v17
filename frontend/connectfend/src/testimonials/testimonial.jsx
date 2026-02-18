import React from "react";
import "./testimonial.css";
import testimonials from "../data/testimonials";

export default function Testimonial() {

  // Duplicate list 12x to ensure no blank spaces on high-res monitors during scroll
  const repeated = Array(12).fill(testimonials).flat();

  return (
    <div className="testimonial-section">
      <h1 className="testimonial-title">Hear it from them</h1>

      <div className="testimonial-marquee">
        <div className="marquee-track animate-scroll-left">

          {repeated.map((t, index) => {
            const isOdd = index % 2 === 0;

            return (
              <div key={index} className="testimonial-card">

                {/* ODD CARD → TOP PROFILE */}
                {isOdd && (
                  <>
                    <div className="profile">
                      <div
                        className="avatar"
                        style={{ background: t.avatarColor }}
                      ></div>
                      <div>
                        <h3>{t.name}</h3>
                        <p>{t.designation}</p>
                      </div>
                    </div>
                    <hr className="divider" />
                  </>
                )}

                {/* TEXT */}
                {/* TEXT */}
                <p className="testimonial-text">"{t.text}"</p>

                {/* EVEN CARD → BOTTOM PROFILE */}
                {!isOdd && (
                  <>
                    <hr className="divider bottom-divider" />
                    <div className="profile bottom-profile">
                      <div
                        className="avatar"
                        style={{ background: t.avatarColor }}
                      ></div>
                      <div>
                        <h3>{t.name}</h3>
                        <p>{t.designation}</p>
                      </div>
                    </div>
                  </>
                )}

              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}
