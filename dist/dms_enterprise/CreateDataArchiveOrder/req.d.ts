export interface CreateDataArchiveOrderRequest {
    /**
     * 任务描述信息。
     * @example `业务测试`
     */
    "Comment": string;
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 插件类型信息，默认为DATA_ARCHIVE。
     * @example `DATA_ARCHIVE`
     */
    "PluginType"?: string;
    /**
     * 相关用户列表。
     */
    "RelatedUserList"?: string[];
    /**
     * 父工单ID。创建子工单时才会有父工单。
     * @example `896****`
     */
    "ParentId"?: number;
    /**
     * 归档参数。
     */
    "Param": {
        /**
         * 归档目标数据库。
         * > 除归档目标为内置存储，其他归档目标涉及的数据库需要先录入至DMS中，且实例在控制台显示已登录。
         * - **inner_oss**：专属存储（内置存储）。
         * - **oss_userself**：用户OSS 。
         * - **mysql**：RDS MySQL。
         * - **polardb**：PolarDB MySQL。
         * - **adb_mysql**：AnalyticDB MySQL 3.0。
         * - **lindorm**：lindorm。
         * @example `adb_mysql`
         */
        ArchiveMethod: string;
        /**
         * 归档任务的运行方式。
         * - **schedule**：周期调度。
         * - **now**：立即执行。
         * @example `now`
         */
        RunMethod: string;
        /**
         * 归档变量配置。用户可定义时间变量作为归档的过滤条件。每一个变量有两个属性：name和pattern。
         */
        Variables: {
            /**
             * 时间变量名。
             * 若用于归档过滤条件，需与**过滤条件**中的变量名称一致。
             * @example `t`
             */
            Name: string;
            /**
             * 时间变量格式。用于定义时间变量的值。更多时间变量格式信息，请参见[配置变量](~~209323~~)。
             * 时间变量格式示例如下：
             * - **yyyy-MM-dd|-3d**：业务运行时间的前3天。
             * - **yyyy-MM-dd|-1w**：业务运行时间的前1周。
             * - **yyyy-MM-dd|-4M**：业务运行时间的前4个月。
             * - **yyyy-MM-dd|-2y**：业务运行时间的前2年。
             * - **yyyy-MM-dd|-3h**：业务运行时间的前3小时。
             * - **yyyy-MM-dd|+5m**：业务运行时间的后5分钟。
             * > 其中前半部分yyyy-MM-dd|为固定值，后半部分中-表示业务时间前，+表示业务时间后。
             * @example `yyyy-MM-dd|-3d`
             */
            Pattern: string;
        }[];
        /**
         * 是否为逻辑库。
         * @example `false`
         */
        Logic: boolean;
        /**
         * 待归档的表的集合。
         */
        TableIncludes: {
            /**
             * 表名。
             * @example `table1`
             */
            TableName: string;
            /**
             * 归档配置的WHERE过滤条件。
             * 若过滤条件中使用时间变量，则过滤条件格式为：字段名<='${变量名}'。其中变量名与Variables参数中对应的name保持一致。
             * @example `gmt_modified<'${t}'`
             */
            TableWhere: string;
        }[];
        /**
         * 归档目标端的表名。使用API调用时，无需填写该参数，系统将使用默认值。
         */
        TableMapping: string[];
        /**
         * 后置行为。
         */
        OrderAfter: string[];
        /**
         * 源库目录（catalog）。
         * - **def**：对于两层逻辑结构的数据库，如MySQL，PolarDB MySQL，AnalyticDB MySQL，固定为def。
         * - **空字符串**： 对于lindorm与MongoDB，填入空字符串。
         * - **catalog名**：对于三层逻辑结构的数据库，如PostgreSQL，填入catalog名。
         * @example `def`
         */
        SourceCatalogName: string;
        /**
         * 源库Schema，源库与目标库同名。
         * 如MySQL为库名，PostgreSQL为Schema名。
         * @example `schema_test`
         */
        SourceSchemaName: string;
        /**
         * 源实例名称。
         * 如果为自建/他云数据库，您可调用[GetInstance](~~465826~~)接口获取InstanceId参数值。
         * @example `rm-bp187l****380w`
         */
        SourceInstanceName: string;
        /**
         * 目标库Host，若目标实例同时开放了内网与公网，优先写入内网Host。
         * - 若归档目标为OSS，则为Bucket名。
         * - 若归档目标为专属存储，则为inner_oss。
         * @example `amv-bp1****00444.ads.aliyuncs.com`
         */
        TargetInstanceHost: string;
        /**
         * 填写Crontab表达式，以便定期执行任务，更多信息，请参见[Crontab表达式](~~206581~~)。
         * 当运行方式为周期归档时需要填写该参数。
         * @example `00 05 11 * * ?`
         */
        CronStr: string;
        /**
         * 数据库ID。
         * 如果是自建/他云数据库，可调用[GetDatabase](~~465856~~)接口获取。
         * 如果是阿里云实例，可忽略此参数。
         * @example `1***`
         */
        DatabaseId: string;
    };
}
