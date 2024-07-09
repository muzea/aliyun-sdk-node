export interface ListAutoSnapshotPolicyAppliedDbfsRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自动快照策略ID。
     * @example `sp-z5siir3iq3m**********`
     */
    "PolicyId": string;
    /**
     * 分页查询时设置的页码。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页条数。默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 查询资源时的筛选键。
     * 与FilterValue配合使用，取值必须为FsId或FsName。
     * 传入FsId则根据数据库文件系统的实例ID进行筛选，传入FsName则根据数据库文件系统的实例名称进行筛选。
     * @example `FsName`
     */
    "FilterKey"?: string;
    /**
     * 查询资源时的筛选值。
     * 与FilterKey配合使用。
     * @example `DBFS1`
     */
    "FilterValue"?: string;
}
