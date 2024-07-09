export interface GenRealPersonVerificationTokenResponse {
    /**
     * 请求ID。
     * @example `A31006F2-22E7-4538-93BB-DE6B563643EE`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 可信核身认证的唯一标识。
         * > - 核身认证移动端请求后未进行核身认证移动端查询就没有活体和风控结果，整体认证存在一定风险，建议移动端请求结束后进行[核身认证移动端查询](~~198724~~)，完成整体认证流程。
         * - 调用核身认证移动端请求接口返回的verificationToken有效期时间为30分钟，从verificationToken生成时间开始算起，超过有效期再进行人脸认证会报错，请在有效期时间内完成认证。
         * @example `9fca3791c158a479ead9f2ba65ab3XXX`
         */
        VerificationToken: string;
    };
}
