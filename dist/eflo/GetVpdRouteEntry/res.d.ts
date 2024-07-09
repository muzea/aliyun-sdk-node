export interface GetVpdRouteEntryResponse {
    /**
     * 响应码
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
         * 灵骏网段路由条目ID
         * @example `vpd-rte-toekyqel`
         */
        VpdRouteEntryId: string;
        /**
         * 租户ID
         * @example `1655449505171`
         */
        TenantId: string;
        /**
         * 灵骏网段实例 ID
         * @example `vpd-ze3na0wf`
         */
        VpdId: string;
        /**
         * 目标网段
         * @example `0.0.0.0/0`
         */
        DestinationCidrBlock: string;
        /**
         * 下一跳实例类型
         * @example `ER`
         */
        NextHopType: string;
        /**
         * 下一跳实例
         * @example `er-bmlqiym1`
         */
        NextHopId: string;
        /**
         * 路由类型
         * @example `BGP`
         */
        RouteType: string;
        /**
         * 状态
         * @example `Available`
         */
        Status: string;
        /**
         * 修改时间
         * @example `1678273219000`
         */
        GmtModified: string;
        /**
         * 资源组实例ID
         */
        ResourceGroupId: string;
    };
}
