export interface ModifyEventStatusRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh_cn**。取值：
     * - **zh_cn**：中文。
     * - **en_us**：英文。
     * @example `zh_cn`
     */
    "Lang"?: string;
    /**
     * 异常事件的唯一标识ID。
     * > 处理异常事件，需要提供异常事件的唯一标识ID，该ID可调用**DescribeEvents**接口获取。
     * @example `12345`
     */
    "Id": number;
    /**
     * 是否对异常事件进行检测强化。强化对异常事件检测的能力，可增加检测的准确性，并提升异常事件告警率。
     * - **true**：是。
     * - **false**：否.
     * @example `true`
     */
    "Backed"?: boolean;
    /**
     * 异常事件处理原因记录。
     * @example `确定为违例`
     */
    "DealReason"?: string;
    /**
     * 对异常事件的处理操作。
     * - **1**：误报。
     * - **2**：确认异常并已处理。
     * @example `1`
     */
    "Status": number;
}
