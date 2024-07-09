export interface CreateSpaceRequest {
    /**
     * 服务空间名称，只能以字母开头，且只能包含数字、字符串。
     * @example `space1`
     */
    "Name"?: string;
    /**
     * 服务空间描述信息。
     * @example `description`
     */
    "Desc"?: string;
    /**
     * 工作空间ID
     * @example `211975XXXX`
     */
    "WorkspaceId"?: number;
}
