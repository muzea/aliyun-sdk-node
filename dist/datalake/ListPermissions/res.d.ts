export interface ListPermissionsResponse {
    /**
     * Response Code
     * @example `OK`
     */
    Code: string;
    /**
     * Message Code
     * @example `.`
     */
    Message: string;
    /**
     * RequestId
     * @example `745EAAE2-5010-5C9F-A95C-B8FC5C1B03BF`
     */
    RequestId: string;
    /**
     * Success
     * @example `true`
     */
    Success: boolean;
    /**
     * NextPageToken
     * @example `token!`
     */
    NextPageToken: string;
    /**
     * TotalCount
     * @example `暂不支持`
     */
    TotalCount: number;
    /**
     * 权限列表
     * @example `[]`
     */
    PrincipalResourcePermissionsList: any;
}
