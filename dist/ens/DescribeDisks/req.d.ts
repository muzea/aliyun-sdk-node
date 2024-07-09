export interface DescribeDisksRequest {
    /**
     * ENS的节点ID。
     * @example `cn-kunming-telecom`
     */
    "EnsRegionId"?: string;
    /**
     * 云盘ID。
     * @example `d-5soak1gqa507lyfzvz0xo****`
     */
    "DiskId"?: string;
    /**
     * 磁盘名称。
     * @example `DiskName`
     */
    "DiskName"?: string;
    /**
     * 查询列表的页码。起始值为**1**。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页查询时设置的每页行数，最大值为**50**行。
     * 默认值：**10**。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 磁盘状态。
     * - In-use：使用中
     * - Available：待挂载
     * - Attaching：挂载中
     * - Detaching：卸载中
     * - Creating：创建中
     * - ReIniting：重置中
     * - Deleting：释放中
     * - Deleted：已释放
     * - Expiring：即将过期
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 磁盘属性
     * - system：系统盘
     * - data：数据盘
     * @example `system`
     */
    "Type"?: string;
    /**
     * 磁盘种类。
     * - 高效云盘：cloud_efficiency
     * - 全闪云盘：cloud_ssd
     * - 本地HDD盘：local_hdd
     * - 本地盘SSD：local_ssd
     * @example `local_ssd`
     */
    "Category"?: string;
    /**
     * 计费类型。
     * - prepay：预付费
     * - postpay：按量付费
     * @example `prepay`
     */
    "DiskChargeType"?: string;
    /**
     * 节点列表。
     * @example `["cn-suzhou-telecom","cn-chengdu-telecom"]`
     */
    "EnsRegionIds"?: string;
    /**
     * 磁盘ID。
     * @example `[\"d-wz99njena32z90ki****\"]`
     */
    "DiskIds"?: string;
    /**
     * 排序使用：格式例子{"EnsRegionId":"desc"}。默认按节点ID降序排列。
     * @example `{ "DiskNameSort":"desc","EnsRegionIdSort":"asc" }`
     */
    "OrderByParams"?: string;
    /**
     * 磁盘购买方式。
     * - ServiceDisk：边缘服务创建磁盘
     * - ResoureDisk：随实例购买
     * - PostPayDisk：单独购买
     * @example `PostPayDisk`
     */
    "DiskType"?: string;
    /**
     * 云盘所挂载的实例。
     * @example `i-5t77rb0yoz79m28ku60sx****`
     */
    "InstanceId"?: string;
    /**
     * 快照ID。
     * @example `s-897654321****`
     */
    "SnapshotId"?: string;
}
