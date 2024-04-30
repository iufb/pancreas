import { Stack } from "expo-router";
import { HealthDataTable } from "../../components";
import { Container, Title } from "../../shared/ui";

const Stats = () => {
  return (
    <Container>
      <Stack.Screen options={{ title: "Здоровье:" }} />

      <Title>Статистика:</Title>
      <HealthDataTable />
    </Container>
  );
};
export default Stats;
