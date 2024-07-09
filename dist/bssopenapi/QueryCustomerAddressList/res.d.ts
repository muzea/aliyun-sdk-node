export interface QueryCustomerAddressListResponse {
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
        CustomerInvoiceAddressList: {
            /**
             * 客户发票地址列表。
             */
            CustomerInvoiceAddress: {
                /**
                 * 收件人。
                 * @example `test`
                 */
                Addressee: string;
                /**
                 * 邮编。
                 * @example `000000`
                 */
                PostalCode: string;
                /**
                 * 用户ID。
                 * @example `4382956342857`
                 */
                UserId: number;
                /**
                 * 市。
                 * @example `杭州`
                 */
                City: string;
                /**
                 * 用户昵称。
                 * @example `testNick`
                 */
                UserNick: string;
                /**
                 * 街道。
                 * @example `测试街道`
                 */
                Street: string;
                /**
                 * 联系电话。
                 * @example `138xxxxxxxx`
                 */
                Phone: string;
                /**
                 * 区。
                 * @example `测试区`
                 */
                County: string;
                /**
                 * 试用业务类型。
                 * @example `test`
                 */
                BizType: string;
                /**
                 * 详细地址（拼接字段后返回）。
                 * @example `测试地址`
                 */
                DeliveryAddress: string;
                /**
                 * ID。
                 * @example `311601051`
                 */
                Id: number;
                /**
                 * 省。
                 * @example `浙江`
                 */
                Province: string;
            }[];
        };
    };
}
