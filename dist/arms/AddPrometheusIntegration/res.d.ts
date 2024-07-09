export interface AddPrometheusIntegrationResponse {
    /**
     * Id of the request
     * @example `3703B98C-335E-5BA7-972E-F90E9E768A85`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * Prometheus实例的集成Exporter实例id。
         * @example `2829`
         */
        InstanceId: number;
        /**
         * prometheus集成的Exporter实例名。
         * @example `hw-cloud02`
         */
        InstanceName: string;
    };
    /**
     * 接口状态或pop错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
