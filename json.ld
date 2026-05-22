{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.eperfectbeauty.com/#website",
      "url": "https://www.eperfectbeauty.com/",
      "name": "E-Perfect Beauty",
      "description": "E-Perfect Beauty (E Perfect Eyebrow Studio Singapore). Embroidery, anti-wrinkle treatments, Korean misty eyebrow, face lifting, facial spa and Hydra treatments. 550B Segar Rd. Book on WhatsApp.",
      "inLanguage": "en-SG",
      "publisher": { "@id": "https://www.eperfectbeauty.com/#business" }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.eperfectbeauty.com/#webpage",
      "url": "https://www.eperfectbeauty.com/",
      "name": "E-Perfect Beauty | Natural-looking embroidery & facials in Singapore",
      "description": "Natural-looking eyebrow, lip and eyeliner embroidery, anti-wrinkle care, face lifting and hydra facials in Singapore, personally advised by Evelyn.",
      "inLanguage": "en-SG",
      "isPartOf": { "@id": "https://www.eperfectbeauty.com/#website" },
      "about": { "@id": "https://www.eperfectbeauty.com/#business" },
      "primaryImageOfPage": { "@id": "https://www.eperfectbeauty.com/#primaryimage" },
      "breadcrumb": { "@id": "https://www.eperfectbeauty.com/#breadcrumb" }
    },
    {
      "@type": "ImageObject",
      "@id": "https://www.eperfectbeauty.com/#primaryimage",
      "url": "https://www.eperfectbeauty.com/Assets/favicon.jpg",
      "contentUrl": "https://www.eperfectbeauty.com/Assets/favicon.jpg",
      "caption": "E-Perfect Beauty Singapore"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.eperfectbeauty.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.eperfectbeauty.com/"
        }
      ]
    },
    {
      "@type": ["BeautySalon", "LocalBusiness"],
      "@id": "https://www.eperfectbeauty.com/#business",
      "name": "E-Perfect Beauty",
      "alternateName": [
        "E Perfect Eyebrow Studio Sg",
        "E Perfect Eyebrow Studio Singapore",
        "E-Perfect Beauty Service"
      ],
      "url": "https://www.eperfectbeauty.com/",
      "image": "https://www.eperfectbeauty.com/Assets/favicon.jpg",
      "logo": "https://www.eperfectbeauty.com/Assets/favicon.jpg",
      "slogan": "Natural-looking embroidery and facial care in Singapore",
      "description": "Expert embroidery (brow, lip, eyeliner), anti-wrinkle treatments, Korean misty eyebrow, face lifting for a youthful look, and facial spa including Hydra Aqua Peel and hydra glow booster — E Perfect Eyebrow Studio at 550B Segar Rd, Singapore. Message for quotes. Appointments recommended.",
      "telephone": "+6587787867",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "550B Segar Rd",
        "addressLocality": "Singapore",
        "postalCode": "672550",
        "addressRegion": "Singapore",
        "addressCountry": "SG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 1.3899567,
        "longitude": 103.7647189
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "note": "By Appointment Only",
          "opens": "10:00",
          "closes": "20:00"
        }
      ],
      "hasMap": "https://www.google.com/maps/search/?api=1&query=E%20perfect%20eyebrow%20studio%20Sg%20550B%20Segar%20Rd",
      "sameAs": [
        "https://www.google.com/maps/search/?api=1&query=E%20perfect%20eyebrow%20studio%20Sg%20550B%20Segar%20Rd"
      ],
      "areaServed": [
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 1.3899567,
            "longitude": 103.7647189
          },
          "geoRadius": "10000"
        },
        {
          "@type": "City",
          "name": "Singapore"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Bukit Panjang"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Choa Chu Kang"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "SGD",
      "employee": {
        "@type": "Person",
        "@id": "https://www.eperfectbeauty.com/about-us.html#evelyn",
        "name": "Evelyn",
        "jobTitle": "Lead beauty technician",
        "url": "https://www.eperfectbeauty.com/about-us.html",
        "image": "https://www.eperfectbeauty.com/Assets/evelyn.jpg",
        "worksFor": { "@id": "https://www.eperfectbeauty.com/#business" }
      },
      "knowsAbout": [
        "Eyebrow embroidery",
        "Lip embroidery",
        "Eyeliner embroidery",
        "Korean misty eyebrow",
        "Anti-wrinkle treatments",
        "Face lifting treatments",
        "Hydra facials"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+6587787867",
          "contactType": "reservations",
          "availableLanguage": ["English", "Chinese"],
          "areaServed": "SG"
        }
      ],
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://wa.me/6587787867",
          "actionPlatform": [
            "https://schema.org/DesktopWebPlatform",
            "https://schema.org/MobileWebPlatform"
          ]
        },
        "result": {
          "@type": "Reservation",
          "name": "Beauty treatment appointment enquiry"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Beauty Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Embroidery",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Eyebrow embroidery" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Lip embroidery" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Eyeliner embroidery" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Korean Misty Eyebrow" }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Anti-Wrinkle & Lifting",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Needle Free Stem Cell Treatment" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Anti-Laughline Treatment" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Face lifting" }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Facials",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Hydra Aqua Peel Facials" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Hydra glow booster treatment" }
              },
              {
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": "Needle-Free Whitening Treatment" }
              }
            ]
          }
        ]
      }
    }
  ]
}
