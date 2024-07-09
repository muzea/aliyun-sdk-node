export interface ListSnapshotRequest {
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页条数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询快照时设置排序方式。
     * 与SortType配合使用，取值必须为SnapshotSize或CreatedTime。
     * 取值为SnapshotSize则根据快照容量排序，取值为CreatedTime则根据创建时间排序。
     * 默认根据创建时间倒序排列。
     * @example `SnapshotSize`
     */
    "SortKey"?: string;
    /**
     * 查询快照时设置排序方式。
     * 与SortKey配合使用，取值必须为asc或desc。
     * 取值为asc则正序排列，取值为desc则降序排列。
     * 默认根据创建时间倒序排列。
     * @example `desc`
     */
    "SortType"?: string;
    /**
     * 查询快照时的筛选键。
     * 与FilterValue配合使用，取值必须为SnapshotId或SnapshotName。
     * 传入SnapshotId则根据快照ID进行筛选，传入SnapshotName则根据快照名称进行筛选。
     * @example `SnapshotId`
     */
    "FilterKey"?: string;
    /**
     * 查询快照时的筛选值。
     * 与FilterKey配合使用。
     * @example `s-bp67acfmxazb4p****`
     */
    "FilterValue"?: string;
    /**
     * 数据库文件系统ID。
     * @example `dbfs-GOrr********Yd0VLOyBpg`
     */
    "FsId"?: string;
    /**
     * 快照状态。取值范围：
     * - progressing：正在创建的快照。
     * - accomplished：创建成功的快照。
     * - failed：创建失败的快照。
     * - all（默认）：所有快照状态。
     * @example `accomplished`
     */
    "Status"?: string;
    /**
     * 快照名称。
     * @example `testSnapshotName`
     */
    "SnapshotName"?: string;
    /**
     * 快照创建类型。目前仅支持手动快照。
     *
     * - user：手动创建快照。
     * - all（默认）：所有的快照创建类型。
     * @example `user`
     */
    "SnapshotType"?: string;
    /**
     * 快照标识编码。取值可以由多个快照ID组成一个JSON数组，最多支持100个ID，ID之间用半角逗号（,）隔开。
     * @example `["s-bp67acfmxazb4p****", "s-bp67acfmxazb5p****", … "s-bp67acfmxazb6p****"]`
     */
    "SnapshotIds"?: string;
}
