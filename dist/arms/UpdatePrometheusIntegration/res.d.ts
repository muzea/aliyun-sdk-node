export interface UpdatePrometheusIntegrationResponse {
    /**
     * Id of the request
     * @example `2DB771C3-D1BB-5363-8A5F-ADB2AF2948DB`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * Prometheus实例的集成Exporter实例ID。
         * @example `2866`
         */
        InstanceId: number;
        /**
         * prometheus集成的实例名。
         * @example `inet`
         */
        InstanceName: string;
    };
    /**
     * 返回结果的提示信息。
     * @example `查询成功`
     */
    Message: string;
    /**
     * 接口状态或pop错误码。
     * @example `200`
     */
    Code: number;
}
