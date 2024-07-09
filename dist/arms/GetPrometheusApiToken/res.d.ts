export interface GetPrometheusApiTokenResponse {
    /**
     * 集成ARMS Prometheus监控所需的Token。
     * @example `6dcbb77ef4ba6ef5466b5debf9e2****`
     */
    Token: string;
    /**
     * 请求ID。
     * @example `1A9C645C-C83F-4C9D-8CCB-29BEC9E1****`
     */
    RequestId: string;
}
