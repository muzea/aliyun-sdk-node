export interface DescribeDBClusterNetInfoResponse {
    /**
     * 集群网络类型。
     * @example `VPC`
     */
    ClusterNetworkType: string;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    Items: {
        /**
         * 集群列表。
         */
        Address: {
            /**
             * 交换机ID。
             * > 当NetType取值为Public时，交换机ID返回为空。
             * @example `vsw-xxxxxx`
             */
            VSwitchId: string;
            /**
             * 集群连接地址。
             * @example `am-bpxxxxxxxx.ads.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * 网络类型。取值说明：
             * - **Public**：公网；
             * - **VPC**：VPC。
             * @example `VPC`
             */
            NetType: string;
            /**
             * 集群连接端口。
             * @example `3306`
             */
            Port: string;
            /**
             * VPC ID。
             * > 当NetType取值为Public时，VPC ID返回为空。
             * @example `vpc-xxxxxxxxx`
             */
            VPCId: string;
            /**
             * IP地址。
             * @example `192.168.x.x`
             */
            IPAddress: string;
            /**
             * 集群连接地址前缀。
             * @example `am-bpxxxxxxxx89k51380`
             */
            ConnectionStringPrefix: string;
        }[];
    };
}
