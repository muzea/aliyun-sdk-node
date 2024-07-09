export interface DescribeStreamsRequest {
    /**
     * 流ID。
     * > 支持多个，用英文逗号（,）分隔。
     * @example `323*****997-cn-qingdao`
     */
    "Id"?: string;
    /**
     * 按空间ID查询。
     * @example `348*****174-cn-qingdao`
     */
    "GroupId"?: string;
    /**
     * 按设备ID查询。
     * @example `348*****380-cn-qingdao`
     */
    "DeviceId"?: string;
    /**
     * 流所在设备的父设备ID。
     * @example `399*****774-cn-qingdao`
     */
    "ParentId"?: string;
    /**
     * 按名称查询。
     * > 支持多个，用英文逗号（,）分隔。
     * @example `3100000*****00000002`
     */
    "Name"?: string;
    /**
     * 按域名查询。
     * @example `example.aliyundoc.com`
     */
    "Domain"?: string;
    /**
     * 按应用查询。
     * @example `live`
     */
    "App"?: string;
    /**
     * 按给定字段排序，取值范围：
     * - Id（默认）
     * - GroupId
     * - Name
     * - DeviceId
     * - Protocol
     * > 不支持填入多个字段。
     * @example `Id`
     */
    "SortBy"?: string;
    /**
     * 排序方式。取值范围：
     * - asc（升序）（默认）
     * - desc（降序）
     * @example `asc`
     */
    "SortDirection"?: string;
    /**
     * 分页大小，默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 第几个分页，默认值：1。
     * @example `1`
     */
    "PageNum"?: number;
}
