interface DetachAppPolicyFromIdentityRequest {
    "RegionId"?: string;
    /**
    * - 类型为RamUser时，传入RAM子账号ID。
    * - 类型为RamRole时，传入角色名称。
    * @example `xxxxx`
    */ "IdentityName": string;
    /**
    * 策略名称，暂时只支持设置为系统策略，多个用英文逗号分隔。
    * 可选值：**VODAppFullAccess**，**VODAppReadOnlyAccess**，**VODAppAdministratorAccess**。
    * @example `VODAppFullAccess`
    */ "PolicyNames": string;
    /**
    * 应用ID。当策略名称为VODAppAdministratorAccess时，该字段非必选，其他策略时，该字段必填。
    * @example `app-xxxx`
    */ "AppId"?: string;
    /**
    * 身份类型，取值：**RamUser**（RAM子账号）, **RamRole**（RAM角色）。
    * @example `RamUser`
    */ "IdentityType": string;
    "OwnerId"?: number;
}
export { DetachAppPolicyFromIdentityRequest };