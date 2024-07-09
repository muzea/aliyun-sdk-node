export interface CreateLockResponse {
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
     * @example `73201200-4C1A-4FEF-BD6B-C0DA7994FFA2`
     */
    RequestId: string;
    /**
     * Success
     * @example `True`
     */
    Success: boolean;
    /**
     * 状态描述
     * @example `{"lockId":12323,"lockStatus":"ACQUIRED"}`
     */
    LockStatus: any;
}
