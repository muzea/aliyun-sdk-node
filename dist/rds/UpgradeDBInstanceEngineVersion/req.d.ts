interface UpgradeDBInstanceEngineVersionRequest {
    "RegionId"?: string;
    /**
    * 待升级的实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 目标数据库版本，取值：**5.6**。
    * @example `5.6`
    */ "EngineVersion": string;
    "OwnerId"?: number;
    /**
    * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
    * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
    */ "ClientToken"?: string;
    /**
    * 生效时间，取值：
    * * **Immediate**：立即生效；
    * * **MaintainTime**：在可运维时间段内生效，请参见[ModifyDBInstanceMaintainTime](~~26249~~)。
    * 默认值：**Immediate**。
    * @example `Immediate`
    */ "EffectiveTime"?: string;
}
export { UpgradeDBInstanceEngineVersionRequest };