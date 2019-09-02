import React from 'react';
import './CreateForm.style.scss';
import Email from "../input/email/Email.component";
import Password from "../input/password/Password.component";
import Checkbox from "../input/checkbox/Checkbox.component";
import Submit from "../input/submit/Submit.component";

export interface CreateFormProps {

}

const CreateForm: React.FC<CreateFormProps> = () => {

  return (
    <section className="create">
      <form action="" className="create__form">
        <article className="email">
          <p className="email__title">Write e-mail</p>
          <Email className={"email__input"} name={'email__main'}/>
          <p className="email__title">Repeat e-mail</p>
          <Email className={"email__input"} name={'email__repeat'}/>
        </article>
        <article className="country">
          <p className="country__title">Select your country</p>
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
        <article className="password">

          <p className="password__title">Password:</p>
          <Password name={'password'} className={'password__input'}/>
          <p className="password__title">Password repeat:</p>
          <Password name={'password__repeat'} className={'password__input'}/>
          <p className="password__rules">
            In password need 2 big letter, 2 number, 3 small letter. Min size 8 - max 20
          </p>
        </article>
        <article className="user-politic">
          <p className="user-politic__title">List of agree rules</p>
          <div className="user-politic__rules">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, distinctio, veritatis. Accusamus ad
            assumenda aut autem blanditiis commodi consequuntur cum cumque cupiditate doloremque earum eius expedita
            explicabo fugit harum id incidunt ipsa iusto laborum laudantium magnam molestiae natus nisi officiis omnis
            possimus recusandae reiciendis repellendus reprehenderit repudiandae sunt tenetur vel veritatis vero
            voluptatem voluptates, voluptatibus! Ab animi assumenda dolore eum facilis, iusto libero maxime modi nam
            nesciunt non quo rem sit sunt veniam veritatis vitae voluptatum. Ad, architecto cumque cupiditate dolore
            dolorem esse harum in molestias natus neque numquam officia, optio praesentium quos temporibus totam ut
            veniam
            voluptas voluptate voluptates.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam cum distinctio dolore dolorum eius
            enim eveniet, id iste iure, libero, minus nam necessitatibus nesciunt nihil nulla perspiciatis possimus
            quibusdam quo sapiente tempora unde voluptas! Aliquam aspernatur assumenda aut blanditiis commodi
            consequuntur
            corporis cumque cupiditate delectus deserunt dolorem esse eum illo mollitia necessitatibus neque nihil nisi,
            nostrum nulla odio odit optio pariatur perspiciatis porro possimus praesentium quas quidem quos recusandae
            reiciendis repellendus temporibus vero voluptatum? Ad alias asperiores delectus dignissimos dolor ea eos
            exercitationem maiores nostrum perspiciatis quis, quisquam, quo quos reprehenderit voluptas. Alias facere
            praesentium repellat. Labore minima mollitia sint vitae. Beatae culpa delectus dicta dignissimos error
            facilis
            ipsam minima molestias quos tenetur! Cupiditate, dolor esse et ex non omnis provident quae quaerat qui
            reiciendis repellendus suscipit, tempore voluptates? Blanditiis labore magnam, nesciunt nihil odit
            perferendis
            tempore ullam voluptates voluptatibus! Accusamus aliquid amet autem culpa earum eveniet ex harum hic illo
            incidunt labore maiores minus non nostrum, obcaecati pariatur placeat porro quia quo recusandae sed, sint
            tempore voluptatem! Aperiam corporis dolore iste labore magni maxime nostrum perspiciatis provident
            voluptatibus? Alias cupiditate in nesciunt quis voluptates. Fugit illum, incidunt ipsum itaque labore libero
            quam quisquam! Autem beatae deserunt, dignissimos ea itaque nemo possimus. Dolorem eos exercitationem minus
            placeat porro quos rerum! Accusamus accusantium adipisci animi aperiam consectetur corporis cupiditate
            deserunt dicta dolor doloremque, ea eaque eligendi eos excepturi exercitationem expedita fugit id in, itaque
            laboriosam laborum nobis non odio officiis optio pariatur qui quisquam ratione reprehenderit rerum
            temporibus
            tenetur totam ut voluptas voluptate voluptates voluptatum! Ab aspernatur cum, earum, eveniet, expedita
            facilis
            fugiat ipsam ipsum maiores perspiciatis quasi soluta vero. At beatae dolores doloribus esse et id labore
            necessitatibus numquam quia. Ab ad aperiam asperiores aut beatae culpa dicta expedita incidunt nobis quaerat
            quasi quibusdam sequi, similique sint soluta tempore voluptate. Aperiam autem doloremque mollitia, obcaecati
            perspiciatis sequi. Accusamus eaque hic magni non odit reiciendis, similique. A ad beatae consequatur
            consequuntur cupiditate debitis eaque eius et ipsa iure nesciunt nobis odit perspiciatis quaerat quasi, qui
            quisquam repellendus reprehenderit saepe similique totam, vero vitae voluptates! Beatae debitis fuga illo
            modi
            molestias mollitia numquam porro, quod totam! Accusamus ad architecto at aut beatae cumque cupiditate
            distinctio dolor doloremque eaque est eum facilis fugit, inventore ipsa itaque labore, maxime minima
            molestiae
            molestias nihil odio porro possimus provident quas quia quod quos reprehenderit repudiandae sint soluta
            tempora, tempore ullam unde voluptates voluptatibus voluptatum. Alias aliquid aspernatur atque aut
            consequuntur distinctio dolores, dolorum enim error esse est in ipsa iusto labore laudantium maxime modi
            natus, nemo neque nobis obcaecati odit optio perferendis placeat quae qui quisquam reiciendis rem saepe
            sequi
            totam vero voluptate voluptatibus? Adipisci amet animi aspernatur at consequatur corporis culpa doloremque
            doloribus ducimus eveniet facere fuga illo illum, in ipsam magni minima minus molestiae natus, nemo nulla
            pariatur placeat quae quam quisquam quod rerum sapiente similique ullam voluptatum. Adipisci beatae
            consequuntur, dignissimos, dolore illo in inventore iste molestias neque nihil officiis, quidem quis ullam!
            A,
            ab aspernatur dolorum enim libero minima perspiciatis sapiente! Aperiam corporis doloremque ducimus eveniet
            in
            maxime mollitia, quod ut vel? Adipisci dolores maxime nemo, quos ratione suscipit temporibus. Accusantium
            aliquid at, dignissimos ea earum ex fugiat, illum in, iste iure laborum laudantium libero nobis quaerat
            rerum
            sequi tempore. Adipisci amet at atque beatae blanditiis commodi delectus deserunt dolor dolore dolores
            doloribus ea eaque ex exercitationem fugiat illo impedit, in iure laborum laudantium maiores minima nam odit
            placeat, porro praesentium quae quas qui quia, quos repellat sint totam velit. A corporis debitis esse
            itaque
            natus, non perferendis. Ad consectetur fugiat provident? Accusamus adipisci animi, blanditiis cumque debitis
            delectus eveniet illo inventore iure modi nemo quam qui quidem, recusandae ullam. Ab architecto beatae
            cupiditate, eligendi error facilis illo impedit non quae quasi qui sequi temporibus totam. Aspernatur,
            dolore
            dolorem harum inventore laboriosam magni necessitatibus officia quia reiciendis sed sint ullam veritatis
            voluptatibus. Alias at atque consequuntur dignissimos fugit hic labore nobis obcaecati quos repellat
            voluptate, voluptatum. Ab accusantium dicta expedita libero sint soluta ullam! Animi culpa cupiditate
            doloremque facere illum inventore ipsa iusto, magnam maiores nobis provident quae quia quis, ratione
            recusandae, repudiandae sapiente voluptatibus? Animi aut commodi consequatur consequuntur cumque debitis
            dignissimos eius eos error et fugit iste laudantium maiores modi necessitatibus, optio perferendis quam qui,
            quibusdam repellat repellendus sed, sunt totam ut veritatis vitae voluptatibus. Accusamus aliquam, aut
            consectetur corporis eos, et expedita facere harum incidunt ipsum, iure non nostrum obcaecati pariatur
            placeat
            quibusdam reiciendis sed tempora tempore ut. A amet aut blanditiis commodi cumque deserunt est et ex
            excepturi, expedita explicabo illo ipsa iste laboriosam nihil quo quod quos repellat suscipit totam veniam
            vero vitae voluptatibus? Adipisci, architecto autem culpa dolor doloribus dolorum earum enim esse eveniet
            fuga
            in inventore ipsam iste maiores modi natus neque nisi non nulla perferendis perspiciatis porro praesentium
            quas quos ratione rem repellendus saepe, sed voluptate, voluptates? Architecto aut beatae corporis
            dignissimos
            dolore eius enim est eum, fugiat id ipsum laboriosam officia praesentium quam ratione ut voluptatum. Ad fuga
            inventore itaque iure minus quae quisquam quod! Atque cumque fugiat laborum non numquam quisquam reiciendis
            sapiente. Architecto labore non officia reprehenderit tempora! Assumenda, deleniti doloremque iusto nemo
            officia quod? Ab adipisci delectus dignissimos itaque placeat. Adipisci aut debitis delectus expedita
            incidunt, ipsum maxime natus quos tenetur ullam vel voluptas. Aut beatae commodi consequatur corporis culpa
            doloribus eos error et expedita facere fuga fugiat, harum molestiae neque nisi optio perferendis
            praesentium,
            provident quia reprehenderit ullam vel veritatis? Aliquam eveniet ex nemo non officia, pariatur quibusdam
            quidem similique. Asperiores blanditiis ea facilis iure magni minus officiis quasi, quidem quo quos
            similique
            temporibus voluptate. Ab beatae ducimus eos, facilis maxime non nostrum nulla quos tempora. A accusamus
            dignissimos nihil praesentium quibusdam quis vero! Ad aperiam earum eligendi eos fuga iure neque officiis
            quibusdam rem voluptatem. Asperiores at cum numquam optio quidem quos voluptas! Ab dignissimos dolor ducimus
            eum ex hic iste iure laudantium neque numquam obcaecati perspiciatis placeat, porro provident, quia quidem,
            repellat reprehenderit ullam ut vitae. Aspernatur excepturi nulla quis suscipit! Cum iste laborum rerum
            veritatis.
          </div>
          <Checkbox name={'user-politic__agree'} text={'I agree to this rule'}/>
        </article>
        <Submit className={'create__submit'} children={'Create'}/>
      </form>
    </section>
  )
};

export default CreateForm;