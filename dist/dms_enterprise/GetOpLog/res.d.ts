export interface GetOpLogResponse {
    /**
     * 操作日志总条数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `47D56208-DB1D-4FD3-BE32-300E43185488`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `403`
     */
    ErrorCode: string;
    OpLogDetails: {
        /**
         * 操作日志详情列表。
         */
        OpLogDetail: {
            /**
             * 功能模块。
             * @example `安全规则`
             */
            Module: string;
            /**
             * 数据库访问地址。
             * > - 仅实例类型为LocalInstance时有这个属性。
             * > - 仅任务类型区域的各功能模块操作有这个属性。
             * @example `dmstest@rm-bp1qb97d4b****.mysql.rds.aliyuncs.com:3306【poc_dev】`
             */
            Database: string;
            /**
             * 用户UID。
             * @example `22275482072787****`
             */
            UserId: string;
            /**
             * 操作人员的用户ID。
             * @example `51****`
             */
            OpUserId: number;
            /**
             * 操作内容。
             * @example `SELECT * FROM `orders` \n LIMIT 20`
             */
            OpContent: string;
            /**
             * 用户显示名。
             * @example `test_name`
             */
            UserNick: string;
            /**
             * 工单号或任务号。
             * > 仅任务类型区域的各功能模块操作与系统管理任务管理功能模块的操作才有这个属性。
             * @example `509****`
             */
            OrderId: number;
            /**
             * 操作时间。
             * @example `2022-03-28 16:45:19`
             */
            OpTime: string;
        }[];
    };
    /**
     * 错误消息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
