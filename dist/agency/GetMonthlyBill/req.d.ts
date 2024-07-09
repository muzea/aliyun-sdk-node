export interface GetMonthlyBillRequest {
    /**
     * Billing Month, Format is YYYY-MM
     * @example `2022-11`
     */
    "Month": string;
    /**
     * Bill Owner type.
     *  Value range:
     * 1: Master account
     * 2: Sub account
     * @example `1`
     */
    "BillOwner": string;
    /**
     * Value Range:
     * MonthlyInvoice
     * MonthRefundInvoice
     * MonthlySummary
     * MonthlyInstanceAddAdjustBill
     * MonthlyInstanceRefundBill
     * MonthlyAddAdjustInvoce
     * MonthlyRefundAdjustInvoce
     * MonthlyInstanceConsumeV2
     * MarginReportV2
     * @example `MonthlyInvoice`
     */
    "BillType": string;
}
