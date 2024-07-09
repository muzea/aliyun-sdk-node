export interface DescribeServiceMeshProxyStatusResponse {
    /**
     * 响应信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
    /**
     * Proxy代理状态列表
     */
    ProxyStatus: {
        /**
         * Proxy代理版本
         * @example `1.9.7`
         */
        ProxyVersion: string;
        /**
         * Proxy状态，取值：
         * - `SYNCED`：已同步Proxy状态
         * - `NOT SENT`：未同步Proxy状态
         * - `STALE (Never Acknowledged)`：Istiod已向Envoy发送更新Proxy状态，但从未收到确认
         * - `STALE`：Istiod已向Envoy发送更新Proxy状态，但未收到确认
         * @example `SYNCED`
         */
        ClusterSynced: string;
        /**
         * 端点百分比
         * @example `1`
         */
        EndpointPercent: string;
        /**
         * 监听器同步状态，取值：
         * - `SYNCED`：已同步监听器状态
         * - `NOT SENT`：未同步监听器状态
         * - `STALE (Never Acknowledged)`：Istiod已向Envoy发送更新监听器状态，但从未收到确认
         * - `STALE`：Istiod已向Envoy发送更新监听器状态，但未收到确认
         * @example `SYNCED`
         */
        ListenerSynced: string;
        /**
         * 路由同步状态，取值：
         * - `SYNCED`：已同步路由状态
         * - `NOT SENT`：未同步路由状态
         * - `STALE (Never Acknowledged)`：Istiod已向Envoy发送更新路由状态，但从未收到确认
         * - `STALE`：Istiod已向Envoy发送更新路由状态，但未收到确认
         * @example `SYNCED`
         */
        RouteSynced: string;
        /**
         * 端点同步状态。取值：
         * - `SYNCED`：已同步端点状态
         * - `NOT SENT`：未同步端点状态
         * - `STALE (Never Acknowledged)`：Istiod已向Envoy发送更新端点状态，但从未收到确认
         * - `STALE`：Istiod已向Envoy发送更新端点状态，但未收到确认
         * @example `SYNCED`
         */
        EndpointSynced: string;
        /**
         * Proxy代理ID
         * @example `119q****`
         */
        ProxyId: string;
        /**
         * Istiod版本
         * @example `1.9.7`
         */
        IstioVersion: string;
    }[];
    /**
     * 状态码，取值：
     * -` 200`：查询IstioProxy状态成功
     * - `403`：没有权限
     * - `503`：后端服务故障
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功
     * @example `success`
     */
    Success: string;
}
