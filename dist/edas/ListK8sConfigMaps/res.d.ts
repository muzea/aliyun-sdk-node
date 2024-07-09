export interface ListK8sConfigMapsResponse {
    /**
     * 接口状态或pop错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D16979DC-4D42-****************`
     */
    RequestId: string;
    /**
     * 检索结果。
     */
    Result: {
        /**
         * 总记录数。
         * @example `6`
         */
        Total: number;
        /**
         * 配置项列表。
         */
        ConfigMaps: {
            /**
             * 创建时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
             * @example `2022-01-31T02:46:14Z`
             */
            CreationTime: string;
            /**
             * 集群名称。
             * @example `my-cluster`
             */
            ClusterName: string;
            /**
             * K8s命名空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 配置项名称。
             * @example `my-config`
             */
            Name: string;
            /**
             * 集群ID，可通过调用GetK8sCluster接口获取，请参见[GetK8sCluster](~~181437~~)。
             * @example `d73918f4-3b08-4c17-bb07-eaf8********`
             */
            ClusterId: string;
            /**
             * 配置项数据列表。
             */
            Data: {
                /**
                 * 用户自定义ConfigMap键。
                 * @example `name`
                 */
                Key: string;
                /**
                 * 用户自定义ConfigMap值。
                 * @example `william`
                 */
                Value: string;
            }[];
            /**
             * 关联的应用列表。
             */
            RelatedApps: {
                /**
                 * 应用名称。
                 * @example `my-app`
                 */
                AppName: string;
                /**
                 * 应用ID。
                 * @example `728cbdf2-da10-49b8-b69c-9168a********`
                 */
                AppId: string;
            }[];
        }[];
    };
}
