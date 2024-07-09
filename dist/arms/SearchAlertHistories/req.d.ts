export interface SearchAlertHistoriesRequest {
    /**
     * 报警规则ID，可调用SearchAlertRules接口获取（对应返回参数中的`Id`），详情请参见[SearchAlertRules](~~175825~~)。
     * @example `123`
     */
    "AlertId"?: number;
    /**
     * 报警规则类型：
     * - `1`：基于下钻数据集的自定义监控报警规则。
     * - `3`：基于平铺数据集的自定义监控报警规则。
     * - `4`：前端监控报警规则，包含默认前端监控报警规则（AlertType=6）。
     * - `5`：应用监控报警规则，包含默认应用监控报警规则（AlertType=7）。
     * - `6`：默认前端监控报警规则。
     * - `7`：默认应用监控报警规则。
     * - `8`：链路追踪Tracing Analysis报警规则。
     * - `101`：Prometheus报警规则。
     * @example `4`
     */
    "AlertType"?: number;
    /**
     * 查询结果分页的页码。默认为`1`。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 查询结果分页的每页项目数量。默认为`10`。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 地域ID。默认为`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询报警历史记录的开始时间的时间戳。格式为Unix Timestamp Long，单位为毫秒。默认为当前时间的前10分钟。
     * @example `1595568910000`
     */
    "StartTime"?: number;
    /**
     * 查询报警历史记录的结束时间的时间戳。格式为Unix Timestamp Long，单位为毫秒。默认为当前时间。
     * @example `1579499626000`
     */
    "EndTime"?: number;
}
