export interface UpdatePolicyDescriptionRequest {
    /**
     * 权限策略名称。
     * @example `TestPolicy`
     */
    "PolicyName"?: string;
    /**
     * 权限策略描述。
     * 长度为1~1024个字符。
     * @example `This is a test policy.`
     */
    "NewDescription"?: string;
}
