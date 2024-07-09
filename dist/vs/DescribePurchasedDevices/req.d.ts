export interface DescribePurchasedDevicesRequest {
    /**
     * 按设备ID查询。
     * @example `4070*****1132-cn-qingdao`
     */
    "Id"?: string;
    /**
     * 按设备名称查询。
     * @example `xxx路口摄像头`
     */
    "Name"?: string;
    /**
     * 按设备类型查询。取值：
     * - ipc（摄像头）
     * - platform（平台）
     * - ied（智能设备）
     * @example `ipc`
     */
    "Type"?: string;
    /**
     * 按设备子类型查询。取值：
     * - bullet（枪机）
     * - dome（球机）
     * - ptz（PTZ）
     * @example `dome`
     */
    "SubType"?: string;
    /**
     * 按设备所属空间ID查询。
     * @example `348*****174-cn-qingdao`
     */
    "GroupId"?: string;
    /**
     * 按设备厂商查询。
     * @example `公司A`
     */
    "Vendor"?: string;
    /**
     * 按给定字段排序。取值：
     * - id（默认）
     * @example `id`
     */
    "SortBy"?: string;
    /**
     * 排序方式，默认升序。取值：
     * - asc（升序）
     * - desc（降序）
     * @example `asc`
     */
    "SortDirection"?: string;
    /**
     * 分页大小，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 第几个分页，默认为1。
     * @example `1`
     */
    "PageNum"?: number;
}
