export interface UpdateUserProvisioningRequest {
    /**
     * 目录ID。
     * @example `d-003qew84****`
     */
    "DirectoryId": string;
    /**
     * RAM用户同步ID。
     * @example `up-002axzhapcbz6e63****`
     */
    "UserProvisioningId": string;
    /**
     * 新的冲突策略。当云SSO用户同步到RAM时，如果RAM中存在同名用户时的处理策略。取值：
     * - KeepBoth：两者都保留。当云SSO用户被同步到RAM时，如果RAM已经存在同名用户，则对云SSO用户的用户名添加后缀`_sso`后尝试创建该用户名的RAM用户。
     * - TakeOver：替换。当云SSO用户被同步到RAM时，如果RAM已经存在同名用户，则直接将已经存在的RAM用户替换为云SSO同步用户。
     * @example `KeepBoth`
     */
    "NewDuplicationStrategy"?: string;
    /**
     * 新的删除策略。删除RAM用户同步时，对已同步的RAM用户的处理策略。取值：
     * - Delete：删除。删除RAM用户同步时，会删除从云SSO已经同步到RAM中的RAM用户。
     * - Keep：保留。删除RAM用户同步时，会保留从云SSO已经同步到RAM中的RAM用户。
     * @example `Delete`
     */
    "NewDeletionStrategy"?: string;
    /**
     * 新的RAM用户同步描述信息。
     * @example `description*****`
     */
    "NewDescription"?: string;
}
