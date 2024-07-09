export interface GetErRouteEntryResponse {
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
     * @example `1F38A2E6-CB47-5369-95D2-96D0C287B4A5`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Content: {
        /**
         * 地域ID
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 路由条目ID
         * @example `er-rte-4q0jbylz`
         */
        ErRouteEntryId: string;
        /**
         * 租户ID
         * @example `1655449505171`
         */
        TenantId: string;
        /**
         * 灵骏HUB实例ID
         * @example `er-aueyxxsy`
         */
        ErId: string;
        /**
         * 目的网段
         * @example `11.0.0.0/16`
         */
        DestinationCidrBlock: string;
        /**
         * 下一跳实例类型
         * @example `VCC`
         */
        NextHopType: string;
        /**
         * 下一跳实例
         * @example `vcc-cn-209300qha01`
         */
        NextHopId: string;
        /**
         * 路由类型
         * @example `System`
         */
        RouteType: string;
        /**
         * 状态
         * @example `Available`
         */
        Status: string;
        /**
         * 更新时间
         * @example `1666677783000`
         */
        GmtModified: string;
        /**
         * 资源组实例ID
         */
        ResourceGroupId: string;
    };
}
