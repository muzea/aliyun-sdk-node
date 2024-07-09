export interface SmartCallOperateResponse {
    /**
     * 命令执行的结果。取值：
     * - **true**：命令执行成功。
     * - **false**：命令执行失败。
     * @example `true`
     */
    Status: boolean;
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C4D0D`
     */
    RequestId: string;
}
