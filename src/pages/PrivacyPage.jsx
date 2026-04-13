import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Политика конфиденциальности — Агентство интернет-рекламы</title>
        <meta
          name="description"
          content="Политика конфиденциальности в отношении персональных данных пользователей"
        />
      </Helmet>

      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
              Политика конфиденциальности
            </h1>
            <p className="text-text-secondary mb-10">
              Дата публикации: 13 апреля 2026 г.
            </p>

            <div className="prose prose-neutral max-w-none">
              <div className="space-y-8">
                {/* Раздел 1 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    1. Общие положения
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Настоящая Политика конфиденциальности (далее — Политика) разработана в соответствии с
                    Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» (далее — Федеральный закон)
                    и определяет порядок обработки персональных данных и меры по обеспечению безопасности
                    персональных данных, предпринимаемые индивидуальным предпринимателем{' '}
                    <strong>Ледовских Ксенией Андреевной</strong> (далее — Оператор).
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Оператор ставит своей важнейшей целью и условием осуществления своей деятельности
                    соблюдение прав и свобод человека и гражданина при обработке его персональных данных,
                    в том числе защиту прав на неприкосновенность частной жизни, личную и семейную тайну.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Настоящая Политика применяется ко всей информации, которую Оператор может получить
                    о пользователе во время использования им сайта{' '}
                    <strong>agency.ru</strong> (далее — Сайт).
                  </p>
                </section>

                {/* Раздел 2 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    2. Персональные данные, которые обрабатывает Оператор
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Оператор может обрабатывать следующие персональные данные Пользователя:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li>Фамилия, имя, отчество</li>
                    <li>Адрес электронной почты (email)</li>
                    <li>Номер телефона</li>
                    <li>Наименование организации</li>
                    <li>Адрес сайта</li>
                    <li>Данные об использовании Сайта (cookie, IP-адрес, данные о браузере)</li>
                  </ul>
                </section>

                {/* Раздел 3 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    3. Цели обработки персональных данных
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Персональные данные обрабатываются Оператором в следующих целях:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li>
                      Заключение и исполнение договоров на оказание рекламно-маркетинговых услуг
                    </li>
                    <li>Связь с Пользователем для обсуждения деталей заказа</li>
                    <li>Предоставление информации об услугах Оператора</li>
                    <li>Улучшение качества обслуживания и разработка новых услуг</li>
                    <li>Проведение статистических и маркетинговых исследований</li>
                    <li>
                      Направление уведомлений, информационных и рекламных сообщений (с согласия Пользователя)
                    </li>
                  </ul>
                </section>

                {/* Раздел 4 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    4. Правовые основания обработки персональных данных
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    Оператор обрабатывает персональные данные Пользователя только в случае их заполнения
                    Пользователем самостоятельно через специальные формы на Сайте. Заполняя соответствующие
                    формы, Пользователь выражает своё <strong>согласие</strong> с настоящей Политикой и
                    даёт <strong>согласие на обработку</strong> своих персональных данных в соответствии с
                    Федеральным законом № 152-ФЗ.
                  </p>
                </section>

                {/* Раздел 5 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    5. Порядок сбора, хранения и защиты данных
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Оператор обеспечивает сохранность персональных данных и принимает все возможные меры,
                    исключающие доступ неограниченного круга лиц к персональным данным.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Персональные данные хранятся на серверах, расположенных на территории Российской Федерации.
                    Оператор применяет следующие организационные и технические меры:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li>Шифрование данных при передаче (SSL/TLS)</li>
                    <li>Ограничение доступа к базам данных</li>
                    <li>Регулярное резервное копирование</li>
                    <li>Контроль и аудит доступа</li>
                    <li>Обучение сотрудников требованиям безопасности</li>
                  </ul>
                </section>

                {/* Раздел 6 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    6. Предоставление данных третьим лицам
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Оператор не передаёт персональные данные третьим лицам, за исключением случаев,
                    предусмотренных законодательством Российской Федерации, а именно:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li>
                      По запросу уполномоченных органов государственной власти в порядке,
                      установленном законодательством
                    </li>
                    <li>
                      С согласия Пользователя для оказания услуг (например, передача данных исполнителям)
                    </li>
                  </ul>
                </section>

                {/* Раздел 7 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    7. Сроки хранения персональных данных
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    Персональные данные хранятся не дольше, чем этого требуют цели обработки, если иной срок
                    не установлен законодательством. По достижении целей обработки данные уничтожаются или
                    обезличиваются. Оператор может хранить данные в обезличенной форме для статистических
                    целей.
                  </p>
                </section>

                {/* Раздел 8 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    8. Права Пользователя
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Пользователь имеет право:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li>
                      Получать информацию о том, какие его персональные данные обрабатываются Оператором
                    </li>
                    <li>
                      Требовать уточнения, блокирования или уничтожения персональных данных
                    </li>
                    <li>
                      Отозвать согласие на обработку персональных данных, направив запрос Оператору
                    </li>
                    <li>
                      Обжаловать действия или бездействие Оператора в уполномоченном органе
                      по защите прав субъектов персональных данных (Роскомнадзор) или в судебном порядке
                    </li>
                  </ul>
                </section>

                {/* Раздел 9 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    9. Использование файлов cookie
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    Сайт может использовать файлы cookie — небольшие текстовые файлы, которые сохраняются
                    на устройстве Пользователя. Cookie используются для:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li>Обеспечения корректной работы Сайта</li>
                    <li>Анализа поведения Пользователей</li>
                    <li>Улучшения качества обслуживания</li>
                  </ul>
                  <p className="text-text-secondary leading-relaxed">
                    Пользователь может отключить использование cookie в настройках своего браузера, однако
                    это может привести к некорректной работе некоторых функций Сайта.
                  </p>
                </section>

                {/* Раздел 10 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    10. Изменение Политики конфиденциальности
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    Оператор вправе вносить изменения в настоящую Политику. Новая редакция вступает в силу
                    с момента её размещения на Сайте. Пользователи обязаны самостоятельно отслеживать
                    актуальную версию. Продолжение использования Сайта после внесения изменений означает
                    согласие Пользователя с новой редакцией.
                  </p>
                </section>

                {/* Раздел 11 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    11. Контактные данные Оператора
                  </h2>
                  <div className="p-5 rounded-xl bg-background-alt border border-border-light">
                    <p className="text-text mb-2">
                      <strong>Оператор:</strong> ИП Ледовских Ксения Андреевна
                    </p>
                    <p className="text-text mb-2">
                      <strong>ИНН:</strong> [ИНН]
                    </p>
                    <p className="text-text mb-2">
                      <strong>ОГРНИП:</strong> [ОГРНИП]
                    </p>
                    <p className="text-text mb-2">
                      <strong>Адрес:</strong> [Юридический адрес]
                    </p>
                    <p className="text-text-secondary">
                      <strong>Email:</strong> privacy@agency.ru
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default PrivacyPage
