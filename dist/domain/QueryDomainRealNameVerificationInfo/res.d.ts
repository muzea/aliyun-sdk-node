export interface QueryDomainRealNameVerificationInfoResponse {
    /**
     * 实名认证证件类型。取值：
     * - **SFZ**：身份证。
     * - **HZ**：护照。
     * - **YYZZ**：营业执照。
     * - **ORG**：组织机构代码证。
     * - **XYDM**：统一社会信用代码证书。
     * - **TXZ**：港澳居民来往内地通行证。
     * 如果您使用的证件不在上述范围中，请参见[支持实名认证的证件类型](~~72209~~)章节，查看相应证件类型的取值。
     * > 请务必选择与您传入的证件一致的证件类型。
     * @example `SFZ`
     */
    IdentityCredentialType: string;
    /**
     * 唯一请求识别码。
     * @example `4DF9D693-0D5B-4EB7-8922-7ECA6BD59314`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `S2019270W570****`
     */
    InstanceId: string;
    /**
     * 域名。
     * @example `aliyundoc.com`
     */
    DomainName: string;
    /**
     * 使用Base64编码的实名认证资料图片。图片要求如下：
     * - 图片为**jpg**或**bmp**格式。
     * - 原图片大小为**55K~1M**。
     * @example `dGVzdA==`
     */
    IdentityCredential: string;
    /**
     * 修改时间。
     * @example `2018-03-28 00:41:42`
     */
    SubmissionDate: string;
    /**
     * 实名认证资料证件号码，如：身份证号码、统一社会信用代码。
     * @example `5****************9`
     */
    IdentityCredentialNo: string;
    /**
     * 实名认证图片下载地址。
     * @example `http://dbu-nap-p.oss-cn-hangzhou.aliyuncs.com/20190219/140692647406xxxx_5d6baea3e7314fd986afdd86e33exxxx.jpg`
     */
    IdentityCredentialUrl: string;
}
