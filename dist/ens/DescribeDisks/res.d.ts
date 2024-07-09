export interface DescribeDisksResponse {
    /**
     * 返回的业务码，正常成功为0。
     * @example `0`
     */
    Code: number;
    Disks: {
        /**
         * 磁盘信息例表。
         */
        Disks: {
            /**
             * 磁盘种类。
             * - 高效云盘：cloud_efficiency
             * - 全闪云盘：cloud_ssd
             * - 本地HDD盘：local_hdd
             * - 本地盘SSD：local_ssd
             * @example `local_ssd`
             */
            Category: string;
            /**
             * 创建时间。时间格式以ISO8601为标准，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2021-11-11T14:34:55+08:00`
             */
            CreationTime: string;
            /**
             * 云盘或本地盘的计费方式。取值：
             * - **prepaid**：包年包月。
             * - **postpaid**：按量付费。
             * @example `prepaid`
             */
            DiskChargeType: string;
            /**
             * 磁盘ID。
             * @example `d-5svum1dx1w4a4spr54lgr****`
             */
            DiskId: string;
            /**
             * 磁盘名称。
             * @example `fvt-ecs-5cf0****`
             */
            DiskName: string;
            /**
             * ENS节点ID。
             * @example `cn-guangzhou-10`
             */
            EnsRegionId: string;
            /**
             * 实例ID。
             * @example `i-5t77rb0yoz79m28ku60sx****`
             */
            InstanceId: string;
            /**
             * 实例名称。
             * @example `边缘prod环境串流机器-1063`
             */
            InstanceName: string;
            /**
             * 磁盘大小，单位：MiB。
             * @example `20`
             */
            Size: number;
            /**
             * 磁盘状态。
             * - In-use：使用中
             * - Available：待挂载
             * - Attaching：挂载中
             * - Detaching：卸载中
             * - Creating：创建中
             * - ReIniting：重置中
             * @example `Available`
             */
            Status: string;
            /**
             * 云盘或本地盘类型。取值：
             * - 1：系统盘
             * - 2：数据盘
             * @example `1`
             */
            Type: string;
            /**
             * 云盘或本地盘是否支持卸载。取值：
             * - true：支持。可以独立存在，且可以在可用区内自由挂载和卸载。
             * - false：不支持。不可以独立存在，且不可以在可用区内自由挂载和卸载。
             * 以下类型块存储的**Portable**属性都为**false**，生命周期与实例等同：
             * - 本地HDD盘
             * - 本地SSD盘
             * - 包年包月数据盘
             * @example `true`
             */
            Portable: boolean;
            /**
             * 快照ID。
             * @example `s-bp67acfmxazb4p****`
             */
            SnapshotId: string;
            /**
             * 序列号。
             * @example `123`
             */
            SerialId: string;
            /**
             * 是否加密云盘。取值范围：
             * - **true**：是
             * - **false**：否
             * @example `false`
             */
            Encrypted: boolean;
            /**
             * 云盘使用的 KMS 密钥 ID。
             * @example `05467897a-4262-4802-b8cb-00d3fb40****`
             */
            EncryptedKeyId: string;
        }[];
    };
    /**
     * 当前查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `50`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BA984`
     */
    RequestId: string;
    /**
     * 分页查询时分页总页数。
     * @example `13`
     */
    TotalCount: number;
}
