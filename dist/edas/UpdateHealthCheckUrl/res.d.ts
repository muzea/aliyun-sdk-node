export interface UpdateHealthCheckUrlResponse {
    /**
     * code码
     * @example `200`
     */
    Code: number;
    /**
     * 信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `D16979DC-4D42-*****************`
     */
    RequestId: string;
    /**
     * 健康检查URL
     * @example `http://127.0.0.1:8080/_ehc.html`
     */
    HealthCheckURL: string;
}
