export interface ListDisksResponse {
    /**
     * 磁盘总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `20758A-585D-4A41-A9B2-28DA8F4F534F`
     */
    RequestId: string;
    /**
     * 分页查询时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 磁盘列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 磁盘信息组成的数组。
     */
    Disks: {
        /**
         * 创建时间。时间格式以[ISO8601](~~25696~~)为标准，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
         * @example `2021-03-08T05:31:06Z`
         */
        CreationTime: string;
        /**
         * 磁盘状态。可能值：
         * - ReIniting：初始化中。
         * - Creating：创建中。
         * - In_use：使用中。
         * - Available：待挂载。
         * - Attaching：挂载中。
         * - Detaching：卸载中。
         * @example `In_use`
         */
        Status: string;
        /**
         * 磁盘挂载服务器中的设备名。
         * @example `/dev/xvda`
         */
        Device: string;
        /**
         * 磁盘大小。单位：GB。
         * @example `50`
         */
        Size: number;
        /**
         * 磁盘名称。
         * @example `SystemDisk`
         */
        DiskName: string;
        /**
         * 磁盘的计费方式。
         * @example `PrePaid`
         */
        DiskChargeType: string;
        /**
         * 磁盘类型。可能值：
         * - System：系统盘。
         * - Data：数据盘。
         * @example `System`
         */
        DiskType: string;
        /**
         * 磁盘类型，可能值：
         * - ESSD：ESSD云盘，性能级别PL0。
         * - SSD：SSD云盘。
         * - CLOUD_EFFICIENCY：高效云盘。
         * @example `ESSD`
         */
        Category: string;
        /**
         * 磁盘ID。
         * @example `d-bp14wq0149cpp2x****`
         */
        DiskId: string;
        /**
         * 磁盘对应的轻量应用服务器的实例ID。
         * @example `2ad1ae67295445f598017499dc****`
         */
        InstanceId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 磁盘备注。
         * @example `remark`
         */
        Remark: string;
        /**
         * 磁盘的标签列表。
         */
        Tags: {
            /**
             * 磁盘的标签键。
             * @example `TestKey`
             */
            Key: string;
            /**
             * 磁盘的标签值。
             * @example `TestValue`
             */
            Value: string;
        }[];
        /**
         * 轻量应用服务器名称。
         * @example `myInstance`
         */
        InstanceName: string;
        /**
         * 磁盘所属的资源组ID。
         * @example `rg-aek2bti7cf7****`
         */
        ResourceGroupId: string;
    }[];
}
