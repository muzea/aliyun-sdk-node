export interface GetUserProvisioningEventResponse {
    /**
     * 请求ID。
     * @example `B801715C-97EA-3067-AC97-EF1EBECBB39C`
     */
    RequestId: string;
    /**
     * RAM用户同步事件。
     */
    UserProvisioningEvent: {
        /**
         * RAM用户同步事件ID。
         * @example `up-002axzhapcbz6e63****`
         */
        UserProvisioningId: string;
        /**
         * RAM用户同步的身份ID。取值：
         * - 当`PrincipalType`取值为`Group`时，该值为云SSO用户组ID（g-\*\*\*\*\*\*\*\*）。
         * - 当`PrincipalType`取值为`User`时，该值为云SSO用户ID（u-\*\*\*\*\*\*\*\*）。
         * @example `g-02ha881d*****`
         */
        PrincipalId: string;
        /**
         * RAM用户同步的目标的RD路径。
         * @example `rd-******​/root/test**`
         */
        TargetPath: string;
        /**
         * RAM用户同步事件上次执行失败的错误信息。
         * @example `OperationConflict.UserProvisioning.Process.fail.ImsUserExists`
         */
        ErrorInfo: string;
        /**
         * 源操作类型。取值：
         * - StartProvisioning：启用RAM用户同步。
         * - DeleteProvisioning：删除RAM用户同步。
         * - AddUserToGroup：用户加入用户组。
         * - RemoveUserFromGroup：用户从用户组移出。
         * - UserProvisioningDeletionClearing：删除RAM用户同步之后，后台进行资源清理。
         * @example `AddUserToGroup`
         */
        SourceType: string;
        /**
         * 修改时间（UTC时间）。
         * @example `2022-11-28T03:55:42Z`
         */
        UpdateTime: string;
        /**
         * 冲突策略。当云SSO用户同步到RAM时，如果RAM中存在同名用户时的处理策略。取值：
         * - KeepBoth：两者都保留。当云SSO用户被同步到RAM时，如果RAM已经存在同名用户，则对云SSO用户的用户名添加后缀`_sso`后尝试创建该用户名的RAM用户。
         * - TakeOver：替换。当云SSO用户被同步到RAM时，如果RAM已经存在同名用户，则直接将已经存在的RAM用户替换为云SSO同步用户。
         * @example `KeepBoth`
         */
        DuplicationStrategy: string;
        /**
         * 删除策略。删除RAM用户同步时，对已同步的RAM用户的处理策略。取值：
         * - Delete：删除。删除RAM用户同步时，会删除从云SSO已经同步到RAM中的RAM用户。
         * - Keep：保留。删除RAM用户同步时，会保留从云SSO已经同步到RAM中的RAM用户。
         * @example `Delete`
         */
        DeletionStrategy: string;
        /**
         * RAM用户同步的身份名称。取值：
         * - 当`PrincipalType`取值为`Group`时，该值为云SSO用户组名称。
         * - 当`PrincipalType`取值为`User`时，该值为云SSO用户名称。
         * @example `exampleGroupName`
         */
        PrincipalName: string;
        /**
         * RAM用户同步的目标名称。
         * 当`TargetType`为`RD-Account`时，取值为RD账号名称。
         * @example `exampleRdMember`
         */
        TargetName: string;
        /**
         * 执行失败次数。
         * @example `3`
         */
        ErrorCount: number;
        /**
         * RAM用户同步的目标ID。
         * 当`TargetType`为`RD-Account`时，取值为RD账号ID。
         * @example `1743382******`
         */
        TargetId: string;
        /**
         * 创建时间（UTC时间）。
         * @example `2022-11-28T03:55:42Z`
         */
        CreateTime: string;
        /**
         * 目录ID。
         * @example `d-003qew84****`
         */
        DirectoryId: string;
        /**
         * RAM用户同步的目标类型。目前取值为`RD-Account`。
         * @example `RD-Account`
         */
        TargetType: string;
        /**
         * RAM用户同步事件ID。
         * @example `upe-wjKyNDmZvyZOiRcJ****`
         */
        EventId: string;
        /**
         * RAM用户同步的身份类型。取值：
         * - User：表示该RAM用户同步的身份是云SSO用户。
         * - Group：表示该RAM用户同步的身份是云SSO用户组。
         * @example `Group`
         */
        PrincipalType: string;
        /**
         * 此事件上次执行的时间（UTC时间）。
         * @example `2022-11-28T03:55:42Z`
         */
        LatestAsyncTime: string;
    };
}
