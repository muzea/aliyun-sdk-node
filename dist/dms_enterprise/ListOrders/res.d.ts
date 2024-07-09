export interface ListOrdersResponse {
    Orders: {
        /**
         * 工单列表信息。
         */
        Order: {
            /**
             * 工单备注信息。
             * @example `test`
             */
            Comment: string;
            /**
             * 工单最后修改时间。
             * @example `2022-04-08 11:27:45`
             */
            LastModifyTime: string;
            /**
             * 工单状态码，返回值如下：
             * - **fail**：执行失败
             * - **toaudit**：等待审批
             * - **cancel**：用户撤销工单
             * - **processing**：执行中
             * - **approved**：审批完成
             * - **reject**：审批撤销
             * - **success**：执行成功
             * - **closed**：工单关闭
             * @example `success`
             */
            StatusCode: string;
            /**
             * 工单创建时间。
             * @example `2022-04-08 11:15:46`
             */
            CreateTime: string;
            /**
             * 工单提交者。
             * @example `test`
             */
            Committer: string;
            /**
             * 工单提交者的用户ID。
             * @example `51****`
             */
            CommitterId: number;
            /**
             * 工单状态描述。
             * @example `变更成功`
             */
            StatusDesc: string;
            /**
             * 工单类型。
             * @example `DC_COMMON`
             */
            PluginType: string;
            /**
             * 工单ID。
             * @example `51****`
             */
            OrderId: number;
        }[];
    };
    /**
     * 记录总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
