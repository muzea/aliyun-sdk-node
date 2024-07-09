export interface SearchEventsRequest {
    /**
     * 报警规则ID，可调用SearchAlertRules接口获取（对应返回参数中的`Id`），更多信息，请参见[SearchAlertRules](~~175825~~)。
     * @example `123`
     */
    "AlertId"?: number;
    /**
     * 报警关联应用的应用ID（PID）。
     * @example `atc889zkcf@d8deedfa9bf****`
     */
    "Pid"?: string;
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
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 报警规则关联应用的类型：
     * - `TRACE`：应用监控。
     * - `RETCODE`：前端监控。
     * @example `TRACE`
     */
    "AppType"?: string;
    /**
     * 报警规则类型：
     * - `1`：基于下钻数据集的自定义监控报警规则。
     * - `3`：基于平铺数据集的自定义监控报警规则。
     * - `4`：前端监控报警规则，包含默认前端监控报警规则（AlertType=6）。
     * - `5`：应用监控报警规则，包含默认应用监控报警规则（AlertType=7）。
     * - `6`：默认前端监控报警规则。
     * - `7`：默认应用监控报警规则。
     * - `8`：链路追踪Tracing Analysis报警规则。
     * - `101`：Prometheus监控报警规则。
     * @example `4`
     */
    "AlertType"?: number;
    /**
     * 报警事件是否被触发，若不填写则查询全部。
     * - `1`：触发
     * - `0`：未触发
     * @example `1`
     */
    "IsTrigger"?: number;
    /**
     * 查询报警事件的开始时间的时间戳。格式为Unix Timestamp Long，单位为毫秒。默认为当前时间的前10分钟。
     * @example `1595565300000`
     */
    "StartTime"?: number;
    /**
     * 查询报警事件的结束时间的时间戳。格式为Unix Timestamp Long，单位为毫秒。默认为当前时间。
     * @example `1595568970000`
     */
    "EndTime"?: number;
}
