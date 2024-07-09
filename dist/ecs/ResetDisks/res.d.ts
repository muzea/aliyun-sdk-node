export interface ResetDisksResponse {
    /**
     * 请求ID。
     * @example `3D66C85C-AA97-4A00-B0ED-2D9A80FE782C`
     */
    RequestId: string;
    OperationProgressSet: {
        /**
         * 回滚一个或多个云盘时的操作状态信息合集。
         */
        OperationProgress: {
            /**
             * 错误信息。回滚成功时返回空值。
             * <props="intl">错误码和错误信息，请参见[错误中心](https://error-center.alibabacloud.com/status/product/Ecs)。</props>
             * <props="china">错误码和错误信息，请参见[错误中心](https://error-center.aliyun.com/status/product/Ecs)。</props>
             * @example `testErrorMsg`
             */
            ErrorMsg: string;
            /**
             * 错误码。回滚成功时返回空值。
             * <props="intl">错误码和错误信息，请参见[错误中心](https://error-center.alibabacloud.com/status/product/Ecs)。</props>
             * <props="china">错误码和错误信息，请参见[错误中心](https://error-center.aliyun.com/status/product/Ecs)。</props>
             * @example `400`
             */
            ErrorCode: string;
            /**
             * 操作是否成功。
             * 成功返回Success，失败返回ErrorCode和ErrorMsg信息。
             * @example `Success`
             */
            OperationStatus: string;
            RelatedItemSet: {
                /**
                 * 资源信息。
                 */
                RelatedItem: {
                    /**
                     * 资源名称。
                     * @example `SnapshotId`
                     */
                    Name: string;
                    /**
                     * 资源ID。
                     * @example `s-j6cdofbycydvg7ey****`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
