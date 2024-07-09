export interface DescribeEventDetailRequest {
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 异常事件的唯一标识ID。
     * > 查询单个异常事件详情，需要提供单个异常事件的唯一标识ID，该ID可调用**DescribeEvents**接口获取。
     * @example `13456723343`
     */
    "Id": number;
}
