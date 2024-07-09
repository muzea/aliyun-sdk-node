export interface AnalyzeConversationResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID,可用于接口的日志查询
     * @example `9F766284-F103-4298-8EC5-19F9F9BE5522`
     */
    RequestId: string;
    /**
     * 返回结果。根据分析任务的不同，返回的内容也不相同。
     * @example `{
      "订单号": "1234",
      "商品名称": "笔记本"
    }`
     */
    Data: string;
}
