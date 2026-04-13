import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Пользовательское соглашение — Агентство интернет-рекламы</title>
        <meta
          name="description"
          content="Пользовательское соглашение сайта agency.ru"
        />
      </Helmet>

      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">
              Пользовательское соглашение
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
                    Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения
                    между индивидуальным предпринимателем{' '}
                    <strong>Ледовских Ксенией Андреевной</strong> (ИНН: [ИНН], ОГРНИП: [ОГРНИП],
                    адрес: [Юридический адрес]), действующим на основании Свидетельства о государственной
                    регистрации (далее — Администрация сайта), и любым физическим лицом, использующим
                    сайт <strong>agency.ru</strong> (далее — Пользователь).
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Использование Сайта означает безоговорочное согласие Пользователя с настоящим
                    Соглашением и указанными в нём условиями. В случае несогласия с этими условиями
                    Пользователь должен воздержаться от использования Сайта.
                  </p>
                </section>

                {/* Раздел 2 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    2. Предмет Соглашения
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    2.1. Администрация предоставляет Пользователю право использования Сайта и
                    размещённых на нём материалов на условиях простой (неисключительной) лицензии.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    2.2. Сайт представляет собой интернет-ресурс, предназначенный для информирования
                    Пользователей об услугах Администрации в сфере интернет-рекламы (контекстная
                    реклама, таргетированная реклама, SEO-продвижение, SMM), а также для приёма
                    заявок на оказание таких услуг.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    2.3. Настоящее Соглашение распространяется на все существующие и будущие
                    функции и разделы Сайта.
                  </p>
                </section>

                {/* Раздел 3 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    3. Права и обязанности сторон
                  </h2>

                  <h3 className="text-lg font-semibold text-text mb-3 mt-6">
                    3.1. Администрация вправе:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
                    <li>Изменять правила пользования Сайтом, а также изменять содержание Сайта</li>
                    <li>
                      Приостановить доступ Пользователя к Сайту в случае нарушения настоящего Соглашения
                    </li>
                    <li>
                      Направлять Пользователю информационные сообщения о своих услугах и акциях
                      (при наличии согласия)
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-text mb-3 mt-6">
                    3.2. Администрация обязуется:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
                    <li>Обеспечивать работоспособность Сайта в штатном режиме</li>
                    <li>
                      Не распространять персональные данные Пользователей без их согласия,
                      за исключением случаев, предусмотренных законодательством РФ
                    </li>
                    <li>Обрабатывать заявки Пользователей в разумные сроки</li>
                    <li>Обеспечить конфиденциальность переданной информации</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-text mb-3 mt-6">
                    3.3. Пользователь вправе:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
                    <li>Получать информацию об услугах Администрации</li>
                    <li>Отправлять заявки на оказание услуг через Сайт</li>
                    <li>
                      Запросить информацию о порядке обработки своих персональных данных
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-text mb-3 mt-6">
                    3.4. Пользователь обязуется:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li>
                      Не предпринимать действий, которые могут затруднить работу Сайта
                    </li>
                    <li>
                      Не использовать Сайт для распространения вредоносной информации
                    </li>
                    <li>
                      Указывать достоверную информацию при заполнении форм на Сайте
                    </li>
                    <li>
                      Не нарушать авторские права и другие права третьих лиц
                    </li>
                  </ul>
                </section>

                {/* Раздел 4 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    4. Оформление заказов
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    4.1. Пользователь может оформить заявку на оказание услуг через специальные
                    формы на Сайте или в личном кабинете.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    4.2. Заявка не является офертой. Офертой считается выставленный счёт на оплату
                    после согласования условий с менеджером.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    4.3. Администрация вправе отказать в обработке заявки без объяснения причин.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    4.4. Стоимость услуг определяется индивидуально и фиксируется в договоре
                    или счёте на оплату.
                  </p>
                </section>

                {/* Раздел 5 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    5. Ответственность сторон
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    5.1. Администрация не несёт ответственности:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary mb-4">
                    <li>
                      За временные сбои в работе Сайта, вызванные действиями третьих лиц или
                      обстоятельствами непреодолимой силы
                    </li>
                    <li>
                      За убытки Пользователя, возникшие в результате невозможности использования Сайта
                    </li>
                    <li>
                      За содержание сайтов третьих лиц, на которые Пользователь может перейти через Сайт
                    </li>
                  </ul>

                  <p className="text-text-secondary leading-relaxed mb-3">
                    5.2. Пользователь несёт ответственность:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-text-secondary">
                    <li>
                      За достоверность информации, предоставленной при регистрации и оформлении заявок
                    </li>
                    <li>
                      За соблюдение авторских прав при размещении материалов на Сайте
                    </li>
                    <li>
                      За любые действия, нарушающие законодательство Российской Федерации
                    </li>
                  </ul>
                </section>

                {/* Раздел 6 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    6. Интеллектуальная собственность
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    6.1. Все материалы Сайта (тексты, изображения, логотипы, дизайн, программный код)
                    являются объектами авторского права Администрации или третьих лиц.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    6.2. Использование материалов Сайта допускается только с письменного разрешения
                    правообладателя. Запрещается копирование, воспроизведение, распространение
                    материалов без согласия Администрации.
                  </p>
                </section>

                {/* Раздел 7 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    7. Персональные данные
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    7.1. Обработка персональных данных Пользователя осуществляется в соответствии с
                    Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и
                    <a href="/privacy" className="text-accent hover:underline">
                      Политикой конфиденциальности
                    </a>
                    . Предоставляя свои данные, Пользователь даёт согласие на их обработку.
                  </p>
                </section>

                {/* Раздел 8 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    8. Срок действия Соглашения
                  </h2>
                  <p className="text-text-secondary leading-relaxed">
                    8.1. Настоящее Соглашение вступает в силу с момента начала использования Сайта
                    Пользователем и действует до прекращения использования Сайта.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    8.2. Администрация вправе в одностороннем порядке изменять настоящее Соглашение.
                    Новая редакция вступает в силу с момента размещения на Сайте.
                  </p>
                </section>

                {/* Раздел 9 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    9. Разрешение споров
                  </h2>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    9.1. Все споры и разногласия разрешаются путём переговоров.
                  </p>
                  <p className="text-text-secondary leading-relaxed mb-3">
                    9.2. В случае невозможности достижения согласия спор передаётся на рассмотрение
                    в суд по месту нахождения Администрации в соответствии с законодательством
                    Российской Федерации.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    9.3. К настоящему Соглашению применяется законодательство Российской Федерации.
                  </p>
                </section>

                {/* Раздел 10 */}
                <section>
                  <h2 className="text-xl font-bold text-text mb-4">
                    10. Реквизиты Администрации
                  </h2>
                  <div className="p-5 rounded-xl bg-background-alt border border-border-light">
                    <p className="text-text mb-2">
                      <strong>Полное наименование:</strong> Индивидуальный предприниматель Ледовских Ксения Андреевна
                    </p>
                    <p className="text-text mb-2">
                      <strong>ИНН:</strong> [ИНН]
                    </p>
                    <p className="text-text mb-2">
                      <strong>ОГРНИП:</strong> [ОГРНИП]
                    </p>
                    <p className="text-text mb-2">
                      <strong>Юридический адрес:</strong> [Адрес регистрации]
                    </p>
                    <p className="text-text mb-2">
                      <strong>Почтовый адрес:</strong> [Почтовый адрес]
                    </p>
                    <p className="text-text mb-2">
                      <strong>Телефон:</strong> +7 (XXX) XXX-XX-XX
                    </p>
                    <p className="text-text-secondary">
                      <strong>Email:</strong> info@agency.ru
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

export default TermsPage
