export interface DeductOutstandingBalanceRequest {
    /**
     * 分销客户账号UID
     * @example `1133166938931507`
     */
    "Uid": number;
    /**
     * 要冲减的已抵扣额度
     * @example `300`
     */
    "DeductAmount": string;
}
