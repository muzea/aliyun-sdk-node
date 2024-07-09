export interface GetFullRequestStatResultByInstanceIdRequest {
    /**
     * 用户ID，即创建数据库实例的阿里云主账号ID。
     * > 非必填，输入目标数据库实例ID后，在调用API接口时，系统会自动获取用户ID。
     * @example `196278346919****`
     */
    "UserId"?: string;
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 对于PolarDB MySQL版实例，需要提供节点ID。
     * @example `pi-bp12v7243x012****`
     */
    "NodeId"?: string;
    /**
     * SQL ID。
     * > 填写SQL ID时，统计目标SQL ID的全量请求数据；为空时，统计整个数据库实例的全量请求数据。
     * @example `d71f82be1eef72bd105128204d2e****`
     */
    "SqlId"?: string;
    /**
     * 执行SQL的客户端IP地址。
     * > 非必填，输入目标客户端IP地址后，统计目标客户端IP地址的全量请求数据；为空时，统计整个数据库实例的全量请求数据。
     * @example `172.26.XX.XXX`
     */
    "OriginHost"?: string;
    /**
     * 查询关键词。
     * @example `dbtest01`
     */
    "Keyword"?: string;
    /**
     * 查询开始时间，格式为Unix时间戳，单位为毫秒。
     * > 查询开始时间需要在数据库实例SQL洞察存储时长范围内，最大不能早于当前时间90天。
     * @example `1645581813000`
     */
    "Start": number;
    /**
     * 查询结束时间，格式为Unix时间戳，单位为毫秒。
     * > 查询结束时间需晚于查询开始时间，且查询开始时间和查询结束时间的间隔不能超过1天。
     * @example `1645668213000`
     */
    "End": number;
    /**
     * 排序字段，默认为**count**。
     * - **count**：执行次数。
     * - **avgRt**：平均执行时间。
     * - **rtRate**：耗时比例。
     * - **rowsExamined**：总扫描行数。
     * - **avgRowsExamined**：平均扫描行数。
     * - **avgRowsReturned**：平均返回行数。
     * @example `count`
     */
    "OrderBy"?: string;
    /**
     * 升序排序开关，默认关闭。
     * @example `关闭`
     */
    "Asc"?: boolean;
    /**
     * 分页查询的页码，从1开始，默认为1。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 分页查询每页数据量，默认为20。
     * @example `20`
     */
    "PageSize": number;
    /**
     * SQL语句的类型，取值包括：**SELECT**、**INSERT**、**UPDATE**、**DELETE**、**LOGIN**、**LOGOUT**、**MERGE**、**ALTER**、**CREATEINDEX**、**DROPINDEX**、**CREATE**、**DROP**、**SET**、**DESC**、**REPLACE**、**CALL**、**BEGIN**、**DESCRIBE**、**ROLLBACK**、**FLUSH**、**USE**、**SHOW**、**START**、**COMMIT**和**RENAME**。
     * > 当数据库实例为RDS MySQL、PolarDB MySQL版、PolarDB-X 2.0时，可以通过SQL语句类型进行统计。
     * @example `SELECT`
     */
    "SqlType"?: string;
    /**
     * 数据库名。
     * @example `dbtest01`
     */
    "DbName"?: string;
    /**
     * PolarDB-X 2.0数据库实例节点信息。
     * - **polarx_cn**：计算节点。
     * - **polarx_dn**：数据节点。
     * @example `polarx_cn`
     */
    "Role"?: string;
}
