export interface CreatePipelineRequest {
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
         * @example `72***`
         */
        WorkspaceId: string;
        /**
         * 工作流定义，具体样例见下方请求参数补充说明。
         * @example `apiVersion: "core/v1"*********`
         */
        Manifest: string;
    };
}
