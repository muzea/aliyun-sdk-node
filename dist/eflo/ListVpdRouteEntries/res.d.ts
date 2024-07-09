export interface ListVpdRouteEntriesResponse {
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
     * @example `039C3C3A-3C37-5672-80D5-D8CD48C676D1`
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
         * 灵骏网段路由条目列表
         */
        Data: {
            /**
             * 灵骏网段实例ID
             * @example `vpd-eoiy88ju`
             */
            VpdId: string;
            /**
             * 租户ID
             * @example `1655449505171`
             */
            TenantId: string;
            /**
             * 资源所属租户ID
             * @example `1655449505171`
             */
            ResourceTenantId: string;
            /**
             * 地域
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 路由条目ID
             * @example `vpd-rte-toekyqel`
             */
            VpdRouteEntryId: string;
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
             * 更新时间
             * @example `1678273219000`
             */
            GmtModified: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
    };
}
