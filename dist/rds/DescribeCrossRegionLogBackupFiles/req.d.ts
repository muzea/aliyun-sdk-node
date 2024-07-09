export interface DescribeCrossRegionLogBackupFilesRequest {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 实例所在地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 跨地域备份目的地域ID。可以通过接口DescribeCrossRegionBackupDBInstance查看地域ID。
     * @example `cn-shanghai`
     */
    "CrossBackupRegion"?: string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-05-30T12:10:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2019-06-15T12:10:00Z`
     */
    "EndTime": string;
    /**
     * 每页记录数，取值：
     * * **30**
     * * **50**
     * * **100**
     * 默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。
     * 默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
