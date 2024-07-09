export interface DeletePolicyVersionRequest {
    /**
     * 权限策略名称。
     * 长度为1~128个字符，可包含英文字母、数字和短横线（-）。
     * @example `OSS-Administrator`
     */
    "PolicyName": string;
    /**
     * 权限策略版本标识。
     * 您可以调用[ListPolicyVersions](~~159982~~)查询权限策略版本标识。
     * @example `v3`
     */
    "VersionId": string;
}
