export interface SendCcoSmartCallOperateResponse {
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
    /**
     * 命令执行的结果。
     * - **true**：命令执行成功。
     * - **false**：命令执行失败。
     * @example `true`
     */
    Data: string;
    /**
     * 请求状态码。返回OK代表请求成功。
     * @example `OK`
     */
    Code: string;
}
