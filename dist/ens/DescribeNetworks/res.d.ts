export interface DescribeNetworksResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 列表数据总数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 当前查询每页的行数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: number;
    Networks: {
        /**
         * 网络列表。
         */
        Network: {
            /**
             * ENS节点ID。
             * @example `cn-beijing`
             */
            EnsRegionId: string;
            /**
             * 网路ID。
             * @example `n-5***`
             */
            NetworkId: string;
            /**
             * 网络名称。
             * @example `example`
             */
            NetworkName: string;
            /**
             * 网络的IPv4网段。
             * @example `10.0.xx.xx/24`
             */
            CidrBlock: string;
            /**
             * 网络的状态，取值：
             * - Pending：配置中。
             * - Available：可用。
             * @example `Available`
             */
            Status: string;
            /**
             * 网络的描述信息。
             * @example `exampleDescription`
             */
            Description: string;
            /**
             * 创建时间，时间戳（毫秒）。
             * @example `1653620630000`
             */
            CreatedTime: string;
            VSwitchIds: {
                /**
                 * 网络中交换机的列表。
                 */
                VSwitchId: string[];
            };
            /**
             * 路由表ID。
             * @example `rtb-5**`
             */
            RouterTableId: string;
            /**
             * 网络ACL的ID。
             * @example `nacl-a2do9e413e0spxscd****`
             */
            NetworkAclId: string;
        }[];
    };
}
