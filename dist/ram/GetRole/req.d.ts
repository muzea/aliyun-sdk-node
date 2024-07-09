export interface GetRoleRequest {
    /**
     * 指定角色名。
     * 长度为1~64个字符，可包含英文字母、数字、点号（.）和短划线（-）。
     * @example `ECSAdmin`
     */
    "RoleName"?: string;
}
