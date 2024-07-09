export interface DescribeCloudMigrationPrecheckResultResponse {
    /**
     * 查询结果统计。
     * @example `1`
     */
    TotalSize: number;
    /**
     * 请求ID。
     * @example `7E4A6E1B-789B-5F16-9736-39AA57FC7374`
     */
    RequestId: string;
    /**
     * 一键上云检查报告列表。
     */
    Items: {
        /**
         * 任务创建时间。
         * @example `2022-02-25T06:57:41Z`
         */
        GmtCreated: string;
        /**
         * 任务修改时间。
         * @example `2022-02-25T06:58:00Z`
         */
        GmtModified: string;
        /**
         * 任务ID。
         * @example `440420798`
         */
        TaskId: number;
        /**
         * 任务名称。
         * @example `lxbv6rtxno8`
         */
        TaskName: string;
        /**
         * 自建PostgreSQL的类型。
         * - **idcOnVpc**：线下IDC自建PostgreSQL（IDC与VPC打通）
         * - **ecsOnVpc**：阿里云ECS自建PostgreSQL
         * @example `ecsonvpc`
         */
        SourceCategory: string;
        /**
         * 自建PostgreSQL数据库的内网IP。
         * @example `172.2.XX.XX`
         */
        SourceIpAddress: string;
        /**
         * 自建PostgreSQL数据库的端口。
         * @example `5432`
         */
        SourcePort: number;
        /**
         * 用户名。
         * @example `migratetest`
         */
        SourceAccount: string;
        /**
         * 密码。
         * @example `123456`
         */
        SourcePassword: string;
        /**
         * 预留参数，查询结果为空。
         * @example `null`
         */
        TargetEip: string;
        /**
         * 目标实例ID。
         * @example `pgm-bp102g323jd4****`
         */
        TargetInstanceName: string;
        /**
         * 上云前检查报告内容。
         * @example `[Check rds empty]\nCheck rds databases: success\n[Check source connectivity]\nCheck ip connectable: success\nCheck port connectable: success\nCheck database connectable: success\nCheck account replication privilege: success\nCheck account createrole privilege: success\nCheck account monitor privilege: success\n[Check source version]\nCheck major version consistent: success\n[Check source glibc version]\nCheck source glibc version compatible: warning(warning:source glibc version is not compatible with rds pg)\n[Check disk size]\nCheck disk size enough: success\n[Check wal keep size]\nCheck wal keep size large enough: success\n[Check spec params]\nCheck if spec params too large: success\n [Check triggers]\nCheck triggers compatible: success\n[Check user functions]\nCheck user functions compatible: success\n*Migrate check success*`
         */
        Detail: string;
    }[];
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页最大记录数
     * @example `10`
     */
    PageSize: number;
}
