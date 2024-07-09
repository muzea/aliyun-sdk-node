export interface DescribeCloudMigrationResultRequest {
    /**
     * 目标实例ID。可调用DescribeDBInstances接口查询。
     * @example `pgm-bp102g323jd4****`
     */
    "DBInstanceName": string;
    /**
     * 任务ID。调用CreateCloudMigrationTask接口创建RDS PostgreSQL迁移上云任务时响应消息中获取。
     * @example `440437220`
     */
    "TaskId"?: number;
    /**
     * 任务名称。调用CreateCloudMigrationTask接口创建RDS PostgreSQL迁移上云任务时响应消息中获取。
     * @example `362c6c7a-4d20-4eac-898c-1495ceab374c`
     */
    "TaskName"?: string;
    /**
     * 自建PostgreSQL数据库的内网IP。
     * - ECS自建PostgreSQL数据库一键上云场景，配置ECS实例的私网IP。获取方法请参见[查看IP地址](~~273914~~)。
     * - IDC自建PostgreSQL数据库一键上云场景，配置为IDC的内网IP。
     * @example `172.16.XX.XX`
     */
    "SourceIpAddress"?: string;
    /**
     * 自建PostgreSQL数据库的端口。可通过netstat -a | grep PGSQL命令查看。
     * @example `5432`
     */
    "SourcePort"?: number;
    /**
     * 页数。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页最大记录数。
     * @example `10`
     */
    "PageSize": number;
}
