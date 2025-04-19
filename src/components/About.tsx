import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { useTranslation } from "react-i18next";

const About = () => {
  const { isDark } = useTheme();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const qualifications = [
    {
      title: t("about.qualifications.1.title"),
      description: t("about.qualifications.1.description"),
    },
    {
      title: t("about.qualifications.2.title"),
      description: t("about.qualifications.2.description"),
    },
    {
      title: t("about.qualifications.3.title"),
      description: t("about.qualifications.3.description"),
    },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen py-20 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2
            className={`text-4xl font-bold mb-8 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {t("about.title")}
          </h2>
          <p
            className={`text-lg mb-12 text-center ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("about.description")}
          </p>

          <div className={`rounded-xl p-8 ${isDark ? "bg-gray-800" : "bg-white"} shadow-lg`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                {qualifications.map((qualification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`p-4 rounded-lg ${
                      isDark ? "bg-gray-700" : "bg-gray-50"
                    }`}
                  >
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {qualification.title}
                    </h3>
                    <p
                      className={`${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {qualification.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="/portrait.jpg"
                    alt="Andrea Wennecke"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute -bottom-4 -right-4 p-4 rounded-lg ${
                    isDark ? "bg-gray-700" : "bg-gray-50"
                  } shadow-lg`}
                >
                  <p
                    className={`text-sm ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {t("about.location")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 