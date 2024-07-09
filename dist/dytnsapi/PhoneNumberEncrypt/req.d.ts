export interface PhoneNumberEncryptRequest {
    /**
     * 授权码。
     * > 在[号码百科控制台](https://dytns.console.aliyun.com/analysis/apply)**我的申请**页面，获取授权ID即授权码。
     * @example `QASDW@#**`
     */
    "AuthCode": string;
    /**
     * 待查询的号码。
     * > 目前仅支持单个号码查询。
     * @example `1390000****`
     */
    "InputNumber": string;
    /**
     * 号码的加密方式。取值：**NORMAL**。
     * ><notice>目前仅支持NORMAL加密方式。></notice>
     * @example `NORMAL`
     */
    "Mask": string;
}
