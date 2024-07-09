export interface DescribeDcdnDomainCcActivityLogRequest {
    /**
     * 需要查询的加速域名。支持批量域名查询，多个域名用半角逗号（,）分隔。
     * 若该参数为空，默认返回所有加速域名合并后数据。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据的起始时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 最小数据粒度为5分钟。
     * 若该参数为空，默认读取过去24小时数据。
     * @example `2015-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。
     * @example `2015-12-10T21:05:00Z`
     */
    "EndTime"?: string;
    /**
     * 触发对象。
     * 若该参数为空，则查询所有拦截事件。
     * @example `IP`
     */
    "TriggerObject"?: string;
    /**
     * 触发对象值。
     * 若该参数为空，则查询所有拦截事件。
     * @example `10.10.10.10`
     */
    "Value"?: string;
    /**
     * 规则名称。
     * - 正常模式：default_normal；
     * - 紧急模式：default_attack；
     * - 自定义模式：用户自定义规则名称，例如test2。
     * 若该参数为空，则查询所有拦截事件。
     * @example `test2`
     */
    "RuleName"?: string;
    /**
     * 单页显示数量。默认值：**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
