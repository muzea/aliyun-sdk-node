export interface GetVccGrantRuleResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `success`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `0901F411-28FA-5B9C-BAEE-7776463FF0DC`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Content: {
        /**
         * 地域ID
         * @example `cn-wulanchabu`
         */
        RegionId: string;
        /**
         * 租户ID
         * @example `1620939556166279`
         */
        TenantId: string;
        /**
         * 网络实例ID
         * @example `vcc-cn-jaj34d75h01`
         */
        InstanceId: string;
        /**
         * 网络实例名称
         * @example `vcc-1`
         */
        InstanceName: string;
        /**
         * 网络产品Code:
         * - **VPD**：灵骏网段
         * - **VCC**：灵骏连接
         * @example `VCC`
         */
        Product: string;
        /**
         * 灵骏HUB实例ID
         * @example `er-aueyxxsy`
         */
        ErId: string;
        /**
         * 授权租户ID
         * @example `1620939556166277`
         */
        GrantTenantId: string;
        /**
         * 当前授权信息是否已被使用；，可选值：
         * - **true**  ：已使用
         * - **false** ：未使用
         * @example `false`
         */
        Used: boolean;
        /**
         * 创建时间
         * @example `1648085472000`
         */
        CreateTime: string;
        /**
         * 授权资源ID
         * @example `grant-rule-jaj34d75h01`
         */
        GrantRuleId: string;
        /**
         * 资源组实例ID
         */
        ResourceGroupId: string;
    };
}
