export interface ListInterceptionHistoryRequest {
    /**
     * 告警名称。
     * @example `异常访问。`
     */
    "HistoryName"?: string;
    /**
     * 查询开始时间戳。
     * @example `1651290987000`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间戳。
     * @example `1635575219000`
     */
    "EndTime"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 异常事件的类型。
     */
    "InterceptionTypes"?: number[];
    /**
     * 需要查询的容器集群ID。
     * @example `c7c190a82d9a048be9038d352840f****`
     */
    "ClusterId"?: string;
    /**
     * 设置请求和接收消息的语言类型。默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
