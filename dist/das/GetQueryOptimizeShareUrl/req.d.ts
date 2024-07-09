export interface GetQueryOptimizeShareUrlRequest {
    /**
     * 数据库引擎，取值：
     * - **MySQL**：RDS MySQL
     * - **PolarDBMySQL**：PolarDB MySQL版
     * - **PostgreSQL**：RDS PostgreSQL
     * @example `MySQL`
     */
    "Engine": string;
    /**
     * 实例ID，多个实例ID间用逗号分隔。
     * @example `rm-2ze1jdv45i7l6****`
     */
    "InstanceIds"?: string;
    /**
     * 备用参数。
     * @example `None`
     */
    "TagNames"?: string;
    /**
     * SQL文本关键词，多个关键词以空格分隔。
     * @example `select update`
     */
    "Keywords"?: string;
    /**
     * 多个SQL文本关键词的逻辑关系。
     * - **or**：或。
     * - **and**：与。
     * @example `or`
     */
    "LogicalOperator"?: string;
    /**
     * 需要过滤的规则，多个规则以逗号分隔。具体信息请参见[查询治理](~~290038~~)。
     * @example `DAS_NOT_IMPORTANT`
     */
    "Rules"?: string;
    /**
     * 需要查询的数据库名。
     * @example `testdb01`
     */
    "DbNames"?: string;
    /**
     * 查询数据的日期，格式为Unix时间戳，单位为毫秒。
     * @example `1642953600000`
     */
    "Time": number;
    /**
     * 分页查询每页最大记录数，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询的页码，从1开始，默认为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 排序字段，默认为**count**。
     * - **count**：执行次数。
     * - **maxQueryTime**：最大执行时间。
     * - **avgQueryTime**：平均执行时间。
     * - **maxLockTime**：最大锁等待时间。
     * - **avgLockTime**：平均锁等待时间。
     * - **maxRowsExamined**：最大扫描行数。
     * - **avgRowsExamined**：平均扫描行数。
     * - **maxRowsSent**：最大返回行数。
     * - **avgRowsSent**：平均返回行数。
     * @example `count`
     */
    "OrderBy"?: string;
    /**
     * 是否升序排序，默认为**true**。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "Asc"?: boolean;
    /**
     * 是否只查询待优化的SQL，默认为**false**。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "OnlyOptimizedSql"?: boolean;
    /**
     * SQL模板ID，您可调用[GetQueryOptimizeDataStats](~~405261~~)接口查询SQL模板ID。
     * @example `6068ce044e3dc9b903979672fb0b69df,d12515c015fc9f41a0778a9e1de0****`
     */
    "SqlIds"?: string;
    /**
     * 实例所属地域，取值：
     * - **cn-china**：中国内地。
     * - **cn-hongkong**：中国香港。
     * - **ap-southeast-1**：新加坡。
     * 此参数只有在请求参数**InstanceIds**为空时有效。如果请求参数**InstanceIds**为空时，按照**Region**参数设置的地域获取数据，系统默认实例所属地域为**cn-china**；如果请求参数**InstanceIds**不为空时，即使设置了**Region**参数，也以**InstanceIds**所传入的第一个实例所在地域为准获取数据。
     * > 在中国内地各地域创建的实例，传入此参数时，都为**cn-china**。
     * @example `cn-china`
     */
    "Region"?: string;
    /**
     * 需要查询的数据库账号。
     * @example `testUser`
     */
    "User"?: string;
}
