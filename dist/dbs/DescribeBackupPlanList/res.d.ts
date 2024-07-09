export interface DescribeBackupPlanListResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `4F1888AC-1138-4995-B9FE-D2734F61C058`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `InvalidParameterValid`
     */
    ErrCode: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid.     `
     */
    ErrMessage: string;
    /**
     * 总页数。
     * @example `4`
     */
    TotalPages: number;
    /**
     * 总备份计划数。
     * @example `100`
     */
    TotalElements: number;
    /**
     * 每页的记录数。
     * @example `30`
     */
    PageSize: number;
    Items: {
        /**
         * 备份计划详情。
         */
        BackupPlanDetail: {
            /**
             * 跨阿里云账号备份的RAM角色名称。
             * @example `test123`
             */
            CrossRoleName: string;
            /**
             * 数据库所在位置，返回值如下：
             * - **rds**
             * - **ecs**
             * - **express**：通过专线/VPN网关/智能网关接入的数据库
             * - **agent**：通过备份网关接入的数据库
             * - **dds**：云MongoDB
             * - **other**：通过IP:Port直连的数据库
             * @example `rds`
             */
            SourceEndpointInstanceType: string;
            /**
             * 备份集下载服务器目录。
             * @example `*​/test/test123`
             */
            BackupSetDownloadDir: string;
            /**
             * 数据库连接地址。
             * @example `100.*.*.10:33204`
             */
            SourceEndpointIpPort: string;
            /**
             * 跨阿里云账号备份的uid。
             * @example `2xxx7778xxxxxxxxxx`
             */
            CrossAliyunId: string;
            /**
             * 转为归档冷备存储时间（天）。
             * @example `365`
             */
            DuplicationArchivePeriod: number;
            /**
             * 备份计划ID。
             * @example `dbstooi01eXXXX`
             */
            BackupPlanId: string;
            /**
             * 数据库可恢复时间段的结束时间，格式为时间戳。
             * @example `1554560477000`
             */
            EndTimestampForRestore: number;
            /**
             * 备份计划状态，返回值如下：
             * - **wait**：未配置
             * - **init**：未启动（预检查失败）
             * - **running**：运行中
             * - **stop**：失败
             * - **pause**：暂停
             * - **locked**：锁定中
             * - **check_pass**：预检查通过
             * @example `init`
             */
            BackupPlanStatus: string;
            /**
             * 备份集下载全量数据格式：
             * * **Native**
             * * **SQL**
             * * **CSV**
             * * **JSON**
             * @example `SQL`
             */
            BackupSetDownloadFullDataFormat: string;
            /**
             * 备份数据保留时间，返回值：0~1825（天）。
             * @example `365`
             */
            BackupRetentionPeriod: number;
            /**
             * OSS Bucket地域。
             * @example `cn-hangzhou`
             */
            OSSBucketRegion: string;
            /**
             * Oracle SID名称。
             * @example `test`
             */
            SourceEndpointOracleSID: string;
            /**
             * 内置存储类型，返回值如下：
             * - 空（默认）：备份数据存储在用户OSS上。
             * - system ：备份数据存储在DBS的内置OSS上。
             * @example `system`
             */
            BackupStorageType: string;
            /**
             * 备份方式，返回值如下：
             * - **logical**：逻辑备份
             * - **physical**：物理备份
             * - **duplication**：转储备份
             * @example `logical`
             */
            BackupMethod: string;
            /**
             * 数据库地域。
             * @example `cn-hangzhou`
             */
            SourceEndpointRegion: string;
            /**
             * 全量备份周期，返回值如下：
             * - **Monday**：周一
             * - **Tuesday**：周二
             * - **Wednesday**：周三
             * - **Thursday**：周四
             * - **Friday**：周五
             * - **Saturday**：周六
             * - **Sunday**：周日
             * @example `Monday`
             */
            BackupPeriod: string;
            /**
             * 数据库名称。
             * @example `test`
             */
            SourceEndpointDatabaseName: string;
            /**
             * 备份集下载备份网关ID。
             * @example `123123`
             */
            BackupSetDownloadGatewayId: number;
            /**
             * 备份计划创建时间戳。
             * @example `1582527713000`
             */
            BackupPlanCreateTime: number;
            /**
             * 规格，返回值如下：
             * - **micro**：入门型
             * - **small**：低配型
             * - **medium**：中配型
             * - **large**：高配型
             * - **xlarge**：高配型（无流量上限）
             * @example `micro`
             */
            InstanceClass: string;
            /**
             * 备份集下载目标类型。
             * > 唯一取值：agent，表示已安装备份网关。
             * @example `agent`
             */
            BackupSetDownloadTargetType: string;
            /**
             * 转为低频访问存储时间（天）。
             * @example `180`
             */
            DuplicationInfrequentAccessPeriod: number;
            /**
             * 全量备份开始时间，格式为HH:mm。
             * @example `14:22`
             */
            BackupStartTime: string;
            /**
             * 预检查任务异常信息。
             * @example `  can not connect to oracle instance orcl with user dbs`
             */
            ErrMessage: string;
            /**
             * 备份对象。
             * @example `[     {         \"DBName\":\"待备份库名\",         \"SchemaName\":\"待备份 Schema 名\",         \"TableIncludes\":[{             \"TableName\":\"待备份表表名\"         }],         \"TableExcludes\":[{             \"TableName\":\"待备份库名不需要备份表的表名\"         }]     } ]`
             */
            BackupObjects: string;
            /**
             * 可数据库恢复时间段的开始时间，返回值：1554560477000。
             * @example `1554560477000`
             */
            BeginTimestampForRestore: number;
            /**
             * 数据库实例ID。
             * @example `test`
             */
            SourceEndpointInstanceID: string;
            /**
             * 是否开启自动备份集下载功能。
             * @example `true`
             */
            OpenBackupSetAutoDownload: boolean;
            /**
             * 备份计划名称。
             * @example `dbstooi01e****`
             */
            BackupPlanName: string;
            /**
             * OSS Bucket名称。
             * @example `dbs-backup-1857XXXXX489`
             */
            OSSBucketName: string;
            /**
             * 备份网关ID。
             * @example `827362187368736`
             */
            BackupGatewayId: number;
            /**
             * 数据库账号。
             * @example `test`
             */
            SourceEndpointUserName: string;
            /**
             * 备份集下载全量数据格式：
             * * **Native**
             * * **SQL**
             * * **CSV**
             * * **JSON**
             * @example `SQL`
             */
            BackupSetDownloadIncrementDataFormat: string;
            /**
             * 是否开启增量日志备份，返回值如下：
             * - **true**：开启
             * - **false**：关闭
             * @example `true`
             */
            EnableBackupLog: boolean;
            /**
             * 资源组ID。
             * @example `rg-aekzecovzti****`
             */
            ResourceGroupId: string;
            /**
             * 数据库类型。
             * @example `MySQL`
             */
            DatabaseType: string;
        }[];
    };
}
