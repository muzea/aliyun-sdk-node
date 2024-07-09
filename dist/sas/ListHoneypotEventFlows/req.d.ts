export interface ListHoneypotEventFlowsRequest {
    /**
     * 是否处理。取值：
     * - **y**： 已处理
     * - **n**：未处理
     * - **a**：所有
     * @example `n`
     */
    "Dealed"?: string;
    /**
     * 告警事件的ID。
     * >调用[ListHoneypotEvents](~~ListHoneypotEvents~~)接口可以获取该参数。
     * @example `7455818`
     */
    "SecurityEventId"?: number;
    /**
     * 指定分页查询时，当前页的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 指定分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为100条，PageSize参数值为空时，将默认返回100条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 无效入参。
     * @example `9F4E6157-9600-5588-86B9-38F09067****`
     */
    "RequestId"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
