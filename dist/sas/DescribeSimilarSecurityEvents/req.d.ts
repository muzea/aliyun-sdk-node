export interface DescribeSimilarSecurityEventsRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 查询任务的ID。您可以调用[CreateSimilarSecurityEventsQueryTask](~~CreateSimilarSecurityEventsQueryTask~~)接口获取该参数。
     * @example `1689135`
     */
    "TaskId": number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的告警事件的数量。默认值为**20**，表示每页显示20条告警事件。
     * @example `20`
     */
    "PageSize"?: number;
}
