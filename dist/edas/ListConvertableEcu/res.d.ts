export interface ListConvertableEcuResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
    InstanceList: {
        /**
         * 可导入该集群的ECS实例列表。
         */
        Instance: {
            /**
             * VPC网络ID。
             * @example `vpc-2zef6ob8m************`
             */
            VpcId: string;
            /**
             * 实例状态：
             * - Pending：创建中。
             * - Running：运行中。
             * - Starting：启动中。
             * - Stopping：停止中。
             * - Stopped：已停止。
             * @example ` Running`
             */
            Status: string;
            /**
             * ECS实例私网IP，当ECS网络类型为VPC专有网络类型时。
             * @example `192.XX.XX.123`
             */
            PrivateIp: string;
            /**
             * 是否过期。
             * @example `false`
             */
            Expired: boolean;
            /**
             * ECS实例ID。
             * @example `i-2ze7s2v0b***********`
             */
            InstanceId: string;
            /**
             * ECS实例MEM。
             * @example `4096`
             */
            Mem: number;
            /**
             * 所在地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * VPC网络名称。
             * @example `jianwei-test`
             */
            VpcName: string;
            /**
             * ECU ID。
             * @example `b197-40ab-9155-7ca7`
             */
            EcuId: string;
            /**
             * ECS实例CPU。
             * @example `2`
             */
            Cpu: number;
            /**
             * ECS实例内网IP，当ECS网络类型为专有网络类型时。
             * @example `192.168.13.xx`
             */
            InnerIp: string;
            /**
             * ECS弹性公网IP，可更换绑定目标。
             * @example `13.xx.xxx.xx`
             */
            Eip: string;
            /**
             * ECS实例名称。
             * @example `worker-k8s`
             */
            InstanceName: string;
            /**
             * ECS实例公网IP，固定给该ECS实例使用。
             * @example `13.xx.xx.xxx`
             */
            PublicIp: string;
        }[];
    };
}
