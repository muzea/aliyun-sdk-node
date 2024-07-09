export interface CreateGrafanaWorkspaceResponse {
    /**
     * 请求ID。
     * @example `D80ADAAC-8C32-5479-BD14-C28CF832****`
     */
    RequestId: string;
    /**
     * Grafana 工作区信息。
     */
    Data: any;
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
     * 是否创建成功。
     * - `true`：修改成功
     * - `false`：修改失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `eac0a8048716731735000007137d000b`
     */
    TraceId: string;
}
