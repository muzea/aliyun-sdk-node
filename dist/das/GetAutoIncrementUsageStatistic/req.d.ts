export interface GetAutoIncrementUsageStatisticRequest {
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * 数据库名。传入此参数时，查询指定数据库中表自增ID使用情况，不传入时查询实例上所有数据库的表自增ID使用情况。
     * >数据格式为JSONArray，例如['db1','db2']，数据库名间用英文逗号（,）分隔。
     * @example `['db1','db2']`
     */
    "DbNames"?: string;
    /**
     * 自增ID使用比例过滤值，只返回超过该比例的自增ID使用数据。取值为0~1的小数。
     * @example `0.9`
     */
    "RatioFilter": number;
    /**
     * 是否获取实时数据：
     * - **true**：实时查询实例上数据并计算。最小查询时间粒度为10分钟，即有10分钟内的数据时，即使传递**true**也不进行实时查询。
     * - **false**：当有近两小时的数据时，返回该数据，否则查询实例上最新数据。
     * @example `false`
     */
    "RealTime": boolean;
}
