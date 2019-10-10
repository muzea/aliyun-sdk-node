interface SwitchDBInstanceHARequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 备实例的唯一标识，通过接口[DescribeDBInstanceHAConfig](~~26244~~)可查询该值。
    * @example `349054`
    */ "NodeId": string;
    "OwnerId"?: number;
    "Operation"?: string;
    /**
    * 切换方式，取值：
    * * **Yes**：强制；
    * * **No**：非强制。
    * 默认值：**No**。
    * @example `No`
    */ "Force"?: string;
    /**
    * 生效时间，取值：
    * * **Immediate**：立即执行；
    * * **MaintainTime**：可维护时间内执行。
    * 默认值：**Immediate**。
    * @example `Immediate`
    */ "EffectiveTime"?: string;
}
export { SwitchDBInstanceHARequest };