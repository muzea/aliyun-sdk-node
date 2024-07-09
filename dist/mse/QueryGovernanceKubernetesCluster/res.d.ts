export interface QueryGovernanceKubernetesClusterResponse {
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `DE34D413-2B79-5E77-9696-36D875E822AD`
     */
    RequestId: string;
    /**
     * 响应数据。
     */
    Data: {
        /**
         * 数据结构。
         */
        Result: {
            /**
             * 集群名字。
             * @example `example-cluster`
             */
            ClusterName: string;
            /**
             * 集群ID。
             * @example `abcdef123456789`
             */
            ClusterId: string;
            /**
             * 集群所在地域。
             * @example `cn-shanghai`
             */
            Region: string;
            /**
             * 集群版本。
             * @example `1.22`
             */
            K8sVersion: string;
            /**
             * 命名空间信息。
             * @example `[{"Name":"ack-onepilot","Tags":{"name":"ack-onepilot"}}]`
             */
            NamespaceInfos: string;
            /**
             * Pilot启动时间。
             * @example `2022-05-17T05:39:43.000+0000`
             */
            PilotStartTime: string;
        }[];
        /**
         * 集群总数。
         * @example `3`
         */
        TotalSize: number;
        /**
         * 当前页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 当前页大小。
         * @example `10`
         */
        PageSize: number;
    };
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
}
