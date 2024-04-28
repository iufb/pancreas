import { Stack } from "expo-router";
import React from "react";
import { ScrollView, Text } from "react-native";
import { Container, ListItem, Subtitle, Title } from "../../shared/ui";

export default function About() {
  return (
    <Container>
      <Stack.Screen options={{ title: "Инфо:" }} />
      <ScrollView
        contentContainerStyle={{
          backgroundColor: "white",
          padding: 8,
          borderRadius: 10,
        }}
      >
        <Title>Что такое панкреатит?</Title>
        <Text style={{ color: "red" }}>
          Панкреатит — это воспаление поджелудочной железы (один из серьезных и
          опасных желез в организме). При первых признаках панкреатита следует
          незамедлительно обратиться к врачу и начать лечение.
        </Text>
        <Title>Симптомы панкреатита</Title>
        <Subtitle>Острый панкреатит</Subtitle>
        <Text>
          Характеризуется очень сильным болевым синдромом. Терпеть такую боль
          невозможно, поэтому пациенту сразу вызывают скорую и больного везут
          в хирургическое отделение. Боли при остром панкреатите пациент
          испытывает как в верхней части живота, так и во всем обхвате живота
          (опоясывающие боли). Появляется тошнота, рвота, вздутие живота.
          Пациент жалуется на болезненность при прощупывании живота. Учащается
          сердцебиение, давление может понизиться.
        </Text>

        <Subtitle>Хронический панкреатит</Subtitle>
        <Text>
          Симптомы хронического панкреатита проявляются перманентно и
          периодически обостряются после воздействия различных раздражителей.
          Человек чувствует постоянную тупую боль в эпигастрии и обоих
          подреберьях, из-за нехватки ферментов для переваривания пищи может
          возникать понос, вздутие в животе, неустойчивый стул. В периоды
          обострения панкреатита пациент должен следовать предписаниям своего
          лечащего врача или обратиться в службу скорой помощи.  Обе формы
          панкреатита сопровождаются болями, расстройствами работы желудка
          и кишечника, тошнотой и рвотой (это самые характерные симптомы
          панкреатита). Однако стоит подробнее рассмотреть симптомы острой
          и хронической формы данного заболевания.
        </Text>

        <Subtitle>Причины панкреатита</Subtitle>
        <Text>Привести к развитию панкреатита может множество факторов:</Text>
        {reasons.map((r) => (
          <ListItem key={r} content={r} />
        ))}
        <Text>
          Заболевания сосудов, инвазии глистов, стрессы, некоторые аутоиммунные
          расстройства, вирусные и тяжелые системные заболевания также
          способствуют развитию болезни.
        </Text>
        <Subtitle>Признаки панкреатита</Subtitle>
        <Text>Проявлениями острого панкреатита могут быть:</Text>
        {symptoms.map((r) => (
          <ListItem key={r} content={r} />
        ))}
        <Text>
          Хронический панкреатит может протекать со стертой симптоматикой и
          проявляться достаточно редко, поэтому его развитие часто проходит
          скрыто. Поэтому его проявления принимают за обычные отравления или
          другие заболевания желудочно-кишечного тракта. Поскольку панкреатит
          может иметь разные причины и отличаться разной степенью интоксикации –
          проявления могут быть разными. Поэтому определить наличие панкреатита
          самостоятельно невозможно, так как подобные проявления могут иметь
          множество других гастроэнтерологических заболеваний и не только. При
          появлении тревожных симптомов необходимо немедленно обратиться к
          лечащему врачу и пройти соответствующие обследования.
        </Text>

        <Subtitle>Возможные осложнения</Subtitle>
        <Text>
          Воспалительный процесс при панкреатите может приводить к формированию
          отеков – острых перипанкреатических жидкостных скоплений (ГПРС),
          наполненных воспалительным экссудатом. Эти образования формируются
          после разрыва протоков поджелудочной железы. Такие образования со
          временем либо подвергаются резорбции (растворяются), либо формируют
          кисту или псевдокисту. Среди других возможных осложнений – перитонит,
          механическая желтуха, воспаление желчевыводящих путей, полиорганная
          недостаточность, кисты, асцит, сепсис, острые поражения почек. При
          закупорке панкреатического протока конкрементом поджелудочная железа
          начинает переваривать сама себя, что вызывает сильную боль и тяжелые
          осложнения. Нарушения секреции инсулина при хроническом панкреатите
          чреваты развитием сахарного диабета. На поздних стадиях могут
          возникать сосудистые нарушения – кровотечения, тромбозы, образование
          псевдоаневризма вследствие эрозии или сдавливания сосудов. Одним из
          наиболее опасных осложнений является гнойный панкреонекроз, который
          вызывает необратимые повреждения в структуре панкреатической железы и
          может привести к смерти. При отсутствии адекватного лечения
          хронического панкреатита значительно увеличивается вероятность
          развития рака поджелудочной железы.
        </Text>
        <Subtitle>Диагностика панкреатита</Subtitle>
        <Text>
          Многие заболевания органов брюшной полости имеют схожую симптоматику,
          поэтому самостоятельно диагностировать панкреатит невозможно. Задать
          точный диагноз можно только на базе результатов ряда обследований. В
          первую очередь производится анализ крови и мочи, копрограмма,
          функциональные тесты поджелудочной железы. Рекомендуется провести УЗИ
          органов брюшной полости, гастроскопию, опционально назначается
          рентгенография или КТ брюшной полости, холецистохолангиография.
        </Text>
        <Subtitle>Дифференциальная диагностика</Subtitle>
        <Text>
          Часто случаи, когда хронический панкреатит ошибочно принимают за
          гастрит. Хронический гастрит сопровождается характерной ноющей болью,
          ощущением тяжести, изжогой, неприятным привкусом во рту. Чтобы точно
          определить причину недомогания, врач может направить на гастроскопию,
          иногда – с взятием биопсии. При язве существует четкая взаимосвязь
          между приемом пищи и временем возникновения боли. Рвота при язве
          приносит некоторое облегчение, в отличие от панкреатита. Как правило,
          УЗИ позволяет отличить изменения воспаленных тканей поджелудочной
          железы от расстройств желчного пузыря с похожими
          проявлениями. Преимущественно это наличие конкрементов в желчном
          пузыре, патологии проходимости желчных путей или дисфункция желчного
          пузыря. Но следует учитывать и возможность одновременного сочетания
          расстройств панкреатической железы и желчного пузыря. Болезни тонкого
          кишечника, например, энтерит, иногда трудно отличить от хронического
          панкреатита, поскольку они тоже характеризуются хронической диареей,
          истощением, гиповитаминозом. Энтерит отличается характерной
          особенностью – болезненностью при пальпации в области пупка. На
          начальных этапах рак поджелудочной железы может протекать с
          симптоматикой, похожей на панкреатит. Если существует подозрение на
          онкологию, а УЗИ не дало однозначного ответа в плане дифференциации
          этих заболеваний, проводится лапароскопия с биопсией, чтобы точно
          определить наличие новообразований и выяснить, имеют ли они
          злокачественный характер.
        </Text>
        <Subtitle>Лечение панкреатита у взрослых</Subtitle>
        <Text>
          При хронической форме назначаются спазмолитики, которые улучшают отток
          ферментов, антисекреторные препараты, снимающие воспалительный
          процесс, и заместительная терапия. Если 90% поджелудочной железы не
          работает, выписываются ферментные препараты. При острой форме
          заболевания лечение можно описать тремя словами: голод, холод и покой.
          Придерживаться такого режима нужно три дня. Кроме того, пациенту
          ставят капельницу со спазмолитиками и препаратом, который снижает
          секрецию. В случае некроза поджелудочной железы необходимо
          хирургическое вмешательство.
        </Text>
        <Subtitle>Можно ли вылечить панкреатит?</Subtitle>
        <Text>
          Острая форма панкреатита может закончиться только одним приступом,
          хронический панкреатит полностью вылечить не получится, но можно
          добиться ремиссии. Для этого необходимо вовремя принимать
          лекарства, сдавать анализы (кровь, кал на копрограмму, УЗИ брюшной
          полости, КТ и МРТ), заниматься профилактикой, соблюдать диету.
        </Text>
        <Subtitle>Народные средства</Subtitle>
        <Text style={{ color: "red" }}>
          Большинство трав обладают желчегонным действием, а всё желчегонное
          противопоказано при панкреатите, поэтому от лечения в домашних
          условиях с применением фито препаратов противопоказано!!!  
        </Text>
      </ScrollView>
    </Container>
  );
}
const reasons = [
  "конкременты (камни) в желчном пузыре;",
  "регулярное переедание, злоупотребление острой, жирной, жареной пищей, алкоголем;",
  "хронические заболевания желудка и двенадцатиперстной кишки;",
  "отравление токсичными веществами;",
  "прием некоторых медпрепаратов;",
  "эндокринные заболевания;",
  "генетическая предрасположенность;",
  "травмы брюшной полости.",
];

const symptoms = [
  "постоянная тошнота, приступы рвоты, не приносящие облегчения",
  "боль в области живота или поясницы (может усиливаться в положении лежа)",
  "резкая потеря массы тела",
  "гипергидроз (завышенная потливость)",
  "температура тела 38°C и выше",
  "боли в суставах",
  "диарея",
  "резкое изменение артериального давления",
  "пожелтение кожи или склер глаз",
  "общая слабость, бледность",
];
