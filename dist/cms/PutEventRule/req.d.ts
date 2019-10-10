interface PutEventRuleRequest {
    "RegionId"?: string;
    "EventPattern": string[];
    /**
    * 报警规则名称。
    * @example `myRuleName`
    */ "RuleName": string;
    /**
    * 应用分组ID。
    * @example `12345`
    */ "GroupId"?: string;
    /**
    * 事件报警类型，可选值为：
    * - SYSTEM（系统事件），
    * - CUSTOM（自定义事件）。
    * @example `SYSTEM`
    */ "EventType"?: string;
    /**
    * 报警规则描述。
    * @example `我的事件报警测试`
    */ "Description"?: string;
    /**
    * 状态， 可选值为：
    * - ENABLED（启用），
    * - DISABLED（禁用）。
    * @example `ENABLED`
    */ "State"?: string;
}
export { PutEventRuleRequest };