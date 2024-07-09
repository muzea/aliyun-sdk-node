export interface CreatePrometheusInstanceResponse {
    /**
     * 新建实例成功后的实例ID。
     * - 如果是aliyun-cs实例，则Prometheus实例ID就是CS的集群ID。
     * - 如果是ecs实例，则Prometheus实例ID就是VPCID。
     * @example `qduukd****`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `70675725-8F11-4817-8106-CFE0AD71****`
     */
    RequestId: string;
    /**
     * 返回信息。
     * @example `message`
     */
    Message: string;
    /**
     * 接口状态码：
     * - `2XX`：成功
     * - `3XX`：重定向
     * - `4XX`：请求错误
     * - `5XX`：服务器错误
     * @example `200`
     */
    Code: number;
}
