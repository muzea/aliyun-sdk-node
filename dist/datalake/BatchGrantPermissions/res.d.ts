export interface BatchGrantPermissionsResponse {
    /**
     * Response Code
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
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
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
