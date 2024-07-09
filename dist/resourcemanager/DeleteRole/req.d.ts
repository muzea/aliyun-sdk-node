export interface DeleteRoleRequest {
    /**
     * 角色名称。
     * 长度为1~64个字符，可包含英文字母、数字、点号（.）和短横线（-）。
     * @example `ECSAdmin`
     */
    "RoleName": string;
}
