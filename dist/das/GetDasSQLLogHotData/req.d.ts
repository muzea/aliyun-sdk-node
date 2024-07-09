export interface GetDasSQLLogHotDataRequest {
    /**
     * 数据库实例ID。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceId": string;
    /**
     * 查询开始时间，格式为Unix时间戳，单位为毫秒。
     * > 只能查询开启DAS企业版 V2或企业版 V3后的数据，查询开始时间最大不能早于当前时间7天。
     * @example `1684734297000`
     */
    "Start": number;
    /**
     * 查询结束时间，格式为Unix时间戳，单位为毫秒。
     * > 查询结束时间需晚于查询开始时间，且查询开始时间和查询结束时间的间隔不能超过1天。
     * @example `1684820697000`
     */
    "End": number;
    /**
     * 关键字。
     * > 查询的关键字至少包含4个字符，不支持模糊查询；支持多个关键字组合查询，关键字间以空格分隔。
     * @example `test`
     */
    "QueryKeyword"?: string;
    /**
     * 数据库账号。
     * > 支持多个数据库账号组合查询，数据库账号间以空格分隔，例如：`user1 user2 user3`。
     * @example `testuser`
     */
    "AccountName"?: string;
    /**
     * 数据库名。
     * > 支持多个数据库名组合查询，数据库名间以空格分隔，例如：`DB1 DB2 DB3`。
     * @example `testDB`
     */
    "DBName"?: string;
    /**
     * 客户端IP地址。
     * > 支持多个客户端IP地址组合查询，客户端IP地址间以空格分隔，例如：`IP1 IP2 IP3`。
     * @example `47.100.XX.XX`
     */
    "HostAddress"?: string;
    /**
     * 多个关键字的逻辑关系。
     * - **or**：或。
     * - **and**：与。
     * @example `or`
     */
    "LogicalOperator"?: string;
    /**
     * 最大执行耗时 ，单位为微秒。查询执行耗时小于该参数值的SQL语句。
     * @example `100`
     */
    "MaxLatancy"?: number;
    /**
     * 最大扫描行数 ，查询扫描行数小于该参数值的SQL语句。
     * @example `10000`
     */
    "MaxScanRows"?: number;
    /**
     * 最小执行耗时 ，单位为微秒。查询执行耗时大于等于该参数值的SQL语句。
     * @example `10`
     */
    "MinLatancy"?: number;
    /**
     * 最小扫描行数 ，查询扫描行数大于等于该参数值的SQL语句。
     * @example `10`
     */
    "MinScanRows"?: number;
    /**
     * SQL语句的类型。取值：
     * - **SELECT**
     * - **UPDATE**
     * - **DELETE**
     * @example `SELECT`
     */
    "SqlType"?: string;
    /**
     * 执行结果，输入**0**时表示查询执行成功的SQL，您也可以输入具体的错误码，查询对应的SQL。
     * @example `0`
     */
    "State"?: string;
    /**
     * 线程ID。
     * > 支持多个线程ID组合查询，线程ID间以空格分隔，例如：`线程ID1 线程ID2 线程ID3`。
     * @example `657`
     */
    "ThreadID"?: string;
    /**
     * 分页查询的页码，从1开始，默认为1。
     * @example `2`
     */
    "PageNumbers"?: number;
    /**
     * 分页查询每页最大记录数。取值范围：5～100。
     * @example `10`
     */
    "MaxRecordsPerPage"?: number;
    /**
     * 排序依据。
     * - **SCAN\_ROWS**：扫描行数。
     * - **UPDATE\_ROWS**：更新行数。
     * - **CONSUME**：耗时。
     * - **ORIGIN\_TIME**：执行时间。
     * @example `SCAN_ROWS`
     */
    "SortKey"?: string;
    /**
     * 排序方式。
     * - **ase**：正序。
     * - **desc**：倒序。
     * @example `ase`
     */
    "SortMethod"?: string;
    /**
     * 节点ID。
     * > 对于PolarDB MySQL版实例，需要提供节点ID。
     * @example `pi-bp179lg03445l****`
     */
    "ChildDBInstanceIDs"?: string;
    /**
     * 预留参数，暂不支持。
     * @example `None`
     */
    "Role"?: string;
    /**
     * 预留参数，暂不支持。
     * @example `None`
     */
    "TraceId"?: string;
    /**
     * 预留参数，暂不支持。
     * @example `None`
     */
    "MinRows"?: number;
    /**
     * 预留参数，暂不支持。
     * @example `None`
     */
    "MaxRows"?: number;
    /**
     * 预留参数，暂不支持。
     * @example `None`
     */
    "MinSpillCnt"?: number;
    /**
     * 预留参数，暂不支持。
     * @example `None`
     */
    "MaxSpillCnt"?: number;
    /**
     * 事务ID。
     * @example `0`
     */
    "TransactionId"?: string;
    /**
     * SQL执行错误码，您可以调用[GetAsyncErrorRequestStatByCode](~~409804~~)获取错误码。
     * @example `1064`
     */
    "Fail"?: string;
}
