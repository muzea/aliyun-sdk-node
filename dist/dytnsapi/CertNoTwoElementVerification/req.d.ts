export interface CertNoTwoElementVerificationRequest {
    /**
     * 授权码。
     * > 在**号码百科**->[**标签广场**](https://dytns.console.aliyun.com/analysis/square)选择标签，提交使用申请，申请通过后，会获得该授权码。
     * @example `QASDW@#**`
     */
    "AuthCode": string;
    /**
     * 待核验的姓名。
     * @example `张三`
     */
    "CertName": string;
    /**
     * 待核验的身份证号。
     * @example `3***************0`
     */
    "CertNo": string;
}
