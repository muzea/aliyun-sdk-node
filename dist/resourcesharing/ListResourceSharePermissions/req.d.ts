export interface ListResourceSharePermissionsRequest {
    /**
     * 共享单元ID。
     * @example `rs-6GRmdD3X****`
     */
    "ResourceShareId": string;
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
     * 共享单元归属者。取值：
     * - Self：查询当前账号的共享单元列表。
     * - OtherAccounts：查询其他账号共享给当前账号的共享单元列表。
     * @example `Self`
     */
    "ResourceOwner": string;
}
