export interface UpdateWorkspaceRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `123`
     */
    "WorkspaceId": string;
    /**
     * 请求结构。
     */
    "body"?: {
        /**
         * 工作空间显示名称，格式如下。
         * - 长度为3~23 个字符，可以包含字母、下划线或数字。
         * - 必须以大小字母开头。
         * - 当前地域内唯一。
         * @example `workspace-example`
         */
        DisplayName: string;
        /**
         * 工作空间描述信息。
         * @example `这是一个示例工作空间。`
         */
        Description: string;
    };
}
