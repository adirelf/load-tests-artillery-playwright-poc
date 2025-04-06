# מבנה ריפו מלא להרצת בדיקות Playwright דרך Artillery + Prometheus + Jenkins

# 📄 מדריך הפעלה (README)

### דרישות מוקדמות:
- Docker & Docker Compose מותקנים
- Node.js מותקן
- Jenkins (לא חובה להפעלה ידנית)

### שלבים:

1. התקנת תלויות:
```bash
npm ci
```

2. הרצת Prometheus ו-Pushgateway:
```bash
docker-compose up -d
```

3. הרצת בדיקת עומסים:
```bash
npm run test
```

4. שליחת תוצאות ל-Prometheus:
```bash
node report-to-prometheus.js
```

5. פתיחת Prometheus בדפדפן:
[http://localhost:9090](http://localhost:9090)
- חיפוש מדדים:
  - `artillery_requests_total`
  - `artillery_errors_total`

---
