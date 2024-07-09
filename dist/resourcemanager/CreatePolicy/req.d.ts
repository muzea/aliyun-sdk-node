export interface CreatePolicyRequest {
    /**
     * 权限策略名称。
     * 长度为1~128个字符，可包含英文字母、数字和短划线（-）。
     * @example `OSS-Administrator`
     */
    "PolicyName": string;
    /**
     * 权限策略描述。
     * 长度为1~1024个字符。
     * @example `OSS管理员权限`
     */
    "Description"?: string;
    /**
     * 权限策略内容。
     * 长度为1~2048个字符。
     * @example `{ "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}`
     */
    "PolicyDocument": string;
}
