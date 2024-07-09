export interface DescribeNetworkAttributeResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * ENS节点ID。
     * @example `cn-beijing`
     */
    EnsRegionId: string;
    /**
     * 网络ID。
     * @example `n-5***`
     */
    NetworkId: string;
    /**
     * 网路名称。
     * @example `abc`
     */
    NetworkName: string;
    /**
     * 网络的IPv4网段。
     * @example `10.0.0.0/24`
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
     * @example `abc`
     */
    Description: string;
    /**
     * 创建时间，使用UTC时间格式，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-06-01T00:00:00Z`
     */
    CreatedTime: string;
    VSwitchIds: {
        /**
         * 网络下的交换机列表。
         */
        VSwitchId: string[];
    };
    CloudResources: {
        /**
         * 网络下的资源列表。
         */
        CloudResourceSetType: {
            /**
             * 网络下的资源数量。
             * @example `3`
             */
            ResourceCount: number;
            /**
             * 资源类型。
             * VSwitch。
             * @example `VSwitch`
             */
            ResourceType: string;
        }[];
    };
    /**
     * 路由表id
     * @example `rtb-5***`
     */
    RouterTableId: string;
    /**
     * 网络ACL的ID。
     * @example `nacl-a2do9e413e0sp****`
     */
    NetworkAclId: string;
}
