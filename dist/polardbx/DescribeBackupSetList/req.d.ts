export interface DescribeBackupSetListRequest {
    /**
     * 实例所属地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称。
     * @example `pxc-xxxxxx`
     */
    "DBInstanceName": string;
    /**
     * 开始时间的时间戳， 单位为毫秒。
     * @example `1635707845000`
     */
    "StartTime"?: number;
    /**
     * 结束时间的时间戳， 单位为毫秒。
     * @example `1635707845000`
     */
    "EndTime"?: number;
    /**
     * 每页的数据大小。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 分页下标，从1开始。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 备份集所在的地域，指定后可返回某个具体地域的备份集，一次仅支持指定一个地域。
     * @example `cn-hangzhou`
     */
    "DestCrossRegion"?: string;
}
