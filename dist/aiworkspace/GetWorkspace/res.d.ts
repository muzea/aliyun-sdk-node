export interface GetWorkspaceResponse {
    /**
     * 请求ID。
     * @example `A0F049F0-8D69-5BAC-8F10-B4DED1B5A34C`
     */
    RequestId: string;
    /**
     * 工作空间ID。
     * @example `1234`
     */
    WorkspaceId: string;
    /**
     * 工作空间名称。
     * @example `workspace-example`
     */
    WorkspaceName: string;
    /**
     * 工作空间创建UTC时间，时间格式为ISO8601。
     * @example `2021-01-21T17:12:35.232Z`
     */
    GmtCreateTime: string;
    /**
     * 工作空间修改UTC时间，时间格式为ISO8601。
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
     * 创建者用户ID。
     * @example `1157******94123`
     */
    Creator: string;
    /**
     * 工作空间状态，可能值：
     * ENABLED：正常。
     * INITIALIZING：初始化中。
     * FAILURE：失败。
     * DISABLED：手动禁用。
     * FROZEN：欠费冻结。
     * UPDATING：项目更新中。
     * @example `ENABLED`
     */
    Status: string;
    /**
     * 管理员账户名称列表。
     */
    AdminNames: string[];
    /**
     * 是否为默认工作空间，可能值：
     * - false：不是默认工作空间。
     * - true：是默认工作空间。
     * @example `true`
     */
    IsDefault: boolean;
    /**
     * 附加信息，目前包含TenantId（租户ID）。
     * @example `{"TenantId": "4286******98"}`
     */
    ExtraInfos: any;
    /**
     * 工作空间所有者ID，当Verbose为true时显示。
     */
    Owner: {
        /**
         * 用户UID。
         * @example `1157******94123`
         */
        UserKp: string;
        /**
         * 用户ID。
         * @example `1157******94123`
         */
        UserId: string;
        /**
         * 用户名。
         * @example `mings****t`
         */
        UserName: string;
        /**
         * 显示名。
         * @example `mings****t`
         */
        DisplayName: string;
    };
}
