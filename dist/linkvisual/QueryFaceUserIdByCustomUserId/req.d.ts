export interface QueryFaceUserIdByCustomUserIdRequest {
    /**
     * 隔离Id
     * @example `TestIsolationId`
     */
    "IsolationId": string;
    /**
     * 调用者系统中的用户Id
     * @example `TestCustomUserId`
     */
    "CustomUserId": string;
}
