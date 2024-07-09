export interface CancelActiveOperationTasksRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 事件ID集合，以英文逗号隔开。
     * @example `111`
     */
    "Ids": string;
}
