export interface DetachPolicyRequest {
    /**
     * 资源组ID或资源组所属的云账号ID。
     * 指定要从哪个资源组或云账号中移除授权。
     * @example `rg-9gLOoK****`
     */
    "ResourceGroupId": string;
    /**
     * 权限策略类型。取值：
     * - Custom：自定义策略。
     * - System：系统策略。
     * @example `Custom`
     */
    "PolicyType": string;
    /**
     * 权限策略名称。
     * 长度为1~128个字符，可包含英文字母、数字和短横线（-）。
     * @example `OSS-Administrator`
     */
    "PolicyName": string;
    /**
     * 被授权对象类型。取值：
     * - IMSUser：RAM用户。
     * - IMSGroup：RAM用户组。
     * - ServiceRole：RAM角色。
     * @example `IMSUser`
     */
    "PrincipalType": string;
    /**
     * 被授权对象名称。
     * @example `alice@demo.onaliyun.com`
     */
    "PrincipalName": string;
}
