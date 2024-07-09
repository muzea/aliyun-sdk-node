export interface DescribeDBInstanceNetInfoResponse {
    /**
     * 请求ID。
     * @example `ADF42B18-43FD-5100-83A9-BE81AB70C863`
     */
    RequestId: string;
    /**
     * 实例网络信息。
     */
    DBInstanceNetInfos: {
        /**
         * 实例的网络类型，取值如下：
         * - **VPC**：表示专有网络VPC。
         *
         * - **PUBLIC**：表示公网。
         * @example `VPC`
         */
        NetType: string;
        /**
         * VPC实例ID。
         * @example `selectdb-cn-h033cnd****-fe-20230816101006`
         */
        VpcInstanceId: string;
        /**
         * VPC ID。
         * @example `vpc-wz90scxq6ods388ft****`
         */
        VpcId: string;
        /**
         * 交换机ID。
         * @example `vsw-uf6mlqti065rer6m0****`
         */
        VswitchId: string;
        /**
         * 用户是否可见，取值说明：
         * - **true**：用户可见。
         * - **false**：用户不可见。
         * @example `true`
         */
        UserVisible: boolean;
        /**
         * 连接地址。
         * @example `selectdb-cn-h033cnd****-fe.selectdbfe.pre.rds.aliyuncs.com`
         */
        ConnectionString: string;
        /**
         * IP地址。
         * @example `172.16.XX.XX`
         */
        Ip: string;
        /**
         * 端口对象。
         */
        PortList: {
            /**
             * 端口类型，取值说明：
             * - **HttpPort**：Http协议端口。
             * - **MySQLPort**：MySQL协议端口。
             * @example `9030`
             */
            Protocol: string;
            /**
             * 连接端口号。
             * @example `MySQLPort`
             */
            Port: number;
        }[];
        /**
         * 集群ID。
         * @example `selectdb-cn-****-be`
         */
        ClusterId: string;
    }[];
    /**
     * BE实例的网络列表。
     */
    DBClustersNetInfos: {
        /**
         * 网络类型。
         * @example `VPC/PUBLIC`
         */
        NetType: string;
        /**
         * VPC实例ID。
         * @example `selectdb-cn-****-fe-20230816101006`
         */
        VpcInstanceId: string;
        /**
         * VPC ID。
         * @example `vpc-****`
         */
        VpcId: string;
        /**
         * 交换机ID。
         * @example `vsw-****`
         */
        VswitchId: string;
        /**
         * 用户是否可见。
         * @example `true/false`
         */
        UserVisible: boolean;
        /**
         * 连接地址。
         * @example `selectdb-cn-****-fe.selectdbfe.pre.rds.aliyuncs.com`
         */
        ConnectionString: string;
        /**
         * IP地址。
         * @example `8.131.***.***`
         */
        Ip: string;
        /**
         * 端口列表。
         */
        PortList: {
            /**
             * 端口类型。
             * @example `MySQLPort/HttpPort`
             */
            Protocol: string;
            /**
             * 连接端口号。
             * @example `9030/8080`
             */
            Port: number;
        }[];
        /**
         * 集群ID。
         * @example `selectdb-cn-****-be`
         */
        ClusterId: string;
    }[];
}
