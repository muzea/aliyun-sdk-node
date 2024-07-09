export interface GetDailyBillResponse {
    /**
     * 结果代码:
     * - 200 OK
     * - 1109 系统错误
     * - 3050: 账单类型只能是DailyOrder, DailyBill, DailyInstanceBill
     * - 3049: 消费时间格式错误
     * - 3048: 账单所属只能是1 or 2
     * @example `200`
     */
    Code: string;
    /**
     * 同Code参数值
     * @example `200`
     */
    Message: string;
    /**
     * 候选值:True/False，代表了是否当前API调用本身是成功的。不代表后续 业务操作的成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 下载CSV文件地址，请使用HTTP协议
         * @example `intl-reseller-month-bill.oss-ap-southeast-1.aliyuncs.com/statements/month/dts/1064252248461886/202104/Month%20Billing%20Invoice%20202104.pdf?Expires=1671160973&OSSAccessKeyId=TMP.3KhvoD9pW264cPv8sYe8E2zJ5HLWmrijNHgKiKpXcy8yS472BcrvemgTfNrrXKu5fCCdbLr2XhmYAyYPmbCe8zJyEkmYzL&Signature=hns1PgiiYl1WdI%2FdiOqbEdsgmfI%3D`
         */
        BillLinkCSV: string;
        /**
         * 消费时间，对应具体的消费日期
         * @example `20221201`
         */
        SpendingTime: string;
        /**
         * 同输入参数BillType
         * @example `DailyInstanceBillV2`
         */
        BillType: string;
        /**
         * 同输入参数BillOwner.
         * @example `1`
         */
        BillOwner: string;
        /**
         * 下载XLSX文件地址，请使用HTTP协议
         * @example `intl-reseller-month-bill.oss-ap-southeast-1.aliyuncs.com/statements/month/dts/1064252248461886/202104/Month%20Billing%20Invoice%20202104.pdf?Expires=1671160973&OSSAccessKeyId=TMP.3KhvoD9pW264cPv8sYe8E2zJ5HLWmrijNHgKiKpXcy8yS472BcrvemgTfNrrXKu5fCCdbLr2XhmYAyYPmbCe8zJyEkmYzL&Signature=hns1PgiiYl1WdI%2FdiOqbEdsgmfI%3D
        `
         */
        BillLinkXLSX: string;
    };
    /**
     * 请求id，阿里云为该请求生成的唯一标识符。
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
}
