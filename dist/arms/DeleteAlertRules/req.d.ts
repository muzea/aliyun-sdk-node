export interface DeleteAlertRulesRequest {
    /**
     * 要删除的报警规则ID列表。格式为JSONArray，例如：`[123, 234]`。可调用SearchAlertRules接口获取报警规则ID（对应返回参数中的`Id`），详情请参见[SearchAlertRules](~~175825~~)。
     * @example `[123, 234]`
     */
    "AlertIds": string;
    /**
     * 地域ID。默认为`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
