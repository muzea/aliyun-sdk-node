export interface InstallManagedPrometheusResponse {
    /**
     * 请求ID。
     * @example `String	2A0CEDF1-06FE-44AC-8E21-21A5BE65****`
     */
    RequestId: string;
    /**
     * 响应内容。通常返回安装状态。
     * @example `success`
     */
    Data: string;
    /**
     * 是否安装成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 安装失败时响应描述。
     * @example `vpcId is blank`
     */
    Message: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
}
