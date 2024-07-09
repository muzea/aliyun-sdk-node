export interface StopAlertRequest {
    /**
     * 报警规则ID，可调用SearchAlertRules接口查询，对应返回参数`Id`，详情请参见[SearchAlertRules](~~175825~~)。
     * @example `1610***`
     */
    "AlertId": string;
    /**
     * 地域ID。始终填写`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
