export interface ListCasesRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 预测式外呼活动ID。
     * @example `6badb397-a8b5-40b6-21019d382a09`
     */
    "CampaignId": string;
    /**
     * 按电话号码过滤，不支持模糊匹配，非必填，默认为空。
     * @example `无`
     */
    "PhoneNumber"?: string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页大小，范围1-100。
     * @example `100`
     */
    "PageSize": number;
    /**
     * Pending(待拨打),
     * Executing(拨打中),
     * Connected(联系成功),
     * Failed(联系失败),
     * Aborted(止呼, 取消呼叫),
     * Forbidden(规则禁止呼叫，比如黑名单);
     * @example `Pending`
     */
    "State"?: string;
}
