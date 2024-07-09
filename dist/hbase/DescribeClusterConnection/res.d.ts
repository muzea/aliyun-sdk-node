export interface DescribeClusterConnectionResponse {
    /**
     * 专有网络ID。
     * @example `vpc-bp15s22y1a7sff5gj****`
     */
    VpcId: string;
    /**
     * 专有网络下的虚拟交换机ID。
     * @example `vsw-bp1foll427ze3d4ps****`
     */
    VSwitchId: string;
    /**
     * 请求ID。
     * @example `70220050-A465-5DCC-8C0C-C38C6E3DB24D`
     */
    RequestId: string;
    /**
     * 是否为多模管控，返回值：
     * - **true**：是多模管控。
     * - **false**：不是多模管控。
     * @example `true`
     */
    IsMultimod: string;
    /**
     * 数据库引擎类型，返回值：
     * - **hbaseue**：HBase增强版。
     * - **hbase**：HBase标准版或HBase单机版。
     * - **bds**：表示BDS实例。
     * @example `hbaseue`
     */
    DbType: string;
    /**
     * 实例的网络类型，返回值：
     * - **VPC**：专有网络类型。
     * - **CLASSIC**：经典网络类型。
     * @example `VPC`
     */
    NetType: string;
    /**
     * WebUI连接信息列表。
     */
    UiProxyConnAddrInfo: {
        /**
         * 连接地址。
         * @example `ld-bp150tns0sjxs****-master1-001.hbaseue.rds.aliyuncs.com`
         */
        ConnAddr: string;
        /**
         * 连接端口。
         * @example `443`
         */
        ConnAddrPort: string;
        /**
         * 连接地址为公网访问类型。
         * @example `PUBLIC`
         */
        NetType: string;
    };
    /**
     * Thrift连接地址信息列表。
     * > 数据库引擎类型为**hbase**会返回此参数列表。
     */
    ThriftConn: {
        /**
         * 连接地址。
         * @example `hb-bp1u0639js2h7****-proxy-thrift.hbase.rds.aliyuncs.com`
         */
        ConnAddr: string;
        /**
         * 连接端口。
         * @example `9099`
         */
        ConnAddrPort: string;
        /**
         * 连接地址的访问类型，返回值：
         * - **2**：内网访问。
         * - **0**：公网访问。
         * @example `2`
         */
        NetType: string;
    };
    ZkConnAddrs: {
        /**
         * Zookeeper连接信息列表。
         */
        ZkConnAddr: {
            /**
             * 连接地址。
             * @example `ld-bp150tns0sjxs****-master1-001.hbaseue.rds.aliyuncs.com`
             */
            ConnAddr: string;
            /**
             * 连接端口。
             * @example `2181`
             */
            ConnAddrPort: string;
            /**
             * 连接地址的访问类型，返回值：
             * - **2**：内网访问。
             * - **0**：公网访问。
             * @example `2`
             */
            NetType: string;
        }[];
    };
    SlbConnAddrs: {
        /**
         * Slb连接信息列表。
         */
        SlbConnAddr: {
            /**
             * Slb类型，返回值：
             * - **hbaseue**：HBase增强版类型。
             * - **thrift**：Thrift服务类型。
             * - **Phoenix**：Phoenix服务类型。
             * @example `hbaseue`
             */
            SlbType: string;
            /**
             * 连接地址信息。
             */
            ConnAddrInfo: {
                /**
                 * 连接地址。
                 * @example `ld-bp150tns0sjxs****-proxy-hbaseue-pub.hbaseue.rds.aliyuncs.com`
                 */
                ConnAddr: string;
                /**
                 * 连接端口。
                 * @example `9190`
                 */
                ConnAddrPort: string;
                /**
                 * 连接地址的访问类型，返回值：
                 * - **2**：内网访问。
                 * - **0**：公网访问。
                 * @example `0`
                 */
                NetType: string;
            };
        }[];
    };
    ServiceConnAddrs: {
        /**
         * 子服务地址列表。
         */
        ServiceConnAddr: {
            /**
             * 服务类型。
             * @example `PhoenixConnAddr`
             */
            ConnType: string;
            /**
             * 连接地址信息。
             */
            ConnAddrInfo: {
                /**
                 * Phoenix连接地址。
                 * @example `hb-****-proxy-phoenix.hbase.rds.aliyuncs.com`
                 */
                ConnAddr: string;
                /**
                 * 连接端口。
                 * @example `8765`
                 */
                ConnAddrPort: string;
                /**
                 * 连接地址的访问类型，返回值：
                 * - **2**：内网访问。
                 * - **0**：公网访问。
                 * @example `2`
                 */
                NetType: string;
            };
        }[];
    };
}
