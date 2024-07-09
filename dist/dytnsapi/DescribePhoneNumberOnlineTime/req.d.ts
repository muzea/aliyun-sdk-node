export interface DescribePhoneNumberOnlineTimeRequest {
    /**
     * 授权码。
     * > 在[号码百科控制台](https://dytns.console.aliyun.com/analysis/apply)**我的申请**页面，获取授权ID即授权码。
     * @example `QASDW@#**`
     */
    "AuthCode": string;
    /**
     * 待查询的号码。
     * - 若Mask取值为NORMAL，该字段为11位手机号码。
     * - 若Mask取值为MD5，该字段为32位加密字符串。
     * - 若Mask取值为SHA256，该字段为64位加密字符串。
     * ><notice>加密字符串中字母不区分大小写。></notice>
     * @example `1390000****`
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
    /**
     * 对外运营商。取值：
     * - **MOBILE**：中国移动。
     * - **UNICOM**：中国联通。
     * - **TELECOM**：中国电信。
     * ><notice>非必填项，阿里云会根据号码归属的运营商类型做自动判断，该字段的取值对查询结果无任何影响。></notice>
     * @example `UNICOM`
     */
    "Carrier"?: string;
}
