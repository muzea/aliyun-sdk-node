export interface UpdatePrometheusGlobalViewResponse {
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 更新是否成功。
         * - `true`：成功。
         * - `false`：失败。
         * @example `true`
         */
        Success: boolean;
        /**
         * 更新失败的集群或数据源列表。
         */
        FailedInstances: {
            /**
             * 数据源名称。
             * @example `sourcename-test`
             */
            SourceName: string;
            /**
             * 数据源类型：
             * -   AlibabaPrometheus
             * -   MetricStore
             * -   CustomPrometheus
             * @example `AlibabaPrometheus`
             */
            SourceType: string;
            /**
             * 用户标识。
             * @example `23784673825*******`
             */
            UserId: string;
            /**
             * Prometheus实例ID。
             * @example `cdb65ed2d527345*********`
             */
            ClusterId: string;
        }[];
    };
    /**
     * 请求ID，用于定位日志，排查问题。
     * @example `E9C9DA3D-10FE-472E-9EEF-2D0A3E41****`
     */
    RequestId: string;
    /**
     * 安装失败时响应描述。
     * @example `message`
     */
    Message: string;
    /**
     * 状态码。说明200表示成功。
     * @example `200`
     */
    Code: number;
}
