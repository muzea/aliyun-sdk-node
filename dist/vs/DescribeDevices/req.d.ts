export interface DescribeDevicesRequest {
    /**
     * 设备ID。
     * > 支持多个，用英文逗号（,）分隔。
     * @example `348*****380-cn-qingdao`
     */
    "Id"?: string;
    /**
     * 设备名称。
     * > 支持多个，用英文逗号（,）分隔。
     * @example `摄像头A`
     */
    "Name"?: string;
    /**
     * 按设备类型查询。取值范围：
     * - ipc（摄像头）
     * - platform（平台）
     * - ied（智能设备）
     * @example `ipc`
     */
    "Type"?: string;
    /**
     * 按设备所属空间ID查询。
     * @example `348*****174-cn-qingdao`
     */
    "GroupId"?: string;
    /**
     * 按设备所属上级设备ID查询。
     * @example `399*****774-cn-qingdao`
     */
    "ParentId"?: string;
    /**
     * 按设备所属目录ID查询。
     * @example `399*****488-cn-qingdao`
     */
    "DirectoryId"?: string;
    /**
     * 按设备国标ID查询。
     * @example `310000000****0000002`
     */
    "GbId"?: string;
    /**
     * 设备序列号，唯一标识。
     * @example `7D0*****4C0`
     */
    "Dsn"?: string;
    /**
     * 按设备状态查询。
     * @example `on`
     */
    "Status"?: string;
    /**
     * 按设备厂商查询。
     * @example `8yd*****qem`
     */
    "Vendor"?: string;
    /**
     * 按给定字段排序。取值：
     * > id（默认）
     * @example `id`
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
    /**
     * 是否返回流统计信息，默认值：false。
     * @example `false`
     */
    "IncludeStats"?: boolean;
    /**
     * 是否返回目录信息，默认值：false。
     * @example `false`
     */
    "IncludeDirectory"?: boolean;
}
