export interface ListGrantVSwitchEnisResponse {
    /**
     * 请求ID。
     * @example `DBFE1736-2F33-5309-9954-875B11E9519D`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * ><notice>使用MaxResults和NextToken参数进行分页查询时，返回的Total参数值无意义。></notice>
     * @example `6`
     */
    TotalCount: string;
    /**
     * 弹性网卡信息列表。
     */
    GrantVSwitchEnis: {
        /**
         * VPC实例ID。
         * @example `vpc-p0w9alkte4w2htrqe****`
         */
        VpcId: string;
        /**
         * 交换机ID。
         * @example `vsw-p0w9s2ig1jnwgrbzl****`
         */
        VSwitchId: string;
        /**
         * 弹性网卡ID。
         * @example `eni-p0w172vv82kxzb49****`
         */
        NetworkInterfaceId: string;
        /**
         * 弹性网卡的描述信息。
         * @example `created by CBN`
         */
        Description: string;
        /**
         * 当前弹性网卡是否是转发路由器创建的。
         * - **true**：是。
         * - **false**：否。
         * 转发路由器创建的弹性网卡不支持成为组播源或者组播成员。
         * @example `false`
         */
        TransitRouterFlag: boolean;
        /**
         * 弹性网卡的名称。
         * @example `my-eni-name`
         */
        NetworkInterfaceName: string;
        /**
         * 弹性网卡主私网IPv4地址。
         * @example `192.168.**.**`
         */
        PrimaryIpAddress: string;
    }[];
    /**
     * 本次调用返回的查询凭证值。
     * @example `AAAAAdDWBF2****`
     */
    NextToken: string;
    /**
     * 本次读取的最大数据量。
     * @example `20`
     */
    MaxResults: number;
}
