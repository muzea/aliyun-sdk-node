import { AssumeRoleRequest } from "./AssumeRole/req";
import { AssumeRoleResponse } from "./AssumeRole/res";
import { GetCallerIdentityRequest } from "./GetCallerIdentity/req";
import { GetCallerIdentityResponse } from "./GetCallerIdentity/res";
import { AssumeRoleWithSAMLRequest } from "./AssumeRoleWithSAML/req";
import { AssumeRoleWithSAMLResponse } from "./AssumeRoleWithSAML/res";
import { AssumeRoleWithOIDCRequest } from "./AssumeRoleWithOIDC/req";
import { AssumeRoleWithOIDCResponse } from "./AssumeRoleWithOIDC/res";

interface STS {
    /**
     * 通过调用AssumeRole接口，获取一个扮演RAM角色的临时身份凭证（STS Token）。
     */
    AssumeRole(query: AssumeRoleRequest): Promise<AssumeRoleResponse>;
    /**
     * 调用GetCallerIdentity获取当前调用者的身份信息。
     */
    GetCallerIdentity(query: GetCallerIdentityRequest): Promise<GetCallerIdentityResponse>;
    /**
     * 进行SAML角色SSO时，通过调用AssumeRoleWithSAML接口，获取扮演RAM角色的临时身份凭证（STS Token）。
     */
    AssumeRoleWithSAML(query: AssumeRoleWithSAMLRequest): Promise<AssumeRoleWithSAMLResponse>;
    /**
     * 进行OIDC角色SSO时，通过调用AssumeRoleWithOIDC接口，获取扮演RAM角色的临时身份凭证（STS Token）。
     */
    AssumeRoleWithOIDC(query: AssumeRoleWithOIDCRequest): Promise<AssumeRoleWithOIDCResponse>;
}
export default STS;
