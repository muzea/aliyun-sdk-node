export interface GetWorkspaceRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * @example `12345`
     */
    "WorkspaceId": string;
    /**
     * 是否显示工作空间Owner等补充信息。取值如下：
     * - false（默认值）：不显示补充信息。
     * - true：显示补充信息。
     * @example `true`
     */
    "Verbose"?: boolean;
}
