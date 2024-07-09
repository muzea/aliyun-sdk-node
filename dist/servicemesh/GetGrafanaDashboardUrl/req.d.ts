export interface GetGrafanaDashboardUrlRequest {
    /**
     * 服务网格ID。
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId": string;
    /**
     * ACK或ASK集群ID。
     * @example `c94ca2d27f7aa47ab84ed73e6f084****`
     */
    "K8sClusterId": string;
    /**
     * 仪表盘名称。
     * @example `Cloud ASM Istio Http Gateway`
     */
    "Title": string;
}
