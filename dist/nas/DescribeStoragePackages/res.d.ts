export interface DescribeStoragePackagesResponse {
    /**
     * 存储包个数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `035B3A3A-E514-4B41-B906-5D906CFB****`
     */
    RequestId: string;
    /**
     * 每个分页包含的存储包个数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 存储包列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
    Packages: {
        /**
         * 存储包信息集合。
         */
        Package: {
            /**
             * 存储包状态。
             * 包括：
             * - free：未绑定文件系统，可以将该存储包绑定至同存储类型的文件系统上。
             * - bound：已绑定文件系统。
             * @example `free`
             */
            Status: string;
            /**
             * 存储包所绑定的文件系统ID。
             * @example `109c****66`
             */
            FileSystemId: string;
            /**
             * 存储包起始时间。
             * @example `2019-12-05T01:40:56Z`
             */
            StartTime: string;
            /**
             * 存储包到期时间。
             * @example `2020-01-05T16:00:00Z`
             */
            ExpiredTime: string;
            /**
             * 存储包的容量。
             * 单位：Byte
             * @example `10`
             */
            Size: number;
            /**
             * 存储包类型。
             * 包括：
             * - Performance：性能型
             * - Capacity：容量型
             * @example `Capacity`
             */
            StorageType: string;
            /**
             * 存储包ID。
             * @example `naspackage-@string('*****', *)-@string('*****', *)`
             */
            PackageId: string;
        }[];
    };
}
