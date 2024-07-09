export interface ApplyInvoiceRequest {
    /**
     * 申请开票金额（单位：分）。
     * @example `124132`
     */
    "InvoiceAmount": number;
    /**
     * 发票信息ID，对应发票抬头查询返回的ID参数。
     * @example `124132423`
     */
    "CustomerId": number;
    /**
     * 邮寄地址ID（纸质票时必填），对应发票邮寄地址查询返回的ID参数。
     * @example `237958367`
     */
    "AddressId": number;
    /**
     * 发票类型，取值：
     * - 0：纸质发票
     * - 1：电子发票
     * @example `1`
     */
    "InvoicingType"?: number;
    /**
     * 发票渠道，（0：阿里云处理，1：税务平台处理。要求为1）。
     * @example `1`
     */
    "ProcessWay"?: number;
    /**
     * 申请人昵称，系统不做校验。
     * @example `test`
     */
    "ApplyUserNick": string;
    /**
     * 是否按金额开票，若为true则按照用户指定InvoiceAmount申请发票，否则以所选开票对象的总金额申请发票。
     * @example `true`
     */
    "InvoiceByAmount"?: boolean;
    /**
     * 用户备注
     * @example `test`
     */
    "UserRemark"?: string;
    /**
     * 选择开票的代开票对象ids，对应待开票推向查询返回的ID参数。
     * @example `384752367`
     */
    "SelectedIds": number[];
}
