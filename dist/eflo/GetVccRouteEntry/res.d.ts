export interface GetVccRouteEntryResponse {
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
     * @example `BDBCC783-84CA-5733-8EEA-645C88B9009C`
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
         * 路由条目ID
         * @example `vcc-rte-31ocvdhq`
         */
        VccRouteEntryId: string;
        /**
         * 租户ID
         * @example `1655449505171`
         */
        TenantId: string;
        /**
         * 灵骏连接实例 ID
         * @example `vcc-cn-zvp2w222001`
         */
        VccId: string;
        /**
         * 目的网段
         * @example `0.0.0.0/0`
         */
        DestinationCidrBlock: string;
        /**
         * 下一跳类型
         * @example `VCC`
         */
        NextHopType: string;
        /**
         * 下一跳实例
         * @example `local`
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
         * 修改时间
         * @example `1648085472000`
         */
        GmtModified: string;
        /**
         * 提示信息
         * @example `成功`
         */
        Message: string;
        /**
         * 资源组实例ID
         * @example `rg-aek2l4sq6l7u***`
         */
        ResourceGroupId: string;
    };
}
