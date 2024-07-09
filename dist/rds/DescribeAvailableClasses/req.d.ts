export interface DescribeAvailableClassesRequest {
    /**
     * 当前实例的地域ID。可以通过接口DescribeDBInstanceAttribute查看所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 当前实例的可用区ID。可以通过接口DescribeDBInstanceAttribute查看所属可用区ID。
     * >若DescribeDBInstanceAttribute返回多可用区（例如`cn-hangzhou-MAZ9(g,h)`），请以单可用区形式传入。例如：`cn-hangzhou-g`或`cn-hangzhou-j`。
     * @example `cn-hangzhou-j`
     */
    "ZoneId": string;
    /**
     * 当前付费类型，取值：
     * * **Prepaid**：包年包月
     * * **Postpaid**：按量付费
     * * **Serverless**：Serverless
     * > MariaDB不支持创建Serverless实例。
     * @example `Prepaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 当前数据库类型。取值：
     * * **MySQL**
     * * **SQLServer**
     * * **PostgreSQL**
     * * **MariaDB**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 当前数据库版本。取值：
     * - 常规实例
     *     - MySQL：**5.5、5.6、5.7、8.0**
     *     - SQL Server：**2008r2、08r2\_ent\_ha、2012、2012\_ent\_ha、2012\_std\_ha、2012\_web、2014\_std\_ha、2016\_ent\_ha、2016\_std\_ha、2016\_web、2017\_std\_ha、2017\_ent、2019\_std\_ha、2019\_ent**
     *     - PostgreSQL：**10.0、11.0、12.0、13.0、14.0、15.0**
     *     - MariaDB：**10.3**
     * - Serverless实例
     *     - MySQL：**5.7**、**8.0**
     *     - SQL Server：**2016\_std\_sl**、**2017\_std\_sl**、**2019\_std\_sl**
     *     - PostgreSQL：**14.0**
     *     > MariaDB不支持创建Serverless实例。
     * @example `8.0`
     */
    "EngineVersion": string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId"?: string;
    /**
     * 订单类型。当前仅唯一取值：**BUY**。
     * @example `BUY`
     */
    "OrderType"?: string;
    /**
     * 当前实例存储类型。取值：
     * * **local_ssd**：本地SSD盘（推荐）
     * * **cloud_ssd**：SSD云盘
     * * **cloud_essd**：ESSD PL1云盘
     * * **cloud_essd2**：ESSD PL2云盘
     * * **cloud_essd3**：ESSD PL3云盘
     * > Serverless实例仅支持ESSD PL1云盘，必须传入**cloud_essd**。
     * @example `local_ssd`
     */
    "DBInstanceStorageType": string;
    /**
     * 当前实例系列。取值：
     * * 常规实例
     *     * **Basic**：基础系列
     *     * **HighAvailability**：高可用系列
     *     * **cluster**：MySQL集群系列
     *     * **AlwaysOn**：SQL Server集群系列
     *     * **Finance**：三节点企业系列
     * * Serverless实例
     *     * **serverless_basic**：Serverless基础系列（仅适用MySQL和PostgreSQL）
     *     * **serverless_standard**：MySQL Serverless高可用系列
     *     * **serverless_ha**：SQL Server Serverless高可用系列
     *     > 若创建Serverless实例，该字段必传。
     * @example `HighAvailability`
     */
    "Category": string;
    /**
     * 当前实例的商品码。取值：
     * - **bards**：主实例按量付费（中国站）
     * - **rds**：主实例包年包月（中国站）
     * - **rords**：只读实例按量付费（中国站）
     * - **rds\_rordspre\_public\_cn**：只读实例包年包月（中国站）
     * - **bards\_intl**：主实例按量付费（国际站）
     * - **rds\_intl**：主实例包年包月（国际站）
     * - **rords\_intl**：只读实例按量付费（国际站）
     * - **rds\_rordspre\_public\_intl**：只读实例包年包月（国际站）
     * - **rds\_serverless\_public_cn**：serverless（中国站）
     * - **rds\_serverless\_public_intl**：serverless（国际站）
     * > 查询只读实例时必须传入本参数。
     * @example `bards`
     */
    "CommodityCode"?: string;
}
