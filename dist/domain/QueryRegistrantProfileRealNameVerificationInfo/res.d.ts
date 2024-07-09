export interface QueryRegistrantProfileRealNameVerificationInfoResponse {
    /**
     * 实名认证证件类型。取值：
     * - **SFZ**：身份证。
     * - **HZ**：护照。
     * - **YYZZ**：营业执照。
     * - **ORG**：组织机构代码证。
     * - **XYDM**：统一社会信用代码证书。
     * - **TXZ**：港澳居民来往内地通行证。
     * > 更多证件类型的取值请参见[支持实名认证的证件类型](~~72209~~)。
     * @example `SFZ`
     */
    IdentityCredentialType: string;
    /**
     * 请求ID。
     * @example `4D73432C-7600-4779-ACBB-C3B5CA145D32`
     */
    RequestId: string;
    /**
     * 实名认证资料更新时间。
     * @example `2017-05-22 19:04:49`
     */
    ModificationDate: string;
    /**
     * 采用Base64编码的实名认证资料图片。
     * @example `dGVzdA==`
     */
    IdentityCredential: string;
    /**
     * 实名认证资料提交时间。
     * @example `2017-05-22 19:04:49`
     */
    SubmissionDate: string;
    /**
     * 实名认证证件号码。
     * @example `4111111111111110**`
     */
    IdentityCredentialNo: string;
    /**
     * 查询到的信息模板的编号。
     * @example `1234567`
     */
    RegistrantProfileId: number;
    /**
     * 实名认证图片下载地址。
     * @example `http://test.oss-cn-hangzhou.aliyuncs.com/20170522/1219541161213057_070445190.jpg`
     */
    IdentityCredentialUrl: string;
}
