export interface DescribeInstanceDasProResponse {
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9CB97BC4-6479-55D0-B9D0-EA925AFE****`
     */
    RequestId: string;
    /**
     * 数据库实例是否开启了DAS企业版：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    Data: boolean;
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
}
