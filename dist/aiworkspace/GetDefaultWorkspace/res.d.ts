export interface GetDefaultWorkspaceResponse {
    /**
     * 请求ID。
     * @example `5A14FA81-DD4E-******-6343FE44B941`
     */
    RequestId: string;
    /**
     * 工作空间ID。
     * @example `1234`
     */
    WorkspaceId: string;
    /**
     * 工作空间名称， 同地域内唯一。
     * @example `workspace-example`
     */
    WorkspaceName: string;
    /**
     * 创建UTC时间，时间格式为ISO8601。
     * @example `2021-01-21T17:12:35.232Z`
     */
    GmtCreateTime: string;
    /**
     * 修改UTC时间，时间格式为ISO8601。
     * @example `2021-01-21T17:12:35.232Z`
     */
    GmtModifiedTime: string;
    /**
     * 工作空间显示名称。
     * @example `workspace-example`
     */
    DisplayName: string;
    /**
     * 工作空间描述。
     * @example `workspace description example`
     */
    Description: string;
    /**
     * 工作空间包含的环境，取值如下：
     * * 简单模式只有生产环境（prod）。
     * * 标准模式包含开发环境（dev）和生产环境（prod）。
     */
    EnvTypes: string[];
    /**
     * 创建者的阿里云账号UID。
     * @example `17915******4216
    `
     */
    Creator: string;
    /**
     * 创建者的阿里云账号UID。
     */
    Owner: {
        /**
         * 用户UID。
         * @example `17915******4216`
         */
        UserId: string;
        /**
         * 用户名。
         * @example `username`
         */
        UserName: string;
        /**
         * 用户UID。
         * @example `17915******4216`
         */
        UserKp: string;
    };
    /**
     * 工作空间状态，可能值：
     * - ENABLED：正常。
     * - INITIALIZING：初始化中。
     * - FAILURE：失败。
     * - DISABLED：手动禁用。
     * - FROZEN：欠费冻结。
     * - UPDATING：项目更新中。
     * @example `ENABLED`
     */
    Status: string;
    /**
     * 默认工作空间创建流程的阶段列表详情。
     */
    Conditions: {
        /**
         * 任务类型，可能值：
         * - CREATING：创建中。
         * - WORKSPACE_CREATED：工作空间创建完成。
         * - MEMBERS_ADDED：成员添加完成。
         * - ENABLED：总体完成。
         * @example `CREATING `
         */
        Type: string;
        /**
         * 返回码。200表示返回正常，其他表示返回异常。
         * @example `200`
         */
        Code: number;
        /**
         * 请求返回的错误消息。当返回码为200时，该字段为空。
         * @example `Create Failed`
         */
        Message: string;
    }[];
}
