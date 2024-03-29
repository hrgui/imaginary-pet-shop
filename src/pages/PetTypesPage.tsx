import { ReactElement } from "react";
import PetTypesGrid from "~/components/shop/PetTypesGrid";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPetTypes } from "~/api-client/ApiClient";
import PageLoading from "~/components/app/PageLoading";

export function PetTypesPage(): ReactElement {
  const { isLoading, data: items = [] } = useQuery<unknown, unknown, PetType[]>(
    ["items"],
    getPetTypes
  );
  const navigate = useNavigate();

  if (isLoading) {
    return <PageLoading />;
  }

  return <PetTypesGrid petTypes={items} onItemView={({ id }) => navigate(`/item/${id}`)} />;
}

export default PetTypesPage;
