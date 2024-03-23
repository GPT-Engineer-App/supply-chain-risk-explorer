import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Select, List, ListItem, ListIcon, Divider } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

const materials = [
  {
    name: "Material 1",
    steps: [
      { name: "Step 1", risks: ["Risk 1", "Risk 2"] },
      { name: "Step 2", risks: ["Risk 3", "Risk 4"] },
      { name: "Step 3", risks: ["Risk 5"] },
      { name: "Step 4", risks: ["Risk 6", "Risk 7"] },
      { name: "Step 5", risks: ["Risk 8"] },
    ],
  },
  {
    name: "Material 2",
    steps: [
      { name: "Step 1", risks: ["Risk 9", "Risk 10"] },
      { name: "Step 2", risks: ["Risk 11"] },
      { name: "Step 3", risks: ["Risk 12", "Risk 13"] },
      { name: "Step 4", risks: ["Risk 14"] },
      { name: "Step 5", risks: ["Risk 15", "Risk 16"] },
    ],
  },
  {
    name: "Material 3",
    steps: [
      { name: "Step 1", risks: ["Risk 17"] },
      { name: "Step 2", risks: ["Risk 18", "Risk 19"] },
      { name: "Step 3", risks: ["Risk 20"] },
      { name: "Step 4", risks: ["Risk 21", "Risk 22"] },
      { name: "Step 5", risks: ["Risk 23"] },
    ],
  },
  {
    name: "Material 4",
    steps: [
      { name: "Step 1", risks: ["Risk 24", "Risk 25"] },
      { name: "Step 2", risks: ["Risk 26"] },
      { name: "Step 3", risks: ["Risk 27", "Risk 28"] },
      { name: "Step 4", risks: ["Risk 29"] },
      { name: "Step 5", risks: ["Risk 30", "Risk 31"] },
    ],
  },
  {
    name: "Material 5",
    steps: [
      { name: "Step 1", risks: ["Risk 32"] },
      { name: "Step 2", risks: ["Risk 33", "Risk 34"] },
      { name: "Step 3", risks: ["Risk 35"] },
      { name: "Step 4", risks: ["Risk 36", "Risk 37"] },
      { name: "Step 5", risks: ["Risk 38"] },
    ],
  },
];

const Index = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(materials[0]);

  const handleMaterialChange = (e) => {
    const materialName = e.target.value;
    const material = materials.find((m) => m.name === materialName);
    setSelectedMaterial(material);
  };

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Supply Chain Risk Assessment
      </Heading>
      <HStack spacing={4} mb={8}>
        <Text>Select a material:</Text>
        <Select onChange={handleMaterialChange}>
          {materials.map((material) => (
            <option key={material.name} value={material.name}>
              {material.name}
            </option>
          ))}
        </Select>
      </HStack>
      <VStack align="stretch" spacing={8}>
        {selectedMaterial.steps.map((step) => (
          <Box key={step.name}>
            <Heading as="h2" size="lg" mb={2}>
              {step.name}
            </Heading>
            <List spacing={2}>
              {step.risks.map((risk) => (
                <ListItem key={risk}>
                  <ListIcon as={FaCircle} color="red.500" />
                  {risk}
                </ListItem>
              ))}
            </List>
            <Divider my={4} />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
