export interface DescribeMonitorGroupNotifyPolicyListRequest {
    /**
     * 暂停通知类型。
     * 目前仅支持PauseNotify。
     * @example `PauseNotify`
     */
    "PolicyType": string;
    /**
     * 页码。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录条数。默认值：10。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 应用分组ID。
     * @example `6780****`
     */
    "GroupId"?: string;
}
