export interface DeleteCatalogResponse {
    /**
     * Response Code
     * @example `OK`
     */
    Code: string;
    /**
     * Response Message
     * @example `.`
     */
    Message: string;
    /**
     * RequestId
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * Request is success or not
     * @example `true`
     */
    Success: boolean;
    /**
     * 异步删除Catalog的taskId
     * @example `c38206c3aca0c41332ffe49294243009`
     */
    TaskId: string;
}
