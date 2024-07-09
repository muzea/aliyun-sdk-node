export interface QueryTransferOutInfoResponse {
    /**
     * 转出状态。取值：
     * - **1**：验证手机；
     * - **2**：验证邮箱；
     * - **3**：已经获取转移密码；
     * - **4**：转出处理中（收到注册局转移请求）；
     * - **5**：转出成功；
     * - **8**：转出失败。
     * @example `8`
     */
    Status: number;
    /**
     * 转移密码发送邮箱。
     * @example `username@example.com`
     */
    Email: string;
    /**
     * 本次获取转移密码过期时间。
     * @example `2018-04-13 19:57:56`
     */
    ExpirationDate: string;
    /**
     * 唯一请求识别码。
     * @example `BBEC5A50-DFDF-482E-8343-B4EB0105E055`
     */
    RequestId: string;
    /**
     * 转出失败原因描述。
     * @example `Transfer out rejected`
     */
    ResultMsg: string;
    /**
     * 收到注册局转出请求时间。
     * @example `2018-04-13 19:57:56`
     */
    PendingRequestDate: string;
    /**
     * 转出失败原因编码。
     * @example `clientRejected`
     */
    ResultCode: string;
    /**
     * 转移密码获取时间。
     * @example `2018-04-13 19:57:56`
     */
    TransferAuthorizationCodeSendDate: string;
}
