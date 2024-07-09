export interface ListGrafanaWorkspaceResponse {
    /**
     * 请求ID。
     * @example `0080BE65-167F-5CB6-A691-14E2EFD474BC`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: any[];
    /**
     * 请求参数错误时返回的信息。
     * @example `success`
     */
    Message: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `eac0a8048716731735000007137d000b`
     */
    TraceId: string;
}
