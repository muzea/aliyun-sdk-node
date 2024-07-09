export interface QueryBillToOSSSubscriptionResponse {
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
     * @example `9EEAE43F-1E4D-4734-AE93-5049878AC103`
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
         * 当前查询账号名称。
         * @example `test@test.aliyunid.com`
         */
        AccountName: string;
        /**
         * 当前查询账号ID。
         * @example `185xxxxx03489`
         */
        AccountID: string;
        Items: {
            /**
             * 订阅详情。
             */
            Item: {
                /**
                 * 储存桶所有者用户ID。
                 * @example `1369168081849304`
                 */
                BucketOwnerId: number;
                /**
                 * 订阅账单类型。
                 * - BillingItemDetailForBillingPeriod：计费项消明细。
                 * - InstanceDetailForBillingPeriod：实例消费明细。
                 * @example `BillingItemDetailForBillingPeriod`
                 */
                SubscribeType: string;
                /**
                 * 订阅的储存桶ID。
                 * @example `billingtestbucket`
                 */
                SubscribeBucket: string;
                /**
                 * 订阅时间，格式’YYYY-MM-DD hh:mm:ss’。
                 * @example `2019-10-30 15:40:11`
                 */
                SubscribeTime: string;
                /**
                 * 订阅语言简码。
                 * @example `zh`
                 */
                SubscribeLanguage: string;
                /**
                 * OSS存储目录。
                 * @example `Billing/BillingItemDetailMonthly/`
                 */
                BucketPath: string;
                /**
                 * 单文件行数上限。当账单文件超过上限后，会拆成多个文件，并合并成一个压缩包。
                 * @example `300000`
                 */
                RowLimitPerFile: number;
            }[];
        };
    };
}
