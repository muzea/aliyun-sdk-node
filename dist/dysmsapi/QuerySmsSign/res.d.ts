export interface QuerySmsSignResponse {
    /**
     * 请求ID。
     * @example `CC89A90C-978F-46AC-B80D-54738371E7CA`
     */
    RequestId: string;
    /**
     * 签名审核状态。取值：
     * - **0**：审核中。
     * - **1**：审核通过。
     * - **2**：审核失败，请在返回参数Reason中查看审核失败原因。
     * - **10**：取消审核。
     * @example `1`
     */
    SignStatus: number;
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 短信签名的创建日期和时间。
     * @example ` 2019-01-08 16:44:13`
     */
    CreateDate: string;
    /**
     * 审核备注。
     * - 如果审核状态为**审核通过**或**审核中**，参数Reason显示为“无审核备注”。
     * - 如果审核状态为**审核未通过**，参数Reason显示审核的具体原因。
     * @example `文件不能证明信息真实性，请重新上传`
     */
    Reason: string;
    /**
     * 短信签名。
     * @example `阿里云`
     */
    SignName: string;
}
