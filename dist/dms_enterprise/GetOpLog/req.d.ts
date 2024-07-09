export interface GetOpLogRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 功能模块，缺省则返回对应时间段内所有功能模块，取值如下：
     * - **PERMISSION**：权限
     * - **OWNER**：数据Owner
     * - **SQL_CONSOLE**：SQL窗口
     * - **SQL\_CONSOLE\_EXPORT**：SQL窗口结果导出
     * - **DATA_CHANGE**：数据变更
     * - **DATA_EXPORT**：数据导出
     * - **SQL_REVIEW**：SQL审核
     * - **DT_SYNC**：库表同步
     * - **DT_DETAIL**：库表详情
     * - **DB_TASK**：任务管理
     * - **INSTANCE_MANAGE**：实例管理
     * - **USER_MANAGE**：用户管理
     * - **SECURITY_RULE**：安全规则
     * - **CONFIG_MANAGE**：配置管理
     * - **RESOURCE_AUTH**：资源授权
     * - **ACCESS_WHITE_IP**：访问IP白名单
     * - **NDDL**：结构设计
     * - **DSQL_CONSOLE**：跨库数据查询
     * - **DSQL_CONSOLE_EXPORT**：跨库查询结果导出
     * - **DATA_TRACT**：数据追踪
     * - **DATA_QUALITY**：数据质量
     * - **DATALINK_MANAGE**：DBLink管理
     * - **DATASEC_MANAGE**：敏感数据管理
     * - **SELL**：售卖
     * @example `SECURITY_RULE`
     */
    "Module"?: string;
    /**
     * 开始时间，时间格式为yyyy-MM-DD HH:mm:ss。
     * @example `2022-03-23 10:00:00`
     */
    "StartTime": string;
    /**
     * 结束时间，时间格式为yyyy-MM-DD HH:mm:ss。
     * @example `2022-03-29 10:00:00`
     */
    "EndTime": string;
    /**
     * 每页记录数，取值如下：
     * - 30
     * - 50
     * - 100
     * @example `30`
     */
    "PageSize": number;
    /**
     * 页码，从1开始。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 用户在DMS上的显示名。
     * @example `test_name`
     */
    "UserNick"?: string;
    /**
     * 数据库名称。
     * @example `dmstest@rm-bp1qb97d4b****.mysql.rds.aliyuncs.com:3306【poc_dev】`
     */
    "DatabaseName"?: string;
}
