export interface ListDbfsAttachedEcsInstancesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * ECS实例集合。
     */
    EcsLabelInfo: {
        /**
         * 数据库文件系统挂载点。
         * @example `/mnt/dbfs/dbfs-nUy1tb********BQ4X8Gpw`
         */
        MountPoint: string;
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
         * 数据库文件系统挂载时间。用时间戳表示，单位毫秒。
         * @example `1606290930000`
         */
        MountedTime: string;
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
    }[];
}
