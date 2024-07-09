export interface SetCreditLineRequest {
    /**
     * 子账号UID
     * @example `1263644979775567`
     */
    "Uid": number;
    /**
     * 新的信控额度
     * @example `100`
     */
    "CreditLine": string;
}
