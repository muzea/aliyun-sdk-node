export interface CreateCloudMigrationTaskRequest {
    /**
     * 目标实例ID。可调用DescribeDBInstances接口查询。
     * @example `pgm-bp102g323jd4****`
     */
    "DBInstanceName": string;
    /**
     * 自建PostgreSQL数据库的内网IP或公网IP。
     * - ECS自建PostgreSQL数据库一键上云场景，配置ECS实例的私网IP。获取方法请参见[查看IP地址](~~273914~~)。
     * - IDC自建PostgreSQL数据库一键上云场景，配置为IDC的内网IP。
     * @example `172.16.XX.XX`
     */
    "SourceIpAddress": string;
    /**
     * 自建PostgreSQL数据库的端口。可通过`netstat -a | grep PGSQL`命令查看。
     * @example `5432`
     */
    "SourcePort": number;
    /**
     * 用户名。[创建迁移账号](~~369500~~)步骤创建的数据库账号。
     * @example `migratetest`
     */
    "SourceAccount": string;
    /**
     * 密码。[创建迁移账号](~~369500~~)步骤创建的数据库账号的密码。
     * @example `123456`
     */
    "SourcePassword": string;
    /**
     * 任务名称。自定义，未设置时系统自动生成。
     * @example `362c6c7a-4d20-4eac-898c-1495ceab374c`
     */
    "TaskName"?: string;
    /**
     * 自建PostgreSQL的类型。
     * - **idcOnVpc**：线下IDC自建PostgreSQL（IDC与VPC打通）
     * - **ecsOnVpc**：阿里云ECS自建PostgreSQL
     * @example `ecsOnVpc`
     */
    "SourceCategory": string;
}
