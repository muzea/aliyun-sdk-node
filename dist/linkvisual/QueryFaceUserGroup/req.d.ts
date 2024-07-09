export interface QueryFaceUserGroupRequest {
    /**
     * 隔离Id
     * @example `TestIsolationId`
     */
    "IsolationId": string;
    /**
     * 用户Id
     * @example `TestUserId`
     */
    "UserId": string;
    /**
     * 分页大小
     * @example `20`
     */
    "PageSize": number;
    /**
     * 分页号
     * @example `1`
     */
    "PageNo": number;
}
