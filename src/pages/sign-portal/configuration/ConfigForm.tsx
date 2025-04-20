import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useGetUserPharmacy } from "@/services/pharmacy/queries";
import { useGetMe } from "@/services/user/queries";
import { AuthTokens } from "@/types/auth.types";

// Check of this user is associated with any Pharmacy.
// If not then he can access if not redirect to dashboard if Authentecated

const ConfigForm = () => {
  const { getItem } = useLocalStorage<AuthTokens>("tokens");
  const { data, isError } = useGetUserPharmacy();

  console.log(data);
  console.log(isError)

  return <div>ConfigForm</div>;
};

export default ConfigForm;
