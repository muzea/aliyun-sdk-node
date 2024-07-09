export interface DescribePhoneNumberAnalysisRequest {
    /**
     * 授权码。
     * > 在[号码百科控制台](https://dytns.console.aliyun.com/analysis/apply)**我的申请**页面，获取授权ID即授权码。
     * @example `QASDW@#**`
     */
    "AuthCode": string;
    /**
     * 待查询的号码。
     * @example `187****5620`
     */
    "InputNumber": string;
    /**
     * 号码类型。取值：
     * - **0**：手机号
     * - **1**：手机IMEI号
     * @example `0`
     */
    "NumberType"?: number;
    /**
     * 号码的加密方式。取值：
     * - **NORMAL**：不加密
     * - **MD5**
     * - **SHA256**
     * @example `NORMAL`
     */
    "Mask"?: string;
    /**
     * 号码分数阈值。取值范围：**0~100**。
     * ><notice>是否接受指定的分数阈值由服务端决定。当不接受指定分数阈值时，此字段输入的数据无效。></notice>
     * @example `10`
     */
    "Rate"?: number;
}
