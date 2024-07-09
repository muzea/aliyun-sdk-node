export interface InitDtsRdsInstanceResponse {
    /**
     * 状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID。
     * @example `7796ECE0-9C17-5E4D-9CE6-B7EC825A****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The Value of Input Parameter %s is not valid.	`
     */
    ErrMessage: string;
    /**
     * DTS连接单元节点时使用的内置账号。
     * @example `rdsdt_dtsacct`
     */
    AdminAccount: string;
    /**
     * 内置账号的密码。
     * @example `1jecpqrtc****`
     */
    AdminPassword: string;
}
