export interface ListGrantVSwitchesToCenResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `A9288C78-881A-5D30-A8A9-68E05EE0A086`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表的条目数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 交换机信息列表。
     */
    VSwitches: {
        /**
         * 交换机所属的VPC实例ID。
         * @example `vpc-bp12ge2tq5gzdc915****`
         */
        VpcId: string;
        /**
         * 交换机所属的可用区ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 交换机实例ID。
         * @example `vsw-bp1194lh263wx1gsk****`
         */
        VSwitchId: string;
        /**
         * 交换机实例的名称。
         * @example `nametest`
         */
        VSwitchName: string;
    }[];
}
