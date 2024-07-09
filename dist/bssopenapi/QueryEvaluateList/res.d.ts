export interface QueryEvaluateListResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D35FF10E-1B2E-4ABA-8401-0AE17725F50B`
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
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 查询条件内可开票金额，单位分。
         * @example `12344`
         */
        TotalUnAppliedInvoiceAmount: number;
        /**
         * 每页条数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 查询条件内总开票金额，单位分。
         * @example `12344`
         */
        TotalInvoiceAmount: number;
        /**
         * 主机ID。
         * @example `cn`
         */
        HostId: string;
        EvaluateList: {
            /**
             * 返回数据列表。
             */
            Evaluate: {
                /**
                 * 类型，取值：
                 * - 1：搜索可开票金额负值。
                 * - 2：搜索可开票金额为正值。
                 * - 3：搜索所有不为0代开票信息。
                 * - 4：已开金额>0。
                 * > 默认为空则搜索全部。
                 * @example `1`
                 */
                Type: number;
                /**
                 * 状态。
                 * @example `1`
                 */
                Status: number;
                /**
                 * 汇金ID。
                 * @example `234543254325`
                 */
                BillId: number;
                /**
                 * 用户ID。
                 * @example `2738543`
                 */
                UserId: number;
                /**
                 * 账期。
                 * @example `202002`
                 */
                BillCycle: string;
                /**
                 * 可以开发票的金额。
                 * @example `123213`
                 */
                CanInvoiceAmount: number;
                /**
                 * 由于存在其他退订，降配等类型订单带来的退款行为，退订金额抵扣到本次开票记录的金额。与退款数据的**OffsetCostAmount**对应。
                 * @example `500`
                 */
                OffsetAcceptAmount: number;
                /**
                 * 科目ID。
                 * @example `23453245`
                 */
                ItemId: number;
                /**
                 * 外部订单号。
                 * @example `124324213421`
                 */
                OutBizId: string;
                /**
                 * 用户昵称。
                 * @example `test`
                 */
                UserNick: string;
                /**
                 * 修改时间。
                 * @example `2018-10-10 18:05:44`
                 */
                GmtModified: string;
                /**
                 * 外部对象ID。
                 * @example `12341`
                 */
                OpId: string;
                /**
                 * 业务类型。取值：
                 * - ALIYUN：阿里云产品。
                 * - MARKETPLACE：云市场产品。
                 * @example `ALIYUN`
                 */
                BizType: string;
                /**
                 * 原始金额。
                 * @example `-10000`
                 */
                OriginalAmount: number;
                /**
                 * 发票金额。
                 * @example `10000`
                 */
                InvoicedAmount: number;
                /**
                 * 创建时间。
                 * @example `2018-10-10 18:05:44`
                 */
                GmtCreate: string;
                /**
                 * 余额。
                 * @example `-10000`
                 */
                PresentAmount: number;
                /**
                 * 时间。
                 * @example `2018-10-10 18:05:44`
                 */
                BizTime: string;
                /**
                 * 待开票对象名称。
                 * @example `有价代金券退款`
                 */
                Name: string;
                /**
                 * 由于存在其他退订，降配等类型订单带来的退款行为，退订金额抵扣到本次开票记录的金额。与退款数据的**OffsetAcceptAmount**对应。
                 * @example `500`
                 */
                OffsetCostAmount: number;
                /**
                 * 发票ID。
                 * @example `1325321532`
                 */
                Id: number;
            }[];
        };
    };
}
