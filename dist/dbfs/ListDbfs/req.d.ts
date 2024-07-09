export interface ListDbfsRequest {
    /**
     * DBFS实例所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 当前页码。
     * 默认值：1。
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
     * 查询资源时设置排序方式。
     * 与SortType配合使用，取值必须为SizeG或CreatedTime。
     * 取值为SizeG则根据容量排序，取值为CreatedTime则根据创建时间排序。
     * 默认根据创建时间倒序排列。
     * @example `SizeG`
     */
    "SortKey"?: string;
    /**
     * 查询资源时设置排序方式。
     * 与SortKey配合使用，取值必须为asc或desc。
     * 取值为asc则正序排列，取值为desc则正序排列。
     * 默认根据创建时间倒序排列。
     * @example `desc`
     */
    "SortType"?: string;
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
     * @example `dbfs-test-01`
     */
    "FilterValue"?: string;
    /**
     * 根据标签筛选数据库文件系统列表。
     * TagKey：资源的标签键。取值范围：最大长度为64个字符，可包含英文大小写字母、中文、数字和特殊符号@_-=+;:,<.>/?
     *  TagValue：资源的标签值。取值范围：最大长度为128个字符，可包含英文大小写字母、中文、数字和特殊符号@_-=+;:,<.>/?
     * @example `[{"TagKey":"k1","TagValue":"v1"},{"TagKey":"k2","TagValue":"v2"}]`
     */
    "Tags"?: string;
}
