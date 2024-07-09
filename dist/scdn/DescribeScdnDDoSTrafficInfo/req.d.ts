export interface DescribeScdnDDoSTrafficInfoRequest {
    /**
     * 查询开始时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间。格式为YYYY-MM-DDThh: mm:ssZ，例如2017-11-30T00:55:00Z。
     * @example `2017-11-30T00:55:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间。格式为YYYY-MM-DDThh: mm:ssZ，例如2017-11-30T00:56:00Z。
     * @example `2017-11-30T00:56:00Z`
     */
    "EndTime": string;
    /**
     * 运营商。取值：
     * - **CUT**：联通。
     * - **CT**：电信。
     * - **ALL**：所有。
     * @example `ALL`
     */
    "Line": string;
}
