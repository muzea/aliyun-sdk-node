interface ModifyDBInstanceSpecRequest {
    "RegionId"?: string;
    /**
    * 待变更配置的实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 实例当前的付费类型，取值：
    * * **Postpaid**：按量付费；
    * * **Prepaid**：预付费。
    * @example `Postpaid`
    */ "PayType": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    /**
    * 实例规格，详见[实例规格表](~~26312~~)。
    * >至少指定实例规格**DBInstanceClass**和存储空间**DBInstanceStorage**其中一个参数。
    * @example `rds.mys2.small`
    */ "DBInstanceClass"?: string;
    /**
    * 自定义存储空间，单位：GB。每5GB进行递增，详情请参见[实例规格表](~~26312~~)。
    * >至少指定实例规格**DBInstanceClass**和存储空间**DBInstanceStorage**其中一个参数。
    * @example `20`
    */ "DBInstanceStorage"?: number;
    /**
    * 生效时间，取值：
    * * **Immediate**：立即生效；
    * * **MaintainTime**：在可运维时间段内生效，请参见[ModifyDBInstanceMaintainTime](~~26249~~)。
    * 默认值：**Immediate**。
    * @example `MaintainTime`
    */ "EffectiveTime"?: string;
    /**
    * 数据库版本号，取值：
    * * MySQL：**5.5/5.6/5.7/8.0**；
    * * SQLServer：**2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_ent**；
    * * PostgreSQL：**9.4/10.0**；
    * * PPAS：**9.3/10.0**；
    * * MariaDB：**10.3**。
    * @example `5.6`
    */ "EngineVersion"?: string;
    "DBInstanceStorageType"?: string;
}
export { ModifyDBInstanceSpecRequest };