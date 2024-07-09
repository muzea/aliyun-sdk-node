export interface DeleteRouteEntriesRequest {
    /**
     * 路由表所属地域的ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要删除的路由条目信息。
     */
    "RouteEntries"?: {
        /**
         * 要删除的路由条目所在的路由表的ID。最多支持输入50个路由表ID。
         * @example `vtb-2ze3jgygk9bmsj23s****`
         */
        RouteTableId: string;
        /**
         * 要删除的路由条目ID。最多支持输入50个路由条目ID。
         * > 当**RouteEntryId**参数未输入时，**DstCidrBlock**和**NextHop**参数必填。
         * @example `rte-bp1mnnr2al0naomnpv****`
         */
        RouteEntryId: string;
        /**
         * 要删除的路由条目的目标网段，支持IPv4网段、IPv6网段和前缀列表网段。最多支持输入50个目标网段。
         * > 当**RouteEntryId**参数未输入时，**DstCidrBlock**和**NextHop**参数必填。
         * @example `47.100.XX.XX/24`
         */
        DstCidrBlock: string;
        /**
         * 要删除的下一跳实例的ID。最多支持输入50个实例ID。
         * > 当**RouteEntryId**参数未输入时，**DstCidrBlock**和**NextHop**参数必填。
         * @example `i-j6c2fp57q8rr4jlu****`
         */
        NextHop: string;
    }[];
}
