export interface ListUserProvisioningsRequest {
    /**
     * 目录ID。
     * @example `d-003qew84****`
     */
    "DirectoryId": string;
    /**
     * RAM用户同步的身份ID。取值：
     * - 当`PrincipalType`取值为`Group`时，该值为云SSO用户组ID（g-\*\*\*\*\*\*\*\*）。
     * - 当`PrincipalType`取值为`User`时，该值为云SSO用户ID（u-\*\*\*\*\*\*\*\*）。
     * @example `u-88d73u*****`
     */
    "PrincipalId"?: string;
    /**
     * RAM用户同步的身份类型。取值：
     * - User：表示该RAM用户同步的身份是云SSO用户。
     * - Group：表示该RAM用户同步的身份是云SSO用户组。
     * @example `RD-Account`
     */
    "PrincipalType"?: string;
    /**
     * RAM用户同步的目标ID。目前取值为RD账号ID。
     * @example `1743382******`
     */
    "TargetId"?: string;
    /**
     * RAM用户同步的目标类型。目前取值为`RD-Account`。
     * @example `User`
     */
    "TargetType"?: string;
    /**
     * 每页的最大数据条数。
     * 取值范围：1~100。
     * 默认值：10。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 查询返回结果下一页的令牌。首次调用API不需要`NextToken`。
     * 当您首次调用API时，如果返回数据总条数超过`MaxResults`限制，数据会被截断，只返回`MaxResults`条数据，同时，返回参数`IsTruncated`为`true`，返回一个`NextToken`。您可以使用上一次返回的`NextToken`继续调用API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到`IsTruncated`为`false`，表示全部数据查询完毕。
     * @example `27EbL9j4ZgZjsMZFqbZFgbwQ1VXFU1Khcpx9e2vrW1zwzTBmTGWaM7ixHhRin8SCsxaJdazYVCzeKc2UF2QkyGb83cPhr8ZxrzoaiTd****`
     */
    "NextToken"?: string;
}
