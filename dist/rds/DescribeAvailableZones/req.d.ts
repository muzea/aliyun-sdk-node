export interface DescribeAvailableZonesRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库类型。取值：
     * * **MySQL**
     * * **SQLServer**
     * * **PostgreSQL**
     * * **MariaDB**
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 可用区ID。多可用区的格式与单可用区不同，包含`MAZ`字样，例如`cn-hangzhou-MAZ6(b,f)`、`cn-hangzhou-MAZ5(b,e,f)`。可以通过接口DescribeRegions查看可用区ID。
     * @example `cn-hangzhou-e`
     */
    "ZoneId"?: string;
    /**
     * 数据库版本。取值：
     * - 常规实例
     *     - MySQL：**5.5**、**5.6**、**5.7**、**8.0**
     *     - SQL Server：**2008r2**、**08r2\_ent\_ha**、**2012**、**2012\_ent\_ha**、**2012\_std\_ha**、**2012\_web**、**2014\_std_ha**、**2016\_ent\_ha**、**2016\_std\_ha**、**2016\_web**、**2017\_std\_ha**、**2017\_ent**、**2019\_std\_ha**、**2019\_ent**
     *     - PostgreSQL：**10.0**、**11.0**、**12.0**、**13.0**、**14.0**、**15.0**
     *     - MariaDB：**10.3**
     * - Serverless实例
     *     - MySQL：**5.7**、**8.0**
     *     - SQL Server：**2016\_std\_sl**、**2017\_std\_sl**、**2019\_std\_sl**
     *     - PostgreSQL：**14.0**
     *     > MariaDB不支持创建Serverless实例。
     * @example `8.0`
     */
    "EngineVersion"?: string;
    /**
     * 当前实例的商品码。根据输入的商品码查询可售卖的资源。取值：
     * * **bards**：主实例按量付费（中国站）
     * * **rds**：主实例包年包月（中国站）
     * * **rords**：只读实例按量付费（中国站）
     * * **rds\_rordspre\_public\_cn**：只读实例包年包月（中国站）
     * * **bards_intl**：主实例按量付费（国际站）
     * * **rds_intl**：主实例包年包月（国际站）
     * * **rords_intl**：只读实例按量付费（国际站）
     * * **rds\_rordspre\_public\_intl**：只读实例包年包月（国际站）
     * * **rds\_serverless\_public\_cn**：serverless（中国站）
     * * **rds\_serverless\_public\_intl**：serverless（国际站）
     * @example `bards`
     */
    "CommodityCode"?: string;
    /**
     * 是否返回支持单可用区部署功能的可用区列表。取值：
     * * **1**（默认值）：返回
     * * **0**：不返回
     * > 单可用区部署功能支持将三节点企业系列实例安装到单个可用区中。
     * @example `0`
     */
    "DispenseMode"?: string;
    /**
     * 主实例ID。查询该主实例下可售卖的只读实例资源。
     * **CommodityCode**参数为如下值时必填：
     * * **rords_intl**
     * * **rds_rordspre\_public\_intl**
     * * **rords**
     * * **rds_rordspre\_public\_cn**
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceName"?: string;
    /**
     * 实例系列，取值：
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
     * @example `HighAvailability`
     */
    "Category"?: string;
}
