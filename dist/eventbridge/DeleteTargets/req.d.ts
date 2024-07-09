export interface DeleteTargetsRequest {
    /**
     * 事件总线的名称。
     * @example `MyEventBus`
     */
    "EventBusName": string;
    /**
     * 事件规则的名称
     * @example `ramrolechange-mns`
     */
    "RuleName": string;
    /**
     * 删除一个事件规则下的一个或多个投递目标。
     */
    "TargetIds"?: string[];
}
