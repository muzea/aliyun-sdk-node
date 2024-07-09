export interface DeleteRemediationsResponse {
    /**
     * 请求ID。
     * @example `4BE28FB1-616A-5586-82E4-F34FB2AF7441`
     */
    RequestId: string;
    /**
     * 删除修正设置的操作结果。
     */
    RemediationDeleteResults: {
        /**
         * 修正设置ID。
         * @example `crr-909ba2d4716700eb****`
         */
        RemediationId: string;
        /**
         * 错误码。
         * - 当您删除修正设置成功时，该参数为空。
         * - 当您删除修正设置失败时，该参数显示错误码。错误码详情，请参见<props="china">[错误中心](https://error-center.aliyun.com/status/product/Config)</props><props="intl">[错误中心](https://error-center.alibabacloud.com/status/product/Config)</props>。
         * @example `RemediationConfigNotExist`
         */
        ErrorMessage: string;
        /**
         * 操作是否成功。取值：
         * - true：成功。
         * - false：失败。
         * @example `true`
         */
        Success: boolean;
    }[];
}
