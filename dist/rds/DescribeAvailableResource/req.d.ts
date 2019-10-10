interface DescribeAvailableResourceRequest {
    /**
    * 地域ID，可以通过接口[DescribeRegions](~~26243~~)查看可用的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 付费类型，取值：
    * * **Prepaid**：包年包月；
    * * **Postpaid**：按量付费。
    * @example `Postpaid`
    */ "InstanceChargeType": string;
    /**
    * 可用区ID。多可用区用英文冒号（:）分隔。
    * @example `cn-hangzhou-b`
    */ "ZoneId"?: string;
    /**
    * 数据库类型，取值：
    * * **MySQL**；
    * * **SQLServer**；
    * * **PostgreSQL**；
    * * **PPAS**；
    * * **MariaDB**。
    * @example `MySQL`
    */ "Engine"?: string;
    /**
    * 数据库版本，取值：
    * * MySQL：**5.5/5.6/5.7/8.0**；
    * * SQL Server：**2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_ent**；
    * * PostgreSQL：**9.4/10.0**；
    * * PPAS：**9.3/10.0**；
    * * MariaDB：**10.3**。
    * @example `5.7`
    */ "EngineVersion"?: string;
    /**
    * 实例规格，详情请参见[实例规格表](~~26312~~)。
    * @example `rds.mysql.s1.small`
    */ "DBInstanceClass"?: string;
    "DBInstanceId"?: string;
    /**
    * 订单类型。仅唯一取值：**BUY**。
    * @example `BUY`
    */ "OrderType"?: string;
    "DBInstanceStorageType"?: string;
}
export { DescribeAvailableResourceRequest };