export interface AbortLockResponse {
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
     * @example `01D8DD6B-4929-5999-9BB3-950AA30E3BD0`
     */
    RequestId: string;
    /**
     * Success
     * @example `True`
     */
    Success: boolean;
}
