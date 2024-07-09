export interface DescribeEndpointsResponse {
    /**
     * 专有网络ID，当NetType为**VPC**时会返回此参数。
     * @example `vpc-bp15s22y1a7sff5gj****`
     */
    VpcId: string;
    /**
     * 虚拟交换机ID，当NetType为**VPC**时会返回此参数。
     * @example `vsw-bp1foll427ze3d4ps****`
     */
    VSwitchId: string;
    /**
     * 实例引擎类型，返回值：
     * - **hbaseue**
     * - **hbase**
     * - **spark**
     * - **geomesa**
     * @example `hbaseue`
     */
    Engine: string;
    /**
     * 请求ID。
     * @example `F072593C-5234-5B56-9F63-3C7A3AD85D66`
     */
    RequestId: string;
    /**
     * 实例的网络类型，返回值：
     * - **VPC**：专有网络类型。
     * - **CLASSIC**：经典网络类型。
     * @example `VPC`
     */
    NetType: string;
    ConnAddrs: {
        /**
         * 数据库连接信息列表。
         */
        ConnAddrInfo: {
            /**
             * 连接地址。
             * @example `****`
             */
            ConnAddr: string;
            /**
             * 连接端口。
             * @example `****`
             */
            ConnAddrPort: string;
            /**
             * 连接的类型，返回值：
             * - **uiProxyConn**：UI访问连接。
             * - **zkConn**：ZK连接。
             * - **thriftConn**：thrift连接。
             * - **slbConn_thrift**：负载均衡的thrift连接。
             * - **serviceConn_LivyConnAddr**： livy连接。
             * @example `zkConn`
             */
            ConnType: string;
            /**
             * 连接的访问网络类型，返回值：
             * - **PUBLIC**或**0**：表示公网访问。
             * - **PRIVATE**或**1**：表示私网访问。
             * - **VPC**或**2**：表示VPC访问。
             * @example `2`
             */
            NetType: string;
        }[];
    };
}
