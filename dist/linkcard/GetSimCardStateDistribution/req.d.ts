export interface GetSimCardStateDistributionRequest {
    /**
     * 套餐凭证编号，您可在[物联网SIM服务控制台](https://dyiotnext.console.aliyun.com/sim/license)的凭证管理页面查看。
     * @example `CT-SC-M-2-100M`
     */
    "CredentialNO"?: string;
    /**
     * 查询的日期。
     * 格式：yyyyMM。
     * @example `202209`
     */
    "Date": string;
}
