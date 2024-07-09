export interface ListAppPoliciesForIdentityRequest {
    /**
     * 身份类型。取值：
     * - **RamUser**（RAM用户）
     * - **RamRole**（RAM角色）
     * @example `RamUser`
     */
    "IdentityType"?: string;
    /**
     * 身份名称。
     * - 类型为RamUser时，传入RAM用户ID
     * - 类型为RamRole时，传入角色名称。
     * @example `test****name`
     */
    "IdentityName"?: string;
    /**
     * 应用ID。 默认取值：**app-1000000**。使用说明，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
}
