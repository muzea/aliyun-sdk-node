export interface QueryFaceAllUserIdsByGroupIdRequest {
    /**
     * 隔离Id
     * @example `TestIsolationId`
     */
    "IsolationId": string;
    /**
     * 用户组Id
     * @example `TestUserGroupId`
     */
    "UserGroupId": string;
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
