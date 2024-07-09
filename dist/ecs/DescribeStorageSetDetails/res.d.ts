export interface DescribeStorageSetDetailsResponse {
    /**
     * 单页返回的条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `49765E79-0D5D-4451-B3AE-580A20831846`
     */
    RequestId: string;
    /**
     * 存储集列表的页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 存储集总数。
     * @example `1`
     */
    TotalCount: number;
    Disks: {
        /**
         * 由Disk组成的数组格式，返回存储集内云盘或共享块存储的详细信息。
         */
        Disk: {
            /**
             * 云盘或共享块存储创建时间。
             * @example `2019-06-01T00:00:00Z`
             */
            CreationTime: string;
            /**
             * 云盘或共享块存储名称。
             * @example `testDiskName`
             */
            DiskName: string;
            /**
             * 云盘或共享块存储所属可用区。
             * @example `cn-hangzhou-g`
             */
            ZoneId: string;
            /**
             * 存储集ID。
             * @example `ss-bp67acfmxazb4p****`
             */
            StorageSetId: string;
            /**
             * 云盘或共享块存储ID。
             * @example `d-bp67acfmxazb4p****`
             */
            DiskId: string;
            /**
             * 云盘或共享块存储种类。
             * @example `cloud_ssd`
             */
            Category: string;
            /**
             * 存储集分区数。
             * @example `3`
             */
            StorageSetPartitionNumber: number;
            /**
             * 云盘或共享块存储所属地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
