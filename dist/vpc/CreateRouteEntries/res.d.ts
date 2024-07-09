export interface CreateRouteEntriesResponse {
    /**
     * 添加成功的路由条目数。
     * @example `2`
     */
    SuccessCount: number;
    /**
     * 添加失败的路由条目数。
     * @example `2`
     */
    FailedCount: number;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 添加失败的路由条目数的详细信息。
     */
    FailedRouteEntries: {
        /**
         * 添加失败的自定义路由条目的目标网段。
         * @example `192.168.0.0/24`
         */
        DstCidrBlock: string;
        /**
         * 添加失败的自定义路由条目的下一跳实例的ID。
         * @example `i-j6c2fp57q8rr4jlu****`
         */
        NextHop: string;
        /**
         * 失败的错误码。
         * @example `VPC_ROUTE_ENTRY_CIDR_BLOCK_DUPLICATE`
         */
        FailedCode: string;
        /**
         * 失败的具体报错信息。
         * @example `Specified CIDR block is already exists, entry.cidrBlock=xxxx`
         */
        FailedMessage: string;
    }[];
    /**
     * 添加成功的自定义路由条目返回的实例ID信息。
     */
    RouteEntryIds: string[];
}
