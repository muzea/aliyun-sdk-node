export interface DescribeAuditLogRecordsRequest {
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看目标地域下所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-t4nj8619bz2w3****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~143074~~)接口查看AnalyticDB MySQL版支持的地域和可用区信息，包括地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 查询开始时间，UTC时间，格式为：yyyy-MM-ddTHH:mmZ。
     * > 仅当SQL审计状态为开启时，才能查询到SQL审计日志，且只支持查询30天内的SQL审计日志。如果中途关闭了SQL审计，再次打开时，仅能查询到再次打开后的SQL审计日志。
     * @example `2022-01-23T02:18Z`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间，UTC时间，格式为：yyyy-MM-ddTHH:mmZ。
     * > - 查询结束时间需晚于查询开始时间。
     * > - 查询开始时间与查询结束时间的间隔不能超过24小时。
     * @example `2022-01-23T22:18Z`
     */
    "EndTime"?: string;
    /**
     * 执行SQL的数据库名称。
     * @example `adb_demo`
     */
    "DBName"?: string;
    /**
     * 对查询包含目标关键字的SQL进行查询。
     * @example `adb`
     */
    "QueryKeyword"?: string;
    /**
     * SQL类型，取值：
     * - **DELETE**
     * - **SELECT**
     * - **UPDATE**
     * - **INSERT_INTO_SELECT**
     * - **ALTER**
     * - **DROP**
     * - **CREATE**
     * > 每次仅允许传入一种类型查询，若该参数为空，默认查询**SELECT**类型。
     * @example `SELECT`
     */
    "SqlType"?: string;
    /**
     * 目标SQL是否执行成功，取值说明：
     * * **true**：执行成功。
     * * **false**：执行失败。
     * @example `true`
     */
    "Succeed"?: string;
    /**
     * 执行目标SQL的客户端IP地址和端口号。
     * @example `100.104.XX.XX:43908`
     */
    "HostAddress"?: string;
    /**
     * 按SQL执行时间进行正序或倒序排序，取值说明：
     * * **asc**：正序。
     * * **desc**：倒序。
     * @example `asc`
     */
    "OrderType"?: string;
    /**
     * 执行目标SQL的用户名。
     * @example `test_user`
     */
    "User"?: string;
    /**
     * 根据指定字段进行排序，格式为JSON，是一个有序JSON数组，按输入数组的顺序进行复合排序，包含Field和Type两个字段。
     * - Field表示需要排序的字段名，取值说明：
     *     - HostAddress：连接数据库的客户端地址。
     *     - Succeed：目标SQL是否执行成功。
     *     - TotalTime：目标SQL的执行总耗时。
     *     - DBName：执行目标SQL的数据库名称。
     *     - SQLType：SQL类型。
     *     - User：执行目标SQL的用户名。
     *     - ExecuteTime：目标SQL的执行开始时间。
     * - Type表示排序类型，取值说明：
     *     - Desc：降序。
     *     - Asc：升序。
     * @example `[{"Field":"ExecuteTime","Type":"Desc"},{"Field":"HostAddress","Type":"Asc"}]`
     */
    "Order"?: string;
    /**
     * 每页记录数，取值：
     * - **10**
     * - **30**
     * - **50**
     * - **100**
     * > 本参数不填写时，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于0且不超过Integer数据类型的最大值。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
}
