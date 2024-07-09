export interface GetRoleResponse {
    /**
     * requestId
     * @example `4316D7DA-9816-596D-A3D7-12676FA59BDA`
     */
    RequestId: string;
    /**
     * code
     * @example `OK`
     */
    Code: string;
    /**
     * message
     * @example `.`
     */
    Message: string;
    /**
     * success
     * @example `true`
     */
    Success: boolean;
    /**
     * role
     */
    Role: any;
}
