export interface DetachAppPolicyFromIdentityRequest {
    /**
     * 身份类型，取值：
     * - **RamUser**：RAM用户。
     * - **RamRole**：RAM角色。
     * @example `RamUser`
     */
    "IdentityType": string;
    /**
     * 身份名称。
     * - 当类型为RamUser时，传入RAM用户ID。
     * - 当类型为RamRole时，传入角色名称。
     * @example `test****name`
     */
    "IdentityName": string;
    /**
     * 应用ID。当策略名称为VODAppAdministratorAccess时，该字段非必选。其他策略时，该字段必填。
     * - 取值（默认）：**app-1000000**。
     * - 使用说明，请参见[多应用](~~113600~~)。
     * @example `app-****`
     */
    "AppId"?: string;
    /**
     * 策略名称。多个名称使用英文逗号（,）分隔。暂时只支持设置为系统策略，取值：
     * - **VODAppFullAccess**：管理和操作应用下所有资源的权限。
     * - **VODAppReadOnlyAccess**：只读访问应用下所有资源的权限。
     * - **VODAppAdministratorAccess**：应用管理员权限。
     * @example `VODAppFullAccess`
     */
    "PolicyNames": string;
}
