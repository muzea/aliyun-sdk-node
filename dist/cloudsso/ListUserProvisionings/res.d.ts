export interface ListUserProvisioningsResponse {
    /**
     * 查询返回结果下一页的令牌。
     * > 只有`IsTruncated`为`true`时，才显示该参数。
     * @example `27EbL9j4ZgZjsMZFqbZFgbwQ1VXFU1Khcpx9e2vrW1zwzTBmTGWaM7ixHhRin8SCsxaJdazYVCzeKc2UF2QkyGb83cPhr8ZxrzoaiTd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `F76AF4FC-****-****-B7CB-74F3********`
     */
    RequestId: string;
    /**
     * 每页的最大数据条数。
     * 取值范围：1~100。
     * 默认值：10。
     * @example `100`
     */
    MaxResults: number;
    /**
     * 符合请求参数条件的数据总条数。
     * @example `110`
     */
    TotalCounts: number;
    /**
     * RAM用户同步列表。
     */
    UserProvisionings: {
        /**
         * RAM用户同步的状态。取值：
         * - Enabled：RAM用户同步已启用。
         * - Disabled：RAM用户同步未启用。
         * @example `Enabled`
         */
        Status: string;
        /**
         * 描述。
         * @example `this is a user provisioning.`
         */
        Description: string;
        /**
         * RAM用户同步的ID。
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
         * 修改时间。
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
         * @example `testGroupName`
         */
        PrincipalName: string;
        /**
         * RAM用户同步的目标类型。目前取值为`RD-Account`。
         * @example `testRdMember`
         */
        TargetName: string;
        /**
         * RAM用户同步的目标ID。目前取值为RD账号ID。
         * @example `1743382******`
         */
        TargetId: string;
        /**
         * 创建时间。
         * @example `2022-11-28T03:55:42Z`
         */
        CreateTime: string;
        /**
         * 目录ID。
         * @example `d-003qew84****`
         */
        DirectoryId: string;
        /**
         * 目录所属的主账号ID。
         * @example `1639738******`
         */
        OwnerPk: string;
        /**
         * RAM用户同步的目标类型。目前取值为`RD-Account`。
         * @example `RD-Account`
         */
        TargetType: string;
        /**
         * RAM用户同步的身份类型。取值：
         * - User：表示该RAM用户同步的身份是云SSO用户。
         * - Group：表示该RAM用户同步的身份是云SSO用户组。
         * @example `Group`
         */
        PrincipalType: string;
    }[];
    /**
     * 返回结果是否被截断。取值：
     * - true：已截断。
     * - false：未截断。
     * @example `true`
     */
    IsTruncated: boolean;
}
