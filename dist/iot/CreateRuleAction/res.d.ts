export interface CreateRuleActionResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用成功时，规则引擎为该规则动作生成的规则动作ID，作为其标识符。
     * > 请妥善保管该信息。在调用与规则动作相关的接口时，您可能需要提供对应的规则动作ID。
     * @example `10003`
     */
    ActionId: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `21D327AF-A7DE-4E59-B5D1-ACAC8C024555`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
