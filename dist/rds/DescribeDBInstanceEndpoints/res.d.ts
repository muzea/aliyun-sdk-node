export interface DescribeDBInstanceEndpointsResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 实例名称。
         * @example `rm-u****`
         */
        DBInstanceName: string;
        /**
         * IP地址协议版本。取值如下：
         * - **ipv4**
         * - **ipv6**
         * @example `ipv4`
         */
        IpVersion: string;
        DBInstanceEndpoints: {
            /**
             * 实例的Endpoint相关信息列表。
             */
            DBInstanceEndpoint: {
                /**
                 * 实例的Endpoint ID。
                 * @example `ep-****`
                 */
                EndpointId: string;
                /**
                 * Endpoint类型，取值含义如下：
                 * * **Primary**：实例的读写Endpoint
                 * * **Readonly**：实例的只读Endpoint
                 * @example `Readonly`
                 */
                EndpointType: string;
                /**
                 * 用户自定义的Endpoint描述。
                 * @example `for readonly business`
                 */
                EndpointDescription: string;
                NodeItems: {
                    /**
                     * Endpoint节点相关信息列表。
                     */
                    NodeItem: {
                        /**
                         * 节点ID。
                         * @example `rn-****13p6tum4289h`
                         */
                        NodeId: string;
                        /**
                         * 实例ID。
                         * @example `rm-u****`
                         */
                        DBInstanceId: string;
                        /**
                         * 节点当前权重取值，按照该取值分配读流量。
                         * 取值范围：0～100
                         * @example `50`
                         */
                        Weight: number;
                    }[];
                };
                AddressItems: {
                    /**
                     * 连接地址相关信息列表。
                     */
                    AddressItem: {
                        /**
                         * VPC ID。
                         * @example `vpc-bp17xdic25d****`
                         */
                        VpcId: string;
                        /**
                         * 交换机ID。
                         * @example `vsw-bp12u14ecz****`
                         */
                        VSwitchId: string;
                        /**
                         * IP类型，取值含义如下：
                         * - **Public**：外网
                         * - **Private**：内网
                         * @example `Private`
                         */
                        IpType: string;
                        /**
                         * 连接端口号。
                         * @example `3306`
                         */
                        Port: string;
                        /**
                         * 连接地址。
                         * @example `rm****.mysql.rds.aliyuncs.com`
                         */
                        ConnectionString: string;
                        /**
                         * IP地址。
                         * @example `10.71.XX.XX`
                         */
                        IpAddress: string;
                    }[];
                };
            }[];
        };
    };
    /**
     * 请求ID。
     * @example `777C4593-8053-427B-****105593277CAB`
     */
    RequestId: string;
}
