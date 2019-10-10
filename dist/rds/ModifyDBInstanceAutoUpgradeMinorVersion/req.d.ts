interface ModifyDBInstanceAutoUpgradeMinorVersionRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxx`
    */ "DBInstanceId": string;
    /**
    * 实例升级小版本的方式，取值：
    * * **Auto**：自动升级小版本；
    * * **Manual**：不自动升级，仅在当前版本下线时才强制升级。
    * @example `Auto`
    */ "AutoUpgradeMinorVersion": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken"?: string;
}
export { ModifyDBInstanceAutoUpgradeMinorVersionRequest };