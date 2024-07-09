export interface AnalyzeConversationRequest {
    /**
     * 呼叫中心实例ID
     * @example `9cfad875-6260-4a53-ab6e-b13e3fb31f7d`
     */
    "InstanceId": string;
    /**
     * 通话ID。
     * @example `job-10963442671187****`
     */
    "ContactId"?: string;
    /**
     * 分析的任务类型列表。其内容可以是：
     * - title：标题
     * - summary：小结
     * - keywords：关键词
     * - fields：字段
     * 目前仅summary和title可同时传递，其他的参数只能单独传递。
     * @example `["keywords"]`
     */
    "TaskListJson"?: string;
    /**
     * 当TaskListJson参数为fields, 此参数指定要提取的字段内容。
     * @example `[
      {
        "code": "OrderNo",
        "name": "订单号",
        "description": "订单号"
      },
      {
        "code": "ProductName",
        "name": "商品名称",
        "description": "商品名称"
      }
    ]`
     */
    "FieldListJson"?: string;
}
