export interface OperateSwitchStatusRequest {
    /**
     * 规则ID。
     * > 您可以调用ListContainerWebDefenseRule接口获取该参数。
     * @example `900001`
     */
    "RuleId": number;
    /**
     * 容器防篡改规则状态。on：开启 off：关闭
     * @example `on`
     */
    "Status": string;
}
