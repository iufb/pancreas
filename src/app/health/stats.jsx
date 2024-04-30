import { Stack } from "expo-router";
import { HealthDataTable } from "../../components";
import { Back, Container, Title } from "../../shared/ui";

const Stats = () => {
  return (
    <Container>
      <Stack.Screen
        options={{
          title: "Здоровье:",
          headerBackVisible: false,
          headerLeft: () => <Back />,
        }}
      />

      <Title>Статистика:</Title>
      <HealthDataTable />
    </Container>
  );
};
export default Stats;
