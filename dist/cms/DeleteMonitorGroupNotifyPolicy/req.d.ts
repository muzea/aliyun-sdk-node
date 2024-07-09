export interface DeleteMonitorGroupNotifyPolicyRequest {
    /**
     * 暂停通知类型。
     * 目前仅支持PauseNotify。
     * @example `PauseNotify`
     */
    "PolicyType": string;
    /**
     * 应用分组ID。
     * @example `6780****`
     */
    "GroupId"?: string;
}
