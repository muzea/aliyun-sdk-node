export interface DeleteSavepointRequest {
    /**
     * 工作空间ID。
     * @example `a14bd5d90a****`
     */
    "workspace": string;
    /**
     * 项目空间名称。
     * @example `default-namespace`
     */
    "namespace": string;
    /**
     * 需要删除的Savepoint ID。
     * @example `907a8f0e-4f6c-412b-8a5e-7d4a065b****`
     */
    "savepointId": string;
}
