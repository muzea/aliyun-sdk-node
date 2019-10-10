interface ModifyAuditPolicyRequest {
    "RegionId"?: string;
    /**
    * 审计日志状态，取值：
    * - **enable**：开启审计日志。
    * - **disabled**：关闭审计日志。
    * @example `enable`
    */ "AuditStatus": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 审计日志存储的天数。取值范围为**1**~**30**，默认为**30**。
    * @example `30`
    */ "StoragePeriod"?: number;
}
export { ModifyAuditPolicyRequest };