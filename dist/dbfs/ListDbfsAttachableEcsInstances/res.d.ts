export interface ListDbfsAttachableEcsInstancesResponse {
    /**
     * 请求ID。
     * @example `3724CFEF-02DA-578B-AED6-67EE80671B4A`
     */
    RequestId: string;
    /**
     * 查询结果总条数。
     * @example `32`
     */
    TotalCount: number;
    /**
     * ECS实例集合。
     */
    EcsLabelInfo: {
        /**
         * ECS实例ID。
         * @example `i-bp10jb8mqajkmrejgo00`
         */
        value: string;
        /**
         * ECS实例名称。
         * @example `dbfs-test-01`
         */
        label: string;
        /**
         * ECS实例规格族。
         * @example `ecs.g7se`
         */
        InstanceTypeFamily: string;
        /**
         * ECS实例的操作系统名称。
         * @example `Alibaba Cloud Linux 2.1903 LTS 64 bit`
         */
        OSName: string;
        /**
         * ECS实例状态：
         * - Pending：创建中。
         * - Running：运行中。
         * - Starting：启动中。
         * - Stopping：停止中。
         * - Stopped：已停止。
         * @example `Running`
         */
        Status: string;
        /**
         * 可用区ID。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 镜像ID。
         * @example `m-bp67acfmxazb4p****`
         */
        ImageId: string;
    }[];
}
