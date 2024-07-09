export interface RetryUserProvisioningEventRequest {
    /**
     * RAM用户同步事件ID。
     * 您可以调用[ListUserProvisioningEvents](~~2636305~~)获取`EventId`。
     * @example `upe-wjKyNDmZvyZOiRcJ****`
     */
    "EventId": string;
    /**
     * 目录ID。
     * @example `d-003qew84****`
     */
    "DirectoryId": string;
    /**
     * 冲突策略。当云SSO用户同步到RAM时，如果RAM中存在同名用户时的处理策略。取值：
     * - KeepBoth：两者都保留。当云SSO用户被同步到RAM时，如果RAM已经存在同名用户，则对云SSO用户的用户名添加后缀`_sso`后尝试创建该用户名的RAM用户。
     * - TakeOver：替换。当云SSO用户被同步到RAM时，如果RAM已经存在同名用户，则直接将已经存在的RAM用户替换为云SSO同步用户。
     * @example `KeepBoth`
     */
    "DuplicationStrategy": string;
}
