export interface TestNetworkConnectionResponse {
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 本次调用的唯一ID。用于出现错误后定位日志，排查问题。
     * @example `0000-ABCD-EFG	`
     */
    RequestId: string;
    /**
     * 测试数据源与资源组网络连通性的返回结果。
     */
    TaskList: {
        /**
         * 测试目标数据源与其所使用资源组的网络连通性失败后的原因描述。如果数据源与资源组网络连通性测试成功，则该参数的返回值为空。
         * @example `可连通`
         */
        ConnectMessage: string;
        /**
         * 测试目标数据源与其所使用资源组网络连通性的结果状态。取值如下：
         * - true：表示目标数据源与其所使用资源组的网络连通成功。
         * - false：表示目标数据源与其所使用资源组的网络连通失败。您可以查看ConnectMessage参数定位失败原因。
         * @example `true`
         */
        ConnectStatus: boolean;
    };
}
