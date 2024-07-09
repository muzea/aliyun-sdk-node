export interface ModifyEventInfoRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 事件ID，多个英文逗号分隔，最多支持20个
     * @example `5422964`
     */
    "EventId": string;
    /**
     * 事件处理动作，目前支持archive和undo
     * @example `archive`
     */
    "EventAction"?: string;
    /**
     * 动作参数，JSON String
     * @example `{\"recoverTime\":\"2023-04-17T14:02:35Z\",\"recoverMode\":\"timePoint\"}`
     */
    "ActionParams"?: string;
}
