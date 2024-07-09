export interface ListDdTaskOrderRequest {
    /**
     * callerParentId
     * @example `123`
     */
    "CallerParentId"?: number;
    /**
     * orderId
     * @example `E2112019N14PBY`
     */
    "OrderId"?: string;
    /**
     * openGroupId
     * @example `cid+lUpHxTIXt7DYqJDcpVxlA==`
     */
    "OpenGroupId"?: string;
    /**
     * requestId
     * @example `2F8557E4-742B-1CF7-8E83-28CD0C1F7B48`
     */
    "RequestId"?: string;
    /**
     * callerType
     * @example `123`
     */
    "CallerType"?: string;
    /**
     * callerUid
     * @example `123`
     */
    "CallerUid"?: number;
    /**
     * taskStatus
     * @example `dealingNode`
     */
    "TaskStatus"?: string;
}
