import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import {
  Back,
  Container,
  Content,
  ListItem,
  Subtitle,
  Title,
} from "../../shared/ui";

export default function About() {
  return (
    <Container>
      <Stack.Screen
        options={{
          headerTitle: "Диета",
          headerBackVisible: false,
          headerLeft: () => <Back />,
        }}
      />
      <Content>
        <Title>Зачем нужна диета </Title>
        <Text>
          Правильность организации режима питания играет определяющую роль при
          терапии панкреатита. При данной патологии происходит поражение
          поджелудочной железы, которая относится к органам пищеварения и
          отвечает за синтез ферментов, принимающих участие в процессе
          переваривания пищи. При воспалении поджелудочной железы процессы
          пищеварения нарушаются, что приводит к развитию целого ряда кишечных
          расстройств. Для решения данного вопроса пациентам назначается
          специальная диета. Основная целью диетического питания при данной
          патологии является снижение синтеза ферментов и разгрузка органов
          пищеварения. Это позволяет остановить процесс самопереваривания железы
          и постепенно купировать воспаление. Несмотря на ограничения питание
          должно быть сбалансированным. Базовая диета для пациентов с данным
          заболеванием была разработана знаменитым доктором Певзнером и получила
          название 5П.
        </Text>
        <Subtitle>Общие принципы</Subtitle>
        <Text>
          Суть диеты заключается в том, что пациенту разрешается употреблять
          только те продукты, которые не провоцируют мощное выделение ферментов.
          Стандартное меню включает в себя теплую еду кашицеобразной
          консистенции. Пища не должна быть жареной, копченой, острой,
          маринованной. Данные ограничения связаны с тем, что жареные блюда
          долго перевариваются и могут спровоцировать повышенное
          газообразование, рези, боли, вздутие живота. Еду нужно готовить на
          пару, варить, тушить или запекать в духовке. Сырые фрукты и овощи
          также под запретом из-за того, что способны вызывать метеоризм.
          Наиболее жесткой диеты необходимо придерживаться при остром воспалении
          или обострении хронических форм. В этом случае необходимо соблюдать
          классическую триаду — голодать, прикладывать холод, соблюдать
          постельный режим. В течение нескольких дней больным запрещено
          принимать любую пищу. В это время для поддержания жизнедеятельности им
          вводят питательные растворы через капельницу. Пить можно без
          ограничений. Начинать принимать пищу нужно постепенно, с небольших
          порций. Питание дробное. Пища должна быть жидкой (пюре, овощные
          бульоны, каши), это облегчает ее переваривание и усвоение. По мере
          улучшения состояния здоровья железы меню осторожно расширяют,
          калорийность рациона увеличивают. Суточная калорийность всех блюд не
          должна превышать 2500 килокалорий. При острой форме, когда наблюдается
          сильное нарушение пищеварения показано лечебное голодание, постельный
          режим и прикладывание холода на область пораженного органа. Разрешено
          нераздражающее питье. При наличии показаний пациенту назначаются
          капельницы с питательными растворами. Прием ферментов на данной стадии
          не нужен, так как пища в организм не поступает. Голодание продолжается
          2-3 суток. За это время состояние пациента улучшается и можно
          постепенно переходить на диетическое питание. Нельзя употреблять
          слишком холодную или горячую, а также твердую еду. Все блюда должны
          быть в жидком или полужидком виде, протертые. Меню преимущественно
          углеводное, малокомпонентное, без специй. По мере снижения
          воспалительной реакции и уменьшения симптомов питание делают более
          калорийным. Расширять меню нужно крайне аккуратно и постепенно, чтобы
          не спровоцировать рецидив. На 5 день можно начинать вводить белковую
          пищу, а также немного сливочного масла. Использовать растительные
          масла пока нельзя. Все блюда по-прежнему должны быть вареными или
          приготовленными на пару. Их уже можно не протирать, а просто
          измельчать. После снятия приступа и выздоровления пациенту
          рекомендуется еще в течение года питаться дробно, употреблять полезную
          нежирную пищу. После завершения лечебного голодания диету дополняют
          приемом ферментов. Это помогает частично компенсировать нехватку
          собственных ферментов железы и не допустить ее перегрузки. Особенно
          важно принимать ферменты при потреблении жирных продуктов. Диета при
          острой форме заболевания является важнейшим элементом лечения. Именно
          она позволяет остановить процесс самопереваривания железы, снять
          воспаление, нормализовать работу органов пищеварения.
        </Text>
        <Subtitle>Диета при хроническом панкреатите</Subtitle>
        <Text>
          Диета является одной из важнейших составляющих терапии хронической
          формы заболевания. Кроме этого, при ее соблюдении резко сокращается
          риск обострений. Рекомендации по режиму питания составляет врач,
          индивидуально для каждого пациента, с учетом возраста, наличия
          сопутствующих патологий, степени тяжести заболевания, наличия
          осложнений. При обострении болезни используют диету 5П, которая должна
          назначаться доктором. Самолечение недопустимо и может привести к
          развитию целого ряда осложнений.
        </Text>
        <Subtitle>Питание при панкреатитах</Subtitle>
        <Text>
          Для людей с диагнозом панкреатит диета становится нормой жизни.
          Воспаленная поджелудочная железа не может справляться с большими
          нагрузками и выделять необходимые ферменты для пищеварения. Это
          значит, что ее нужно разгрузить по максимуму. Если этого не сделать,
          орган будет разрушаться, и это может привести к смерти. Основные
          рекомендации по питанию при этой болезни можно получить у лечащего
          врача. В клинике Биляка доктора создают пациентам индивидуальные план.
          Все зависит от формы заболевания, степени поражения поджелудочной
          железы. Но есть общие рекомендации – нужно изменить принцип питания и
          придерживаться диеты № 5.
        </Text>
        <Subtitle>Основные принципы питания вне периодов обострений:</Subtitle>
        <Text>
          Если у вас панкреатит, питание должно быть дробным. То есть, нужно
          есть каждые 2-3 часа небольшими порциями. Получается, вместо 3 раз
          человек принимает пищу 5-6 раз в день, по 300 грамм. Это снижает
          нагрузку на пищеварительную систему. Также есть 5 основных правил,
          которых нужно придерживаться:
        </Text>
        {tips.map((tip) => (
          <ListItem key={tip} content={tip} />
        ))}
        <Subtitle>Список запрещенных продуктов</Subtitle>
        <Subtitle>Чего нельзя есть?</Subtitle>
        <Text>
          С воспалением поджелудочной железы шутки плохи, эта болезнь мешает
          нормально жить и даже приводит к смерти. Поэтому важно сознательно
          подойти к рациону. Это – основа лечения, без которой прием лекарств
          может попросту не сработать. Зато если соблюдается диета, панкреатит
          переходит в стадию ремиссии и практически не беспокоит больного. Чтобы
          добиться успехов в лечении панкреатита, исключите из рациона такие
          продукты:
        </Text>
        {avoidFoods.map((a) => (
          <ListItem key={a} content={a} />
        ))}
        <Text>
          Также диета для больных панкреатитом запрещает есть орехи и
          сухофрукты, кислые фрукты, пшеничную крупу, лук и чеснок. Запрещается
          любой фастфуд. Из напитков под запретом газировки, кофе, крепкий
          черный чай, какао, сладкие и кислые фруктовые соки. Глядя на этот
          список ограничений, многие впадают в уныние. У них рождается
          справедливый вопрос: а что же тогда можно? На самом деле, с голоду вы
          не умрете – есть можно очень многие продукты.
        </Text>
        <Subtitle>Что можно есть при панкреатите</Subtitle>
        <Text>В рацион должны входить:</Text>
        {recommendedFoods.map((a) => (
          <ListItem key={a} content={a} />
        ))}
        <Text>
          Из напитков разрешены некоторые соки (тыквенный, морковный,
          абрикосовый), компоты, отвар шиповника, зеленый и травяной чай. Тем,
          кто не мыслит свою жизнь без десертов, диета при панкреатитах
          разрешает некоторые полезные сладости. Можно делать фруктово-ягодные
          муссы и желе, пастилу, пюре. Также разрешается съесть немного зефира и
          несдобного печенья. Но все это едят в малых количествах. Как видите,
          есть можно многое, и составить из разрешенных продуктов рацион – не
          проблема. Он вполне может быть полноценным и разнообразным, и даже
          вкусным. Приведем несколько примеров меню.
        </Text>
        <Text>В рацион должны входить:</Text>
        <Subtitle>Питьевой режим</Subtitle>
        <Text>
          Большинство обменных процессов в нашем организме происходит в водной
          среде. Вода нейтрализует действие желчных кислот и принимает активное
          участие в процессе синтеза желудочного сока. При панкреатите
          специалисты рекомендуют выпивать не менее полутора литров жидкости. Не
          стоит увлекаться и пить более трех литров в сутки, так как это может
          привести к отекам, развитию застойных явлений, почечной
          недостаточности. Пациентам разрешено пить чистую воду, некислые
          натуральные неконцентрированные соки, отвар из овсяных отрубей,
          травяные чаи на основе целебных трав (ромашка, шиповник и ряд других),
          слабо заваренный чай без сахара (лучше зеленый), разведенные молочные
          коктейли, щелочные минеральные воды. Под полным запретом находится
          кофе, любой алкоголь, бродящие, кислые напитки, газировка.
          Рекомендуется выдерживать интервал между приемами пищи и питья (30-90
          минут), пить теплую воду и напитки, за раз употреблять не менее 300
          миллилитров жидкости. Злоупотребление холодными напитками приводит к
          сокращению мышц желудка. В результате недостаточно переваренный
          пищевой ком раньше времени попадает дальше в кишечник, что приводит к
          расстройствам пищеварения.
        </Text>
        <Subtitle>Возможное меню</Subtitle>
        <Text>
          Примерное меню включает в себя три основных приема пищи, два перекуса
          между ними и употребление кисломолочной продукции перед сном. На
          завтрак лучше всего готовить каши на воде (после наступления ремиссии
          можно использовать молоко, разведенное водой). На острой стадии
          болезни каши перетирают. По мере стабилизации здоровья крупу
          достаточно просто хорошо разварить. Помимо каши можно съесть бутерброд
          из хлеба с маслом, немного нежирного сыра. Второй прием может состоять
          из мясного либо творожного суфле, омлета, приготовленного на пару,
          творога. Запить все можно настоем шиповника. В обед обычно готовят
          суп, второе блюдо и напиток. Суп варится на нежирном бульоне, в состав
          второго обязательно должно входить белковое мясное нежирное блюдо,
          которое можно дополнить овощами, приготовленными на пару или тушеными.
          На полдник можно съесть то же, что на первый перекус. Разрешено также
          галетное печенье, кисель, банан (не каждый день). Ужин должен быть
          легким, с достаточным количеством углеводов и белков. Перед сном
          разрешается употребление нежирных кисломолочных продуктов. Соблюдение
          принципов правильного питания после нормализации функции железы
          позволяет максимально снизить вероятность развития рецидивов
          заболевания и улучшает качество жизни пациента. А прием назначенных
          врачом ферментных препаратов позволяет нормализовать пищеварение.
        </Text>
        <Subtitle>Меню при панкреатите (по дням, пример)</Subtitle>
        {mealPlans.map((m, idx) => (
          <View key={idx}>
            <Subtitle>{m.day}</Subtitle>
            {m.meals.map((a) => (
              <ListItem key={a} content={a} />
            ))}
            <Text>{m.tip}</Text>
          </View>
        ))}
      </Content>
    </Container>
  );
}

