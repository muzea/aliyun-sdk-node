export interface DescribeDatabaseErrorLogsRequest {
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
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页错误日志行数。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 查询错误日志起始时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。
     * > +8小时后是控制台上显示的到期时间。
     * @example `2022-09-07T04:04Z`
     */
    "StartTime": string;
    /**
     * 查询错误日志截止时间。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mmZ。截止时间需大于起始时间。
     * > +8小时后是控制台上显示的到期时间。
     * @example `2022-09-08T04:04Z`
     */
    "EndTime": string;
}
