export interface GetGovernanceKubernetesClusterResponse {
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `5B170A0D-2C5D-4CF8-B808-03966B86****`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 集群ID。
         * @example `cd23228b3c80c4d4f9ad7af1d87cc30d5`
         */
        ClusterId: string;
        /**
         * 集群名称。
         * @example `myCluster`
         */
        ClusterName: string;
        /**
         * 集群所在地域，MSE支持的地域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * k8s版本。
         * @example `1.20.11-aliyun.1`
         */
        K8sVersion: string;
        /**
         * 命名空间信息。
         * @example `[{\"Name\":\"ack-onepilot\",\"Tags\":null},{\"Name\":\"default\",\"Tags\":{\"mse-enable\":\"enabled\"}},{\"Name\":\"kube-node-lease\",\"Tags\":null},{\"Name\":\"kube-public\",\"Tags\":null},{\"Name\":\"kube-system\",\"Tags\":null}]`
         */
        NamespaceInfos: string;
        /**
         * Pilot启动时间。
         * @example `2022-01-11T11:50:38.000+0000`
         */
        PilotStartTime: string;
        /**
         * 最后更新时间。
         * @example `2022-01-12T05:24:31.000+0000`
         */
        UpdateTime: string;
        /**
         * 命名空间列表。
         */
        Namespaces: {
            /**
             * Kubernetes命名空间名字。
             * @example `default`
             */
            Name: string;
            /**
             * 对应接入的mse命名空间名字。
             * @example `default`
             */
            MseNamespace: string;
        }[];
    };
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `True`
     */
    Success: boolean;
}
