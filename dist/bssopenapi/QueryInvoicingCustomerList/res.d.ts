export interface QueryInvoicingCustomerListResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BBEF51A3-E933-4F40-A534-C673CBDB9C80`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        CustomerInvoiceList: {
            /**
             * 发票信息列表。
             */
            CustomerInvoice: {
                /**
                 * 类型，取值：
                 * - 0：增值税普通发票。
                 * - 1：增值税专有发票。
                 * @example `1`
                 */
                Type: number;
                /**
                 * 发票抬头状态。
                 * @example `2`
                 */
                Status: number;
                /**
                 * 变更类型。
                 * @example `1`
                 */
                AdjustType: number;
                /**
                 * 银行。
                 * @example `测试银行`
                 */
                Bank: string;
                /**
                 * 开始账期。
                 * @example `202002`
                 */
                StartCycle: number;
                /**
                 * 发票抬头变更情况说明书。
                 * @example `instruction.doc`
                 */
                TitleChangeInstructions: string;
                /**
                 * 用户ID。
                 * @example `34565465675`
                 */
                UserId: number;
                /**
                 * 营业执照地址。
                 * @example `某某省某某市某某区某地址`
                 */
                OperatingLicenseAddress: string;
                /**
                 * 公司抬头。
                 * @example `测试公司`
                 */
                InvoiceTitle: string;
                /**
                 * 用户昵称。
                 * @example `testNick`
                 */
                UserNick: string;
                /**
                 * 营业执照电话。
                 * @example `138xxxxxxxx`
                 */
                OperatingLicensePhone: string;
                /**
                 * 结束账期。
                 * @example `202003`
                 */
                EndCycle: number;
                /**
                 * 默认备注，选择此抬头时将会附加的备注文案。
                 * @example `PO代码：12984554`
                 */
                DefaultRemark: string;
                /**
                 * 税务登记证扫描件路径和文件名。
                 * @example `taxationLicense.jpg`
                 */
                TaxationLicense: string;
                /**
                 * 税务登记号。
                 * @example `21343245342534`
                 */
                RegisterNo: string;
                /**
                 * 创建时间，格式：yyyy-mm-dd hh:mm:ss。
                 * @example `2018-09-07 15:26:20`
                 */
                GmtCreate: string;
                /**
                 * 取值：
                 * - 1：一般纳税人。
                 * - 2：小规模纳税人。
                 * @example `1`
                 */
                TaxpayerType: number;
                /**
                 * 客户支付宝认证类型，取值：
                 * - 1：个人。
                 * - 2：公司。
                 * @example `1`
                 */
                CustomerType: number;
                /**
                 * 开具类型。
                 * @example `1`
                 */
                IssueType: number;
                /**
                 * 发票ID。
                 * @example `239875502738`
                 */
                Id: number;
                /**
                 * 银行账号。
                 * @example `389576348573296349853476`
                 */
                BankNo: string;
            }[];
        };
    };
}
