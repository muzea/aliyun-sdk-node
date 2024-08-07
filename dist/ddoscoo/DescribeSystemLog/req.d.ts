export interface DescribeSystemLogRequest {
    /**
     * 要查询的系统日志的类型。取值固定为**20**，表示弹性业务带宽出账日志。
     * > 必须设置该参数，否则会调用失败。
     * @example `20`
     */
    "EntityType"?: number;
    /**
     * 要查询的DDoS高防实例的IP地址。
     * > 您可以调用[DescribeInstanceDetails](~~91490~~)查询DDoS高防实例的IP地址。
     * @example `203.107.XX.XX`
     */
    "EntityObject"?: string;
    /**
     * 设置起始时间，查询在该起始时间后出账的弹性业务带宽账单。使用时间戳表示，单位：毫秒。
     * @example `1609430400000`
     */
    "StartTime": number;
    /**
     * 设置结束时间，查询在该结束时间前出账的弹性业务带宽账单。使用时间戳表示，单位：毫秒。
     * @example `1640966400000`
     */
    "EndTime": number;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询时，设置每页包含日志的数量。
     * @example `10`
     */
    "PageSize": number;
}
