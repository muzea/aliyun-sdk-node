export interface ListResourceSharesRequest {
    /**
     * 共享单元归属者。取值：
     * - Self：查询当前账号的共享单元列表。
     * - OtherAccounts：查询其他账号共享给当前账号的共享单元列表。
     * @example `Self`
     */
    "ResourceOwner": string;
    /**
     * 共享单元名称。
     * @example `test`
     */
    "ResourceShareName"?: string;
    /**
     * 共享单元状态。取值：
     * - Active：已启用。
     * - Pending：待确认。
     * - Deleting：删除中。
     * - Deleted：已删除。
     * > Deleted状态的共享单元记录，会在48~96小时内被系统自动删除。
     * @example `Active`
     */
    "ResourceShareStatus"?: string;
    /**
     * 单次请求返回结果的最大条数。
     * 取值范围：1~100。默认值：20。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 当请求的返回结果被截断时，您可以使用`NextToken`再次发起请求，获取从当前截断位置之后的内容。
     * @example `TGlzdFJlc291cm****`
     */
    "NextToken"?: string;
    /**
     * 共享单元ID。
     * N的取值范围：1~5，即每次最多指定5个共享单元。
     * @example `rs-PqysnzIj****`
     */
    "ResourceShareIds"?: string[];
    /**
     * 共享权限名称。具体信息，请参见[权限库](~~465474~~)。
     * @example `AliyunRSDefaultPermissionVSwitch`
     */
    "PermissionName"?: string;
}
