export interface AddPrometheusInstanceResponse {
    /**
     * 返回结构体。
     * {
     *   "RequestId": 请求ID,
     *   "Data": "{
     *   "clusterType": 集群类型,
     *   "remoteWriteUrl": remote write公网链接,
     *   "internetGrafanaUrl": Grafana内网链接,
     *   "authToken": 是否开启Token,
     *   "internetPushGatewayUrl": PushGateway内网链接,
     *   "clusterId": 集群ID,
     *   "internetRemoteReadUrl": remote read内网链接,
     *   "remoteReadUrl": remote read公网链接,
     *   "grafanaUrl": Grafana公网链接,
     *   "pushGatewayUrl": PushGateway公网链接,
     *   "internetRemoteWriteUrl": remote write内网链接}"
     * }
     * @example `{
      "RequestId": "1293091C-54AD-50FE-B787-E314B94B35AB",
      "Data": "{
      "clusterType":"remote-write-prometheus",
      "remoteWriteUrl":"http://cn-hu/api/v3/write",
      "internetGrafanaUrl":"https://cn-hanga/cn-hangzhou",
      "authToken":false,
      "internetPushGatewayUrl":"https://cangzhou/api/v2",
      "clusterId":"vrju1lj3sa|123456",
      "internetRemoteReadUrl":"https://cn-hangzh67cn-hangzhou/api/v1/read",
      "remoteReadUrl":"http://cn-hanou/api/v1/read",
      "grafanaUrl":"http://cn-angzhou",
      "pushGatewayUrl":"htt1lj3sa/cn-hangzhou/api/v2",
      "internetRemoteWriteUrl":"httpsngzhou/api/v3/write"}"
    }`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `9319A57D-2D9E-472A-B69B-CF3CD16D****`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
