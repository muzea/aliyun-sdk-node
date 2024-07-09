export interface DescribeSiteMonitorLogRequest {
    /**
     * 探测任务ID。多个探测任务ID之间用半角逗号（,）分隔。
     * @example `afa5c3ce-f944-4363-9edb-ce919a29****`
     */
    "TaskIds": string;
    /**
     * 运营商标识码。
     * @example `465`
     */
    "Isp"?: string;
    /**
     * 城市标识码。
     * @example `546`
     */
    "City"?: string;
    /**
     * 监控项。
     * 目前仅支持监控项`ProbeLog`。
     * @example `ProbeLog`
     */
    "MetricName"?: string;
    /**
     * 开始时间。支持的格式：
     * - UNIX时间戳：从1970年01月01日开始所经过的毫秒数。
     * - UTC格式：YYYY-MM-DDThh:mm:ssZ。
     * > - 开始时间和结束时间遵循左开右闭模式，StartTime不能等于或大于EndTime。
     *     - 建议您使用UNIX时间戳，避免时区问题。
     * @example `1638422474389`
     */
    "StartTime"?: string;
    /**
     * 结束时间。支持的格式：
     * - UNIX时间戳：从1970年01月01日开始所经过的毫秒数。
     * - UTC格式：YYYY-MM-DDThh:mm:ssZ。
     * > 建议您使用UNIX时间戳，避免时区问题。
     * @example `1638422475687`
     */
    "EndTime"?: string;
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `IWBjqMYSy0is7zSMGu16****`
     */
    "NextToken"?: string;
    /**
     * 每页显示的记录条数，用于分页查询。取值范围：1~1440。
     * @example `1000`
     */
    "Length"?: number;
    /**
     * 过滤探测值。
     * 支持简单的表达式，例如：`TotalTime>100`，表示过滤出总响应时间超过100毫秒的探测数据。
     * @example `TotalTime>100`
     */
    "Filter"?: string;
    /**
     * 该参数已废弃，无需关注。
     * @example `无`
     */
    "BrowserInfo"?: string;
    /**
     * 浏览器类型。
     * @example `Chrome`
     */
    "Browser"?: string;
    /**
     * 设备类型（模拟屏幕大小类型）。
     * @example `laptop`
     */
    "Device"?: string;
}
