export interface UpdateDefaultWorkspaceRequest {
    /**
     * 请求结构体。
     */
    "body"?: {
        /**
         * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
         * @example `12345`
         */
        WorkspaceId: string;
    };
}
