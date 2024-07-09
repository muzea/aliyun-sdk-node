export interface DeleteMessageContactResponse {
    /**
     * 请求ID。
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
    /**
     * 联系人删除状态。取值：
     * - Deleting：删除中。
     * - Deleted：已删除。
     * @example `Deleting`
     */
    Status: string;
}
