export interface SendVerificationCodeResponse {
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误编码，当success为true时，该字段为空
     * @example `NoTenantFound`
     */
    Code: string;
    /**
     * 错误描述，当success为true时，该字段为空
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
}
