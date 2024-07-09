export interface CreateMonitorGroupNotifyPolicyRequest {
    /**
     * 暂停通知类型。目前仅支持PauseNotify。
     * @example `PauseNotify`
     */
    "PolicyType": string;
    /**
     * 应用分组ID。
     * @example `7301****`
     */
    "GroupId": string;
    /**
     * 暂停通知的开始时间戳。
     * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
     * @example `1622949300000`
     */
    "StartTime": number;
    /**
     * 暂停通知的结束时间戳。
     * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
     * @example `1623208500000`
     */
    "EndTime": number;
}
