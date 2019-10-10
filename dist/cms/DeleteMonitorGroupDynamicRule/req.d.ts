interface DeleteMonitorGroupDynamicRuleRequest {
    "RegionId"?: string;
    /**
    * 动态规则对应的云产品类型，目前动态组支持的产品有ECS、RDS、SLB。
    * @example `ecs`
    */ "Category": string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId": number;
}
export { DeleteMonitorGroupDynamicRuleRequest };