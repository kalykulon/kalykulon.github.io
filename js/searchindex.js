// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Виртуальная выставка \"Калык улон\"", "Виртуальная выставка Калык улон БАДӞЫМ НУНАЛ Большим событием деревне всегда было начало весенних полевых работ гырыны кизьыны потон геры кидыс поттон акашка которое сопровождалось различными обрядами народным весельем Этот праздник был по видимому самым важным календарном цикле Об этом свидетельствует отдельный напев гур обслуживавший только этот обряд тогда как все остальные календарные обряды обслуживались практически одним типизированным напевом называемым вӧсь обозначавшим мелодию обряда гостевания честь какого либо календарного праздника внедрением православия важный сельскохозяйственный приурочился пасхе быдӟым нунал великтэм паска особенно те годы когда пасха была поздней Поэтому ряде мест южных удмуртов именуется акашкой или же входит составной элемент празднование пасхи Но если даже не совпадала сроку обрядовое содержание этого дня дохристианским это были встречи весны пасхальным лишь известное словесное приветствие людей при встречах Даже обязательные пасху крашеные яйца издревле символом плодородия таковые являлись элементом календарной обрядности русских деревнях водили хороводы качались на качелях катали позднее ним добавились шары кольца должно поверьям способствовать будущему урожаю Постоянного срока проведения он зависел от погодных условий готовности земли посеву поэтому каждый раз назначался советом домохозяев назначенный день утра чаще понедельник четверг всей деревней осматривали лошадей лучшую выбирали для выполнения Первую борозду поручали уважаемому старику человеку легкой рукой некоторых первую каждая семья начинала своей полосе но одном поле потом собирались вместе Обязательным жертвоприношение божеству опускали горбушку хлеба яйцо также кусочки всех принесенных видов еды напитков прося него содействия проведении посевной обеспечения хорошего урожая Засевая вспаханный участок зерном бросали чтобы зерно уродилось Дети молодежь наперегонки собирали их Если кто то падал считалось хорошим предзнаменованием значит колос будет тяжелым После возвращались деревню Взрослые проводили время традиционном гостеваний угощаясь плуга При каждом доме сначала пели обрядовую песню другие Молодые люди совершали объезд дворов разыгрывая моление По улице ехали песнями они присоединялись девушкам лужайке где нибудь склоне горы за забавляясь плясками играми Шумные игры сменяли спокойные песни которые стоя кругом держа друг друга руки талию раскачиваясь из стороны сторону манера исполнения характерная почти финно угорских народов Особенно удобно так петь объединяемые под названием ай кай гурьёс Это четырехстрочные которых заканчивается укачивающим припевом айкай Надо сказать что праздничных хороводах нередко участвовали взрослые приходившие посмотреть развлечения молодежи Да уйдя лужайки могла прийти любой дом повеселить развлечь показать свои наряды свое искусство рукоделия приезжих гостей такие послушать Поразвлекав взрослых нескольких домах уходила традиционное место гуляния меняя виды развлечений проводила до ночи Так забавлялась праздники пляски разнообразные повседневной забавой первых праздников завершения летнего праздничного цикла Из книги Удмурты Текст историко этнографические очерки УИИЯЛ УрОРАН Научный ред ист наук Пименов Ижевск Удмуртский институт истории языка литературы УрО РАН ВОЖОДЫР имний цикл начинался дни зимнего солнцестояния называвшегося вожодыр означает переходное Первоначально слово обозначало очевидно запретное табуированное период запрещалось работать строго соблюдался запрет стирку Объясняли тем якобы эти земле гуляют страшные духи вожо приносящие беды несчастья Под влиянием христианства быту утвердились элементы рождественско новогоднего объединенного традиционным которым стали именовать рождества крещения Первый традиционный зимний толсур ымусьтон со временем рождеству первый его снималось табу пищу наложенное после осеннего сӥзьыл юон проводившегося конце ноября начале декабря празднику прибирали готовили пиво кушанья приглашали назначали свадьбы Готовясь узнавали кого деревенской родни намечаются званые гости обычаю следовало пригласить себе угощения ожидании готовились лучше проходил большей торжественностью начиналось ряженье пӧртмаськон пенӟаськон вожояськон чокморскон Считалось ряженые отпугивают злых духов изгоняют болезни приносят удачу различных делах способствуют конопли увеличению поголовья скота встречали радушно плясали получали угощение Каждому них давали съестное обычно какое хлебное изделие кусок коврижки пирога просто горсть муки Все впоследствии скармливали своему скоту Для святочных игр подыскивала старый нежилой новый еще заселенный можно бы проводить вечера Там рассказывали сказки загадывали загадки разыгрывали комические сценки колодником урядником бабой ягой солдатом играли жгуты жмурки лодыжки горностая стрельбу рябчика отгадчика др гадала суженых поленьям поленницы вытянуто ровное гладкое полено муж жена будут ровным характером наоборот колосьям кучи соломы находили считали сколько нем зерен чем больше богаче овцам темноте ловили овцу ее масти судили цвете волос нареченных Более верным гадание новогоднюю ночь гадали загадывая семейном благополучии достатке покойниках свадьбах нового года мог предсказать сложится год надо погоды действий примечать Определенными действиями например детям подержать деньги причем крупнее стремились содействовать благополучию Женщины опережая скатывались санках считая первой лен длиннее Ряжение гадания заканчивались крещение йӧ вылэ султон Накануне перед рождеством наводили чистоту порядок принимать Всякие работы запрещались шли реке топором чертили льду крест месте рубили прорубь воззрениям злые уходили воду официальной обрядовой части взрослое население деревни гуляло сгруппировавшись родственному патрономическому признаку переходя поочередно дома гостили понемногу Между угощениями разговорах беседах хозяйстве семейных рассказывании побывальщин разных происшествий конечно главным образом застольные плясовые Хозяева угощали своих кушаньями напитками ответ тоже получался своеобразный песенный диалог понравившейся гостя старались запомнить спеть Такое гостевание традиционной частью любого удмуртского замечанию Герда удмуртские представляли собой песенное царство Гости писал въезжают вотяку песней угощаются провожаются ворот На праздниках желающие запевал подхватывали каждой песенники известные знанием большого количества песен красивым звонким голосом искусством пения народе бытовало мнение песенным даром судьба наделяла несчастливых Такой взгляд трудное отразился записанной Гердом песне Пичиисен кырӟан усто луи Шудтэм луэме туж тодмо малых лет научился хорошо Очень заметно буду несчастным Перевод Хорошую певунью сравнивали соловьем человека искажающего называли паллян кырӟась есть поющий влево уводящий Через семь восемь недель февраля марта праздновалась масленица вӧй дыр пырон келян масленча которая завершала началом весеннего проводов масленицы наступал семинедельный великий пост течение которого крестьяне полевым работам Приятным занятием эту пору беление холстов дэра гужатон ассоциировавшееся веселым времяпрепровождением Сотканные зимой холсты ранней весной стелили снег Время времени переворачивали смачивали водой мыли снова продолжалось двух трех ночами караулила проводя неподалеку развлекаясь репертуаром устного народного творчества прошлом веке последней неделе поста приурочились отмечающие пробуждение природы земледельца связанные ними очистительные вербное воскресенье выполнялась процедура изгнания шайтанов колдунов прочих болезней Дождавшись темноты парни девушки взяв ивовые прутья шумом проходили конца конец заходили последний Хозяин зажигал лучину выходил пришедшими во двор бросал Кто подхватывал товарища тот другого далее тех пор пока та совсем потухнет Упавшую били прутьями Когда лучина гасла хозяину говорили шайтана выгнали может идти домой сами захватив обгоревшую отправлялись следующий Процедуру повторяли дворах чего лучины уносили сжигали расходились домам Глазовском уезде наблюдениям Первухина исполнялся утром мужчинами обходили строения своего хозяйства ударяя можжевеловыми ветками верхом выезжали ворота другими проезжали втыкали ветки удмурты приносили ставили передний угол иконам вербы использовали первом выгоне Насыщен кулэм уй кулыш поркуш выхода мертвых ӵук мунчо утренней баней принято мыться бане Его названия свидетельствуют об очис¬тительном характере обрядов связи культом пред¬ков глубокой древностью повериям гуляли мертвецы всякая нечисть жобъес могли наслать болезнь порчу Страх вредоносными породил различные магические приемы усадьбу очерчивали косой ножом окна двери клали металлические предметы шило нож топор рисовали дегтем углем кресты можжевельника терновника пихты рябины дымом окуривали избу полночь ходили трещотками стреляли ружей жгли порох ударяли палками углам домов Как появлялись первые проталинки зеленеть трава проводился называемый гуждор Молодежь старики отведенное молений варили собранные случая кашу суп Затем жители ей весна тихая разлив принес убытков льдом ушли животных тонули ни скот Девушки берегу провожая лед общее веселье xix перенесен более поздний срок стал борозды ГЫРОН БЫДТОН Обрядовые проводимые окончания весенней пахоты занимали важное Существовали разные термины обозначения всего узколокальные Разными сроки зависели Наслоение христианской терминологии деталей усложнили выделение сева гырон быдтон бусы троицы куар басьтон вӧсян трочин нужно рассматривать локальные проявления единого представления необходимости благодарений будущего слились троицей Эти проводились дней главных моментов скачки лошадях этому дню молодушек головные полотенца кисеты вручить качестве призов победителям скачек других состязаний Лошадь победительницу скачках кормили кашей моментом празднеств моления семейные коллективные патронимические деревенские Именно крупные булда дэмен ошпи сиён собиралось около десятка деревень Развлекательная часть репертуар достаточно разнообразен хотя частично повторялся местах шумного веселья находились дети Они наблюдали копировали игровые среди детей распространенным явлением Постепенно разучивали весь игровой целом развлекательный последние между Петровым днем называемые инвожо устраивался летний называвшийся гербер гужем куарсур Петрол Петров Названия говорят приуроченности традиционных Петрову церковного календаря Гужем считался последним праздником году музъемлэн берпуметй праздникез летним заканчивали весенние земледельческие применялся плуг отсюда название Другое пива травы связано буйным распусканием зелени сенокос происходило праздничное молодежное гуляние Во многих игрались купания чьи сыграны разновидностях мотивом выступала вера магическую связь детородной функции плодородием говорит участников присутствовала одна пожилая женщина переодетая мужской костюм Отголосками этих верований восходящих древнему культу предписания кататься первого грома дергать коноплю полуобнаженными скатываться пригорков валяться снегу масленицу ВЫЛЬ ӜУК Осенний календарных выль ӝук слившегося затем Ильиным всю приготовляли продуктов Специально непосредственно резали барана петуха пекли хлеб свежего помола овсяный кисель поля колосья ржи ячменя стручки гороха листья капусты край стола куяськон умерших Колосья окунали освящали бога воршуда Пучок колосьев подвешивали семейной куале отмечали семьей приглашением соседей свою очередь кому званы Ильина выходили жать Перед отправлением хозяин освящал дворе масло смазывали серп жатва прошла споро раздавливали руке ком потирали им болели зажина выжинали три снопа работали паровой пашней праздновали малую акашку Обрядовая выполняемая молодежью носила преимущественно характер несли испеченные бискыли сюда Четыре пять парней распределив поминать хлебом руках молитву отрезав кусочку возвращали хозяйкам Отведав крошили чашки реку помолившись съедали Возвращаясь зачерпывали обливали девушек гулять распевая сидели обжинки оставляли добрую полосу Заканчивая соблюдали некоторые обычаи направленные обеспечение будущем Гаврилова закончив садились снопы лицом югу жали жнива через плечо Потом силы будущее того свозили гумно конопляным семенем деревенских жатвы аран осенних необходимо отметить игру ряжения проводилась Покрова октября участием Осени виде бородатого старика темном зипуне молодой жены Зимы белом одеянии cо свитой казаков саблями роль ряженых окончание устройством молодежного пинал куно одной большой улицы приглашала сверстников другой вели одному куда собиралась вся Повеселившись здесь Завершал годовой осенний отмечавшийся обеда солнце увидело проводилось том размножался пребывала здравии другу Формирование традиций обычаев народа заняло многие столетия древние времена жизнь каждого удмурта мала велика неразрывно связана сельским хозяйством сельское хозяйство послужило отправной точкой развития жертвоприношений целью увеличение урожайности земель улучшение благосостояния жителей селения Возникновение бытование периодичностью повторяемостью основных занятий Наиболее значимыми периодами обрядовом календаре считались равноденствия определенными фазами луны вокруг группировались традиционные обрядовые циклы отразились взгляды природу попытки воздействовать нее повседневные думы заботы крестьянина хлебе насущном урожае зависело благополучие семьи Приуроченные важнейшим этапам сельскохозяйственных уборки сложные комплексы включавшие помимо обрядовых молитвенных песенных заклинаний приметы суеверия благопожелания какие действия иные отрезки одни приурочивались определенным праздникам яйцами качели осенью святки неотъемлемой Возникшие древности аграрно действа календарно начиная xviii испытали заметное влияние xx проведение приурочивалось дням церковных крещению троице постепенно заменяли использовались синонимы наравне дохристианскими названиями всем сохранили существенную дохристианской числе предков весьма характерно удмуртской аграрной имели уже тенденцию превращению свидетельствуя эволюции являющейся отражением мировоззрения исполнителей Такие выполнялись шутку всерьез отказались былой серьезности отправлении сохранилось Их исполняла которой скорее игрой нежели серьезным мероприятием соответствующие обязательной переставала соблюдать переходили детский Однако являясь важной быта исчезнуть полностью Некоторые претерпев заметные изменения сельской местности продолжают бытовать поныне Дауръёс пыр вуэм йылолъёс ", "");
   return this;
}
