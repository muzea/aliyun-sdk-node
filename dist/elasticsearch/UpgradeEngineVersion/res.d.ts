export interface UpgradeEngineVersionResponse {
    /**
     * 请求ID。
     * @example `F99407AB-2FA9-489E-A259-40CF6DC*****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 校验类型。支持：
         * - checkClusterHealth：集群健康状态
         * - checkConfigCompatible：配置兼容状态
         * - checkClusterResource：资源空间状态
         * - checkClusterSnapshot：是否存在快照
         * @example `checkClusterHealth`
         */
        validateType: string;
        /**
         * 校验信息。
         */
        validateResult: {
            /**
             * 错误类型。支持：
             * - clusterStatus：集群健康状态
             * - clusterConfigYml：集群YML文件
             * - clusterConfigPlugins：集群配置文件
             * - clusterResource：集群资源
             * - clusterSnapshot：集群快照
             * @example `clusterStatus`
             */
            errorType: string;
            /**
             * 错误码。
             * @example `ClusterStatusNotHealth`
             */
            errorCode: string;
            /**
             * 错误信息。
             * @example `The cluster status is not health`
             */
            errorMsg: string;
        }[];
        /**
         * 校验是否通过。支持：
         * - success：通过
         * - failed：未通过
         * @example `success`
         */
        status: string;
    }[];
}
