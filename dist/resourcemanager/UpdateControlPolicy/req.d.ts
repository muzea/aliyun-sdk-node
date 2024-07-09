export interface UpdateControlPolicyRequest {
    /**
     * 管控策略ID。
     * @example `cp-jExXAqIYkwHN****`
     */
    "PolicyId": string;
    /**
     * 新的管控策略名称。
     * 长度为1~128个字符，必须以英文字母开头，可以包含英文字母、数字和短划线（-）。
     * @example `NewControlPolicy`
     */
    "NewPolicyName"?: string;
    /**
     * 新的管控策略描述。
     * 长度为1~1024个字符，必须以英文字母开头，可以包含英文字母、数字、下划线（_）和短划线（-）。
     * @example `ExampleControlPolicy`
     */
    "NewDescription"?: string;
    /**
     * 新的管控策略内容。
     * 最大长度为4096个字符。
     * 管控策略语言，请参见[管控策略语言](~~179096~~)。
     * 管控策略示例，请参见[自定义管控策略示例](~~181474~~)。
     * @example `{"Version":"1","Statement":[{"Effect":"Deny","Action":["ram:UpdateRole","ram:DeleteRole","ram:AttachPolicyToRole","ram:DetachPolicyFromRole"],"Resource":"acs:ram:*:*:role/ResourceDirectoryAccountAccessRole"}]}`
     */
    "NewPolicyDocument"?: string;
}
