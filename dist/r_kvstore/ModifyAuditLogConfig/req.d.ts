interface ModifyAuditLogConfigRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 审计日志保留的天数，取值范围：7-30。
    * @example `15`
    */ "Retention": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
    "AuditCommand"?: string;
}
export { ModifyAuditLogConfigRequest };