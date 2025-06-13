/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <footer className="pt-10">
      <div className="container mx-auto px-16 sm:px-4 text-center">
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/bogdan-ilchenko-70286525/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img
              src="/img/icons/linkedin.svg"
              alt="linkedin"
              className="w-6 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://github.com/bogdanilchenko1987"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img
              src="/img/icons/github-footer.svg"
              alt="github"
              className="w-6 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://t.me/bogdan_ilchenko"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img
              src="/img/icons/telegram.svg"
              alt="telegram"
              className="w-6 hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="mailto:bogdan_ilchenko@ukr.net"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <img
              src="/img/icons/email.svg"
              alt="email"
              className="w-8 hover:scale-110 transition-transform"
            />
          </a>
        </div>
        <p className="mt-4 text-gray-500">© 2025 All rights reserved</p>
      </div>
    </footer>
  );
}
