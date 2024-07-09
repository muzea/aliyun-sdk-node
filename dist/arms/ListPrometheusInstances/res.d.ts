export interface ListPrometheusInstancesResponse {
    /**
     * 返回实例JSON。
     * @example `[{"agentStatus":"0","clusterId":"global-v2-cn-1672753017899-dmjnwtzz","clusterName":"test-GlobalView","clusterType":"GlobalViewV2","commercialConfig":{},"createTime":1656579981000,"id":13785300,"isAdvancedClusterInstalled":false,"isClusterRunning":true,"isControllerInstalled":true,"isIntegrationCenter":false,"regionId":"cn-hongkong","updateTime":1657616273000,"userId":"1672753017899"},{"agentStatus":"0","clusterId":"51a123a61a8f31f0","clusterName":"cloud-product-prometheus_cn-qingdao","clusterType":"cloud-product-prometheus","commercialConfig":{},"controllerId":"51a123a61a8f31f0","createTime":1653532488000,"id":13746658,"isAdvancedClusterInstalled":false,"isClusterRunning":true,"isControllerInstalled":true,"isIntegrationCenter":false,"regionId":"cn-qingdao","updateTime":1653532518000,"userId":"1672753017899"}]`
     */
    Data: string;
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `E9C9DA3D-10FE-472E-9EEF-2D0A3E41****`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
}
