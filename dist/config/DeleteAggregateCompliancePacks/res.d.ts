export interface DeleteAggregateCompliancePacksResponse {
    /**
     * 请求ID。
     * @example `6EC7AED1-172F-42AE-9C12-295BC2ADB751`
     */
    RequestId: string;
    /**
     * 删除合规包的操作结果。
     */
    OperateCompliancePacksResult: {
        /**
         * 删除合规包的列表。
         */
        OperateCompliancePacks: {
            /**
             * 合规包ID。
             * @example `cp-541e626622af0087****`
             */
            CompliancePackId: string;
            /**
             * 错误码。
             * - 当您删除合规包成功时，该参数为空。
             * - 当您删除合规包失败时，该参数显示错误码。错误码详情，请参见<props="china">[错误中心](https://error-center.aliyun.com/status/product/Config)</props><props="intl">[错误中心](https://error-center.alibabacloud.com/status/product/Config)</props>。
             * @example `CompliancePackAlreadyPending`
             */
            ErrorCode: string;
            /**
             * 操作是否成功。取值：
             * - true：成功。
             * - false：失败。
             * @example `false`
             */
            Success: boolean;
        }[];
    };
}
