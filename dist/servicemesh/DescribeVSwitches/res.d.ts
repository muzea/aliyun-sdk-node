export interface DescribeVSwitchesResponse {
    /**
     * TotalCount本次请求条件下的数据总量。此参数为可选参数，默认可不返回。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * 表示当前调用返回读取到的位置。显示为空表示数据已经读取完毕。
     * @example `“”`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 可用的虚拟交换机列表。
     */
    VSwitches: {
        /**
         * 交换机所在VPC的ID。
         * @example `vpc-bp17gig441u0msmd6****`
         */
        VpcId: string;
        /**
         * 虚拟交换机ID。
         * @example `vsw-bp1g24p9no0iqir46****`
         */
        VSwitchId: string;
        /**
         * 虚拟交换机的状态，取值：
         * - `Pending`：配置中。
         * - `Available`：可用。
         * @example `Available`
         */
        Status: string;
        /**
         * 是否是默认交换机，取值：
         * - `true`：默认交换机。
         * - `false`：不是默认交换机。
         * @example `false`
         */
        IsDefault: boolean;
        /**
         * 虚拟交换机名称。
         * @example `vsw-test`
         */
        VSwitchName: string;
        /**
         * 交换机所属的可用区。
         * @example `cn-hangzhou-k`
         */
        ZoneId: string;
    }[];
}
