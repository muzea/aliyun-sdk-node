export interface ConversionDataIntlRequest {
    /**
     * 转化率观测的时间点。必须是Unix时间戳，毫秒级别长整型。
     * >如果不指定该字段：默认当前的时间戳。
     * @example `1349055900000`
     */
    "ReportTime"?: number;
    /**
     * 转化率监控回报值。
     * >该参数取值为double类型 ，区间是\[0,1]。
     * @example `0.53`
     */
    "ConversionRate": string;
}
