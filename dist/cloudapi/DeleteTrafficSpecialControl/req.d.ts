export interface DeleteTrafficSpecialControlRequest {
    /**
     * 流控策略ID
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
     * 根据类型填写对应的AppId或者阿里云账号ID（账号ID请到[账号管理](https://account.console.aliyun.com/?spm=a2c4g.11186623.2.15.343130a8sDi8cO#/secure)页面查看）
     * @example `3382463`
     */
    "SpecialKey": string;
}
