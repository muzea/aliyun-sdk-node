export interface ModifyActionEventPolicyRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否开启历史事件记录功能。取值：
     * * **True**
     * * **False**
     * @example `True`
     */
    "EnableEventLog": string;
}
