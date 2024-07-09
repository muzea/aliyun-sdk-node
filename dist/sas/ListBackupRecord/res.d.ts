export interface ListBackupRecordResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3956048F-9D73-5EDB-834B-4827BB48****`
     */
    RequestId: string;
    /**
     * 备份记录列表。
     */
    BackupRecordList: {
        /**
         * 数据库防勒索所备份服务器的UUID。
         * @example `b93cccb9-f19f-4886-97fe-47df26ba****`
         */
        Uuid: string;
        /**
         * 防勒索客户端ID。
         * @example `c-0002bgagelj3d2sc****`
         */
        ClientId: string;
        /**
         * 备份计划ID。
         * @example `plan-000c4tt43nolmx96****`
         */
        BackupPlanId: string;
        /**
         * 备份任务ID。
         * @example `a006f24d069843c88688672d74ee****`
         */
        BackupJobId: string;
        /**
         * 备份开始时间，格式为时间戳（单位为毫秒）。
         * @example `1699514211000`
         */
        BackupStartTime: number;
        /**
         * 备份结束时间，格式为时间戳（单位为毫秒）。
         * @example `1699600611000`
         */
        BackupEndTime: number;
        /**
         * 备份任务状态。取值：
         * - **BACKUP_COMPLETE**：备份成功
         * - **BACKUP_FAILED**：备份失败
         * - **PARTIAL_COMPLETE**：部分备份成功
         * @example `BACKUP_COMPLETE`
         */
        BackupStatus: string;
        /**
         * 备份任务错误码。
         * @example `FILE_CACHE_NO_SPACE`
         */
        ErrorCode: string;
        /**
         * 备份任务错误详情。
         * @example `FILE_CACHE_NO_SPACE`
         */
        ErrorMessage: string;
        /**
         * 资产的实例名称。
         * @example `openapi`
         */
        InstanceName: string;
        /**
         * 服务器IP地址。
         * @example `1.1.1.1`
         */
        Ip: string;
        /**
         * 服务器实例的ID。
         * @example `i-wz9ikn44p46krnic****`
         */
        InstanceId: string;
        /**
         * 服务器的公网IP地址。
         * @example `1.1.1.1
        `
         */
        InternetIp: string;
        /**
         * 服务器私网IP。
         * @example `192.168.1.1`
         */
        IntranetIp: string;
        /**
         * 备份服务地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
    /**
     * 页面显示信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `2`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示数据条数。
         * @example `20`
         */
        Count: number;
    };
}
