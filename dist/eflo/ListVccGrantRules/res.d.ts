export interface ListVccGrantRulesResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 响应信息
     * @example `success`
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
         * 灵骏连接跨账号授权信息列表
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
             * 网络实例ID
             * @example `vcc-cn-jaj33d1kb05`
             */
            InstanceId: string;
            /**
             * 实例名称
             * @example `vcc-1`
             */
            InstanceName: string;
            /**
             * 授权产品类型。可选值：
             * - **VPD**：表示灵骏网段VPD实例。
             * - **VCC**：表示灵骏连接VCC实例。
             * @example `VCC`
             */
            Product: string;
            /**
             * 灵骏HUB ID
             * @example `er-kkopgtne`
             */
            ErId: string;
            /**
             * 授权租户ID
             * @example `1013666993027780`
             */
            GrantTenantId: string;
            /**
             * 当前跨账号资源是否已被跨账号灵骏HUB绑定，可选值：
             * - **true**  ：已使用
             * - **false** ：未使用
             * @example `true`
             */
            Used: boolean;
            /**
             * 创建时间
             * @example `1678273219000`
             */
            CreateTime: string;
            /**
             * 跨账号授权信息实例ID
             * @example `grant-rule-jpumgwvp`
             */
            GrantRuleId: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
    };
}
