export interface GetRealPersonVerificationResultRequest {
    /**
     * 可信核身认证的唯一标识。
     * > 已认证通过的VerificationToken不能做二次查询校验，否则会报错。
     * @example `cwek23dw24geor89230hf2rw`
     */
    "VerificationToken": string;
}
