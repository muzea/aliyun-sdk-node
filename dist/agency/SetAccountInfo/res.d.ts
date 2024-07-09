export interface SetAccountInfoResponse {
    /**
     * 结果码
     * 错误代码:
     * - 200 OK
     * - 1109 系统错误
     * - 3030 账户昵称超过最大长度，最大长度150 bytes
     * - 3031 Remark超过最大长度，最大长度是3000 Bytes
     * @example `200`
     */
    Code: string;
    /**
     * message信息
     * @example `成功`
     */
    Message: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功 的。不代表后续业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * request ID，阿里云会根据这个进行错误跟踪
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
}
