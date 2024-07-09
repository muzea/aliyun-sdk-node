export interface ListInsightsEventsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用ID。
     * @example `aokcdqn3ly@a195c6d6421****`
     */
    "Pid"?: string;
    /**
     * 查询起始时间的时间戳。
     * @example `1595174400000`
     */
    "StartTime": string;
    /**
     * 查询结束时间的时间戳。
     * @example `1480607940000`
     */
    "EndTime": string;
    /**
     * 获取事件类型，多个类型之间使用半角逗号（,）分隔，不填表示查询全部类型事件。
     * - errorIncrease：某种类型（http dubbo）整体接口错误率突增事件
     * - topErrorIncrease：流量Top 5接口错误率突增事件
     * - topRtIncrease：某种类型（http dubbo）整体接口响应时间突增事件
     * - rtIncrease：流量Top 5接口响应时间突增事件
     * @example `errorIncrease,topErrorIncrease,topExceptionIncrease,topRtIncrease,rtIncrease`
     */
    "InsightsTypes"?: string;
}
