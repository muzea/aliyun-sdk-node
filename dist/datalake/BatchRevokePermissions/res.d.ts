export interface BatchRevokePermissionsResponse {
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
     * @example `C9E535E1-F040-56F4-B4EE-592B555DAE19`
     */
    RequestId: string;
    /**
     * Success
     * @example `true`
     */
    Success: boolean;
    /**
     * result
     * @example `参考BatchGrantRevokeFailureResult结构`
     */
    BatchGrantRevokeFailureResult: any;
}
