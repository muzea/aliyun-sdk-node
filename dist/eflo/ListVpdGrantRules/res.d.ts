export interface ListVpdGrantRulesResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `A56F7D3C-8850-5AF4-A342-2D71C9A9D1CC`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 总记录数
         * @example `0`
         */
        Total: number;
        /**
         * 灵骏网段授权信息列表
         */
        Data: {
            /**
             * 地域ID
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 租户ID
             * @example `1655449505171`
             */
            TenantId: string;
            /**
             * 灵骏网段实例ID
             * @example `vpd-8rgvqazb`
             */
            InstanceId: string;
            /**
             * 实例名称
             * @example `vpd-1`
             */
            InstanceName: string;
            /**
             * 授权产品类型。可选值：
             * - **VPD**：表示灵骏网段VPD实例。
             * - **VCC**：表示灵骏连接VCC实例。
             * 调用者无需指定。
             * @example `VPD`
             */
            Product: string;
            /**
             * 当前网络示例授权到指定的灵骏HUB示例ID
             * @example `er-kkopgtne`
             */
            ErId: string;
            /**
             * 当前实例授权到的租户ID
             * @example `1672372231790`
             */
            GrantTenantId: string;
            /**
             * 当前授权实例是否已被绑定
             * @example `true`
             */
            Used: boolean;
            /**
             * 创建时间
             * @example `1643013506000`
             */
            CreateTime: string;
            /**
             * 授权条目ID
             * @example `grant-rule-8rgvqazb`
             */
            GrantRuleId: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
    };
}
