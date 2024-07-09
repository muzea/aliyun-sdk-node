export interface GetPolicyVersionRequest {
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
     * 权限策略版本标识。
     * @example `v3`
     */
    "VersionId": string;
}
