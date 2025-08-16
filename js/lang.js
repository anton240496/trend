 document.addEventListener('DOMContentLoaded', function() {
            const mainContainer = document.querySelector('#mainContainer');
            const countrySelect = document.querySelector('#country');
            const phoneInput = document.querySelector('#phone');
            const phoneError = document.querySelector('#phoneError');
            const nameInput = document.querySelector('#name');
            const nameError = document.querySelector('#nameError');
            const emailInput = document.querySelector('#email');
            const emailError = document.querySelector('#emailError');
            const agreementInput = document.querySelector('#agreement');
            const agreementError = document.querySelector('#agreementError');
            const agreementContainer = document.querySelector('#agreementContainer');
            const form = document.querySelector('#contactForm');
            const countryFlag = document.querySelector('#countryFlag');
            const countryName = document.querySelector('#countryName');
            const countryFormat = document.querySelector('#countryFormat');
            const phonePrefix = document.querySelector('#phonePrefix');
            const currentDefaultCountryEl = document.querySelector('#currentDefaultCountry');
            
            // Получаем код страны по умолчанию из data-атрибута
            const defaultCountryCode = mainContainer.getAttribute('data-default-country') || 'RU';
            
            // База данных всех стран мира
            // const countries = [
            //     {code: 'RU', name: 'Россия', dialCode: '+7', flag: 'flag-icon-ru', format: '+7 (###) ###-##-##', placeholder: '(999) 999-99-99', regex: /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/},
            //     {code: 'US', name: 'США', dialCode: '+1', flag: 'flag-icon-us', format: '+1 (###) ###-####', placeholder: '(999) 999-9999', regex: /^\+1\s?\(\d{3}\)\s?\d{3}-\d{4}$/},
            //     {code: 'DE', name: 'Германия', dialCode: '+49', flag: 'flag-icon-de', format: '+49 ### #### ####', placeholder: '151 12345678', regex: /^\+49[-\s]?\d{3,5}[-\s]?\d{4,8}$/},
            //     {code: 'FR', name: 'Франция', dialCode: '+33', flag: 'flag-icon-fr', format: '+33 # ## ## ## ##', placeholder: '6 12 34 56 78', regex: /^\+33\s?[1-9]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
            //     {code: 'JP', name: 'Япония', dialCode: '+81', flag: 'flag-icon-jp', format: '+81 ##-####-####', placeholder: '90-1234-5678', regex: /^\+81\s?\d{2}-\d{4}-\d{4}$/},
            //     {code: 'GB', name: 'Великобритания', dialCode: '+44', flag: 'flag-icon-gb', format: '+44 ## #### ####', placeholder: '20 7946 0958', regex: /^\+44\s?\d{2,4}\s?\d{4}\s?\d{4}$/},
            //     {code: 'CN', name: 'Китай', dialCode: '+86', flag: 'flag-icon-cn', format: '+86 ### #### ####', placeholder: '131 2345 6789', regex: /^\+86\s?\d{3}\s?\d{4}\s?\d{4}$/},
            //     {code: 'IN', name: 'Индия', dialCode: '+91', flag: 'flag-icon-in', format: '+91 ##### #####', placeholder: '98765 43210', regex: /^\+91\s?\d{5}\s?\d{5}$/},
            //     {code: 'BR', name: 'Бразилия', dialCode: '+55', flag: 'flag-icon-br', format: '+55 ## #####-####', placeholder: '11 91234-5678', regex: /^\+55\s?\d{2}\s?\d{5}-\d{4}$/},
            //     {code: 'CA', name: 'Канада', dialCode: '+1', flag: 'flag-icon-ca', format: '+1 (###) ###-####', placeholder: '(416) 555-0199', regex: /^\+1\s?\(\d{3}\)\s?\d{3}-\d{4}$/},
            //     {code: 'AU', name: 'Австралия', dialCode: '+61', flag: 'flag-icon-au', format: '+61 # #### ####', placeholder: '2 9876 5432', regex: /^\+61\s?\d\s?\d{4}\s?\d{4}$/},
            //     {code: 'ES', name: 'Испания', dialCode: '+34', flag: 'flag-icon-es', format: '+34 ### ## ## ##', placeholder: '600 12 34 56', regex: /^\+34\s?\d{3}\s?\d{2}\s?\d{2}\s?\d{2}$/},
            //     {code: 'IT', name: 'Италия', dialCode: '+39', flag: 'flag-icon-it', format: '+39 ### ### ####', placeholder: '333 1234567', regex: /^\+39\s?\d{3}\s?\d{3}\s?\d{4}$/},
            //     {code: 'MX', name: 'Мексика', dialCode: '+52', flag: 'flag-icon-mx', format: '+52 ## #### ####', placeholder: '55 1234 5678', regex: /^\+52\s?\d{2,3}\s?\d{4}\s?\d{4}$/},
            //     {code: 'ZA', name: 'ЮАР', dialCode: '+27', flag: 'flag-icon-za', format: '+27 ## ### ####', placeholder: '82 123 4567', regex: /^\+27\s?\d{2}\s?\d{3}\s?\d{4}$/},
            //     {code: 'KR', name: 'Южная Корея', dialCode: '+82', flag: 'flag-icon-kr', format: '+82 ##-####-####', placeholder: '10-1234-5678', regex: /^\+82\s?\d{2}-\d{4}-\d{4}$/},
            //     {code: 'TR', name: 'Турция', dialCode: '+90', flag: 'flag-icon-tr', format: '+90 ### ### ####', placeholder: '532 123 4567', regex: /^\+90\s?\d{3}\s?\d{3}\s?\d{4}$/},
            //     {code: 'NL', name: 'Нидерланды', dialCode: '+31', flag: 'flag-icon-nl', format: '+31 # ### ## ##', placeholder: '6 123 45 67', regex: /^\+31\s?\d\s?\d{3}\s?\d{2}\s?\d{2}$/}
            // ];
             const countries = [
                {code: 'AF', name: 'Афганистан', dialCode: '+93', flag: 'flag-icon-af', format: '+93 ## ### ####', placeholder: '70 123 4567', regex: /^\+93\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'AL', name: 'Албания', dialCode: '+355', flag: 'flag-icon-al', format: '+355 ## ### ####', placeholder: '67 123 4567', regex: /^\+355\s?\d{2,3}\s?\d{3}\s?\d{3,4}$/},
                {code: 'DZ', name: 'Алжир', dialCode: '+213', flag: 'flag-icon-dz', format: '+213 ## ### ####', placeholder: '55 123 4567', regex: /^\+213\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'AD', name: 'Андорра', dialCode: '+376', flag: 'flag-icon-ad', format: '+376 ### ###', placeholder: '123 456', regex: /^\+376\s?\d{3}\s?\d{3}$/},
                {code: 'AO', name: 'Ангола', dialCode: '+244', flag: 'flag-icon-ao', format: '+244 ### ### ###', placeholder: '123 456 789', regex: /^\+244\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'AG', name: 'Антигуа и Барбуда', dialCode: '+1268', flag: 'flag-icon-ag', format: '+1268 ### ####', placeholder: '123 4567', regex: /^\+1268\s?\d{3}\s?\d{4}$/},
                {code: 'AR', name: 'Аргентина', dialCode: '+54', flag: 'flag-icon-ar', format: '+54 ## ####-####', placeholder: '11 1234-5678', regex: /^\+54\s?\d{2,3}\s?\d{4}-\d{4}$/},
                {code: 'AM', name: 'Армения', dialCode: '+374', flag: 'flag-icon-am', format: '+374 ## ### ###', placeholder: '10 123 456', regex: /^\+374\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'AU', name: 'Австралия', dialCode: '+61', flag: 'flag-icon-au', format: '+61 # #### ####', placeholder: '2 9876 5432', regex: /^\+61\s?\d\s?\d{4}\s?\d{4}$/},
                {code: 'AT', name: 'Австрия', dialCode: '+43', flag: 'flag-icon-at', format: '+43 ### ### ####', placeholder: '664 123 4567', regex: /^\+43\s?\d{3,4}\s?\d{3}\s?\d{3,4}$/},
                {code: 'AZ', name: 'Азербайджан', dialCode: '+994', flag: 'flag-icon-az', format: '+994 ## ### ## ##', placeholder: '50 123 45 67', regex: /^\+994\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/},
                {code: 'BS', name: 'Багамы', dialCode: '+1242', flag: 'flag-icon-bs', format: '+1242 ### ####', placeholder: '123 4567', regex: /^\+1242\s?\d{3}\s?\d{4}$/},
                {code: 'BH', name: 'Бахрейн', dialCode: '+973', flag: 'flag-icon-bh', format: '+973 #### ####', placeholder: '1234 5678', regex: /^\+973\s?\d{4}\s?\d{4}$/},
                {code: 'BD', name: 'Бангладеш', dialCode: '+880', flag: 'flag-icon-bd', format: '+880 ## #### ####', placeholder: '18 1234 5678', regex: /^\+880\s?\d{2}\s?\d{4}\s?\d{4}$/},
                {code: 'BB', name: 'Барбадос', dialCode: '+1246', flag: 'flag-icon-bb', format: '+1246 ### ####', placeholder: '123 4567', regex: /^\+1246\s?\d{3}\s?\d{4}$/},
                {code: 'BY', name: 'Беларусь', dialCode: '+375', flag: 'flag-icon-by', format: '+375 ## ### ## ##', placeholder: '29 123 45 67', regex: /^\+375\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/},
                {code: 'BE', name: 'Бельгия', dialCode: '+32', flag: 'flag-icon-be', format: '+32 ### ## ## ##', placeholder: '470 12 34 56', regex: /^\+32\s?\d{3}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'BZ', name: 'Белиз', dialCode: '+501', flag: 'flag-icon-bz', format: '+501 ### ####', placeholder: '123 4567', regex: /^\+501\s?\d{3}\s?\d{4}$/},
                {code: 'BJ', name: 'Бенин', dialCode: '+229', flag: 'flag-icon-bj', format: '+229 ## ## ## ##', placeholder: '90 12 34 56', regex: /^\+229\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'BT', name: 'Бутан', dialCode: '+975', flag: 'flag-icon-bt', format: '+975 ## ### ###', placeholder: '17 123 456', regex: /^\+975\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'BO', name: 'Боливия', dialCode: '+591', flag: 'flag-icon-bo', format: '+591 # ### ####', placeholder: '7 123 4567', regex: /^\+591\s?\d\s?\d{3}\s?\d{4}$/},
                {code: 'BA', name: 'Босния и Герцеговина', dialCode: '+387', flag: 'flag-icon-ba', format: '+387 ## ### ###', placeholder: '61 123 456', regex: /^\+387\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'BW', name: 'Ботсвана', dialCode: '+267', flag: 'flag-icon-bw', format: '+267 ## ### ###', placeholder: '71 123 456', regex: /^\+267\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'BR', name: 'Бразилия', dialCode: '+55', flag: 'flag-icon-br', format: '+55 ## #####-####', placeholder: '11 91234-5678', regex: /^\+55\s?\d{2}\s?\d{5}-\d{4}$/},
                {code: 'BN', name: 'Бруней', dialCode: '+673', flag: 'flag-icon-bn', format: '+673 ### ####', placeholder: '123 4567', regex: /^\+673\s?\d{3}\s?\d{4}$/},
                {code: 'BG', name: 'Болгария', dialCode: '+359', flag: 'flag-icon-bg', format: '+359 ### ### ###', placeholder: '888 123 456', regex: /^\+359\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'BF', name: 'Буркина-Фасо', dialCode: '+226', flag: 'flag-icon-bf', format: '+226 ## ## ## ##', placeholder: '70 12 34 56', regex: /^\+226\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'BI', name: 'Бурунди', dialCode: '+257', flag: 'flag-icon-bi', format: '+257 ## ## ## ##', placeholder: '79 12 34 56', regex: /^\+257\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'CV', name: 'Кабо-Верде', dialCode: '+238', flag: 'flag-icon-cv', format: '+238 ### ####', placeholder: '123 4567', regex: /^\+238\s?\d{3}\s?\d{4}$/},
                {code: 'KH', name: 'Камбоджа', dialCode: '+855', flag: 'flag-icon-kh', format: '+855 ## ### ###', placeholder: '12 345 678', regex: /^\+855\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'CM', name: 'Камерун', dialCode: '+237', flag: 'flag-icon-cm', format: '+237 # ## ## ## ##', placeholder: '6 12 34 56 78', regex: /^\+237\s?\d\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'CA', name: 'Канада', dialCode: '+1', flag: 'flag-icon-ca', format: '+1 (###) ###-####', placeholder: '(416) 555-0199', regex: /^\+1\s?\(\d{3}\)\s?\d{3}-\d{4}$/},
                {code: 'CF', name: 'ЦАР', dialCode: '+236', flag: 'flag-icon-cf', format: '+236 ## ## ##', placeholder: '70 12 34', regex: /^\+236\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'TD', name: 'Чад', dialCode: '+235', flag: 'flag-icon-td', format: '+235 ## ## ## ##', placeholder: '63 12 34 56', regex: /^\+235\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'CL', name: 'Чили', dialCode: '+56', flag: 'flag-icon-cl', format: '+56 # #### ####', placeholder: '9 8765 4321', regex: /^\+56\s?\d\s?\d{4}\s?\d{4}$/},
                {code: 'CN', name: 'Китай', dialCode: '+86', flag: 'flag-icon-cn', format: '+86 ### #### ####', placeholder: '131 2345 6789', regex: /^\+86\s?\d{3}\s?\d{4}\s?\d{4}$/},
                {code: 'CO', name: 'Колумбия', dialCode: '+57', flag: 'flag-icon-co', format: '+57 ### ### ####', placeholder: '300 123 4567', regex: /^\+57\s?\d{3}\s?\d{3}\s?\d{4}$/},
                {code: 'KM', name: 'Коморы', dialCode: '+269', flag: 'flag-icon-km', format: '+269 ### ####', placeholder: '123 4567', regex: /^\+269\s?\d{3}\s?\d{4}$/},
                {code: 'CG', name: 'Конго', dialCode: '+242', flag: 'flag-icon-cg', format: '+242 ## ### ####', placeholder: '06 123 4567', regex: /^\+242\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'CD', name: 'ДР Конго', dialCode: '+243', flag: 'flag-icon-cd', format: '+243 ## ### ####', placeholder: '99 123 4567', regex: /^\+243\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'CR', name: 'Коста-Рика', dialCode: '+506', flag: 'flag-icon-cr', format: '+506 #### ####', placeholder: '1234 5678', regex: /^\+506\s?\d{4}\s?\d{4}$/},
                {code: 'CI', name: 'Кот-д\'Ивуар', dialCode: '+225', flag: 'flag-icon-ci', format: '+225 ## ## ## ##', placeholder: '01 23 45 67', regex: /^\+225\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'HR', name: 'Хорватия', dialCode: '+385', flag: 'flag-icon-hr', format: '+385 ## ### ####', placeholder: '91 123 4567', regex: /^\+385\s?\d{2}\s?\d{3}\s?\d{3,4}$/},
                {code: 'CU', name: 'Куба', dialCode: '+53', flag: 'flag-icon-cu', format: '+53 # ### ####', placeholder: '5 123 4567', regex: /^\+53\s?\d\s?\d{3}\s?\d{4}$/},
                {code: 'CY', name: 'Кипр', dialCode: '+357', flag: 'flag-icon-cy', format: '+357 ## ######', placeholder: '96 123456', regex: /^\+357\s?\d{2}\s?\d{6}$/},
                {code: 'CZ', name: 'Чехия', dialCode: '+420', flag: 'flag-icon-cz', format: '+420 ### ### ###', placeholder: '123 456 789', regex: /^\+420\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'DK', name: 'Дания', dialCode: '+45', flag: 'flag-icon-dk', format: '+45 ## ## ## ##', placeholder: '12 34 56 78', regex: /^\+45\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'DJ', name: 'Джибути', dialCode: '+253', flag: 'flag-icon-dj', format: '+253 ## ## ## ##', placeholder: '77 12 34 56', regex: /^\+253\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'DM', name: 'Доминика', dialCode: '+1767', flag: 'flag-icon-dm', format: '+1767 ### ####', placeholder: '123 4567', regex: /^\+1767\s?\d{3}\s?\d{4}$/},
                {code: 'DO', name: 'Доминиканская Республика', dialCode: '+1809', flag: 'flag-icon-do', format: '+1809 ### ####', placeholder: '123 4567', regex: /^\+1\s?\(?809\)?\s?\d{3}\s?\d{4}$/},
                {code: 'EC', name: 'Эквадор', dialCode: '+593', flag: 'flag-icon-ec', format: '+593 ## ### ####', placeholder: '99 123 4567', regex: /^\+593\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'EG', name: 'Египет', dialCode: '+20', flag: 'flag-icon-eg', format: '+20 ### ### ####', placeholder: '100 123 4567', regex: /^\+20\s?\d{3}\s?\d{3}\s?\d{4}$/},
                {code: 'SV', name: 'Сальвадор', dialCode: '+503', flag: 'flag-icon-sv', format: '+503 #### ####', placeholder: '1234 5678', regex: /^\+503\s?\d{4}\s?\d{4}$/},
                {code: 'GQ', name: 'Экваториальная Гвинея', dialCode: '+240', flag: 'flag-icon-gq', format: '+240 ## ### ####', placeholder: '22 123 4567', regex: /^\+240\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'ER', name: 'Эритрея', dialCode: '+291', flag: 'flag-icon-er', format: '+291 # ### ###', placeholder: '7 123 456', regex: /^\+291\s?\d\s?\d{3}\s?\d{3}$/},
                {code: 'EE', name: 'Эстония', dialCode: '+372', flag: 'flag-icon-ee', format: '+372 #### ####', placeholder: '1234 5678', regex: /^\+372\s?\d{4}\s?\d{4}$/},
                {code: 'SZ', name: 'Эсватини', dialCode: '+268', flag: 'flag-icon-sz', format: '+268 ## ## ## ##', placeholder: '76 12 34 56', regex: /^\+268\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'ET', name: 'Эфиопия', dialCode: '+251', flag: 'flag-icon-et', format: '+251 ## ### ####', placeholder: '91 123 4567', regex: /^\+251\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'FJ', name: 'Фиджи', dialCode: '+679', flag: 'flag-icon-fj', format: '+679 ## #####', placeholder: '87 12345', regex: /^\+679\s?\d{2}\s?\d{5}$/},
                {code: 'FI', name: 'Финляндия', dialCode: '+358', flag: 'flag-icon-fi', format: '+358 ## ### ## ##', placeholder: '40 123 45 67', regex: /^\+358\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/},
                {code: 'FR', name: 'Франция', dialCode: '+33', flag: 'flag-icon-fr', format: '+33 # ## ## ## ##', placeholder: '6 12 34 56 78', regex: /^\+33\s?[1-9]\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'GA', name: 'Габон', dialCode: '+241', flag: 'flag-icon-ga', format: '+241 ## ## ## ##', placeholder: '06 12 34 56', regex: /^\+241\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'GM', name: 'Гамбия', dialCode: '+220', flag: 'flag-icon-gm', format: '+220 ### ####', placeholder: '123 4567', regex: /^\+220\s?\d{3}\s?\d{4}$/},
                {code: 'GE', name: 'Грузия', dialCode: '+995', flag: 'flag-icon-ge', format: '+995 ### ### ###', placeholder: '555 123 456', regex: /^\+995\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'DE', name: 'Германия', dialCode: '+49', flag: 'flag-icon-de', format: '+49 ### ########', placeholder: '151 12345678', regex: /^\+49[-\s]?\d{3,5}[-\s]?\d{4,8}$/},
                {code: 'GH', name: 'Гана', dialCode: '+233', flag: 'flag-icon-gh', format: '+233 ## ### ####', placeholder: '24 123 4567', regex: /^\+233\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'GR', name: 'Греция', dialCode: '+30', flag: 'flag-icon-gr', format: '+30 ### ### ####', placeholder: '691 123 4567', regex: /^\+30\s?\d{3}\s?\d{3}\s?\d{4}$/},
                {code: 'GD', name: 'Гренада', dialCode: '+1473', flag: 'flag-icon-gd', format: '+1473 ### ####', placeholder: '123 4567', regex: /^\+1473\s?\d{3}\s?\d{4}$/},
                {code: 'GT', name: 'Гватемала', dialCode: '+502', flag: 'flag-icon-gt', format: '+502 #### ####', placeholder: '1234 5678', regex: /^\+502\s?\d{4}\s?\d{4}$/},
                {code: 'GN', name: 'Гвинея', dialCode: '+224', flag: 'flag-icon-gn', format: '+224 ## ### ###', placeholder: '60 123 456', regex: /^\+224\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'GW', name: 'Гвинея-Бисау', dialCode: '+245', flag: 'flag-icon-gw', format: '+245 # ######', placeholder: '5 123456', regex: /^\+245\s?\d\s?\d{6}$/},
                {code: 'GY', name: 'Гайана', dialCode: '+592', flag: 'flag-icon-gy', format: '+592 ### ####', placeholder: '123 4567', regex: /^\+592\s?\d{3}\s?\d{4}$/},
                {code: 'HT', name: 'Гаити', dialCode: '+509', flag: 'flag-icon-ht', format: '+509 ## ## ####', placeholder: '34 12 3456', regex: /^\+509\s?\d{2}\s?\d{2}\s?\d{4}$/},
                {code: 'HN', name: 'Гондурас', dialCode: '+504', flag: 'flag-icon-hn', format: '+504 #### ####', placeholder: '1234 5678', regex: /^\+504\s?\d{4}\s?\d{4}$/},
                {code: 'HU', name: 'Венгрия', dialCode: '+36', flag: 'flag-icon-hu', format: '+36 ## ### ####', placeholder: '20 123 4567', regex: /^\+36\s?\d{1,2}\s?\d{3}\s?\d{4}$/},
                {code: 'IS', name: 'Исландия', dialCode: '+354', flag: 'flag-icon-is', format: '+354 ### ####', placeholder: '123 4567', regex: /^\+354\s?\d{3}\s?\d{4}$/},
                {code: 'IN', name: 'Индия', dialCode: '+91', flag: 'flag-icon-in', format: '+91 ##### #####', placeholder: '98765 43210', regex: /^\+91\s?\d{5}\s?\d{5}$/},
                {code: 'ID', name: 'Индонезия', dialCode: '+62', flag: 'flag-icon-id', format: '+62 ### ### ###', placeholder: '812 345 678', regex: /^\+62\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'IR', name: 'Иран', dialCode: '+98', flag: 'flag-icon-ir', format: '+98 ### ### ####', placeholder: '912 345 6789', regex: /^\+98\s?\d{3}\s?\d{3}\s?\d{4}$/},
                {code: 'IQ', name: 'Ирак', dialCode: '+964', flag: 'flag-icon-iq', format: '+964 ### ### ####', placeholder: '781 234 5678', regex: /^\+964\s?\d{3}\s?\d{3}\s?\d{4}$/},
                {code: 'IE', name: 'Ирландия', dialCode: '+353', flag: 'flag-icon-ie', format: '+353 ## ### ####', placeholder: '87 123 4567', regex: /^\+353\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'IL', name: 'Израиль', dialCode: '+972', flag: 'flag-icon-il', format: '+972 ## ### ####', placeholder: '50 123 4567', regex: /^\+972\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'IT', name: 'Италия', dialCode: '+39', flag: 'flag-icon-it', format: '+39 ### ### ####', placeholder: '333 123 4567', regex: /^\+39\s?\d{3}\s?\d{3}\s?\d{4}$/},
                {code: 'JM', name: 'Ямайка', dialCode: '+1876', flag: 'flag-icon-jm', format: '+1876 ### ####', placeholder: '123 4567', regex: /^\+1876\s?\d{3}\s?\d{4}$/},
                {code: 'JP', name: 'Япония', dialCode: '+81', flag: 'flag-icon-jp', format: '+81 ##-####-####', placeholder: '90-1234-5678', regex: /^\+81\s?\d{2}-\d{4}-\d{4}$/},
                {code: 'JO', name: 'Иордания', dialCode: '+962', flag: 'flag-icon-jo', format: '+962 # #### ####', placeholder: '7 1234 5678', regex: /^\+962\s?\d\s?\d{4}\s?\d{4}$/},
                {code: 'KZ', name: 'Казахстан', dialCode: '+7', flag: 'flag-icon-kz', format: '+7 (###) ###-##-##', placeholder: '(701) 123-45-67', regex: /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/},
                {code: 'KE', name: 'Кения', dialCode: '+254', flag: 'flag-icon-ke', format: '+254 ### ### ###', placeholder: '712 345 678', regex: /^\+254\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'KI', name: 'Кирибати', dialCode: '+686', flag: 'flag-icon-ki', format: '+686 ######', placeholder: '123456', regex: /^\+686\s?\d{6}$/},
                {code: 'KP', name: 'КНДР', dialCode: '+850', flag: 'flag-icon-kp', format: '+850 ### ### ####', placeholder: '191 123 4567', regex: /^\+850\s?\d{3}\s?\d{3}\s?\d{4}$/},
                {code: 'KR', name: 'Республика Корея', dialCode: '+82', flag: 'flag-icon-kr', format: '+82 ##-####-####', placeholder: '10-1234-5678', regex: /^\+82\s?\d{2}-\d{4}-\d{4}$/},
                {code: 'KW', name: 'Кувейт', dialCode: '+965', flag: 'flag-icon-kw', format: '+965 #### ####', placeholder: '1234 5678', regex: /^\+965\s?\d{4}\s?\d{4}$/},
                {code: 'KG', name: 'Киргизия', dialCode: '+996', flag: 'flag-icon-kg', format: '+996 ### ### ###', placeholder: '700 123 456', regex: /^\+996\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'LA', name: 'Лаос', dialCode: '+856', flag: 'flag-icon-la', format: '+856 ## ## #####', placeholder: '20 12 34567', regex: /^\+856\s?\d{2}\s?\d{2}\s?\d{5}$/},
                {code: 'LV', name: 'Латвия', dialCode: '+371', flag: 'flag-icon-lv', format: '+371 #### ####', placeholder: '1234 5678', regex: /^\+371\s?\d{4}\s?\d{4}$/},
                {code: 'LB', name: 'Ливан', dialCode: '+961', flag: 'flag-icon-lb', format: '+961 ## ### ###', placeholder: '71 123 456', regex: /^\+961\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'LS', name: 'Лесото', dialCode: '+266', flag: 'flag-icon-ls', format: '+266 # ### ####', placeholder: '5 123 4567', regex: /^\+266\s?\d\s?\d{3}\s?\d{4}$/},
                {code: 'LR', name: 'Либерия', dialCode: '+231', flag: 'flag-icon-lr', format: '+231 ## ### ####', placeholder: '77 123 4567', regex: /^\+231\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'LY', name: 'Ливия', dialCode: '+218', flag: 'flag-icon-ly', format: '+218 ##-###-####', placeholder: '21-123-4567', regex: /^\+218\s?\d{2}-\d{3}-\d{4}$/},
                {code: 'LI', name: 'Лихтенштейн', dialCode: '+423', flag: 'flag-icon-li', format: '+423 ### ####', placeholder: '123 4567', regex: /^\+423\s?\d{3}\s?\d{4}$/},
                {code: 'LT', name: 'Литва', dialCode: '+370', flag: 'flag-icon-lt', format: '+370 ### #####', placeholder: '612 34567', regex: /^\+370\s?\d{3}\s?\d{5}$/},
                {code: 'LU', name: 'Люксембург', dialCode: '+352', flag: 'flag-icon-lu', format: '+352 ### ### ###', placeholder: '621 123 456', regex: /^\+352\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'MG', name: 'Мадагаскар', dialCode: '+261', flag: 'flag-icon-mg', format: '+261 ## ## #####', placeholder: '32 12 34567', regex: /^\+261\s?\d{2}\s?\d{2}\s?\d{5}$/},
                {code: 'MW', name: 'Малави', dialCode: '+265', flag: 'flag-icon-mw', format: '+265 # #### ####', placeholder: '1 1234 5678', regex: /^\+265\s?\d\s?\d{4}\s?\d{4}$/},
                {code: 'MY', name: 'Малайзия', dialCode: '+60', flag: 'flag-icon-my', format: '+60 ### ### ###', placeholder: '123 456 789', regex: /^\+60\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'MV', name: 'Мальдивы', dialCode: '+960', flag: 'flag-icon-mv', format: '+960 ### ####', placeholder: '123 4567', regex: /^\+960\s?\d{3}\s?\d{4}$/},
                {code: 'ML', name: 'Мали', dialCode: '+223', flag: 'flag-icon-ml', format: '+223 ## ## ## ##', placeholder: '76 12 34 56', regex: /^\+223\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'MT', name: 'Мальта', dialCode: '+356', flag: 'flag-icon-mt', format: '+356 #### ####', placeholder: '1234 5678', regex: /^\+356\s?\d{4}\s?\d{4}$/},
                {code: 'MH', name: 'Маршалловы Острова', dialCode: '+692', flag: 'flag-icon-mh', format: '+692 ### ####', placeholder: '123 4567', regex: /^\+692\s?\d{3}\s?\d{4}$/},
                {code: 'MR', name: 'Мавритания', dialCode: '+222', flag: 'flag-icon-mr', format: '+222 ## ## ## ##', placeholder: '36 12 34 56', regex: /^\+222\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'MU', name: 'Маврикий', dialCode: '+230', flag: 'flag-icon-mu', format: '+230 ### ####', placeholder: '123 4567', regex: /^\+230\s?\d{3}\s?\d{4}$/},
                {code: 'MX', name: 'Мексика', dialCode: '+52', flag: 'flag-icon-mx', format: '+52 ## #### ####', placeholder: '55 1234 5678', regex: /^\+52\s?\d{2,3}\s?\d{4}\s?\d{4}$/},
                {code: 'FM', name: 'Микронезия', dialCode: '+691', flag: 'flag-icon-fm', format: '+691 ### ####', placeholder: '123 4567', regex: /^\+691\s?\d{3}\s?\d{4}$/},
                {code: 'MD', name: 'Молдавия', dialCode: '+373', flag: 'flag-icon-md', format: '+373 ### #####', placeholder: '123 45678', regex: /^\+373\s?\d{3}\s?\d{5}$/},
                {code: 'MC', name: 'Монако', dialCode: '+377', flag: 'flag-icon-mc', format: '+377 ### ### ###', placeholder: '123 456 789', regex: /^\+377\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'MN', name: 'Монголия', dialCode: '+976', flag: 'flag-icon-mn', format: '+976 ## ## ####', placeholder: '11 12 3456', regex: /^\+976\s?\d{2}\s?\d{2}\s?\d{4}$/},
                {code: 'ME', name: 'Черногория', dialCode: '+382', flag: 'flag-icon-me', format: '+382 ## ### ###', placeholder: '67 123 456', regex: /^\+382\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'MA', name: 'Марокко', dialCode: '+212', flag: 'flag-icon-ma', format: '+212 ## ### ####', placeholder: '61 123 4567', regex: /^\+212\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'MZ', name: 'Мозамбик', dialCode: '+258', flag: 'flag-icon-mz', format: '+258 ## ### ####', placeholder: '82 123 4567', regex: /^\+258\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'MM', name: 'Мьянма', dialCode: '+95', flag: 'flag-icon-mm', format: '+95 # ### ####', placeholder: '9 123 4567', regex: /^\+95\s?\d\s?\d{3}\s?\d{4}$/},
                {code: 'NA', name: 'Намибия', dialCode: '+264', flag: 'flag-icon-na', format: '+264 ## ### ####', placeholder: '81 123 4567', regex: /^\+264\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'NR', name: 'Науру', dialCode: '+674', flag: 'flag-icon-nr', format: '+674 ### ####', placeholder: '123 4567', regex: /^\+674\s?\d{3}\s?\d{4}$/},
                {code: 'NP', name: 'Непал', dialCode: '+977', flag: 'flag-icon-np', format: '+977 ### #######', placeholder: '984 1234567', regex: /^\+977\s?\d{3}\s?\d{7}$/},
                {code: 'NL', name: 'Нидерланды', dialCode: '+31', flag: 'flag-icon-nl', format: '+31 # ### ## ##', placeholder: '6 123 45 67', regex: /^\+31\s?\d\s?\d{3}\s?\d{2}\s?\d{2}$/},
                {code: 'NZ', name: 'Новая Зеландия', dialCode: '+64', flag: 'flag-icon-nz', format: '+64 # ### ####', placeholder: '2 123 4567', regex: /^\+64\s?\d\s?\d{3}\s?\d{4}$/},
                {code: 'NI', name: 'Никарагуа', dialCode: '+505', flag: 'flag-icon-ni', format: '+505 #### ####', placeholder: '1234 5678', regex: /^\+505\s?\d{4}\s?\d{4}$/},
                {code: 'NE', name: 'Нигер', dialCode: '+227', flag: 'flag-icon-ne', format: '+227 ## ## ## ##', placeholder: '93 12 34 56', regex: /^\+227\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'NG', name: 'Нигерия', dialCode: '+234', flag: 'flag-icon-ng', format: '+234 ### ### ####', placeholder: '703 123 4567', regex: /^\+234\s?\d{3}\s?\d{3}\s?\d{4}$/},
                {code: 'NO', name: 'Норвегия', dialCode: '+47', flag: 'flag-icon-no', format: '+47 ### ## ###', placeholder: '412 34 567', regex: /^\+47\s?\d{3}\s?\d{2}\s?\d{3}$/},
                {code: 'OM', name: 'Оман', dialCode: '+968', flag: 'flag-icon-om', format: '+968 #### ####', placeholder: '1234 5678', regex: /^\+968\s?\d{4}\s?\d{4}$/},
                {code: 'PK', name: 'Пакистан', dialCode: '+92', flag: 'flag-icon-pk', format: '+92 ### #######', placeholder: '300 1234567', regex: /^\+92\s?\d{3}\s?\d{7}$/},
                {code: 'PW', name: 'Палау', dialCode: '+680', flag: 'flag-icon-pw', format: '+680 ### ####', placeholder: '123 4567', regex: /^\+680\s?\d{3}\s?\d{4}$/},
                {code: 'PA', name: 'Панама', dialCode: '+507', flag: 'flag-icon-pa', format: '+507 #### ####', placeholder: '1234 5678', regex: /^\+507\s?\d{4}\s?\d{4}$/},
                {code: 'PG', name: 'Папуа — Новая Гвинея', dialCode: '+675', flag: 'flag-icon-pg', format: '+675 ### #####', placeholder: '123 45678', regex: /^\+675\s?\d{3}\s?\d{5}$/},
                {code: 'PY', name: 'Парагвай', dialCode: '+595', flag: 'flag-icon-py', format: '+595 ### ### ###', placeholder: '981 123 456', regex: /^\+595\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'PE', name: 'Перу', dialCode: '+51', flag: 'flag-icon-pe', format: '+51 ### ### ###', placeholder: '123 456 789', regex: /^\+51\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'PH', name: 'Филиппины', dialCode: '+63', flag: 'flag-icon-ph', format: '+63 ### #######', placeholder: '917 1234567', regex: /^\+63\s?\d{3}\s?\d{7}$/},
                {code: 'PL', name: 'Польша', dialCode: '+48', flag: 'flag-icon-pl', format: '+48 ### ### ###', placeholder: '123 456 789', regex: /^\+48\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'PT', name: 'Португалия', dialCode: '+351', flag: 'flag-icon-pt', format: '+351 ### ### ###', placeholder: '912 345 678', regex: /^\+351\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'QA', name: 'Катар', dialCode: '+974', flag: 'flag-icon-qa', format: '+974 #### ####', placeholder: '1234 5678', regex: /^\+974\s?\d{4}\s?\d{4}$/},
                {code: 'RO', name: 'Румыния', dialCode: '+40', flag: 'flag-icon-ro', format: '+40 ## ### ####', placeholder: '71 123 4567', regex: /^\+40\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'RU', name: 'Россия', dialCode: '+7', flag: 'flag-icon-ru', format: '+7 (###) ###-##-##', placeholder: '(912) 345-67-89', regex: /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/},
                {code: 'RW', name: 'Руанда', dialCode: '+250', flag: 'flag-icon-rw', format: '+250 ### ### ###', placeholder: '72 123 456', regex: /^\+250\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'KN', name: 'Сент-Китс и Невис', dialCode: '+1869', flag: 'flag-icon-kn', format: '+1869 ### ####', placeholder: '123 4567', regex: /^\+1869\s?\d{3}\s?\d{4}$/},
                {code: 'LC', name: 'Сент-Люсия', dialCode: '+1758', flag: 'flag-icon-lc', format: '+1758 ### ####', placeholder: '123 4567', regex: /^\+1758\s?\d{3}\s?\d{4}$/},
                {code: 'VC', name: 'Сент-Винсент и Гренадины', dialCode: '+1784', flag: 'flag-icon-vc', format: '+1784 ### ####', placeholder: '123 4567', regex: /^\+1784\s?\d{3}\s?\d{4}$/},
                {code: 'WS', name: 'Самоа', dialCode: '+685', flag: 'flag-icon-ws', format: '+685 ######', placeholder: '123456', regex: /^\+685\s?\d{6}$/},
                {code: 'SM', name: 'Сан-Марино', dialCode: '+378', flag: 'flag-icon-sm', format: '+378 ### ### ###', placeholder: '123 456 789', regex: /^\+378\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'ST', name: 'Сан-Томе и Принсипи', dialCode: '+239', flag: 'flag-icon-st', format: '+239 ## #####', placeholder: '12 34567', regex: /^\+239\s?\d{2}\s?\d{5}$/},
                {code: 'SA', name: 'Саудовская Аравия', dialCode: '+966', flag: 'flag-icon-sa', format: '+966 # #### ####', placeholder: '5 0123 4567', regex: /^\+966\s?\d\s?\d{4}\s?\d{4}$/},
                {code: 'SN', name: 'Сенегал', dialCode: '+221', flag: 'flag-icon-sn', format: '+221 ## ### ####', placeholder: '77 123 4567', regex: /^\+221\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'RS', name: 'Сербия', dialCode: '+381', flag: 'flag-icon-rs', format: '+381 ## ### ####', placeholder: '63 123 4567', regex: /^\+381\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'SC', name: 'Сейшелы', dialCode: '+248', flag: 'flag-icon-sc', format: '+248 # ### ###', placeholder: '1 234 567', regex: /^\+248\s?\d\s?\d{3}\s?\d{3}$/},
                {code: 'SL', name: 'Сьерра-Леоне', dialCode: '+232', flag: 'flag-icon-sl', format: '+232 ## ######', placeholder: '25 123456', regex: /^\+232\s?\d{2}\s?\d{6}$/},
                {code: 'SG', name: 'Сингапур', dialCode: '+65', flag: 'flag-icon-sg', format: '+65 #### ####', placeholder: '6123 4567', regex: /^\+65\s?\d{4}\s?\d{4}$/},
                {code: 'SK', name: 'Словакия', dialCode: '+421', flag: 'flag-icon-sk', format: '+421 ### ### ###', placeholder: '912 345 678', regex: /^\+421\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'SI', name: 'Словения', dialCode: '+386', flag: 'flag-icon-si', format: '+386 ## ### ###', placeholder: '40 123 456', regex: /^\+386\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'SB', name: 'Соломоновы Острова', dialCode: '+677', flag: 'flag-icon-sb', format: '+677 ######', placeholder: '123456', regex: /^\+677\s?\d{6}$/},
                {code: 'SO', name: 'Сомали', dialCode: '+252', flag: 'flag-icon-so', format: '+252 ## ### ####', placeholder: '61 123 4567', regex: /^\+252\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'ZA', name: 'ЮАР', dialCode: '+27', flag: 'flag-icon-za', format: '+27 ## ### ####', placeholder: '82 123 4567', regex: /^\+27\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'SS', name: 'Южный Судан', dialCode: '+211', flag: 'flag-icon-ss', format: '+211 ## ### ####', placeholder: '97 123 4567', regex: /^\+211\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'ES', name: 'Испания', dialCode: '+34', flag: 'flag-icon-es', format: '+34 ### ## ## ##', placeholder: '600 12 34 56', regex: /^\+34\s?\d{3}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'LK', name: 'Шри-Ланка', dialCode: '+94', flag: 'flag-icon-lk', format: '+94 ## ### ####', placeholder: '71 123 4567', regex: /^\+94\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'SD', name: 'Судан', dialCode: '+249', flag: 'flag-icon-sd', format: '+249 ## ### ####', placeholder: '91 123 4567', regex: /^\+249\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'SR', name: 'Суринам', dialCode: '+597', flag: 'flag-icon-sr', format: '+597 ### ####', placeholder: '123 4567', regex: /^\+597\s?\d{3}\s?\d{4}$/},
                {code: 'SE', name: 'Швеция', dialCode: '+46', flag: 'flag-icon-se', format: '+46 ## ### ## ##', placeholder: '70 123 45 67', regex: /^\+46\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/},
                {code: 'CH', name: 'Швейцария', dialCode: '+41', flag: 'flag-icon-ch', format: '+41 ## ### ## ##', placeholder: '79 123 45 67', regex: /^\+41\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/},
                {code: 'SY', name: 'Сирия', dialCode: '+963', flag: 'flag-icon-sy', format: '+963 ### ### ###', placeholder: '944 567 890', regex: /^\+963\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'TJ', name: 'Таджикистан', dialCode: '+992', flag: 'flag-icon-tj', format: '+992 ### ## ####', placeholder: '123 45 6789', regex: /^\+992\s?\d{3}\s?\d{2}\s?\d{4}$/},
                {code: 'TZ', name: 'Танзания', dialCode: '+255', flag: 'flag-icon-tz', format: '+255 ### ### ###', placeholder: '712 345 678', regex: /^\+255\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'TH', name: 'Таиланд', dialCode: '+66', flag: 'flag-icon-th', format: '+66 # #### ####', placeholder: '8 1234 5678', regex: /^\+66\s?\d\s?\d{4}\s?\d{4}$/},
                {code: 'TL', name: 'Восточный Тимор', dialCode: '+670', flag: 'flag-icon-tl', format: '+670 ### #####', placeholder: '123 45678', regex: /^\+670\s?\d{3}\s?\d{5}$/},
                {code: 'TG', name: 'Того', dialCode: '+228', flag: 'flag-icon-tg', format: '+228 ## ## ## ##', placeholder: '90 12 34 56', regex: /^\+228\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/},
                {code: 'TO', name: 'Тонга', dialCode: '+676', flag: 'flag-icon-to', format: '+676 #####', placeholder: '12345', regex: /^\+676\s?\d{5}$/},
                {code: 'TT', name: 'Тринидад и Тобаго', dialCode: '+1868', flag: 'flag-icon-tt', format: '+1868 ### ####', placeholder: '123 4567', regex: /^\+1868\s?\d{3}\s?\d{4}$/},
                {code: 'TN', name: 'Тунис', dialCode: '+216', flag: 'flag-icon-tn', format: '+216 ## ### ###', placeholder: '20 123 456', regex: /^\+216\s?\d{2}\s?\d{3}\s?\d{3}$/},
                {code: 'TR', name: 'Турция', dialCode: '+90', flag: 'flag-icon-tr', format: '+90 ### ### ####', placeholder: '532 123 4567', regex: /^\+90\s?\d{3}\s?\d{3}\s?\d{4}$/},
                {code: 'TM', name: 'Туркменистан', dialCode: '+993', flag: 'flag-icon-tm', format: '+993 # ### ####', placeholder: '6 123 4567', regex: /^\+993\s?\d\s?\d{3}\s?\d{4}$/},
                {code: 'TV', name: 'Тувалу', dialCode: '+688', flag: 'flag-icon-tv', format: '+688 #####', placeholder: '12345', regex: /^\+688\s?\d{5}$/},
                {code: 'UG', name: 'Уганда', dialCode: '+256', flag: 'flag-icon-ug', format: '+256 ### ### ###', placeholder: '712 345 678', regex: /^\+256\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'UA', name: 'Украина', dialCode: '+380', flag: 'flag-icon-ua', format: '+380 ## ### ## ##', placeholder: '67 123 45 67', regex: /^\+380\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/},
                {code: 'AE', name: 'ОАЭ', dialCode: '+971', flag: 'flag-icon-ae', format: '+971 # ### ####', placeholder: '5 012 3456', regex: /^\+971\s?\d\s?\d{3}\s?\d{4}$/},
                {code: 'GB', name: 'Великобритания', dialCode: '+44', flag: 'flag-icon-gb', format: '+44 ## #### ####', placeholder: '20 7946 0958', regex: /^\+44\s?\d{2,4}\s?\d{4}\s?\d{4}$/},
                {code: 'US', name: 'США', dialCode: '+1', flag: 'flag-icon-us', format: '+1 (###) ###-####', placeholder: '(212) 555-0199', regex: /^\+1\s?\(\d{3}\)\s?\d{3}-\d{4}$/},
                {code: 'UY', name: 'Уругвай', dialCode: '+598', flag: 'flag-icon-uy', format: '+598 # ### ####', placeholder: '9 123 4567', regex: /^\+598\s?\d\s?\d{3}\s?\d{4}$/},
                {code: 'UZ', name: 'Узбекистан', dialCode: '+998', flag: 'flag-icon-uz', format: '+998 ## ### ####', placeholder: '71 123 4567', regex: /^\+998\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'VU', name: 'Вануату', dialCode: '+678', flag: 'flag-icon-vu', format: '+678 #####', placeholder: '12345', regex: /^\+678\s?\d{5}$/},
                {code: 'VA', name: 'Ватикан', dialCode: '+379', flag: 'flag-icon-va', format: '+379 ### ### ###', placeholder: '123 456 789', regex: /^\+379\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'VE', name: 'Венесуэла', dialCode: '+58', flag: 'flag-icon-ve', format: '+58 ###-#######', placeholder: '412-1234567', regex: /^\+58\s?\d{3}-\d{7}$/},
                {code: 'VN', name: 'Вьетнам', dialCode: '+84', flag: 'flag-icon-vn', format: '+84 # #### ####', placeholder: '9 1234 5678', regex: /^\+84\s?\d\s?\d{4}\s?\d{4}$/},
                {code: 'YE', name: 'Йемен', dialCode: '+967', flag: 'flag-icon-ye', format: '+967 ### ### ###', placeholder: '712 345 678', regex: /^\+967\s?\d{3}\s?\d{3}\s?\d{3}$/},
                {code: 'ZM', name: 'Замбия', dialCode: '+260', flag: 'flag-icon-zm', format: '+260 ## ### ####', placeholder: '96 123 4567', regex: /^\+260\s?\d{2}\s?\d{3}\s?\d{4}$/},
                {code: 'ZW', name: 'Зимбабве', dialCode: '+263', flag: 'flag-icon-zw', format: '+263 # ######', placeholder: '7 123456', regex: /^\+263\s?\d\s?\d{6}$/}
            ];
            
            // Находим страну по умолчанию
            const defaultCountry = countries.find(c => c.code === defaultCountryCode) || countries.find(c => c.code === 'RU');
            
            // Отображаем текущую страну по умолчанию
            currentDefaultCountryEl.textContent = `${defaultCountry.name} (${defaultCountry.code})`;
            
            // Заполняем выпадающий список странами
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code;
                option.textContent = `${country.name} (${country.dialCode})`;
                if (country.code === defaultCountry.code) {
                    option.selected = true;
                }
                countrySelect.appendChild(option);
            });
            
            // Находим текущую страну
            let currentCountry = defaultCountry;
            
            // Обновляем информацию о стране
            function updateCountryInfo() {
                countryFlag.className = `country-flag flag-icon ${currentCountry.flag}`;
                countryName.textContent = currentCountry.name;
                countryFormat.textContent = `Формат: ${currentCountry.format}`;
                phonePrefix.textContent = currentCountry.dialCode;
                // phoneInput.placeholder = currentCountry.placeholder;
                phoneInput.value = '';
                clearError(phoneInput, phoneError);
            }
            
            // Инициализация
            updateCountryInfo();
            
            // Обработчик изменения страны
            countrySelect.addEventListener('change', function() {
                const countryCode = countrySelect.value;
                currentCountry = countries.find(c => c.code === countryCode);
                updateCountryInfo();
            });
            
            // Маска для ввода телефона
            phoneInput.addEventListener('input', function(e) {
                // Удаляем все нецифровые символы, кроме плюса в начале
                let value = e.target.value;
                if (value.startsWith(currentCountry.dialCode)) {
                    value = currentCountry.dialCode + value.substring(currentCountry.dialCode.length).replace(/\D/g, '');
                } else {
                    value = value.replace(/\D/g, '');
                    value = currentCountry.dialCode + value;
                }
                
                // Применяем форматирование
                let formattedValue = currentCountry.dialCode;
                let digits = value.substring(currentCountry.dialCode.length);
                
                let formatIndex = currentCountry.format.indexOf('#');
                let digitIndex = 0;
                
                for (let i = currentCountry.dialCode.length; i < currentCountry.format.length; i++) {
                    if (digitIndex >= digits.length) break;
                    
                    if (currentCountry.format[i] === '#') {
                        formattedValue += digits[digitIndex];
                        digitIndex++;
                    } else {
                        formattedValue += currentCountry.format[i];
                        
                        // Если пользователь ввел разделитель, пропускаем его
                        if (digits[digitIndex] === currentCountry.format[i]) {
                            digitIndex++;
                        }
                    }
                }
                
                e.target.value = formattedValue;
            });
            
            // Функции для управления ошибками
            function showError(input, errorElement, message) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
                input.parentElement.classList.remove('valid');
                input.parentElement.classList.add('invalid');
                
                if (input.type !== 'checkbox') {
                    input.classList.add('error');
                } else {
                    agreementContainer.classList.add('error');
                }
            }
            
            function clearError(input, errorElement) {
                errorElement.style.display = 'none';
                input.parentElement.classList.remove('invalid');
                input.parentElement.classList.add('valid');
                
                if (input.type !== 'checkbox') {
                    input.classList.remove('error');
                } else {
                    agreementContainer.classList.remove('error');
                }
            }
            
            // Валидация имени
            function validateName() {
                if (nameInput.value.trim() === '') {
                    showError(nameInput, nameError, 'Пожалуйста, введите ваше имя');
                    return false;
                } else {
                    clearError(nameInput, nameError);
                    return true;
                }
            }
            
            // Валидация email
            function validateEmail() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    showError(emailInput, emailError, 'Пожалуйста, введите корректный email');
                    return false;
                } else {
                    clearError(emailInput, emailError);
                    return true;
                }
            }
            
            // Валидация телефона
            function validatePhone() {
                const isValid = currentCountry.regex.test(phoneInput.value);
                if (!isValid) {
                    showError(phoneInput, phoneError, `Неверный формат. Пример: ${currentCountry.format.replace(/#/g, 'X')}`);
                    return false;
                } else {
                    clearError(phoneInput, phoneError);
                    return true;
                }
            }
            
            // Валидация согласия
            function validateAgreement() {
                if (!agreementInput.checked) {
                    showError(agreementInput, agreementError, 'Необходимо ваше согласие');
                    return false;
                } else {
                    clearError(agreementInput, agreementError);
                    return true;
                }
            }
            
            // Обработчики событий для валидации в реальном времени
            nameInput.addEventListener('blur', validateName);
            nameInput.addEventListener('input', function() {
                if (nameInput.value.trim() !== '') {
                    clearError(nameInput, nameError);
                }
            });
            
            emailInput.addEventListener('blur', validateEmail);
            emailInput.addEventListener('input', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(emailInput.value)) {
                    clearError(emailInput, emailError);
                }
            });
            
            phoneInput.addEventListener('blur', validatePhone);
            
            agreementInput.addEventListener('change', function() {
                if (agreementInput.checked) {
                    clearError(agreementInput, agreementError);
                }
            });
            
            // Отправка формы
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const isNameValid = validateName();
                const isEmailValid = validateEmail();
                const isPhoneValid = validatePhone();
                const isAgreementValid = validateAgreement();
                
                if (isNameValid && isEmailValid && isPhoneValid && isAgreementValid) {
                    // Форма валидна
                    alert('Форма успешно отправлена!\n\n' + 
                          `Имя: ${nameInput.value}\n` +
                          `Email: ${emailInput.value}\n` +
                          `Телефон: ${phoneInput.value}\n` +
                          `Страна: ${currentCountry.name}`);
                    
                    // Сброс формы
                    form.reset();
                    countrySelect.value = defaultCountry.code;
                    currentCountry = defaultCountry;
                    updateCountryInfo();
                    
                    // Сброс состояний валидации
                    document.querySelectorAll('.form-group').forEach(group => {
                        group.classList.remove('valid', 'invalid');
                    });
                }
            });
        });