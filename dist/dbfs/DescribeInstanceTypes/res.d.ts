export interface DescribeInstanceTypesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 实例规格列表。
     */
    InstanceTypes: {
        /**
         * 实例规格ID。
         * @example `dbfs.small`
         */
        InstanceTypeId: string;
        /**
         * 最大CPU使用核数。
         * @example `0.25`
         */
        CpuCoreCount: number;
        /**
         * 最大内存占用（单位GiB）。
         * @example `0.5`
         */
        MemorySize: number;
        /**
         * 实例规格描述。
         * @example `dbfs.small`
         */
        InstanceTypeDescription: string;
    }[];
}
