export interface AskSessionPackageRenewPriceRequest {
    /**
     * 会话包ID
     * @example `tp-***********`
     */
    "SessionPackageId": string;
    /**
     * 续费时间单位
     * @example `Month`
     */
    "PeriodUnit": string;
    /**
     * 续费时长
     * @example `1`
     */
    "Period": number;
}
