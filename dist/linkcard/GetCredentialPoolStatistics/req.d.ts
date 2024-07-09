export interface GetCredentialPoolStatisticsRequest {
    /**
     * 要查询的套餐流量使用详情的月份。
     * @example `202108`
     */
    "Date": string;
    /**
     * 套餐凭证。获取方法如下：
     * - 在[物联网SIM服务控制台](https://dyiotnext.console.aliyun.com/?spm=a2c4g.11186623.0.0.6a072d25p4pUg8)的**套餐凭证**页面，查看套餐凭证。
     * - 调用接口[GetCardDetail](~~374328~~)，在返回参数中查看套餐凭证（CredentialNo）。
     * @example `CM-SF-M-2-12G`
     */
    "CredentialNO": string;
}
