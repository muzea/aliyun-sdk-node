export interface SetResellerUserQuotaRequest {
    /**
     * 金额，单位元
     * @example `750`
     */
    "Amount": string;
    /**
     * 币种类型
     * @example ` CNY：人民币。 USD：美元`
     */
    "Currency"?: string;
    /**
     * 业务id
     * @example `OD2022040818295234777795624764689`
     */
    "OutBizId"?: string;
}
