export interface GetPolicyResponse {
    /**
     * 请求ID。
     * @example `1E7A4802-AB57-570A-9860-F15B60E1586B`
     */
    RequestId: string;
    /**
     * 标签策略详情。
     */
    Policy: {
        /**
         * 标签策略名称。
         * @example `test`
         */
        PolicyName: string;
        /**
         * 标签策略描述。
         * @example `This is a tag policy example.`
         */
        PolicyDesc: string;
        /**
         * 标签策略内容。
         * @example `{\"tags\":{\"CostCenter\":{\"tag_value\":{\"@@assign\":[\"Beijing\",\"Shanghai\"]},\"tag_key\":{\"@@assign\":\"CostCenter\"}}}}`
         */
        PolicyContent: string;
        /**
         * 标签策略模式。取值：
         * - USER：单账号模式。
         * - RD：多账号模式。
         * 关于标签策略模式的更多信息，请参见[标签策略模式](~~417434~~)。
         * @example `USER`
         */
        UserType: string;
    };
}
