import { AssumeRoleRequest } from "./AssumeRole/req";
import { AssumeRoleResponse } from "./AssumeRole/res";
import { AssumeRoleWithSAMLRequest } from "./AssumeRoleWithSAML/req";
import { AssumeRoleWithSAMLResponse } from "./AssumeRoleWithSAML/res";
import { GetCallerIdentityRequest } from "./GetCallerIdentity/req";
import { GetCallerIdentityResponse } from "./GetCallerIdentity/res";

interface STS {
    AssumeRole(query: AssumeRoleRequest): Promise<AssumeRoleResponse>;
    AssumeRoleWithSAML(query: AssumeRoleWithSAMLRequest): Promise<AssumeRoleWithSAMLResponse>;
    GetCallerIdentity(query: GetCallerIdentityRequest): Promise<GetCallerIdentityResponse>;
}
export default STS;
