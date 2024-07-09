export interface CreatePolicyVersionRequest {
    /**
     * 权限策略名称。
     * @example `OSS-Administrator`
     */
    "PolicyName"?: string;
    /**
     * 权限策略内容，最大长度6144字节。
     * @example `{"Statement":[{"Action":["oss:*"],"Effect":"Allow","Resource":["acs:oss:*:*:*"]}],"Version":"1"}`
     */
    "PolicyDocument"?: string;
    /**
     * 是否设置为默认权限策略，默认值为`false`。
     * @example `false`
     */
    "SetAsDefault"?: boolean;
    /**
     * 权限策略版本自动化轮转机制，可以删除历史权限策略版本。
     * 目前包含：
     * - `None`：关闭轮转机制。
     * - `DeleteOldestNonDefaultVersionWhenLimitExceeded`：当权限策略版本数量超限时，删除最早且非活跃的版本。
     * 默认值：`None`。
     * @example `None`
     */
    "RotateStrategy"?: string;
}
