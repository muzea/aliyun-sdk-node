export interface QueryChangeLogListRequest {
    /**
     * 用户IP，可设置为**127.0.0.1**。
     * @example `127.0.0.1`
     */
    "UserClientIp"?: string;
    /**
     * 接口返回错误信息语言。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * 默认为**en**。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 待查询操作日志的域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 分页页码，最小值为**1**。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 分页大小，最小值为**1**，最大值为**100**。
     * @example `1`
     */
    "PageSize": number;
    /**
     * 查询操作日期的开始时间，UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1522080000000`
     */
    "StartDate"?: number;
    /**
     * 查询操作日期的结束时间，UTC时间1970年1月1日0点距离现在的毫秒数。
     * @example `1522080000000`
     */
    "EndDate"?: number;
}