export const mealPlans = [
  // Day 1
  {
    day: "День 1",
    meals: [
      "Завтрак. Делаем омлет из белка, укладываем его на подсушенный хлебный тост, добавляем половинку авокадо. Запиваем все яблочным компотом.",
      "Перекус. Запеченное яблоко.",
      "Обед. На первое – тыквенный суп с сельдереем и 1 ложкой нежирной сметаны. На второе – паровая котлетка из индейки.",
      "Перекус. Запеченная свекла.",
      "Ужин. Филе нежирной рыбы, приготовленное на пару. Гарнир – отварные овощи.",
      "Перекус. Стакан кефира.",
    ],
    tip: "Маленький совет: диета с панкреатитом будет не такой скучной, если подключить фантазию и стильно украсить блюда. Используйте микрогрин, листья салата и другую зелень. Хвастайтесь своими блюдами в соцсетях – так вы будете мотивировать других питаться правильно.",
  },
  // Day 2
  {
    day: "День 2",
    meals: [
      "Завтрак. Разваренная овсяная каша. Легкий травяной чай.",
      "Перекус. 150 г нежирного творога.",
      "Обед. Паровые телячьи фрикадельки с гарниром из запеченных кабачков.",
      "Перекус. Стакан фруктового киселя.",
      "Ужин. Творожная запеканка.",
      "Перекус. Стакан кефира.",
    ],
    tip: "Маленький совет: заведите дневник питания, вписывайте туда все, что было съедено за день, учитывая граммы и калории. Добавляйте к каждому дню свои ощущения – болел ли живот, была ли тяжесть и т.д. Тогда вы сможете понять, как работает диета для больных хроническим панкреатитом в динамике.",
  },
  // Day 3
  {
    day: "День 3",
    meals: [
      "Завтрак. Бутерброды из сухих галет и нежирного сыра. Запить отваром шиповника.",
      "Перекус. Баночка фруктового пюре из детского питания.",
      "Обед. На первое – суп-пюре из цветной капусты. На второе – куриные фрикадельки с брокколи.",
      "Перекус. Винегрет без соленого огурца, заправленный оливковым маслом.",
      "Ужин. Рыбные тефтели и картофельное пюре.",
      "Перекус. Творожный пудинг.",
    ],
    tip: "Тем, чьей нормой жизни становится диета, хронический панкреатит не мешает комфортно жить. При этом многим удается сбросить лишний вес, почувствовать легкость и прилив сил. Сохраните себе разрешенные продукты и меню, чтобы не потерять!",
  },
];
export const recommendedFoods = [
  "Овощи – свекла, брокколи, картошка, сельдерей, авокадо, морковка, кабачки, брюссельская капуста, огурцы, тыква.",
  "Нежирные сорта мяса – куриная грудка, индейка, телятина, кролик.",
  "Рыба – минтай, хек, треска, судак, окунь.",
  "Некоторые крупы – овсяная, манная, рисовая, гречневая.",
  "Некоторые фрукты – печеные груши и яблоки.",
  "Хлеб – разрешается в виде ржаных сухариков.",
  "Нежирные молочные продукты – 1%-ный творог, кефир, простокваша, легкие сыры.",
];
const avoidFoods = [
  "алкоголь – разрушает клетки поджелудочной железы",
  "бобовые (горох, фасоль) – вызывают вздутие и метеоризм",
  "жирные сорта мяса и рыбы – свинина, сало, гусь, утка, баранина, семга, скумбрия, лосось перегружают поджелудочную железу",
  "жирные молочные продукты – вызывают процессы брожения в пищеварительной системе",
  "животные жиры – сложно перевариваются, могут вызывать рвоту",
  "сладости – раздражают поджелудочную железу, вызывают брожение",
  "овощи с грубой клетчаткой – белокочанная капуста, перец, баклажаны провоцируют вздутие",
  "острые соусы, пряности, соленья и маринады – раздражают поджелудочную",
  "грибы – тяжело перевариваются",
  "свежий хлеб и сдоба – провоцируют брожение и вздутие",
];
const tips = [
  "Питьевой режим. Еду запивать не нужно. Вместо этого лучше пить воду за 20 минут до приема пищи и через 1 час после нее. Суточная норма воды составляет 2-3 литра.",
  "Температурный режим. Ешьте теплые блюда. Так поджелудочная не будет раздражаться горячим или холодным.",
  "Способы приготовления. Варите, готовьте на пару, запекайте – что угодно, только не жарьте.",
  "Консистенция. Питание при панкреатитах должно быть максимально щадящим. Продукты нужно измельчать, особенно при обострениях болезни.",
  "Солевой режим. Не пересаливайте еду. Суточная доза соли не должна превышать 5 грамм.",
  "На этом ограничения не заканчиваются. Больному придется полностью пересмотреть рацион – исключить продукты, разрушающие ткани поджелудочной железы, и добавить то, что поддерживает ее.",
];
