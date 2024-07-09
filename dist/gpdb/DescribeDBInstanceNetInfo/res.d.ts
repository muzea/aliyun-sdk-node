export interface DescribeDBInstanceNetInfoResponse {
    /**
     * 请求ID。
     * @example `7565770E-7C45-462D-BA4A-8A5396F2CAD1`
     */
    RequestId: string;
    DBInstanceNetInfos: {
        /**
         * 实例的连接信息。
         */
        DBInstanceNetInfo: {
            /**
             * vSwitch ID，多个值用英文逗号（,）隔开。
             * @example `vsw-0xi4kt4dho2kx79p1****`
             */
            VSwitchId: string;
            /**
             * 数据库连接URL。
             * @example `gp-0xin9q82c33xc****-master.gpdb.rds.aliyuncs.com`
             */
            ConnectionString: string;
            /**
             * IP类型。
             * - 经典网络类型的实例IPType为：Inner、Public。
             * - VPC类型的实例IPType为：Private、Public。
             * @example `Inner`
             */
            IPType: string;
            /**
             * 端口信息。
             * @example `3432`
             */
            Port: string;
            /**
             * VPC实例ID。
             * @example `vpc-0xi8hbevlbj3bq0co****`
             */
            VpcInstanceId: string;
            /**
             * VPC ID。
             * @example `vpc-0xi8hbevlbj3bq0co****`
             */
            VPCId: string;
            /**
             * IP地址。
             * @example `127.0.0.1`
             */
            IPAddress: string;
            /**
             * 地址类型。
             * @example `Primary`
             */
            AddressType: string;
        }[];
    };
    /**
     * 实例网络类型：
     * - Classic：经典网络。
     * - VPC：VPC网络。
     * @example `VPC`
     */
    InstanceNetworkType: string;
}
