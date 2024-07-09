export interface DescribeRestoreTaskListResponse {
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
     * @example `9C397502-B4F2-4E22-AD97-C81F0049F3F3`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid. `
     */
    ErrMessage: string;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 总恢复任务数。
     * @example `1`
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
        RestoreTaskDetail: {
            /**
             * 恢复任务状态，取值：
             * - init：未启动或预检查失败
             * - running：运行中
             * - stop：失败
             * - pause：暂停
             * - check_pass：预检查通过
             * @example `running`
             */
            RestoreStatus: string;
            /**
             * 全量结构后置恢复进度。
             * @example `100`
             */
            FullStruAfterRestoreProgress: number;
            /**
             * 跨阿里云账号备份的RAM角色名称。
             * @example `test123`
             */
            CrossRoleName: string;
            /**
             * 恢复路径。
             * @example `100.X.X.10:33204`
             */
            RestoreDir: string;
            /**
             * 跨阿里云账号备份的UID。
             * @example `2xxx7778xxxxxxxxxx`
             */
            CrossAliyunId: string;
            /**
             * 恢复对象。
             * @example `[     {         \"DBName\":\"test\"       } ]`
             */
            RestoreObjects: string;
            /**
             * 备份计划ID。
             * @example `dbs1hvb0wXXXX`
             */
            BackupPlanId: string;
            /**
             * 数据库地域。
             * @example `cn-hangzhou`
             */
            DestinationEndpointRegion: string;
            /**
             * 恢复任务创建时间，取值：1554560477000。
             * @example `1554560477000`
             */
            RestoreTaskCreateTime: number;
            /**
             * 数据库账号。
             * @example `test`
             */
            DestinationEndpointUserName: string;
            /**
             * 恢复任务完成时间，取值：1554560477000。
             * @example `1554560477000`
             */
            RestoreTaskFinishTime: number;
            /**
             * 数据库连接地址。
             * @example `100.X.X.10:33204`
             */
            DestinationEndpointIpPort: string;
            /**
             * 数据库名称。
             * @example `test`
             */
            DestinationEndpointDatabaseName: string;
            /**
             * 数据库所在位置，取值：
             * - RDS
             * - ECS
             * - Express：通过专线/VPN网关/智能网关接入的数据库
             * - agent：通过备份网关接入的数据库
             * - dds：云MongoDB
             * - other：通过IP:Port直连的数据库
             * @example `RDS`
             */
            DestinationEndpointInstanceType: string;
            /**
             * Oracle SID名称。
             * @example `test`
             */
            DestinationEndpointOracleSID: string;
            /**
             * 全量结构前置恢复进度。
             * @example `0`
             */
            FullStruforeRestoreProgress: number;
            /**
             * 错误信息。
             * @example `NULL`
             */
            ErrMessage: string;
            /**
             * 恢复任务ID。
             * @example `s1XXXXXX`
             */
            RestoreTaskId: string;
            /**
             * 全量数据恢复进度。
             * @example `100`
             */
            FullDataRestoreProgress: number;
            /**
             * 增量日志恢复进度。
             * @example `100`
             */
            ContinuousRestoreProgress: number;
            /**
             * 数据库实例ID。
             * @example `rm-bp1p8c2947XXX`
             */
            DestinationEndpointInstanceID: string;
            /**
             * 恢复所使用的全量备份集ID。
             * @example `1ibh2f5uXXX`
             */
            BackupSetId: string;
            /**
             * 备份网关ID。
             * @example `324234332`
             */
            BackupGatewayId: number;
            /**
             * 恢复任务名称。
             * @example `test`
             */
            RestoreTaskName: string;
            /**
             * 恢复时间，取值：1554560477000。
             * @example `1554560477000`
             */
            RestoreTime: number;
        }[];
    };
}
