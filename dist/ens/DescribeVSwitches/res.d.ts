export interface DescribeVSwitchesResponse {
    /**
     * 当前查询每页的行数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表数据总数。
     * @example `3`
     */
    TotalCount: number;
    VSwitches: {
        /**
         * 返回数据列表，详见返回示例（JSON格式）VSwitch对象数组。
         */
        VSwitch: {
            /**
             * ENS节点ID。
             * @example `cn-xian-unicom`
             */
            EnsRegionId: string;
            /**
             * 交换机的状态，如下所示：
             * - Pending：配置中。
             * - Available：可用。
             * @example `Pending`
             */
            Status: string;
            /**
             * 可用IP数量。
             * @example `1024`
             */
            FreeIpCount: number;
            /**
             * 交换机ID。
             * @example `vsw-5m9xhlq8oh***`
             */
            VSwitchId: string;
            /**
             * 交换机的IPv4网段。
             * @example `10.21.224.0/22`
             */
            CidrBlock: string;
            /**
             * 交换机的描述信息。
             * @example `VSwitchDescription`
             */
            Description: string;
            /**
             * 网络ID。
             * @example `vpc-25cdvfeq58pl****`
             */
            NetworkId: string;
            /**
             * 创建时间，使用UTC时间格式，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2020-06-16T06:33:15Z`
             */
            CreatedTime: string;
            /**
             * 交换机名称。
             * @example `testVSwitchName`
             */
            VSwitchName: string;
        }[];
    };
}
