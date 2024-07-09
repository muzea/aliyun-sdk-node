export interface GetLogsRequest {
    /**
     * 查询语句或者分析语句。更多信息，请参见日志服务[查询概述](~~43772~~)和[分析概述](~~53608~~)。
     * @example `status: 401 | SELECT remote_addr,COUNT(*) as pv GROUP by remote_addr ORDER by pv desc limit 5`
     */
    "Query"?: string;
    /**
     * 查询的开始时间点。UNIX时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1684377190`
     */
    "From": number;
    /**
     * 查询的结束时间点。UNIX时间戳格式，表示从1970-1-1 00:00:00 UTC计算起的秒数。
     * @example `1684378326`
     */
    "To": number;
    /**
     * 查询分析时，每页显示结果行数，取值范围为0-100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 查询分析时，当前的查询页数，从1开始。
     * @example `1`
     */
    "PageIndex": number;
    /**
     * 根据查询条件查询出的总数量。
     * @example `2`
     */
    "Total"?: number;
    /**
     * 查询语句时，是否结果按照时间（分钟级别）降序排列，默认为true。取值：
     * - true：降序
     * - false：升序
     * @example `true`
     */
    "ReverseOrNot"?: boolean;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港，选择该项。
     * - ap-southeast-1：资产属于海外地域，选择该项。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
