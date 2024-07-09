export interface DeleteSnapshotGroupResponse {
    /**
     * 请求ID。
     * @example `6EDE885A-FDC1-4FAE-BC44-6EACAEA6CC6E`
     */
    RequestId: string;
    OperationProgressSet: {
        /**
         * 删除实例快照时操作状态信息合集。
         */
        OperationProgress: {
            /**
             * 错误信息。删除成功时返回空值。
             * <props="intl">错误码和错误信息，请参见[错误中心](https://error-center.alibabacloud.com/status/product/Ecs)。</props>
             * <props="china">错误码和错误信息，请参见[错误中心](https://error-center.aliyun.com/status/product/Ecs)。</props>
             * @example `testErrorMsg`
             */
            ErrorMsg: string;
            /**
             * 错误码。删除成功时返回空值。
             * <props="intl">错误码和错误信息，请参见[错误中心](https://error-center.alibabacloud.com/status/product/Ecs)。</props>
             * <props="china">错误码和错误信息，请参见[错误中心](https://error-center.aliyun.com/status/product/Ecs)。</props>
             * @example `400`
             */
            ErrorCode: string;
            /**
             * 操作是否成功。成功返回Success，失败返回ErrorCode和ErrorMsg信息。
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
                     * @example `s-j6c9lpuyxo2uxxnx****`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
