export interface DescribeEnsResourceUsageResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E	 请求ID。`
     */
    RequestId: string;
    /**
     * 资源使用量数据。
     */
    EnsResourceUsage: {
        /**
         * 服务类型：
         * - 1：预付费实例。
         * - 2：边缘服务实例。
         * - 3：后付费实例。
         * @example `1`
         */
        ServiceType: string;
        /**
         * 实例数量。
         * @example `2`
         */
        InstanceCount: number;
        /**
         * cpu使用量，单位：核。
         * @example `2`
         */
        CpuSum: number;
        /**
         * gpu卡个数。
         * @example `6`
         */
        GpuSum: number;
        /**
         * 关机的虚机实例数。
         * @example `7`
         */
        DownCount: number;
        /**
         * 过期的虚机实例数。
         * @example `1`
         */
        ExpiredCount: number;
        /**
         * 即将过期的虚机实例数。
         * @example `0`
         */
        ExpiringCount: number;
        /**
         * 运行中实例的数量。
         * @example `19`
         */
        RunningCount: number;
        /**
         * 数据盘数量。
         * @example `4`
         */
        DiskCount: number;
        /**
         * 磁盘存储总量。
         * @example `5000`
         */
        StorageSum: number;
        /**
         * 边缘服务数量，只有ServiceType=2的时候有数据。
         * @example `2`
         */
        ComputeResourceCount: number;
    }[];
}
