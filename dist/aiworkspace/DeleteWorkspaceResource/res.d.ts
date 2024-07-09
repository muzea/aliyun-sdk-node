export interface DeleteWorkspaceResourceResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 受影响的资源Id列表。
     */
    ResourceIds: string[];
}
