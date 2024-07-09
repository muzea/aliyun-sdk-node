export interface DescribeEmptyNumberRequest {
    /**
     * 授权码。
     * > 在[号码百科控制台](https://dytns.console.aliyun.com/analysis/apply)**我的申请**页面，获取授权ID即授权码。
     * @example `Dd1r***4id
    `
     */
    "AuthCode": string;
    /**
     * 待查询的号码。
     * > 目前仅支持单个号码查询。
     * @example `189****1234`
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
