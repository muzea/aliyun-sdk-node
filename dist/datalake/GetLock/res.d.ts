export interface GetLockResponse {
    /**
     * Code
     * @example `OK`
     */
    Code: string;
    /**
     * Message
     * @example `.`
     */
    Message: string;
    /**
     * RequestId
     * @example `558D764F-8C55-49CA-BF38-80EA532FC08F`
     */
    RequestId: string;
    /**
     * Success
     * @example `True`
     */
    Success: boolean;
    /**
     * 锁定状态
     * @example `{"lockId":123,"lockStatus":"Acquired"}`
     */
    LockStatus: any;
}
