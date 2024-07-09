export interface GetDailyBillRequest {
    /**
     * Billing date. Format YYYY-MM-DD
     * @example `2022-11-24`
     */
    "Date": string;
    /**
     * 账单所属类型 取值范围:
     * 1: 分销伙伴账号
     * 2: 分销客户账号
     * @example `1`
     */
    "BillOwner": string;
    /**
     * 账单类型，取值范围:
     * - DailyOrder(Deprecated)
     * - DailyBill (Deprecated)
     * - DailyInstanceBill (Deprecated)
     * - DailyInstanceBillV2
     * @example `DailyInstanceBillV2`
     */
    "BillType": string;
}
