export interface DescribeCloudMigrationPrecheckResultRequest {
    /**
     * 目标实例ID。可调用DescribeDBInstances接口查询。
     * @example `pgm-bp102g323jd4****`
     */
    "DBInstanceName": string;
    /**
     * 任务ID。调用CreateCloudMigrationPrecheckTask接口创建一键上云前检查任务时响应消息中获取。
     * @example `439946016`
     */
    "TaskId"?: number;
    /**
     * 任务名称。调用CreateCloudMigrationPrecheckTask接口创建一键上云前检查任务时响应消息中获取
     * @example `slf7w7wj3g`
     */
    "TaskName"?: string;
    /**
     * 自建PostgreSQL数据库的内网IP或公网IP。
     * - ECS自建PostgreSQL数据库一键上云场景，配置ECS实例的私网IP。获取方法请参见[查看IP地址](~~273914~~)。
     * - IDC自建PostgreSQL数据库一键上云场景，配置为IDC的内网IP。
     * @example `172.2.XX.XX`
     */
    "SourceIpAddress"?: string;
    /**
     * 自建PostgreSQL数据库的端口。可通过netstat -a | grep PGSQL命令查看。
     * @example `5432`
     */
    "SourcePort"?: number;
    /**
     * 每页记录数，取值：**30**~**100**。
     * 默认值：30。
     * @example `30`
     */
    "PageSize": number;
    /**
     * 页码，取值：大于0且不超过Integer的最大值。默认值：**1**。
     * @example `1`
     */
    "PageNumber": number;
}
