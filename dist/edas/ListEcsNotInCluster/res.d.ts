export interface ListEcsNotInClusterResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求唯一标识ID。
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
    EcsEntityList: {
        /**
         * ECS列表。
         */
        EcsEntity: {
            /**
             * VPC实例的ID。
             * @example `vpc-2zef6ob8mrlzv8x3q****`
             */
            VpcId: string;
            /**
             * 实例状态。
             * - **Pending**：创建中
             * - **Running**：运行中
             * - **Starting**：启动中
             * - **Stopping**：停止中
             * - **Stopped**：已停止
             * @example ` Running`
             */
            Status: string;
            /**
             * ECS实例的私网IP。
             * @example `192.168.*.**`
             */
            PrivateIp: string;
            /**
             * ECS是否过期。
             * - **true**：已过期
             * - **false**：未过期
             * @example `false`
             */
            Expired: boolean;
            /**
             * ECS实例的ID。
             * @example `i-2ze7s2v0b***********`
             */
            InstanceId: string;
            /**
             * 内存大小（B）。
             * @example `4096`
             */
            Mem: number;
            /**
             * ECS实例所在地域的ID。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * VPC实例名称。
             * @example `test`
             */
            VpcName: string;
            /**
             * CPU核数。
             * @example `2`
             */
            Cpu: number;
            /**
             * ECS实例内网IP。
             * @example `192.168.20.113`
             */
            InnerIp: string;
            /**
             * ECS实例的弹性公网IP
             * @example `139.30.xxx.xx`
             */
            Eip: string;
            /**
             * ECS实例名称。
             * @example `worker-k8s-for-cs-c9dfa009a5e7c4faab2010b87cae4****`
             */
            InstanceName: string;
            /**
             * ECS实例的公网IP。
             * @example `131.30.xxx.xx`
             */
            PublicIp: string;
        }[];
    };
}
