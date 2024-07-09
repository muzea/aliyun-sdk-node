export interface DescribeDatabaseSlowLogRecordsRequest {
    /**
     * 指定的轻量数据库实例所属的地域ID。
     * 您可以调用[ListRegions](~~189315~~)查看支持的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 轻量数据库实例ID。
     * @example `db-38263fa955774501a2ae1bdaed6f****`
     */
    "DatabaseInstanceId": string;
    /**
     * 轻量数据库实例慢日志列表的页码。
     * 起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。取值范围：30~100。
     * 最大值：100。
     * 默认值：30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 查询慢日志起始时间。
     * 按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > +8小时后是控制台上显示的到期时间。
     * @example `2022-09-07T04:04:44Z`
     */
    "StartTime": string;
    /**
     * 查询轻量数据库实例慢日志的截止时间。截止时间需要大于查询起始时间，且与查询开始时间间隔小于7天。
     * 按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > +8小时后是控制台上显示的到期时间。
     * @example `2022-09-08T04:04:44Z`
     */
    "EndTime": string;
}
