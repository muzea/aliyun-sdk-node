export interface CreateResellerUserQuotaRequest {
    /**
     * 金额，单位元[Quota开户必填]
     * @example `100`
     */
    "Amount": string;
    /**
     * 币种名称
     * @example `CNY：人民币。USD：美元。JPY：日元。`
     */
    "Currency": string;
    /**
     * 外部系统业务流水号
     * @example `7ed0bedc-056e-4a71-9249-4581615c028f`
     */
    "OutBizId"?: string;
}
