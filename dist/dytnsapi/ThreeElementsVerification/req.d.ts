export interface ThreeElementsVerificationRequest {
    /**
     * 授权码。
     * > 在[号码百科控制台](https://dytns.console.aliyun.com/analysis/apply)**我的申请**页面，获取授权ID即授权码。
     * @example `QASDW@#**`
     */
    "AuthCode": string;
    /**
     * 待检验的号码。
     * - 若Mask取值为NORMAL，该字段为明文。
     * - 若Mask取值为MD5，请将该字段做MD5加密。
     * - 若Mask取值为SHA256，请将该字段做SHA256加密。
     * ><notice>加密字符串中字母不区分大小写。></notice>
     * @example `1390000****`
     */
    "InputNumber": string;
    /**
     * 加密方式。取值：
     * - **NORMAL**：不加密
     * - **MD5**
     * - **SHA256**
     * @example `MD5`
     */
    "Mask": string;
    /**
     * 待核验的身份证号。
     * - 若Mask取值为NORMAL，该字段为明文。
     * - 若Mask取值为MD5，请将该字段做MD5加密。
     * - 若Mask取值为SHA256，请将该字段做SHA256加密。
     * ><notice>加密字符串中字母不区分大小写。></notice>
     * @example `83d8040d3cb2181e04****dc6ff5566d4493876a4a5da782887446356b0a787e`
     */
    "CertCode": string;
    /**
     * 待核验的姓名。
     * - 若Mask取值为NORMAL，该字段为明文。
     * - 若Mask取值为MD5，请将该字段做MD5加密。
     * - 若Mask取值为SHA256，请将该字段做SHA256加密。
     * ><notice>加密字符串中字母不区分大小写。></notice>
     * @example `阿里云`
     */
    "Name": string;
}
