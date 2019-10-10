interface ModifyBackupPolicyRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 备份时间，格式：`HH:mmZ-HH:mmZ`。
    * @example `00:00Z-04:00Z`
    */ "PreferredBackupTime": string;
    /**
    * 备份周期：
    * * Monday（周一）
    * * Tuesday（周二）
    * * Wednesday（周三）
    * * Thursday（周四）
    * * Friday（周五）
    * * Saturday（周六）
    * * Sunday（周日）
    * @example `Tuesday`
    */ "PreferredBackupPeriod": string;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { ModifyBackupPolicyRequest };