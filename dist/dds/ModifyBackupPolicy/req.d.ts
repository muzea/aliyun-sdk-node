interface ModifyBackupPolicyRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 执行备份的时间，格式为<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
    * > 时间范围限制为1小时。
    * @example `03:00Z-04:00Z`
    */ "PreferredBackupTime": string;
    /**
    * 备份周期，取值：
    * - **Monday**：周一。
    * - **Tuesday**：周二。
    * - **Wednesday**：周三。
    * - **Thursday**：周四。
    * - **Friday**：周五。
    * - **Saturday**：周六。
    * - **Sunday**：周日。
    * > 如需传入多个值，多个值用英文逗号（,）隔开。
    * @example `Monday,Wednesday,Friday,Sunday`
    */ "PreferredBackupPeriod": string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
}
export { ModifyBackupPolicyRequest };