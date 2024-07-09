export interface AddTrafficSpecialControlRequest {
    /**
     * 指定流控策略ID
     * @example `tf123456`
     */
    "TrafficControlId": string;
    /**
     * 特殊流控类型，可选值：
     * - **APP**：应用
     * - **USER**：用户
     * @example `APP`
     */
    "SpecialType": string;
    /**
     * 根据**SpecialType**填写对应的AppId或者阿里云账号ID（账号ID请到[账号管理](https://account.console.aliyun.com/?spm=a2c4g.11186623.2.15.3f053654YpMPwo#/secure)页面查看）
     * @example `3382463`
     */
    "SpecialKey": string;
    /**
     * 对应的特殊流控值
     * @example `10000`
     */
    "TrafficValue": number;
}
