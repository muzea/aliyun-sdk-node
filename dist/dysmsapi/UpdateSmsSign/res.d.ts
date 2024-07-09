export interface UpdateSmsSignResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C4D0D`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 已修改的签名名称。
     * @example `登录验证`
     */
    SignName: string;
    /**
     * 工单号。
     * 审核人员查询审核时会用到此参数。您需要审核加急时需要提供此工单号。
     * @example `2004417****`
     */
    OrderId: string;
}
