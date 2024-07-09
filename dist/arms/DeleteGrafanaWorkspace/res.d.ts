export interface DeleteGrafanaWorkspaceResponse {
    /**
     * 请求ID。
     * @example `27E653FA-5958-45BE-8AA9-14D884DC****`
     */
    RequestId: string;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 请求是否执行成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `eac0a8048716731735000007137d000b`
     */
    TraceId: string;
    /**
     * Grafana是否删除成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Data: boolean;
}
