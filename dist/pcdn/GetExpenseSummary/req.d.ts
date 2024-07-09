export interface GetExpenseSummaryRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 开始时间。
     * @example `2017-05-01`
     */
    "StartDate"?: string;
    /**
     * 结束时间。
     * @example `2017-05-10`
     */
    "EndDate"?: string;
    /**
     * 搜索传入的内容，如果为空显示全部。
     * @example `all`
     */
    "Domain"?: string;
    /**
     * 地域代码，多个用竖线（|）分隔，查询全部传all。
     * 代码查询请参见[通用字段参考](~~151572~~)。
     * @example `00`
     */
    "Region"?: string;
    /**
     * 运营商代码，多个用竖线（|）分隔，查询全部传all。
     * 代码查询请参见[通用字段参考](~~151572~~)。
     * @example `all`
     */
    "IspName"?: string;
    /**
     * 终端代码，多个用竖线（|）分隔，查询全部传all。
     * 代码查询请参见[通用字段参考](~~151572~~)。
     * @example `all`
     */
    "PlatformType"?: string;
    /**
     * 业务类型代码，多个用竖线（|）分隔，查询全部传all。
     * 代码查询请参见[通用字段参考](~~151572~~)。
     * @example `all`
     */
    "BusinessType"?: string;
}
