export interface GetSavepointRequest {
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
     * Savepoint ID。
     * @example `88a8fc49-e090-430a-85d8-3ee8c79c****`
     */
    "savepointId": string;
}
