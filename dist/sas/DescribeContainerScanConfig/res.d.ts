export interface DescribeContainerScanConfigResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 集群ID。
         * @example `c8ca91e0907d94efaba7fb0827eb9****`
         */
        ClusterId: string;
        /**
         * 集群名称。
         * @example `hhht-cluster-02`
         */
        ClusterName: string;
        /**
         * 已选择的应用数量。
         * @example `10`
         */
        ChooseCount: number;
        /**
         * 集群内应用总数量。
         * @example `100`
         */
        AllCount: number;
        /**
         * 容器应用名。
         * @example `[\"alicloud-monitor-controller\"]`
         */
        AppNames: string;
    };
    /**
     * 请求ID。
     * @example `69BFFCDE-37D6-5A49-A8BC-BB03AC83****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
