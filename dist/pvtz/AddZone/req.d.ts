interface AddZoneRequest {
    "RegionId"?: string;
    /**
    * 语言。
    * @example `en`
    */ "Lang"?: string;
    /**
    * zone名称。
    * @example `demo.com`
    */ "ZoneName"?: string;
    /**
    * 用户Ip。
    * @example `1.1.1.1`
    */ "UserClientIp"?: string;
    /**
    * - **ZONE**：完全劫持整个Zone
    * - **RECORD**：不完全劫持，进行递归解析代理
    * @example `ZONE`
    */ "ProxyPattern"?: string;
    /**
    * 资源组ID。
    * @example ` rg-resourcegroupid1`
    */ "ResourceGroupId"?: string;
}
export { AddZoneRequest };