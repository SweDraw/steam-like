import React from 'react';
import './CreateForm.style.scss';
import Email from "../input/email/Email.component";
import Password from "../input/password/Password.component";
import Checkbox from "../input/checkbox/Checkbox.component";
import Submit from "../input/submit/Submit.component";
import UserName from "../input/text/UserName.component";

export interface CreateFormProps {

}

const CreateForm: React.FC<CreateFormProps> = () => {

  return (
    <section className="create-form">
      <form action="" className="create-form__form">
        <article className="create-form__title create-form__title--big-title">
          Create user
        </article>
        <section className="create-form__section">
          <article className="create-form__field">
            <p className="create-form__title">User name</p>
            <UserName className={'create-form__input'} name={'user-name'}/>
          </article>
          <article className="create-form__field">
            <p className="create-form__title">Write e-mail</p>
            <Email className={"create-form__input"} name={'email__main'}/>
            <p className="create-form__title">Repeat e-mail</p>
            <Email className={"create-form__input"} name={'email__repeat'}/>
          </article>
          <article className="create-form__field">
            <p className="create-form__title">Select your country</p>
            <select name="country" className="country__select">
              <option value="Afghanistan">Afghanistan</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'ivoire">Cote D'ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">French Southern Territories</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-bissau">Guinea-bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
              <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of
              </option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
              <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands
              </option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan, Province of China">Taiwan, Province of China</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-leste">Timor-leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="Virgin Islands, British">Virgin Islands, British</option>
              <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </select>
          </article>
        </section>
        <hr/>
        <article className="create-form__field">
          <p className="create-form__title">Password:</p>
          <Password className={'create-form__input'} name={'password'}/>
          <p className="create-form__title">Password repeat:</p>
          <Password className={'create-form__input'} name={'password__repeat'}/>
          <p className="create-form__rules">
            In password need 2 big letter, 2 number, 3 small letter. Min size 8 - max 20
          </p>
        </article>
        <hr/>
        <article className="create-form__field create-form__field--agree">
          <div id="create-form__agree-politics">
            <h3>СОГЛАШЕНИЕ ПОДПИСЧИКА</h3><br/>
            <p id='0'>Содержание:
            </p>
            <ol style={{marginLeft: 13}}>
              <li>Регистрация в качестве подписчика. Условия использования. Ваш аккаунт</li>
              <li>Лицензии</li>
              <li>Биллинг, платежи и другие подписки</li>
              <li>Нормы поведения в Интернете, мошенничество в игре и иные незаконные действия</li>
              <li>Контент сторонних производителей</li>
              <li>Пользовательский контент</li>
              <li>Отказ от ответственности; ограничение ответственности; отсутствие гарантийных
                обязательств; ограниченная гарантия и соглашение</li>
              <li>Внесение изменений в соглашение</li>
              <li>Срок действия соглашения и условия расторжения</li>
              <li>Применимое право/посредничество/юрисдикция/расходы на юриста</li>
              <li>Разрешение споров/обязательный арбитраж/отказ от коллективного иска</li>
              <li>Разное</li>
            </ol>

            <p>Данное Соглашение подписчика службы Steam (далее&nbsp;— «Соглашение») является юридическим документом,
              устанавливающим Ваши права и обязанности как подписчика службы Steam Корпорации Valve, компании,
              действующей по законам штата Вашингтон, имеющей юридический адрес 10400 NE 4th St., Bellevue, WA 98004,
              США, и зарегистрированной государственным секретарем штата Вашингтон под номером 60 22 90 773;
              идентификационный номер плательщика НДС&nbsp;— EU 8260 00671 (далее&nbsp;— «Valve»). Пожалуйста,
              внимательно ознакомьтесь с его содержанием.</p>
            <p>ПУНКТ 11 СОДЕРЖИТ ОБЯЗАТЕЛЬНОЕ АРБИТРАЖНОЕ СОГЛАШЕНИЕ И КОЛЛЕКТИВНЫЙ ОТКАЗ ОТ ПРАВ. ОН ВЛИЯЕТ НА РЕШЕНИЕ
              СПОРОВ. ПОЖАЛУЙСТА, ВНИМАТЕЛЬНО ОЗНАКОМЬТЕСЬ С НИМ. ЕСЛИ ВЫ ЯВЛЯЕТЕСЬ ПОДПИСЧИКОМ, ПОСТОЯННО ПРОЖИВАЮЩИМ В
              КВЕБЕКЕ (КАНАДА) ИЛИ ЕВРОПЕЙСКОМ СОЮЗЕ, ПУНКТ 11 НА ВАС НЕ РАСПРОСТРАНЯЕТСЯ.</p>

            <i id="1"/>
            <p>1. РЕГИСТРАЦИЯ В КАЧЕСТВЕ ПОДПИСЧИКА. УСЛОВИЯ ИСПОЛЬЗОВАНИЯ. ВАШ АККАУНТ</p>
            <p>Steam — это онлайн-служба (далее — «Steam»), предлагаемый корпорацией Valve.</p>
            <p>После завершения регистрации аккаунта пользователя Steam Вы становитесь подписчиком службы Steam
              (далее&nbsp;— «Подписчик»). Настоящее соглашение вступает в силу после того, как Вы принимаете его
              условия. Вы не имеете права стать подписчиком, если Вы моложе 13 лет. Steam не предназначен для лиц моложе
              13 лет, и компания Valve не будет преднамеренно осуществлять сбор персональных данных лиц моложе 13
              лет.</p>
            <p>A. Сторона соглашения</p>
            <p>Во всех ситуациях взаимодействие со службой Steam осуществляется в рамках договорных отношений с Valve.
              Если в момент транзакции не указано иное (например, в случае покупки у другого Подписчика на Торговой
              площадке Подписок), все транзакции в отношении Подписок (в соответствии с определением, приведенным ниже)
              в Steam совершаются в Valve.</p>
            <p>B. Подписки; Контент и Услуги</p>
            <p>Являясь Подписчиком, Вы можете получить доступ к определенным услугам, программным продуктам и контенту,
              доступному Подписчикам Steam. Под термином «Контент и Услуги» в настоящем Соглашении понимаются
              программный клиент Steam и любые другие программные продукты, контент и обновления, которые Вы загружаете
              или доступ к которым Вы получаете, используя Steam, включая в том числе видеоигры, игровой контент и
              программное обеспечение, связанное с Устройствами, корпорации Valve или сторонних производителей, а также
              любые виртуальные объекты, обмен, продажа или покупка которых осуществляется на игровом рынке подписок
              Steam; под термином «Подписки» в настоящем Соглашении понимаются права доступа к Контенту и Услугам и/или
              права пользования Контентом и Услугами, доступ к которым Вы получаете с помощью Steam.</p>
            <p>Каждая Подписка дает Вам право доступа к определенным Контенту и Услугам. Некоторые Подписки могут
              включать дополнительные условия, установленные для этой подписки (далее&nbsp;— «Условия Подписки»)
              (например, лицензионное соглашение с конечным пользователем определенной игры, или условия использования,
              касающиеся определенного продукта или функции службы Steam). Кроме того, дополнительные условия (например,
              процедуры оплаты и биллинга) могут размещаться по адресу <a target="_new"
                                                                          href="http://www.steampowered.com">http://www.steampowered.com</a> или
              в службе Steam («Правила использования»). Правила использования включают Правила поведения в сети при
              использовании службы Steam <a target="_new"
                                            href="http://steampowered.com/index.php?area=online_conduct">http://steampowered.com/index.php?area=online_conduct</a> и
              Политику возмещения средств службы Steam <a target="_new"
                                                          href="http://store.steampowered.com/steam_refunds">http://store.steampowered.com/steam_refunds</a>.
              Условия подписки, Правила использования и Политика конфиденциальности компании Valve (которая размещена по
              адресу <a target="_new"
                        href="http://www.valvesoftware.com/privacy.htm">http://www.valvesoftware.com/privacy.htm</a>)
              становятся юридически обязывающими для Вас, как только Вы принимаете их или настоящее Соглашение или иным
              образом признаете их юридическую силу, как описано в Разделе 8 (Дополнения к настоящему Соглашению).</p>
            <p>C. Ваш Аккаунт</p>
            <p>Завершив процедуру регистрации в службе Steam, Вы создаете собственный аккаунт в службе Steam
              (далее&nbsp;— «Аккаунт»). Ваш Аккаунт также может содержать платежные реквизиты, которые Вы предоставляете
              компании Valve для приобретения Подписок, Контента и Услуг, а также любых физических товаров, предлагаемых
              для приобретения через Steam (далее&nbsp;— «Устройства»). Вы не имеете права раскрывать, передавать или
              иным образом предоставлять третьим лицам право пользования Вашим паролем или Вашим Аккаунтом за
              исключением случаев, разрешенных Valve. Вы несете ответственность за конфиденциальность Вашего имени
              пользователя и пароля и за безопасность Вашей компьютерной системы. Valve не несет ответственности за
              использование Вашего пароля и Аккаунта или за любое взаимодействие и деятельность в Steam, ставшие
              результатом использования Вашего имени пользователя и пароля Вами или лицами, которым Вы могли умышленно
              или по неосторожности раскрыть Ваше имя пользователя и/или пароль в нарушение настоящего положения о
              конфиденциальности. За исключением случаев, когда это является результатом небрежности или нарушения со
              стороны Valve, Valve не несет ответственности за использование Вашего Аккаунта лицом, использовавшим Ваше
              имя пользователя и пароль мошенническим образом без Вашего разрешения. Если Вы считаете, что
              конфиденциальность Вашего имени пользователя и/или пароля была нарушена, Вы обязаны незамедлительно
              уведомить об этом Valve, используя форму технической поддержки (<a target="_new"
                                                                                 href="https://support.steampowered.com/newticket.php">https://support.steampowered.com/newticket.php</a>).
            </p>
            <p>Ваш Аккаунт, включая любую информацию, имеющую к нему отношение (например, контактные данные, платежная
              информация, история Аккаунта, Подписки и пр.), носит сугубо личный характер. Вы не имеете права продавать
              или предоставлять за плату право пользования своим Аккаунтом или иным образом передавать право пользования
              своим Аккаунтом, а также Вы не имеете право продавать, предоставлять за плату право пользования или иным
              образом передавать право пользования своими Подписками, кроме случаев, когда это явно разрешено настоящим
              Соглашением (включая любые Условия подписки или Правила использования) или иным образом разрешено
              Valve.</p>
            <p>D. Обработка платежей</p>
            <p>Обработка платежей, относящихся к приобретению Контента, Услуг и/или Устройств, предлагаемых в Steam,
              осуществляется непосредственно корпорацией Valve или полностью принадлежащей Valve дочерней компанией
              Valve GmbH от имени корпорации Valve в зависимости от использованного метода оплаты. Если ваша банковская
              карта выпущена за пределами США, ваш платеж может быть обработан через европейский банк-эквайрер компанией
              Valve GmbH от имени корпорации Valve. В случае использования любых других методов оплаты платеж
              обрабатывается непосредственно корпорацией Valve. Независимо от метода оплаты, доставка Контента и Услуг,
              а также Устройств осуществляется корпорацией Valve.</p>

            <i id="2"/>
            <p>2. ЛИЦЕНЗИИ</p>
            <p>A. Общая лицензия на Контент и Услуги</p>
            <p>Для использования Steam и Ваших Подписок требуется загрузка и установка на Ваш компьютер Контента и
              Услуг. Настоящим Valve передает Вам, а Вы принимаете неэксклюзивное право пользования Контентом и Услугами
              в личных некоммерческих целях (за исключением случаев, когда коммерческое использование разрешено в прямой
              форме в настоящем документе или в соответствующих Условиях подписки). Лицензия утрачивает силу по
              окончании срока действия (a) данного Соглашения или (b) Подписки, включающей лицензию. Настоящим
              передается право пользования Контентом и Услугами, а не какие-либо иные вещные права. Передаваемое право
              не порождает никакого титула или права собственности на Контент и Услуги. Чтобы использовать Контент и
              Услуги, Вы должны иметь Аккаунт в Steam, а также Вам может потребоваться запустить клиентское приложение
              Steam и поддерживать соединение с Интернетом.</p>
            <p>По различным причинам, таким как безопасность, стабильность и должное функционирование программы в
              многопользовательском режиме, может возникнуть необходимость в автоматическом обновлении, проведении
              предварительной загрузки, создании новых версий или внесении иных улучшений в Контент и Услуги, и,
              соответственно, системные требования для использования Контента и Услуг со временем могут меняться. Вы
              согласны на автоматические обновления такого рода. Вы признаете, что данное Соглашение (включая
              соответствующие Условия подписок) не дает Вам права на получение в будущем обновлений, новых версий или
              иных улучшений Контента и Услуг, предоставляемых по определенной Подписке, хотя Valve имеет право по
              своему усмотрению предоставить такие обновления и т. п.</p>
            <p>B. Лицензия на Бета-версию Программного обеспечения</p>
            <p>Время от времени Valve может предоставлять Вам через службу Steam программное обеспечение раньше его
              коммерческого релиза (далее — «Бета-версия»). Вы не обязаны использовать Бета-версии, но имеете право
              использовать их на следующих условиях. Бета-версия считается включающей в себя Контент и Услуги, а каждая
              предоставленная Вам копия Бета-версии — Подпиской на соответствующую Бета-версию на следующих специальных
              условиях:</p>
            <p>
            </p>
            <ul>
              <li>Ваше право пользования Бета-версией может иметь ограниченный срок действия и предоставляться на
                дополнительных Условиях подписки;<br/>
              </li>
              <li>Valve или любая аффилированная компания Valve вправе просить или требовать от Вас предложений,
                рецензий или иной информации об использовании Бета-версии; в соответствии с Пунктом 6 данного Соглашения
                (Пользовательский контент) такая информация будет считаться Пользовательским контентом; и<br/>
              </li>
              <li>В дополнение к установленным в Пункте 7 данного соглашения (Отказ от ответственности; ограничение
                ответственности; отсутствие гарантий; ограниченная гарантия и соглашение) отказу от ответственности и
                ограничению ответственности за все Программное обеспечение, в зависимости от того, что применимо, Вы
                признаете, что Бета-версия выпускается только в целях тестирования и усовершенствования, в частности для
                обеспечения Valve отзывами о качестве и удобстве использования Бета-версии, и, следовательно, содержит
                ошибки, не является окончательной версией и может вызвать программный конфликт или причинить вред Вашему
                компьютеру, содержащейся в нем информации и/или установленному на нем программному обеспечению.
                Устанавливая и/или используя Бета-версию, Вы обязуетесь использовать ее только в соответствии с ее
                предназначением, т. е. в целях тестирования и улучшения, и ни в коем случае не использовать ее в системе
                или в целях, когда неисправность Бета-версии может причинить ущерб любого рода. В частности, Вы должны
                сохранять полные резервные копии любой системы, в которой будет устанавливаться Бета-версия.
              </li>
            </ul>
            <p>C. Лицензия на использование Средств разработчика Valve</p>
            <p>Ваши Подписки могут включать в себя доступ к различным средствам Valve (далее — «Средства разработчика»),
              которые используются для создания контента. К таким примерам относятся: пакет разработчика программного
              обеспечения (далее — «Пакет SDK») для версии игрового «движка» («Source Engine») и соответствующий
              редактор Valve Hammer, программное обеспечение Source® Filmmaker или другие игровые инструменты, с помощью
              которых Вы можете редактировать или создавать производные продукты на основе игры Valve. Некоторые
              Средства разработчика (например, программное обеспечение Source® Filmmaker) могут распространяться по
              специальным Условиям подписки, которые отличаются от правил, оговоренных в данном Пункте. Если иное не
              указано в других специальных Условиях подписки, распространяющихся на использование определенного Средства
              разработчика, то Вы вправе использовать Средства разработчика, а также использовать, воспроизводить,
              публиковать, исполнять, отображать и распространять любой контент, созданный Вами с помощью Средств
              разработчика, но не в коммерческих целях.</p>
            <p>Если Вы хотите использовать пакет Source Engine SDK или какие-либо другие Средства разработчика Valve в
              коммерческих целях, свяжитесь с Valve по адресу sourceengine@valvesoftware.com.</p>
            <p>D. Лицензия на использование Контента игр Valve в Фан-арте.</p>
            <p>Корпорация Valve ценит сообщество Подписчиков, занимающихся художественным творчеством, создающих
              литературные произведения и аудиовизуальные продукты на основе сюжетов и персонажей игр Valve («Фан-арт»).
              Вы вправе включать контент игр Valve в тематику Фан-арта. За исключением случаев, специально оговоренных в
              данном Пункте или в Условиях подписки, Вы можете использовать, воспроизводить, публиковать, исполнять,
              отображать и распространять любые продукты Фан-арта, содержащие контент игр Valve, но только в
              некоммерческих целях.</p>
            <p>Если Вы собираетесь включить любой контент сторонних производителей в продукт Фан-арта, Вам следует в
              обязательном порядке получить все необходимые права от владельца этого контента.</p>
            <p>Коммерческое использование контента некоторых игр Valve разрешается через такие функции, как Мастерские
              Steam или Игровой рынок подписок Steam. Условия, применимые к такому виду использования, изложены в
              Пунктах 3.D. и 6.B. ниже и в Условиях подписки, предусмотренных для этих функций.</p>
            <p>Чтобы просмотреть политику предоставления видеоматериалов Valve, содержащую дополнительные условия
              относительно использования аудиовизуальных продуктов, включающих интеллектуальную собственность Корпорации
              Valve или созданных с использованием Программного обеспечения Source® Filmmaker, нажмите следующую
              ссылку: <a target="_new"
                         href="http://www.valvesoftware.com/videopolicy.html">http://www.valvesoftware.com/videopolicy.html</a>.
            </p>
            <p>E. Лицензия на использование Программного обеспечения Выделенного сервера Valve</p>
            <p>Ваши Подписки могут включать в себя доступ к Программному обеспечению Выделенного сервера Valve. В таком
              случае Вы имеете право использовать Программное обеспечение Выделенного сервера Valve на неограниченном
              числе компьютеров с целью создания серверов для многопользовательских игр Valve. Если Вы используете
              Программное обеспечение Выделенного сервера Valve, на Вас ложатся все затраты, связанные с обеспечением
              доступа к Интернету, пропускной способностью канала и иными вытекающими из такой деятельности
              расходами.</p>
            <p>F. Право собственности на Контент и Услуги</p>
            <p>Все права собственности и права интеллектуальной собственности, связанные с Контентом и Услугами и их
              копиями, принадлежат компании Valve и/или ее лицензиарам или лицензиарам аффилированных лиц. Все права
              защищены, если иное не установлено настоящим Соглашением. Контент и Услуги охраняются законодательством об
              авторском праве, международными соглашениями и конвенциями в сфере интеллектуальной собственности и иными
              нормативно-правовыми актами. Контент и Услуги содержат определенный набор лицензионных материалов, и
              лицензиары Valve и лицензиары ее аффилированных компаний вправе защищать свои права в случае нарушения
              положений настоящего Соглашения.</p>
            <p>G. Ограничения на использование Контента и Услуг</p>
            <p>Вы не можете использовать Контент и Услуги с любой иной целью, кроме разрешенного доступа к Steam и к
              Вашим Подпискам и использовать Ваши Подписки в личных некоммерческих целях за исключением случаев,
              разрешенных настоящим Соглашением или применимыми Условиями подписки. Если иное не оговорено в настоящем
              Соглашении (включая любые Условия подписок или Правила использования) или в соответствующем законе, Вы не
              имеете права полностью или частично копировать, делать фотокопии, воспроизводить, публиковать,
              распространять, переводить, проводить обратное проектирование, устанавливать исходный код, модифицировать,
              разбирать, создавать производные произведения, а также удалять сведения об авторских правах из данного
              Контента и Услуг или любого программного обеспечения, полученного посредством Steam, без предварительного
              письменного согласия Valve.</p>
            <p>Контент и Услуги предназначены для личного пользования. Вы не имеете права: (i) продавать, обременять
              залогом или передавать копии Контента и Услуг третьим лицам каким-либо способом, предоставлять Контент и
              Услуги на праве аренды или передавать право пользования ими третьим лицам без предварительного письменного
              согласия Valve, если иное явно не указано в настоящем Соглашении (включая любые Условия подписки или
              Правила использования); (ii) предоставлять свои услуги по подбору партнера, имитировать или перенаправлять
              протоколы связи, используемые Valve в сетевых настройках Контента и Услуг, посредством эмуляции
              протоколов, тунеллирования, модификаций или добавления новых компонентов в Контент и Услуги, использования
              утилит и любых других методов, уже имеющихся или разработанных в будущем, в любых целях, включая (но не
              ограничиваясь) сетевую игру через Интернет, сетевую игру с использованием коммерческих и некоммерческих
              игровых сетей, или использовать Контент и Услуги в качестве элемента сетей, веб-сайтов или служб сбора
              данных без предварительного письменного разрешения Valve; или (iii) использовать Контент и Услуги или их
              компоненты в коммерческих целях, за исключением случаев, разрешенных в прямой форме в каких-либо пунктах
              настоящего Соглашения (в том числе любые Условия подписок или Правила использования).</p>

            <i id="3"/>
            <p>3. БИЛЛИНГ, ПЛАТЕЖИ И ДРУГИЕ ПОДПИСКИ</p>
            <p>Все сборы за пользование службой Steam, а также все покупки, совершенные с использованием Кошелька Steam,
              полностью оплачиваются авансом и окончательно кроме случаев, описанных в разделах 3.I и 7 ниже.</p>
            <p>A. Разрешение на оплату</p>
            <p>Предоставляя Valve или одному из ее платежных операторов платежную информацию, Вы гарантируете, что
              являетесь законным владельцем карты, ПИН-кода, ключа или Аккаунта, связанного с данным платежом, и
              уполномочиваете Valve на списание средств с Вашей кредитной карты или на обработку Вашего платежа с
              помощью стороннего платежного оператора для оплаты Подписки, пополнения Кошелька Steam, покупки Устройств
              или оплаты иных Ваших расходов. Valve может потребовать от Вас предоставить Ваш адрес или другую
              информацию, чтобы выполнить свои обязательства, предусмотренные применимым налоговым
              законодательством.</p>
            <p>В случае с Подписками, оплата за которые взимается в виде абонентской платы (далее&nbsp;— «Подписки с
              абонентской платой»), продолжая пользоваться такой Подпиской, Вы автоматически подтверждаете право Valve
              на списание средств в размере абонентской платы с Вашей кредитной карты (или из Кошелька Steam, если в нем
              есть средства) или на обработку платежа с помощью любого другого соответствующего платежного оператора.
              Если Вы приобрели какие-либо Подписки с абонентской платой, Вы обязаны оповещать Valve в кратчайший срок
              об изменениях номера Вашей кредитной карты, сроках ее действия и/или платежного адреса, или счета PayPal
              или иного средства платежа, а также обязаны уведомить Valve в случае, если у Вашей кредитной карты, счета
              PayPal или иного средства платежа закончился срок действия или она аннулирована по какой-либо причине.</p>
            <p>Если использование Вами Steam подпадает под действие любого налога на использование или продажу, то в
              этом случае Valve также может списать с Вас сумму таких налогов в дополнение к Подписке или другим
              платежам, установленным Правилами использования. Суммы НДС Европейского союза (далее&nbsp;— «НДС»),
              взимаемые Valve, соответствуют НДС, начисленному на стоимость Контента и Услуг, Устройств или
              Подписки.</p>
            <p>Вы соглашаетесь не использовать IP-прокси или другие методы, позволяющие скрыть Ваше место жительства, с
              целью обойти географические ограничения на игровой контент, приобрести игру по цене, не соответствующей
              Вашему региону, или по любой другой причине. В противном случае Valve может блокировать Ваш доступ к
              Аккаунту.</p>
            <p>B. Ответственность за расходы, связанные с Вашим Аккаунтом</p>
            <p>Являясь владельцем Аккаунта, Вы несете все соответствующие расходы, включая налоги, и оплачиваете все
              покупки, сделанные Вами или кем-либо через Ваш Аккаунт, включая Ваших друзей и членов семьи. Valve
              оставляет за собой право взимать абонентскую плату и иные полагающиеся платежи, начисленные до закрытия
              Аккаунта или аннулирования Подписки. Прежде, чем вновь зарегистрироваться, необходимо погасить
              задолженности по предыдущему Аккаунту.</p>
            <p>C. Кошелек Steam</p>
            <p>Steam может предоставить Вам доступ к остатку на счете, связанному с Вашим Аккаунтом (далее&nbsp;—
              «Кошелек Steam»). Кошелек Steam не является ни банковским счетом, ни любым другим инструментом платежа. Он
              предназначен для покупки Контента и Услуг после его предварительного пополнения. Вы можете пополнять свой
              Кошелек Steam до максимальной суммы, определенной Valve, используя для этого кредитную карту, карту
              предоплаты, промо-код или любые другие способы оплаты, которые принимает Steam. В течение 24 (двадцати
              четырех) часов общая сумма средств в Вашем Кошельке Steam плюс общая сумма средств, потраченных из
              Кошелька Steam, вместе не должны превышать 2000 долларов США или эквивалентную сумму в Вашей национальной
              валюте — Вы не сможете пополнить свой Кошелек Steam на сумму, превышающую указанный лимит. Время от
              времени Valve может изменять значения лимита средств на балансе и лимиты использования Кошелька Steam.</p>
            <p>Вы будете получать уведомления по электронной почте о любых изменениях баланса и лимитов использования
              Кошелька Steam в течение 60 (шестидесяти) дней до вступления изменений в силу. Если Вы будете пользоваться
              Вашим Аккаунтом Steam более 30 (тридцати) дней после вступления изменений в силу, это будет означать, что
              Вы принимаете эти изменения. Если Вы не принимаете изменения, единственным способом защиты своего права
              для Вас является ликвидация Аккаунта Steam или отказ от использования Кошелька Steam. В этом случае Valve
              не берет на себя обязательств по возмещению любых средств, оставшихся в Вашем Кошельке Steam.</p>
            <p>Вы можете использовать средства из Кошелька Steam для покупки Подписок или оплаты игровых покупок, если в
              игре поддерживаются операции с Кошельком Steam, а также для приобретения Устройств. В соответствии с
              Пунктом 3.1 средства, переведенные в Кошелек Steam, не подлежат возврату или передаче. Средства, имеющиеся
              в Кошельке Steam, не являются частной собственностью, не имеют ценности за пределами Steam и могут
              использоваться только для покупки Подписок, соответствующего контента через Steam (включая, но не
              ограничиваясь этим, игры и другие приложения в магазине Steam или на Торговой площадке подписок Steam) а
              также Устройств. Средства, имеющиеся в Кошельке Steam, нельзя обменять на наличные деньги.
              Невостребованные средства, имеющиеся в Кошельке Steam, могут быть переданы соответствующим инстанциям.</p>
            <p>D. Обмен и продажа Подписок между Подписчиками</p>
            <p>Steam может включать одну или несколько функций или площадок, с помощью которых Подписчики могут
              осуществлять обмен, продажи или покупку Подписок определенных типов (например, лицензионные права на
              виртуальные объекты), взаимодействуя с другими Подписчиками (далее&nbsp;— «Игровые рынки подписок»).
              Примером Торговой площадки подписок может служить Торговая площадка Сообщества Steam. При использовании
              Торговой площадки подписок или участвуя в обмене, Вы разрешаете Valve от своего лица или в качестве агента
              или лицензиата любого стороннего разработчика или издателя соответствующих Подписок на Вашем Аккаунте
              перемещать эти Подписки из Вашего Аккаунта с целью осуществления обмена или продажи.</p>
            <p>Valve может взимать комиссионные сборы за обмен или продажу на Торговой площадке подписок. Вам будет
              предоставлена информация обо всех комиссионных сборах до завершения обмена или продажи.</p>
            <p>При совершении обмена, продажи или покупки на Торговой площадке подписок Вы признаете и соглашаетесь с
              тем, что несете ответственность за любые налоги, которые могут быть связаны с Вашими транзакциями, включая
              налоги на продажу или использование, а также за соблюдение соответствующего налогового законодательства.
              Выручка от продаж, осуществленных Вами на Торговой площадке подписок, может считаться доходом при расчете
              Вашего налога на прибыль. Вам следует посоветоваться со специалистом по налогообложению, чтобы определить
              свои налоговые обязательства, связанные с деятельностью на Торговой площадке подписок.</p>
            <p>Вы понимаете и подтверждаете, что Valve может принять решение о прекращении работы Торговой площадки
              подписок, изменить размер взимаемых комиссионных сборов или изменить условия или функции Торговой площадки
              подписок. Valve не будет нести перед Вами никакой ответственности в случае любой невозможности обмена,
              продажи или покупки Подписок на Торговой площадке подписок, в том числе по причине прекращения его работы
              или изменения условий, функций или требований для работы с Торговой площадкой подписок.</p>
            <p>Вы также понимаете и подтверждаете, что Подписки, обмен, продажа или покупка которых происходит на
              Торговой площадке подписок, представляют собой лицензионные права, что Вы не имеете прав собственности в
              отношении таких Подписок, и что Valve не признает никаких обменов Подписок (включая обмены в силу закона),
              совершенных вне Steam.</p>
            <p>E. Розничная покупка</p>
            <p>Valve может предложить или потребовать от покупателей продуктов в розничной упаковке или покупателей
              OEM-версий своей продукции оформить Подписку. Для активации Подписки в поставляемый розничный или
              OEM-комплект входит «Ключ CD» или «Ключ продукта».</p>
            <p>F. Авторизованные дилеры службы Steam</p>
            <p>Вы можете приобрести Подписку через авторизованных дилеров Valve. «Ключ продукта», входящий в
              поставляемый комплект, необходим для активации Вашей Подписки. Если Вы приобретаете Подписку у
              авторизованного дилера Valve, все вопросы, связанные с Ключом продукта, должны быть адресованы этому
              дилеру.</p>
            <p>G. Бесплатная Подписка</p>
            <p>В некоторых случаях Valve может предложить бесплатную Подписку на определенные услуги, программное
              обеспечение и контент. Как и в случае с платными Подписками, Вы берете на себя все расходы, связанные с
              оплатой услуг интернет-провайдера, телефонного соединения и иных издержек, понесенных во время соединения
              со службой Steam, даже если Valve предлагает бесплатную подписку.</p>
            <p>H. Сайты сторонних производителей</p>
            <p>Steam может представлять ссылки на сайты сторонних производителей. Некоторые из них могут взимать
              дополнительную плату за пользование, которая не включена и не относится к абонентской плате за Подписку
              или к иным платежам, взимаемым за пользование услугами Valve. Steam также может предоставлять доступ к
              сайтам продавцов, предлагающих контент, товары и/или услуги через Steam или Интернет. Вы несете все
              дополнительные расходы и обязательства, возникшие в результате отношений с этими продавцами. Valve не
              берет на себя никаких обязательств, прямых или косвенных, связанных с сайтами сторонних производителей. В
              частности, Valve не берет на себя никаких обязательств, прямых или косвенных, что услуги или подписки,
              предлагаемые сторонними продавцами, не будут изменены, или их оказание не будет приостановлено или
              прекращено.</p>
            <p>I. Возмещение средств и право на отмену</p>
            <p>Без ущерба для любых Ваших прав, предусмотренных законом, Вы можете запросить возмещение средств за
              покупки на Steam в соответствии с положениями Политики возмещения средств Valve <a target="_new"
                                                                                                 href="http://store.steampowered.com/steam_refunds/">http://store.steampowered.com/steam_refunds/</a>.
            </p>
            <p>Для потребителей из стран Европейского союза:</p>
            <p>Законодательство Европейского союза предоставляет право отмены определенных договоров на физические
              товары и на покупку цифрового содержимого. Подробную информацию о предоставленном Вам законом праве отмены
              и возможностях осуществления этого права можно найти на этой странице: <a target="_new"
                                                                                        href="https://support.steampowered.com/kb_article.php?ref=8620-QYAL-4516">https://support.steampowered.com/kb_article.php?ref=8620-QYAL-4516</a>.
            </p>

            <i id="4"/>
            <p>4. НОРМЫ ПОВЕДЕНИЯ В ИНТЕРНЕТЕ, МОШЕННИЧЕСТВО В ИГРЕ И ИНЫЕ НЕЗАКОННЫЕ ДЕЙСТВИЯ</p>
            <p>Ваше поведение в сети и взаимоотношения с другими подписчиками должны соответствовать общепринятым нормам
              поведения. В частности, оно должно соответствовать Правилам поведения в сети при использовании Steam,
              которые опубликованы на веб-сайте <a target="_new"
                                                   href="http://steampowered.com/index.php?area=online_conduct">http://steampowered.com/index.php?area=online_conduct</a>.
              Условия подписок, применимые к конкретной Подписке, могут также содержать дополнительные требования в
              зависимости от условий использования, предлагаемых третьими сторонами, обеспечивающими размещение
              конкретных игр или других сервисов.</p>
            <p>Steam и Контент и Услуги могут использовать приложения, необходимые для выявления программных или
              аппаратных ресурсов, дающих игроку несправедливое преимущество при игре в многопользовательском режиме
              (далее&nbsp;— «Использование чит-кодов в игре»). Настоящим Вы соглашаетесь не создавать и не
              способствовать созданию и использованию чит-кодов в игре третьими лицами. Вы также соглашаетесь, что не
              будете прямо или косвенно отключать или иным образом препятствовать работе программ, отвечающих за
              обнаружение и предотвращение использования чит-кодов в игре. Вы соглашаетесь с тем, что как Valve, так и
              другие многопользовательские серверы могут отказать Вам в участии в определенных многопользовательских
              играх, если Вы будете уличены в использовании чит-кодов в игре в связи с использованием Steam или Контента
              и Услуг. Также Вы соглашаетесь с тем, что третья сторона, осуществляющая хостинг многопользовательской
              онлайн-игры, может сообщить о факте Вашего Мошенничества в игре компании Valve, и Valve, в свою очередь,
              может предоставить эту информацию другим многопользовательским игровым серверам, использующим продукцию
              Valve. Valve имеет право ликвидировать Ваш Аккаунт или конкретную Подписку за любое поведение или
              действие, которое нарушает закон, является Мошенничеством или иным образом отрицательно влияет на
              использование Steam другими Подписчиками. Вы признаете, что Valve не обязана предоставлять Вам уведомление
              перед ликвидацией Вашей Подписки или Аккаунта.</p>
            <p>Вы не имеете права использовать чит-коды, программное обеспечение для автоматизации действий или
              процессов (боты), модификации, средства взлома или иное несанкционированное программное обеспечение
              сторонних производителей для изменения или автоматизации любых процессов на Торговой площадке
              подписок.</p>

            <i id="5"/>
            <p>5. КОНТЕНТ СТОРОННИХ ПРОИЗВОДИТЕЛЕЙ</p>
            <p>Valve не проводит проверку контента сторонних производителей, доступного через Steam или на других
              ресурсах, в отношении всех Подписок, Контента и Услуг, которые не являются продукцией Valve. Valve не
              несет никакой ответственности за контент сторонних производителей. Некоторое программное обеспечение
              сторонних производителей может быть использовано юридическими лицами в коммерческих целях, однако Вы
              можете получать такое программное обеспечение через Steam только для частного использования.</p>

            <i id="6"/>
            <p>6. ПОЛЬЗОВАТЕЛЬСКИЙ КОНТЕНТ</p>
            <p>A. Общие положения</p>
            <p>Steam предоставляет интерфейсы и инструменты, чтобы Вы могли создавать контент, доступный другим
              пользователям и/или Valve по Вашему усмотрению. Под Пользовательским контентом подразумеваются любые
              сведения, которые Вы предоставили другим пользователям службы Steam через многопользовательские опции
              Steam, а также ставшие доступными Valve или ее аффилированным компаниям вследствие использования Вами
              Контента и Услуг.</p>
            <p>Когда Вы загружаете Ваш контент в Steam, делая его доступным для других пользователей и/или Valve, Вы
              передаете корпорации Valve и ее аффилированным компаниям международное, неэксклюзивное право на
              использование, воспроизведение, модификацию, создание производных работ, распространение, передачу,
              транскодирование, перевод, трансляцию и иную передачу, а также на публичный показ и публичное
              воспроизведение Вашего Пользовательского контента и производных от него работ с целью использования,
              распространения, продвижения и включения в службы Steam, игры Steam и другие предложения Steam, включая
              Подписки. Данная лицензия предоставляется компании Valve при загрузке контента в сервис Steam на все время
              действия прав на интеллектуальную собственность. Ее действие может быть прекращено, если компания Valve
              нарушила положения лицензионного соглашения и не устранила такое нарушение в течение 14 (четырнадцати)
              дней с момента получения уведомления, отправленного Вами в юридический отдел Valve по действующему адресу
              Valve, указанному на данной странице <a target="new"
                                                      href="http://store.steampowered.com/privacy_agreement/">Политики
                конфиденциальности</a>. Прекращение действия данной лицензии не влияет на права каких-либо
              сублицензиатов, полученные в соответствии с какой-либо сублицензией, предоставленной Valve до прекращения
              действия лицензии. Valve является единоличным владельцем производных продуктов, созданных Valve на основе
              Вашего Пользовательского контента, и поэтому имеет право предоставлять права на эти производные продукты.
              Если Вы используете облачный сервис хранения Valve, Вы тем самым предоставляете нам право хранить Вашу
              информацию в составе этого сервиса. Valve может установить ограничения на доступный для использования
              объем хранилища.</p>
            <p>В случае предоставления Вами в адрес Valve своих замечаний или предложений относительно работы Steam,
              Контента и Услуг или продуктов, Устройств или услуг Valve, компания Valve вправе использовать их любым
              образом без каких-либо обязательств по отношению к Вам.</p>
            <p>B. Контент, загруженный в Мастерскую Steam</p>
            <p>Некоторые игры или приложения на сайте Steam (далее — «Приложения, поддерживающие Мастерскую») позволяют
              Вам создавать Пользовательский контент на основе или с помощью Приложений, поддерживающих Мастерскую, и
              отправлять его (далее — «Продукт, переданный в Мастерскую») на одну или более веб-страниц Мастерской
              Steam. Члены Сообщества Steam могут просматривать Продукты, переданные в Мастерскую, а пользователи могут
              запрашивать, загружать или приобретать некоторые виды Продуктов, переданных в Мастерскую. В некоторых
              случаях Продукты, переданные в Мастерскую, могут включаться компанией Valve или сторонним разработчиком в
              игру или использоваться на Торговой площадке подписок.</p>
            <p>Вы понимаете и подтверждаете, что Valve не берет на себя обязательств по использованию, распространению
              или поддержке распространения копий любых Продуктов, переданных в Мастерскую, и оставляет за собой право
              (но не обязательство) ограничивать использование Продуктов, переданных в Мастерскую, или удалять их по
              любой причине.</p>
            <p>Специальные Приложения, поддерживающие Мастерскую, или веб-страницы Мастерской могут содержать особые
              условия («Условия, касающиеся приложений»), которые дополняют или изменяют условия, изложенные в данном
              Пункте. В частности, если Продукты, переданные в Мастерскую, распространяются за плату, Условия,
              касающиеся приложений, оговаривают способы распределения доходов. Если иное не указано в Условиях,
              касающихся приложений (если таковые имеются), к Продуктам, переданным в Мастерскую, применяются следующие
              общие правила.</p>
            <p>
            </p>
            <ul>
              <li>Продукты, переданные в Мастерскую, являются Подписками, и следовательно Вы признаете, что любой
                Подписчик, получающий копию Вашего продукта из Мастерской, будет иметь такие же права на использование
                Продуктов, переданных в Мастерскую (а к Подписчику будут применяться такие же ограничения), которые
                предусмотрены для любых других Подписок в данном Соглашении.<br/>
              </li>
              <li>Невзирая на лицензии, описанные в Пункте 6.A., компания Valve вправе только модифицировать или
                выполнять производные работы на основе Вашего Переданного в мастерскую продукта в следующих случаях: (a)
                Valve имеет право внести изменения, необходимые для поддержки совместимости Вашего Переданного продукта
                с функционалом Steam или Мастерской или пользовательского интерфейса и (b) Valve или соответствующий
                разработчик имеют право вносить изменения в Переданные в Мастерскую продукты, утвержденные для
                распространения в составе приложений, поскольку те признаны необходимыми или рекомендованными для
                усовершенствования игр.
              </li>
              <li>Вы вправе по своему усмотрению удалить Переданный в мастерскую продукт с соответствующих страниц
                Мастерской. В этом случае, компания Valve не будет больше иметь прав на использование, распространение,
                передачу, трансляцию и иное публичное использование Переданного в мастерскую продукта, за исключением
                случаев, когда (a) Valve может продолжить пользоваться правами на Переданный в мастерскую продукт, если
                он утвержден для распространения в составе приложений или передается таким образом, который позволяет
                использовать его в играх, и (b) выполненное Вами удаление не будет затрагивать прав любого Подписчика,
                уже получившего доступ к копии Переданного в мастерскую продукта.
              </li>
            </ul>
            <p>Если Условия, касающиеся приложений, не оговаривают иное, Вы признаете, что возмещение Valve за Ваш
              Переданный в мастерскую продукт является Вашей полной компенсацией, и у Вас нет никаких иных прав или
              компенсаций в связи с правами, предоставленными компании Valve и другим Подписчикам.</p>
            <p>C. Продвижение и реклама</p>
            <p>Если Вы используете Steam (например, списки кураторов Steam или трансляции Steam) для продвижения или
              рекламирования продукта, услуги или мероприятия третьих лиц на возмездной основе (включая неденежные виды
              вознаграждения, такие как бесплатные игры), Вы должны четко указать источник этого вознаграждения Вашей
              аудитории.</p>
            <p>D. Обязательства и гарантии</p>
            <p>Настоящим Вы заявляете и гарантируете нам, что Вы имеете достаточно прав на весь Пользовательский
              контент, чтобы предоставить компании Valve и другим заинтересованным сторонам права, описанные в пунктах
              A. и B. выше, или на любые условия предоставления прав, касающихся соответствующего Приложения,
              поддерживающего Мастерскую, или на странице Мастерской. К ним относятся, среди прочего, любые виды прав на
              интеллектуальную собственность или другие права собственности или личные права, затрагиваемые
              Пользовательским контентом или в связи с ним. В частности, в отношении Продукта, переданного в Мастерскую,
              Вы заявляете и гарантируете, что данный продукт был изначально создан Вами (или в отношении Продукта,
              переданного в Мастерскую, в создании которого помимо Вас участвовали другие разработчики, и в таком
              случае, Вы вправе передавать такой продукт от имени остальных участников).</p>
            <p>Кроме того, Вы заявляете и гарантируете, что Пользовательский контент, его передача и предоставление Вами
              прав на этот контент не нарушает условий контрактов, юридических или законодательных норм.</p>

            <i id="7"/>
            <p>7. ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ; ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ; ОТСУТСТВИЕ ГАРАНТИЙНЫХ ОБЯЗАТЕЛЬСТВ;
              ОГРАНИЧЕННАЯ ГАРАНТИЯ И СОГЛАШЕНИЕ</p>
            <p>ДАННЫЙ РАЗДЕЛ 7 НЕ ПРИМЕНЯЕТСЯ К ПОДПИСЧИКАМ ИЗ СТРАН ЕС.</p>
            <p>
            </p>
            <ul>
              <li>ДЛЯ ПОДПИСЧИКОВ ИЗ АВСТРАЛИИ — ДАННЫЙ ПУНКТ 7 НЕ ИСКЛЮЧАЕТ, НЕ ОГРАНИЧИВАЕТ И НЕ ИЗМЕНЯЕТ ПРИМЕНЕНИЕ
                КАКОЙ-ЛИБО ГАРАНТИИ, ПРАВА ИЛИ СРЕДСТВА ПРАВОВОЙ ЗАЩИТЫ, КОТОРЫЕ НЕ МОГУТ БЫТЬ ТАКИМ ОБРАЗОМ ИСКЛЮЧЕНЫ,
                ОТГРАНИЧЕНЫ ИЛИ ИЗМЕНЕНЫ, ВКЛЮЧАЯ ГАРАНТИИ, ПРАВА И СРЕДСТВА ПРАВОВОЙ ЗАЩИТЫ, ПРЕДОСТАВЛЯЕМЫЕ ЗАКОНОМ
                АВСТРАЛИИ О ЗАЩИТЕ ПРАВ ПОТРЕБИТЕЛЕЙ (ACL). СОГЛАСНО ЗАКОНУ ACL ТОВАРЫ ПОСТАВЛЯЮТСЯ С ГАРАНТИЯМИ,
                ВКЛЮЧАЮЩИМИ ГАРАНТИЮ ПРИЕМЛЕМОГО КАЧЕСТВА ТОВАРОВ. В СЛУЧАЕ НЕВЫПОЛНЕНИЯ ТАКОЙ ГАРАНТИИ ВЫ ИМЕЕТЕ ПРАВО
                НА СРЕДСТВО ПРАВОВОЙ ЗАЩИТЫ (КОТОРОЕ МОЖЕТ ВКЛЮЧАТЬ РЕМОНТ ИЛИ ЗАМЕНУ ТОВАРОВ ИЛИ ВОЗВРАТ СРЕДСТВ). ЕСЛИ
                ОСУЩЕСТВИТЬ РЕМОНТ ИЛИ ЗАМЕНУ НЕВОЗМОЖНО ИЛИ ИМЕЕТСЯ СЕРЬЕЗНЫЙ ДЕФЕКТ, ВЫ ИМЕЕТЕ ПРАВО НА ВОЗВРАТ
                СРЕДСТВ.
              </li>
              <li>ДЛЯ ПОДПИСЧИКОВ ИЗ НОВОЙ ЗЕЛАНДИИ — ДАННЫЙ ПУНКТ 7 НЕ ИСКЛЮЧАЕТ, НЕ ОГРАНИЧИВАЕТ И НЕ ИЗМЕНЯЕТ
                ПРИМЕНЕНИЕ КАКОГО-ЛИБО ПРАВА ИЛИ СРЕДСТВА ПРАВОВОЙ ЗАЩИТЫ, КОТОРЫЕ НЕ МОГУТ БЫТЬ ИСКЛЮЧЕНЫ, ОТГРАНИЧЕНЫ
                ИЛИ ИЗМЕНЕНЫ, ВКЛЮЧАЯ ПРАВА И СРЕДСТВА ПРАВОВОЙ ЗАЩИТЫ, ПРЕДОСТАВЛЯЕМЫЕ ЗАКОНОМ О ГАРАНТИЯХ ПОТРЕБИТЕЛЕЙ
                НОВОЙ ЗЕЛАНДИИ ОТ 1993 ГОДА. ПОЛОЖЕНИЯ ДАННОГО ЗАКОНА ГАРАНТИРУЮТ, ЧТО ТОВАРЫ И УСЛУГИ ИМЕЮТ ПРИЕМЛЕМОЕ
                КАЧЕСТВО. ЕСЛИ ЭТА ГАРАНТИЯ НЕ УДОВЛЕТВОРЯЕТСЯ, ЗАКОН ПРЕДОСТАВЛЯЕТ ПРАВО НА УСТРАНЕНИЕ НЕИСПРАВНОСТЕЙ
                ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ (ЧТО МОЖЕТ ВКЛЮЧАТЬ В СЕБЯ ИСПРАВЛЕНИЕ, ЗАМЕНУ ИЛИ ВОЗМЕЩЕНИЕ СРЕДСТВ). ЕСЛИ
                НЕИСПРАВНОСТЬ НЕ МОЖЕТ БЫТЬ УСТРАНЕНА ИЛИ ЯВЛЯЕТСЯ СУЩЕСТВЕННОЙ, ЗАКОН ПРЕДУСМАТРИВАЕТ ВОЗМЕЩЕНИЕ
                СРЕДСТВ.
              </li>
            </ul>

            <p>Перед приобретением Подписки Вы должны ознакомиться с информацией о продукте, доступной в Steam, включая
              описание Подписки, минимальные технические требования и отзывы пользователей.</p>
            <p>A. ОТКАЗ ОТ ОТВЕТСТВЕННОСТИ</p>
            <p>В МАКСИМАЛЬНО ДОПУСТИМОЙ СООТВЕТСТВУЮЩИМ ЗАКОНОМ СТЕПЕНИ VALVE, ЕЕ ОТДЕЛЕНИЯ И ПОСТАВЩИКИ УСЛУГ ЯВНО
              ОТКАЗЫВАЮТСЯ ОТ 1) ПРЕДОСТАВЛЕНИЯ ЛЮБЫХ ГАРАНТИЙ ПО STEAM, КОНТЕНТУ И УСЛУГАМ И ПОДПИСКАМ, А ТАКЖЕ ОТ 2)
              ЛЮБЫХ ВЫТЕКАЮЩИХ ИЗ ОБЩЕГО ПРАВА ОБЯЗАННОСТЕЙ В ОТНОШЕНИИ STEAM, КОНТЕНТА И УСЛУГ И ПОДПИСОК, В ТОМ ЧИСЛЕ
              ОТ ОТВЕТСТВЕННОСТИ ЗА ХАЛАТНОСТЬ И НЕДОСТАТОК КВАЛИФИЦИРОВАННЫХ УСИЛИЙ. STEAM, КОНТЕНТ И УСЛУГИ, ПОДПИСКИ
              И ЛЮБАЯ ИНФОРМАЦИЯ, СТАВШАЯ ДОСТУПНОЙ ВСЛЕДСТВИЕ ИХ ИСПОЛЬЗОВАНИЯ, ПРЕДОСТАВЛЯЮТСЯ ПО ПРИНЦИПУ «КАК ЕСТЬ»
              И «СО ВСЕМИ ОШИБКАМИ», А ТАКЖЕ БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ, ПРЯМО УКАЗАННЫХ ИЛИ ПОДРАЗУМЕВАЕМЫХ, В ТОМ ЧИСЛЕ
              БЕЗ ОГРАНИЧЕНИЙ ГАРАНТИИ ТОВАРНОСТИ ИЛИ ПРИГОДНОСТИ ДЛЯ ОСУЩЕСТВЛЕНИЯ КОНКРЕТНОЙ ЦЕЛИ ИЛИ ОТСУТСТВИЯ
              ПРАВОВЫХ ПРЕПЯТСТВИЙ. VALVE ОСВОБОЖДАЕТСЯ ОТ ЛЮБЫХ ГАРАНТИЙ В ОТНОШЕНИИ НАРУШЕНИЙ, УКАЗАННЫХ В ПУНКТЕ
              2-312 ЕДИНОГО КОММЕРЧЕСКОГО КОДЕКСА США, И/ИЛИ ЛЮБОМ ДРУГОМ ПРИМЕНИМОМ НОРМАТИВНО-ПРАВОВОМ АКТЕ. КРОМЕ
              ТОГО, VALVE ОТКАЗЫВАЕТСЯ ОТ ЛЮБЫХ ГАРАНТИЙ В ОТНОШЕНИИ НАЗВАНИЯ, ПРОТИВОРЕЧИЯ ВАШИМ ПРАВАМ ПО
              ИСПОЛЬЗОВАНИЮ, А ТАКЖЕ ОТ ГАРАНТИЙ ПОЛНОМОЧИЙ В ОТНОШЕНИИ STEAM, КОНТЕНТА И УСЛУГ, ПОДПИСОК ИЛИ
              ИНФОРМАЦИИ, СТАВШЕЙ ДОСТУПНОЙ ВСЛЕДСТВИЕ ИХ ИСПОЛЬЗОВАНИЯ.</p>
            <p>VALVE ОСВОБОЖДАЕТСЯ ОТ ЛЮБЫХ ГАРАНТИЙ В ОТНОШЕНИИ НАРУШЕНИЙ, УКАЗАННЫХ В ПУНКТЕ 2-312 ЕДИНОГО
              КОММЕРЧЕСКОГО КОДЕКСА США.</p>
            <p>B. ОГРАНИЧЕНИЕ ОТВЕТСТВЕННОСТИ</p>
            <p>В МАКСИМАЛЬНО ДОПУСТИМОЙ СООТВЕТСТВУЮЩИМ ЗАКОНОМ СТЕПЕНИ НИ VALVE, НИ ЕЕ ЛИЦЕНЗИАРЫ, НИ ИХ АФФИЛИРОВАННЫЕ
              ЛИЦА, НИ ПОСТАВЩИКИ УСЛУГ НЕ НЕСУТ ОТВЕТСТВЕННОСТИ ЗА УБЫТКИ, СТАВШИЕ СЛЕДСТВИЕМ ИСПОЛЬЗОВАНИЯ ИЛИ
              НЕВОЗМОЖНОСТИ ИСПОЛЬЗОВАНИЯ СЛУЖБЫ STEAM, ВАШЕГО АККАУНТА, ВАШИХ ПОДПИСОК И КОНТЕНТА И УСЛУГ, В ТОМ ЧИСЛЕ
              ПОТЕРЮ НЕМАТЕРИАЛЬНЫХ АКТИВОВ, ОСТАНОВКУ РАБОЧЕГО ПРОЦЕССА, ВЫХОД ИЗ СТРОЯ ИЛИ НЕИСПРАВНОЕ
              ФУНКЦИОНИРОВАНИЕ КОМПЬЮТЕРОВ, А ТАКЖЕ ЛЮБЫЕ ДРУГИЕ КОММЕРЧЕСКИЕ УБЫТКИ. НИ К КАКОМ СЛУЧАЕ VALVE НЕ НЕСЕТ
              ОТВЕТСТВЕННОСТИ ЗА ПРЯМЫЕ, КОСВЕННЫЕ, ВТОРОСТЕПЕННЫЕ, ОСОБЕННЫЕ, ШТРАФНЫЕ И ИНЫЕ УБЫТКИ, СТАВШИЕ
              СЛЕДСТВИЕМ ПОЛЬЗОВАНИЯ СЛУЖБОЙ STEAM, ИСПОЛЬЗОВАНИЯ КОНТЕНТА И УСЛУГ, ПОДПИСОК И ЛЮБОЙ ИНФОРМАЦИИ, СТАВШЕЙ
              ДОСТУПНОЙ В РЕЗУЛЬТАТЕ ПОЛЬЗОВАНИЯ УСЛУГАМИ СЛУЖБЫ STEAM, А ТАКЖЕ ЗА ЗАДЕРЖКУ ИСПОЛЬЗОВАНИЯ ИЛИ
              НЕВОЗМОЖНОСТЬ ИСПОЛЬЗОВАНИЯ КОНТЕНТА И УСЛУГ, ПОДПИСОК ИЛИ ЛЮБОЙ ИНФОРМАЦИИ ДАЖЕ В ТОМ СЛУЧАЕ, ЕСЛИ ЭТО
              СТАЛО СЛЕДСТВИЕМ ВИНОВНОГО ДЕЯНИЯ, ДЕЛИКТА (В ТОМ ЧИСЛЕ ГРУБОЙ НЕОСТОРОЖНОСТИ), ДЕЯНИЙ, ВЛЕКУЩИХ ПРЯМУЮ
              ОТВЕТСТВЕННОСТЬ, НАРУШЕНИЙ ПОЛОЖЕНИЙ СОГЛАШЕНИЯ ИЛИ ГАРАНТИЙНЫХ ОБЯЗАТЕЛЬСТВ КОМПАНИИ VALVE ИЛИ ЕЕ
              АФФИЛИРОВАННЫХ ЛИЦ. ДАННЫЕ ОГРАНИЧЕНИЯ И ИСКЛЮЧЕНИЯ ОТВЕТСТВЕННОСТИ ОСТАЮТСЯ В СИЛЕ ДАЖЕ В ТОМ СЛУЧАЕ,
              КОГДА ИНЫЕ СРЕДСТВА ПРАВОВОЙ ЗАЩИТЫ НЕ ДЕЙСТВУЮТ.</p>
            <p>ПОСКОЛЬКУ НЕКОТОРЫЕ СТРАНЫ ИЛИ ЮРИСДИКЦИИ НЕ ДОПУСКАЮТ ИСКЛЮЧЕНИЙ ИЛИ ОГРАНИЧЕНИЙ ОТВЕТСТВЕННОСТИ ЗА
              КОСВЕННЫЙ ИЛИ СЛУЧАЙНЫЙ УЩЕРБ, В ТАКИХ СТРАНАХ ИЛИ ЮРИСДИКЦИЯХ ОТВЕТСТВЕННОСТЬ VALVE, ЕЕ ЛИЦЕНЗИАРОВ ИЛИ
              ЕЕ АФФИЛИРОВАННЫХ ЛИЦ ОГРАНИЧИВАЕТСЯ В МАКСИМАЛЬНОЙ МЕРЕ, ДОПУСТИМОЙ В СООТВЕТСТВИИ С
              ЗАКОНОДАТЕЛЬСТВОМ.</p>
            <p>C. ОТСУТСТВИЕ ГАРАНТИЙ</p>
            <p>В МАКСИМАЛЬНО ДОПУСТИМОЙ СООТВЕТСТВУЮЩИМ ЗАКОНОМ СТЕПЕНИ НИ VALVE, НИ ЕЕ АФФИЛИРОВАННЫЕ КОМПАНИИ НЕ
              ГАРАНТИРУЮТ БЕСПЕРЕБОЙНУЮ, БЕЗОШИБОЧНУЮ, СВОБОДНУЮ ОТ ВИРУСОВ И БЕЗОПАСНУЮ РАБОТУ КОНТЕНТА И УСЛУГ, А
              ТАКЖЕ БЕСПЕРЕБОЙНЫЙ, БЕЗОШИБОЧНЫЙ, СВОБОДНЫЙ ОТ ВИРУСОВ И БЕЗОПАСНЫЙ ДОСТУП К STEAM, ВАШЕМУ АККАУНТУ И/ИЛИ
              ПОДПИСКАМ ИЛИ ЛЮБОЙ ИНФОРМАЦИИ, ДОСТУПНОЙ В СВЯЗИ С ИСПОЛЬЗОВАНИЕМ STEAM.</p>
            <p>D. ОГРАНИЧЕННАЯ ГАРАНТИЯ И СОГЛАШЕНИЕ</p>
            <p>ДЛЯ НЕКОТОРЫХ УСТРОЙСТВ, ПРИОБРЕТЕННЫХ У VALVE, ПРЕДОСТАВЛЯЮТСЯ ОГРАНИЧЕННАЯ ГАРАНТИЯ И СОГЛАШЕНИЕ [ИЛИ,
              В ЗАВИСИМОСТИ ОТ МЕСТА ВАШЕГО ПРОЖИВАНИЯ, ГАРАНТИЯ, ПРЕДУСМОТРЕННАЯ МЕСТНЫМ ЗАКОНОДАТЕЛЬСТВОМ], КОТОРЫЕ
              ПОДРОБНО ОПИСАНЫ <a
                href="https://support.steampowered.com/kb_article.php?ref=4577-TUJV-6223">ЗДЕСЬ</a>.
            </p>

            <i id="8"/>
            <p>8. ВНЕСЕНИЕ ИЗМЕНЕНИЙ В СОГЛАШЕНИЕ</p>
            <p>ОБРАТИТЕ ВНИМАНИЕ. Если Вы являетесь клиентом, постоянно проживающим в Германии, к Вам применим другой
              вариант Пункта 8, который доступен <a
                href="http://store.steampowered.com/subscriber_agreement_de/">здесь</a>.
            </p>
            <p>A. Внесение изменений в двустороннем порядке</p>
            <p>Данное Соглашение может быть в любое время изменено в двустороннем порядке при Вашем явном согласии с
              изменениями, предложенными Valve.</p>
            <p>B. Внесение изменений в одностороннем порядке</p>
            <p>Кроме того, Valve оставляет за собой право в одностороннем порядке вносить изменения в настоящее
              Соглашение (в том числе в любые Условия подписок или Правила использования) в любое время и по своему
              усмотрению. В этом случае Вы получите по электронной почте уведомление о любых изменениях, внесенных в
              настоящее Соглашение компанией Valve, не менее чем за 30 (тридцать) дней до вступления изменений в силу. С
              текстом Соглашения можно ознакомиться в любое время по адресу <a target="_new"
                                                                               href="http://www.steampowered.com/">http://www.steampowered.com/</a>.
              Если Вы не ликвидируете свой Аккаунт до вступления изменений в силу, это будет означать, что Вы принимаете
              внесенные в Соглашение изменения. Если Вы не согласны с изменениями, единственным способом защиты своего
              права для Вас является ликвидация Аккаунта или отказ от Подписки. Valve не берет на себя обязательств по
              возмещению оплаты за Ваш Аккаунт, начисленной до его ликвидации или до прекращения Вами использования
              любой Подписки, а также Valve не обязуется произвести перерасчет уплаченной абонентской платы в подобных
              обстоятельствах.</p>

            <i id="9"/>
            <p>9. СРОК ДЕЙСТВИЯ СОГЛАШЕНИЯ И УСЛОВИЯ РАСТОРЖЕНИЯ</p>
            <p>А. Сроки</p>
            <p>Соглашение вступает в силу с момента нажатия Вами кнопки «Я согласен» («I agree») и продолжается до тех
              пор, пока не будет расторгнуто в соответствии с условиями настоящего Соглашения.</p>
            <p>B. Расторжение по Вашей инициативе</p>
            <p>Вы можете ликвидировать свой Аккаунт в любое время. Вы можете в любое время прекратить использование
              Подписки или, при желании, Вы можете попросить Valve закрыть Вам доступ к Подписке. Однако Подписки нельзя
              передавать, и даже если Ваш доступ к Подписке на определенную игру или приложение закрыт, исходный ключ
              активации невозможно зарегистрировать на другом Аккаунте, даже если Подписка была приобретена в розничном
              магазине. Доступ к Подпискам, приобретенным в составе пакета, не может быть прекращен по отдельности;
              прекращение доступа к одной игре из пакета приведет к прекращению доступа ко всем играм, приобретенным в
              составе пакета. В случае если Ваш Аккаунт или Подписка ликвидирована по Вашей инициативе, Вы не вправе
              рассчитывать на какое бы то ни было возмещение, включая возврат абонентской платы. Valve оставляет за
              собой право потребовать выплатить абонентскую плату, пени и прочие взносы, начисленные до момента удаления
              Аккаунта или прекращения Подписки. Кроме того, Вы обязаны выплатить причитающиеся суммы сторонним
              производителям и поставщикам контента, прежде чем ликвидировать Аккаунт.</p>
            <p>C. Расторжение по инициативе Valve</p>
            <p>Valve может ликвидировать Ваш Аккаунт или любую Подписку в любое время, если (a) компания Valve прекратит
              предоставление таких Подписок аналогичным подписчикам в общем порядке или (b) Вы нарушите любое из условий
              настоящего Соглашения (в том числе Условия подписок или Правила использования). В случае если Ваш Аккаунт
              или Подписка ликвидирована по инициативе Valve по причине нарушения вами положений Соглашения или
              незаконной деятельности, Вы не вправе рассчитывать на какое бы то ни было возмещение, включая возврат
              абонентской платы или неиспользованных средств из Вашего Кошелька Steam.</p>
            <p>D. Сохранение в силе</p>
            <p>Пункты 2.C., 2.D., 2.F., 2.G., 3.A., 3.B., 3.D., 3.H. и 5–12 остаются в силе после окончания срока
              действия Соглашения или его расторжения.</p>

            <i id="10"/>
            <p>10. ПРИМЕНИМОЕ ПРАВО/ПОСРЕДНИЧЕСТВО/ЮРИСДИКЦИЯ/РАСХОДЫ НА ЮРИСТА</p>
            <p>Для клиентов за пределами Европейского союза:</p>
            <p>Настоящим Вы и компания Valve соглашаетесь с тем, что данное Соглашение составлено и заключено в штате
              Вашингтон, США, и претензии, за исключением коллизионного права и Конвенции по договорам о международной
              продаже товаров, будут разрешаться в соответствии с законодательством штата Вашингтон. Это
              распространяется на все претензии, возникающие в связи со следующими пунктами или связанные с ними: (i)
              любые аспекты нашего взаимодействия; (ii) настоящее Соглашение; (iii) Ваше использование службы Steam,
              Вашего Аккаунта или Контента и Услуг. Исключением являются ситуации, на которые распространяется
              Федеральный закон США об арбитраже, если это не противоречит законодательству страны Вашего проживания. В
              соответствии с Пунктом 11 (Разрешение споров/обязательный арбитраж/отказ от коллективного иска),
              приведенным ниже, Вы и компания Valve соглашаетесь с тем, что все иски будут рассматриваться федеральными
              судом или судом штата, находящимся на территории графства Кинг, штат Вашингтон, и что такие суды будут
              иметь исключительную юрисдикцию. Настоящим Вы и компания Valve соглашаетесь на исключительную юрисдикцию
              таких судов. По окончании любых судебных разбирательств, возникающих в связи с настоящим Соглашением,
              использованием Вами службы Steam, Вашего Аккаунта или Контента и Услуг, выигравшая сторона получает право
              на возмещение судебных издержек (за исключением арбитража&nbsp;— см. Пункт 11.C).</p>
            <p>Для клиентов из Евросоюза:</p>
            <p>При возникновении разногласий, касающихся истолкования, эффективности или действительности Соглашения
              подписчика, решение на дружественной основе будет рассматриваться до принятия каких-либо судебных мер. Вы
              можете подать жалобу на сайте <a
                href="http://help.steampowered.com">http://help.steampowered.com</a>. В
              случае отказа Вы имеете право в течение одного года с даты отклоненного запроса прибегнуть к
              Альтернативной процедуре разрешения споров, подав жалобу через Интернет на веб-сайте Онлайн-урегулирования
              споров Европейской комиссии: <a
                href="https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.chooseLanguage">https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.chooseLanguage</a>.
            </p>
            <p>В случае если решение спора не будет достигнуто вне суда, конфликт может быть представлен перед
              компетентным судом.</p>

            <i id="11"/>
            <p>11. РАЗРЕШЕНИЕ СПОРОВ, ОБЯЗАТЕЛЬНЫЙ АРБИТРАЖ И ОТКАЗ ОТ КОЛЛЕКТИВНОГО ИСКА</p>
            <p>Данный Пункт 11 обязателен к исполнению в максимально дозволенных применимым правом рамках. В ЧАСТНОСТИ,
              ЕСЛИ ВЫ ЯВЛЯЕТЕСЬ ПОДПИСЧИКОМ, ПОСТОЯННО ПРОЖИВАЮЩИМ В КВЕБЕКЕ (КАНАДА) ИЛИ ЕВРОПЕЙСКОМ СОЮЗЕ, ПУНКТ 11 НА
              ВАС НЕ РАСПРОСТРАНЯЕТСЯ.</p>
            <p>Большинство проблем пользователей можно решить с помощью нашего сайта поддержки Steam, доступного по
              адресу <a target="_new" href="https://support.steampowered.com/">https://support.steampowered.com/</a>.
              Если Valve не может решить Вашу проблему, и между Вами и Valve остаются разногласия, разрешать такие
              разногласия сторонам следует согласно процедуре, описанной в данном Пункте.</p>
            <p>A. Все претензии должны разрешаться в порядке арбитража, за исключением тех, которые связаны с
              интеллектуальной собственностью, незаконным использованием, пиратством или кражами</p>
            <p>ВЫ И КОМПАНИЯ VALVE СОГЛАСНЫ РЕШАТЬ ВСЕ СПОРЫ И ПРЕТЕНЗИИ В ПОРЯДКЕ ИНДИВИДУАЛЬНОГО АРБИТРАЖА, ИМЕЮЩЕГО
              ОБЯЗАТЕЛЬНУЮ СИЛУ ДЛЯ СТОРОН. СЮДА ОТНОСЯТСЯ, СРЕДИ ПРОЧЕГО, ЛЮБЫЕ ПРЕТЕНЗИИ, ВОЗНИКАЮЩИЕ В СВЯЗИ С ИЛИ
              СВЯЗАННЫЕ С: (i) ЛЮБЫМИ АСПЕКТАМИ НАШЕГО ВЗАИМОДЕЙСТВИЯ, (ii) НАСТОЯЩИМ СОГЛАШЕНИЕМ ИЛИ (iii) ВАШИМ
              ИСПОЛЬЗОВАНИЕМ STEAM, ВАШЕГО АККАУНТА, УСТРОЙСТВ ИЛИ КОНТЕНТА И УСЛУГ. ДАННАЯ ПРОЦЕДУРА РАЗРЕШЕНИЯ СПОРОВ
              ПРИМЕНИМА ВНЕ ЗАВИСИМОСТИ ОТ ТОГО, КАСАЮТСЯ ЛИ ДАННЫЕ СПОРЫ ДОГОВОРА, ДЕЛИКТА, ЗАКОНОДАТЕЛЬНОГО АКТА,
              МОШЕННИЧЕСТВА, НЕДОБРОСОВЕСТНОЙ КОНКУРЕНЦИИ, ВВЕДЕНИЯ В ЗАБЛУЖДЕНИЕ ИЛИ ЛЮБОЙ ДРУГОЙ ТЕОРИИ ПРАВА, А ТАКЖЕ
              ОНА РАСПРОСТРАНЯЕТСЯ НА ВСЕ ПРЕТЕНЗИИ, ПОДАННЫЕ ОТ ИМЕНИ ТРЕТЬЕЙ СТОРОНЫ.</p>
            <p>Однако Пункт 11 не применим к следующим типам претензий или споров, которые Вы и компания Valve можете
              вынести в любой суд с соответствующей юрисдикцией: (i) претензии в связи с нарушением или другим
              неправильным использованием прав интеллектуальной собственности, в том числе претензии, требующие
              судебного запрета; (ii) претензии, связанные с или возникающие в связи с любым предполагаемым незаконным
              использованием, пиратством или кражей.</p>
            <p>Пункт 11 не запрещает Вам вынести Ваш спор на рассмотрение любого государственного учреждения,
              федерального или местного, которое в соответствии с законодательством может осуществлять в отношении Вас
              судебную защиту.</p>
            <p>Арбитраж — это рассмотрение дела незаинтересованным арбитром вместо судьи или присяжных. Арбитраж
              является менее формальным, чем рассмотрение дела в суде, и обеспечивает не такую широкую огласку. Он
              следует другим процедурам, нежели суд, и подлежит весьма ограниченному пересмотру со стороны судов. Арбитр
              выносит письменное решение и по требованию сторон предоставляет обоснование. ВЫ И КОМПАНИЯ VALVE
              ПРИЗНАЕТЕ, ЧТО ВЫ ОТКАЗЫВАЕТЕСЬ ОТ ПРАВА РАССМАТРИВАТЬ ВАШ СПОР В СУДЕ ПЕРЕД СУДЬЕЙ ИЛИ ПРИСЯЖНЫМИ.</p>
            <p>B. Сначала попробуйте разрешить спор неофициально</p>
            <p>Вы и компания Valve согласны приложить разумные, добросовестные усилия, чтобы разрешить любой спор
              неофициально до передачи дела на рассмотрение в арбитраж. Сторона, которая намерена передать дело на
              рассмотрение в арбитраж, должна сначала выслать другой стороне письменное уведомление, описывающее суть и
              основу претензии или спора, и также искомое решение. Если Вы и компания Valve не можете достичь
              соглашения, чтобы разрешить претензию или спор в течение 30 дней после получения уведомления, Вы и
              компания Valve можете передавать дело в арбитраж. Письменное уведомление компании Valve необходимо
              высылать по адресу: ATTN: Arbitration Notice, Valve Corporation, P.O. Box 1688, Bellevue, WA 98004.</p>
            <p>C. Правила проведения арбитража и комиссионные сборы</p>
            <p>Федеральный закон США об арбитраже применяется к Пункту 11, если это не противоречит законодательству
              страны Вашего проживания. Арбитраж будет проводиться в соответствии с Правилами проведения потребительских
              арбитражей (или в соответствии с Правилами проведения коммерческих арбитражей, если неприменимы Правила
              проведения потребительских арбитражей) Американской арбитражной ассоциации (далее&nbsp;— «AAA»), как
              установлено настоящим Соглашением. Правила доступны по адресу: <a target="_new"
                                                                                href="http://www.adr.org">http://www.adr.org</a>.
              Арбитр обязан учитывать условия настоящего Соглашения.</p>
            <p>Ассоциация AAA будет осуществлять руководство ходом арбитража. За пределами США Valve выберет нейтральную
              организацию, предоставляющую арбитражные услуги и использующую эти или аналогичные правила. Арбитраж может
              проводиться путем предоставления документов, по телефону или при личном присутствии в стране Вашего
              проживания или в другом согласованном обеими сторонами месте.</p>
            <p>Если требование по Вашему иску составляет 10&nbsp;000&nbsp;долларов США или меньше, то компания Valve
              соглашается возместить Вашу плату за подачу иска и Вашу долю расходов на арбитраж AAA, включая Вашу часть
              компенсации арбитру, если только арбитр не установит, что Ваши претензии необоснованны или являются
              оскорбительными. Компания Valve согласна не взыскивать свои расходы на юриста или другие судебные
              издержки, если только арбитр не установит, что Ваши претензии необоснованны или являются оскорбительными.
              Если требование по Вашему иску составляет более 10&nbsp;000&nbsp;долларов США и Правила проведения
              потребительских арбитражей ААА не применяются, то затраты на арбитраж ААА, включая компенсацию арбитру,
              будут поделены между Вами и компанией Valve в соответствии с Правилами проведения коммерческих арбитражей
              AAA.</p>
            <p>D. Только обязательный индивидуальный арбитраж</p>
            <p>ВЫ И КОМПАНИЯ VALVE СОГЛАСНЫ НЕ ВЫДВИГАТЬ И НЕ УЧАСТВОВАТЬ В КОЛЛЕКТИВНЫХ ИЛИ ПРЕДСТАВИТЕЛЬСКИХ ИСКАХ,
              ОБЩИХ ИСКАХ, ВЫДВИГАЕМЫХ ЧАСТНЫМИ ПОВЕРЕННЫМИ, ИСКАХ, СВЯЗАННЫХ С ИНФОРМАТОРСКОЙ ДЕЯТЕЛЬНОСТЬЮ, ИЛИ В
              КОЛЛЕКТИВНЫХ ЛИБО ПРЕДСТАВИТЕЛЬСКИХ АРБИТРАЖАХ, ДАЖЕ В ТОМ СЛУЧАЕ, ЕСЛИ ПРОЦЕДУРЫ ИЛИ ПРАВИЛА AAA
              ДОПУСКАЮТ ЭТО. АРБИТР МОЖЕТ ВЫНЕСТИ РЕШЕНИЕ ТОЛЬКО В ПОЛЬЗУ ЧАСТНОЙ СТОРОНЫ И ТОЛЬКО В ПРЕДЕЛАХ
              ИНДИВИДУАЛЬНОГО ИСКА ЭТОЙ СТОРОНЫ. Вы и компания Valve также согласны не совмещать никакие иски или
              арбитражи с любыми другими исками и арбитражами без согласия всех сторон настоящего Соглашения, а также
              участников всех остальных исков или арбитражей.</p>
            <p>Настоящее Соглашение запрещает проведение коллективных или представительских арбитражей. Суд имеет
              исключительное право принимать решения относительно любых заявлений.</p>
            <p>E. Что произойдет, если положение Пункта 11 будет признано незаконным или неосуществимым</p>
            <p>Если какое-либо положение Пункта 11 (Разрешение споров/обязательный арбитраж/отказ от коллективного иска)
              будет признано незаконным или неосуществимым, остальные положения останутся действующими (при условии, что
              арбитражное решение принято до начала любого судебного разбирательства), за исключением случаев, когда
              признание положения незаконным или неосуществимым разрешит проведение коллективного или представительского
              арбитража. В такой ситуации Пункт 11 будет полностью признан неосуществимым, и претензия или спор будут
              разрешаться в суде.</p>

            <i id="12"/>
            <p>12. РАЗНОЕ</p>
            <p>Если иное не оговаривается в данном Соглашении в прямой форме, в случае если какое-либо положение
              настоящего Соглашения будет признано арбитром или в судебном порядке незаконным или неосуществимым, оно
              должно исполняться в максимально допустимой мере, а остальные положения настоящего Соглашения должны
              оставаться действующими в полную силу. Пункт 11.E. регулирует такие случаи, когда некоторые положения
              Пункта 11 (Разрешение споров/обязательный арбитраж/отказ от коллективного иска) признаются незаконными или
              неосуществимыми. Настоящее Соглашение, в том числе любые Условия подписок, Правила использования, Политика
              конфиденциальности Valve и Политика ограниченной гарантии Valve на устройства, составляет полное
              Соглашение между сторонами по вопросам, рассмотренным в данном Соглашении, и отменяет все ранее
              достигнутые устные и письменные договоренности. Вы соглашаетесь с тем, что настоящее Соглашение, права по
              нему и гарантированные им средства правовой защиты распространяются только на стороны — участницы
              Соглашения.</p>
            <p>Обязательства Valve регулируются применимым действующим законодательством, и Valve обязана действовать в
              соответствии с предписаниями органов власти, судебных органов и иными властными предписаниями, даже если
              это противоречит положениям соглашения.</p>
            <p>Настоящим Вы соглашаетесь действовать в соответствии с применимыми нормами законодательства об
              импорте/экспорте. Вы обязуетесь не экспортировать Контент и Услуги, а также Устройства и не позволять
              использовать Ваш Аккаунт лицам, проживающим на территории государств, поддерживающих террористические
              организации, в соответствии с запретами, установленными Бюро регулирования экспорта США. Настоящим Вы
              заявляете и гарантируете, что не проживаете на территории и не являетесь гражданином такого
              государства.</p>
            <p>Настоящее Соглашение в последний раз изменено 30&nbsp;апреля 2019&nbsp;года (далее&nbsp;— «Дата
              пересмотра»). Если Вы были Подписчиком до Даты пересмотра, настоящая версия заменяет существующее
              Соглашение с Valve или Valve SARL в день вступления в силу в соответствии с Пунктом 8 выше.</p>
          </div>
          <Checkbox className={'create-form__checkbox'} name={'create-form__agree'} text={'I agree to this rule'}/>
        </article>
        <Submit className={'create-form__submit'} children={'Create'}/>
      </form>
    </section>
  )
};

export default CreateForm;