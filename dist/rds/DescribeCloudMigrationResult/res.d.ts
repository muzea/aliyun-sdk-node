export interface DescribeCloudMigrationResultResponse {
    /**
     * 查询结果统计。
     * @example `1`
     */
    TotalSize: number;
    /**
     * 请求ID。
     * @example `1B983C48-9793-5EAA-8F7F-00EAEC517675`
     */
    RequestId: string;
    /**
     * 迁移上云任务信息列表。
     */
    Items: {
        /**
         * 任务创建时间。
         * @example `2022-02-25T08:53:13Z`
         */
        GmtCreated: string;
        /**
         * 任务修改时间。
         * @example `2022-03-01T06:39:51Z`
         */
        GmtModified: string;
        /**
         * 任务ID。
         * @example `440437220`
         */
        TaskId: number;
        /**
         * 任务名称。
         * @example `362c6c7a-4d20-4eac-898c-1495ceab374c`
         */
        TaskName: string;
        /**
         * 迁移阶段。
         * - **precheck**：预检查
         * - **basebackup**：全量备份
         * - **startup**：链路搭建
         * - **increment**：增量同步
         * - **switch**：上云切换
         * - **success**：上云完成
         * @example `switch`
         */
        MigrateStage: string;
        /**
         * 自建PostgreSQL的类型。
         * - **idcOnVpc**：线下IDC自建PostgreSQL（IDC与VPC打通）
         * - **ecsOnVpc**：阿里云ECS自建PostgreSQL
         * @example `ecsonvpc`
         */
        SourceCategory: string;
        /**
         * 自建PostgreSQL数据库的内网IP。
         * @example `172.16.XX.XX`
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
         * 复制状态。
         * - **unstarted**：未启动
         * - **catchup**：追平中
         * - **streaming**：流式传输
         * - **disconnect**：断开连接
         * - **finish**：完成
         * @example `streaming`
         */
        ReplicationState: string;
        /**
         * 复制链路信息。
         * @example `{\"Status\":\"streaming\",\"ReceiveStartLsn\":\"0/3000000\",\"ReceivedTli\":\"1\",\"LatestEndTime\":\"2022-02-25 17:03:59.3344+08\",\"Synced\":\"true\",\"IsSlave\":\"true\",\"ReplayTimestamp\":\"null\",\"LastMsgSendTime\":\"2022-03-01 14:42:57.967537+08\",\"Conninfo\":\"user=migratetest password=******** channel_binding=prefer dbname=replication host=172.16.254.203 port=5432 application_name=rds_db_instance fallback_application_name=walreceiver sslmode=prefer sslcompression=1 sslsni=1 ssl_min_protocol_version=TLSv1.2 gssencmode=prefer krbsrvname=postgres target_session_attrs=any\",\"LastMsgReceiptTime\":\"2022-03-01 14:42:57.96727+08\",\"LatestEndLsn\":\"0/3000148\",\"ReceivedLsn\":\"0/3000148\",\"ReplayLsn\":\"0/3000148\",\"ReceiveStartTli\":\"1\",\"ReplayLag\":\"0\"}`
         */
        ReplicationInfo: string;
        /**
         * 迁移详情。
         * @example `[Check rds empty]\nCheck rds databases: success\n[Check source connectivity]\nCheck ip connectable: success\nCheck port connectable: success\nCheck database connectable: success\nCheck account replication privilege: success\nCheck account createrole privilege: success\nCheck account monitor privilege: success\n[Check source version]\nCheck major version consistent: success\n[Check source glibc version]\nCheck source glibc version compatible: warning(warning:source glibc version is not compatible with rds pg)\n[Check disk size]\nCheck disk size enough: success\n[Check wal keep size]\nCheck wal keep size large enough: success\n[Check spec params]\nCheck if spec params too large: success\n[Start RDS instance]\n2022-02-25 17:00:29 --- Start RDS instance as slave for data replication\n[Synchronize data]\n2022-02-25 17:01:05 --- Synchronize data from source to RDS by streaming replication \n`
         */
        Detail: string;
        /**
         * 切换时间。
         * @example `2022-03-01T06:40:51Z`
         */
        SwitchTime: string;
    }[];
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页最大记录数。
     * @example `10`
     */
    PageSize: number;
}
