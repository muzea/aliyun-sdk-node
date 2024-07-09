export interface PhoneNumberStatusForRealRequest {
    /**
     * 授权码。
     * > 在[号码百科控制台](https://dytns.console.aliyun.com/analysis/apply)**我的申请**页面，获取授权ID即授权码。
     * @example `Dd1r***4id`
     */
    "AuthCode": string;
    /**
     * 待查询的号码。
     * - 若Mask取值为NORMAL，该字段为11位手机号码。
     * - 若Mask取值为MD5，该字段为32位加密字符串。
     * - 若Mask取值为SHA256，该字段为64位加密字符串。
     * ><notice>加密字符串中字母不区分大小写。></notice>
     * @example `189****8999`
     */
    "InputNumber": string;
    /**
     * 号码的加密方式。取值：
     * - **NORMAL**：不加密
     * - **MD5**
     * - **SHA256**
     * @example `NORMAL`
     */
    "Mask": string;
}
