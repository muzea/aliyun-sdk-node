export interface ListVccRouteEntriesResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 响应消息，若成功请求为success
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `A88DFED5-24B7-5A3E-87DE-380BF06F3C90`
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
         * 灵骏连接路由条目信息列表
         */
        Data: {
            /**
             * 灵骏连接实例ID
             * @example `vcc-cn-zvp2w222001`
             */
            VccId: string;
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
             * @example `vcc-rte-maysfadg`
             */
            VccRouteEntryId: string;
            /**
             * 目标网段
             * @example `10.192.32.0/24`
             */
            DestinationCidrBlock: string;
            /**
             * 下一跳类型
             * @example `VCC`
             */
            NextHopType: string;
            /**
             * 下一跳实例
             * @example `vcc-cn-zvp2w222001
            `
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
             * @example `1642745758000`
             */
            GmtModified: string;
            /**
             * 提示信息
             * @example `success`
             */
            Message: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
    };
}
