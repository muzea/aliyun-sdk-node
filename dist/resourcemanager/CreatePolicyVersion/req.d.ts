export interface CreatePolicyVersionRequest {
    /**
     * 权限策略名称。
     * 长度为1~128个字符，可包含英文字母、数字和短横线（-）。
     * @example `OSS-Administrator`
     */
    "PolicyName": string;
    /**
     * 权限策略内容。
     * 长度为1~2048个字符。
     * @example `{ "Statement": [{ "Action": ["oss:*"], "Effect": "Allow", "Resource": ["acs:oss:*:*:*"]}], "Version": "1"}`
     */
    "PolicyDocument": string;
    /**
     * 是否设置为默认权限策略。
     * - false（默认值）：不设置为默认权限策略。
     * - true：设置为默认权限策略。
     * @example `false`
     */
    "SetAsDefault"?: boolean;
}
