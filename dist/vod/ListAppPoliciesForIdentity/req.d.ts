interface ListAppPoliciesForIdentityRequest {
    "RegionId"?: string;
    /**
    * - 类型为RamUser时，传入RAM子账号ID。
    * - 类型为RamRole时，传入角色名称。
    * @example `xxxxx`
    */ "IdentityName"?: string;
    /**
    * 身份类型。取值：**RamUser**（RAM子账号）, **RamRole**（RAM角色）。
    * @example `RamUser`
    */ "IdentityType"?: string;
    "OwnerId"?: number;
    /**
    * 应用ID。
    * @example `app-xxxxxx`
    */ "AppId"?: string;
}
export { ListAppPoliciesForIdentityRequest };