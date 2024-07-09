export interface DescribePriceRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 当前实例的商品码，取值：
     * * **bards**：主实例按量付费（中国站）
     * * **rds**（默认）：主实例包年包月（中国站）
     * * **rords**：只读实例按量付费（中国站）
     * * **rds_rordspre_public_cn**：只读实例包年包月（中国站）
     * * **bards_intl**：主实例按量付费（国际站）
     * * **rds_intl**：主实例包年包月（国际站）
     * * **rords_intl**：只读实例按量付费（国际站）
     * * **rds_rordspre_public_intl**：只读实例包年包月（国际站）
     * >查询只读实例时必须传入本参数。
     * @example `rds`
     */
    "CommodityCode"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据库类型，取值：
     * * **MySQL**
     * * **SQLServer**
     * * **PostgreSQL**
     * * **MariaDB**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * <props="china">数据库版本，取值：
     * - **MySQL**：**5.5**、**5.6**、**5.7**、**8.0**
     * - **SQL Server**：**08r2_ent_ha**（云盘版，已停售）、**2008r2**（本地盘，已停售）、**2012**（企业版单机）、**2012_ent_ha**、**2012_std_ha**、**2012_web**、**2014_ent_ha**、**2014_std_ha**、**2016_ent_ha**、**2016_std_ha**、**2016_web**、**2017_ent**、**2017_std_ha**、**2017_web**、**2019_ent**、**2019_std_ha**、**2019_web**、**2022_ent**、**2022_std_ha**、**2022_web**
     * - **PostgreSQL**：**10.0**、**11.0**、**12.0**、**13.0**、**14.0**、**15.0**
     * - **MariaDB**：**10.3**</props>
     * <props="intl">数据库版本，取值：
     * - **MySQL**：**5.5**、**5.6**、**5.7**、**8.0**
     * - **SQL Server**：**08r2_ent_ha**（云盘版，已停售）、**2008r2**（本地盘，已停售）、**2012**（企业版单机）、**2012_ent_ha**、**2012_std_ha**、**2012_web**、**2016_ent_ha**、**2016_std_ha**、**2016_web**、**2017_ent**、**2017_std_ha**、**2017_web**、**2019_ent**、**2019_std_ha**、**2019_web**、**2022_ent**、**2022_std_ha**、**2022_web**
     * - **PostgreSQL**：**10.0**、**11.0**、**12.0**、**13.0**、**14.0**、**15.0**
     * - **MariaDB**：**10.3**</props>
     * > SQL Server实例中`_ent`表示企业集群版、`_ent_ha`表示企业版、`_std_ha`表示标准版、`_web`表示Web版。
     * @example `8.0`
     */
    "EngineVersion": string;
    /**
     * 实例规格，详情请参见[主实例规格表](~~26312~~)。
     * @example `mysql.x2.medium.xc`
     */
    "DBInstanceClass": string;
    /**
     * 实例存储空间，单位：GB。每5 GB进行递增，取值范围请参见[实例规格表](~~26312~~)。
     * @example `20`
     */
    "DBInstanceStorage": number;
    /**
     * 实例的付费类型，取值：
     * * **Prepaid**：预付费（包年包月）
     * * **Postpaid**：后付费（按量付费）
     * @example `Prepaid`
     */
    "PayType"?: string;
    /**
     * 主节点可用区ID。可调用DescribeRegions获取。
     * >指定了VPC和交换机时，为匹配交换机对应的可用区，该参数必填。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 指定购买时长，取值：
     * * 当参数**TimeType**为**Year**时，UsedTime取值为**1~100**。
     * * 当参数**TimeType**为**Month**时，UsedTime取值为**1~999**。
     * 默认值：**1**。
     * @example `1`
     */
    "UsedTime"?: number;
    /**
     * 包年包月的付费类型，当**CommodityCode**参数的值为**rds**、**rds_rordspre_public_cn**、**rds_intl**或**rds_rordspre_public_intl**时必传。取值：
     * * **Year**：包年
     * * **Month**：包月
     * @example `Year`
     */
    "TimeType"?: string;
    /**
     * 购买实例的数量，取值范围：**0~30**。
     * @example `10`
     */
    "Quantity": number;
    /**
     * 实例类型，取值：
     * * **0**：主实例
     * * **3**：只读实例
     * @example `0`
     */
    "InstanceUsedType"?: number;
    /**
     * 订单类型，取值：
     * * **BUY**：购买
     * * **UPGRADE**：变配
     * * **RENEW**：续费
     * @example `BUY`
     */
    "OrderType"?: string;
    /**
     * 实例存储类型，取值：
     * * **local_ssd**：本地SSD盘
     * * **cloud_ssd**：SSD云盘
     * * **cloud_essd**：ESSD PL1云盘
     * * **cloud_essd2**：ESSD PL2云盘
     * * **cloud_essd3**：ESSD PL3云盘
     * @example `local_ssd`
     */
    "DBInstanceStorageType"?: string;
    /**
     * 变配或续费的实例ID。
     * > - 需要查询实例变配或续费价格时需要传入该参数。
     * > - 如果为只读实例，则需要传入其主实例的ID。
     * @example `rm-****`
     */
    "DBInstanceId"?: string;
    /**
     * 节点相关信息。
     * > 该参数用于MySQL集群系列实例。
     */
    "DBNode"?: {
        /**
         * 节点规格。
         * @example `mysql.x2.medium.xc`
         */
        ClassCode: string;
        /**
         * 节点可用区ID。
         * @example `cn-hangzhou-j`
         */
        ZoneId: string;
    }[];
    /**
     * RDS Serverless实例的相关设置。
     * >MariaDB不支持Serverless实例。
     */
    "ServerlessConfig"?: {
        /**
         * 实例RCU（RDS Capacity Unit）的自动扩缩范围最大值。
         * @example `8`
         */
        MaxCapacity: number;
        /**
         * 实例RCU（RDS Capacity Unit）的自动扩缩范围最小值。
         * @example `0.5`
         */
        MinCapacity: number;
    };
}
