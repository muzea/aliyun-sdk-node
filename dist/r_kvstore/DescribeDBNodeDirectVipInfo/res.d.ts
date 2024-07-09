export interface DescribeDBNodeDirectVipInfoResponse {
    /**
     * 请求ID。
     * @example `ABAF95F6-35C1-4177-AF3A-70969EBD****`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    InstanceId: string;
    DirectVipInfo: {
        /**
         * 集群版Redis实例的分片Vip信息列表
         */
        VipInfo: {
            /**
             * 分片ID
             * @example `r-8vb3679b04551444-db-2`
             */
            NodeId: string;
            /**
             * 分片所属的ip地址。
             * @example `100.115.61.8`
             */
            Vip: string;
            /**
             * 端口号，取值范围为**1024**~**65535**，默认值为**6379**。
             * @example `6379`
             */
            Port: string;
            /**
             * 安全组的网络类型，返回值：
             * * **vpc**：专有网络。
             * @example `vpc`
             */
            NetType: string;
        }[];
    };
}
