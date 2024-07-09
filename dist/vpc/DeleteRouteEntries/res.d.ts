export interface DeleteRouteEntriesResponse {
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 删除成功的路由条目数。
     * @example `2`
     */
    SuccessCount: number;
    /**
     * 删除失败的路由条目数。
     * @example `2`
     */
    FailedCount: number;
    /**
     * 删除失败的路由条目信息。
     */
    FailedRouteEntries: {
        /**
         * 删除失败的路由条目ID。
         * @example `rte-bp1mnnr2al0naomnpv****`
         */
        RouteEntryId: string;
        /**
         * 删除失败的路由条目的目标网段，支持IPv4网段、IPv6网段和前缀列表网段。
         * @example `47.100.XX.XX/24`
         */
        DstCidrBlock: string;
        /**
         * 删除失败的下一跳实例ID。
         * @example `i-j6c2fp57q8rr4jlu****`
         */
        NextHop: string;
        /**
         * 失败的错误码。
         * @example `VPC_ROUTER_ENTRY_NOT_EXIST`
         */
        FailedCode: string;
        /**
         * 失败的具体报错信息。
         * @example `vRouterEntry not exists`
         */
        FailedMessage: string;
    }[];
}
