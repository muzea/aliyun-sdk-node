export interface GetOwnerApplyOrderDetailResponse {
    /**
     * 请求ID。
     * @example `CB784055-E8CB-4461-AB0B-483A1DA32BB5`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 工单详情。
     */
    OwnerApplyOrderDetail: {
        /**
         * 申请类型，取值和说明如下：
         * - **INSTANCE**：实例Owner
         * - **DB**：库Owner
         * - **TABLE**：表Owner
         * @example `DB`
         */
        ApplyType: string;
        /**
         * 申请资源详情。
         */
        Resources: {
            /**
             * 是否为逻辑库，取值：
             * - **true**：是
             * - **false**：否
             * @example `true`
             */
            Logic: boolean;
            /**
             * 资源ID。
             * @example `12345`
             */
            TargetId: string;
            /**
             * 资源详情。
             */
            ResourceDetail: {
                /**
                 * 资源搜索名。
                 * > 建议您的业务不要强依赖该参数，后续版本的格式可能会发生变化。
                 * @example `yuyang[test]`
                 */
                SearchName: string;
                /**
                 * 数据库类型。
                 * @example `MYSQL`
                 */
                DbType: string;
                /**
                 * 实例的环境类型，更多信息，请参见[实例环境说明](~~163309~~)。
                 * @example `PRODUCT`
                 */
                EnvType: string;
                /**
                 * 表名。
                 * > 申请表Owner时，将返回此参数。
                 * @example `test`
                 */
                TableName: string;
                /**
                 * 原Owner ID列表。
                 */
                OwnerIds: number[];
                /**
                 * 原Owner昵称列表。
                 */
                OwnerNickNames: string[];
            };
        }[];
    };
}
