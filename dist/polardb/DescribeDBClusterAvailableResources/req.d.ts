export interface DescribeDBClusterAvailableResourcesRequest {
    /**
     * 付费类型，取值范围如下：
     * - **Postpaid**：按量付费（也称后付费或按小时付费）。
     * - **Prepaid**：包年包月（也称预付费）。
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 数据库引擎类型，取值范围如下：
     * - **MySQL**
     * - **PostgreSQL**
     * - **Oracle**
     * @example `MySQL`
     */
    "DBType"?: string;
    /**
     * 数据库引擎版本号。
     * MySQL版本号取值范围如下：
     * * **5.6**
     * * **5.7**
     * * **8.0**
     * PostgreSQL版本号取值范围如下：
     * * **11**
     * * **14**
     * Oracle版本号取值范围如下：
     * * **11**
     * * **14**
     * > 当传入**DBType**参数时，该参数必填。
     * @example `5.6`
     */
    "DBVersion"?: string;
    /**
     * 节点规格，详情请参见[计算节点规格](~~102542~~)。
     * @example `polar.mysql.x4.large`
     */
    "DBNodeClass"?: string;
    /**
     * 地域ID。默认为**cn-hangzhou**。
     * > 可通过接口[DescribeRegions](~~98041~~)查看可用的地域。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 可用区ID。
     * > 可通过[DescribeRegions](~~98041~~)查看可用区。
     * @example `cn-hangzhou-i`
     */
    "ZoneId"?: string;
}
