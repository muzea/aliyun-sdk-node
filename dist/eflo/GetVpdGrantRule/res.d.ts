export interface GetVpdGrantRuleResponse {
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
     * @example `9C50C9CD-E799-54DA-BA7A-1FAF3DF80857`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
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
         * @example `vpd-xxxxxxxxxx`
         */
        InstanceId: string;
        /**
         * 网络实例名称
         * @example `vpd-lingjun`
         */
        InstanceName: string;
        /**
         * 网络产品Code:
         * - **VPD**：灵骏网段
         * - **VCC**：灵骏连接
         * @example `VPD`
         */
        Product: string;
        /**
         * 灵骏HUB实例ID
         * @example `er-kkopgtne`
         */
        ErId: string;
        /**
         * 授权租户ID
         * @example `1620939556166277`
         */
        GrantTenantId: string;
        /**
         * 当前授权信息是否已被使用；默认为false
         * @example `0`
         */
        Used: boolean;
        /**
         * 创建时间
         * @example `1648085472000`
         */
        CreateTime: string;
        /**
         * 授权资源ID
         * @example `grant-rule-xxxxxx`
         */
        GrantRuleId: string;
        /**
         * 资源组实例ID
         */
        ResourceGroupId: string;
    };
}
