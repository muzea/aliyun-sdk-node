export interface GetRoleRequest {
    /**
     * 角色名称。
     * 长度为1~64个字符，可包含英文字母、数字、点号（.）和短横线（-）。
     * @example `ECSAdmin`
     */
    "RoleName": string;
    /**
     * 语言类型。角色描述将以此语言返回。
     * - en：英文。
     * - zh-CN：中文。
     * - ja：日文。
     * @example `zh-CN`
     */
    "Language"?: string;
}
