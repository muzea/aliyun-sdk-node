export interface QueryPermissionListResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 消息说明。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F6E29451-A3CD-4705-806D-0112D08F5C49`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 消息体。
     */
    Data: {
        /**
         * 关系生效时间。为空表示还没有失效，故没有失效时间。
         * @example `2021-03-06T15:12Z`
         */
        EndTime: string;
        /**
         * 关系策略：FinancialManagement表示财务管理，FinancialTrusteeship表示财务托管
         * @example `FinancialManagement`
         */
        RelationType: string;
        /**
         * 关系生效时间。符合ISO8601标准的utc时间格式，如2016-05-23T12:00:00Z（为北京时间2016年5月23日20点0分0秒）
         * @example `2021-03-02T15:12Z`
         */
        StartTime: string;
        /**
         * 关系状态。取值是RelationshipStatusEnum的枚举值。
         * @example `RELATED`
         */
        State: string;
        /**
         * 主账号Id
         * @example `1990699401005016`
         */
        MasterId: number;
        /**
         * 成员账号Id
         * @example `1851253838840762`
         */
        MemberId: number;
        /**
         * 关系建立时间。符合ISO8601标准的utc时间格式，如2016-05-23T12:00:00Z（为北京时间2016年5月23日20点0分0秒）
         * @example `2021-03-02T15:12Z`
         */
        SetupTime: string;
        /**
         * 权限列表
         */
        PermissionList: {
            /**
             * 权限失效时间。为空表示权限目前还是生效的。符合ISO8601标准的utc时间格式，如2016-05-23T12:00:00Z（为北京时间2016年5月23日20点0分0秒）
             * @example `2021-03-05T15:12Z`
             */
            EndTime: string;
            /**
             * 权限生效时间。符合ISO8601标准的utc时间格式，如2016-05-23T12:00:00Z（为北京时间2016年5月23日20点0分0秒）
             * @example `2021-03-02T15:12Z`
             */
            StartTime: string;
            /**
             * 权限Code
             * @example `allow_synchronize_finance_identity`
             */
            PermissionCode: string;
            /**
             * 权限名
             * @example `主账号 子账号共享主账号信控身份`
             */
            PermissionName: string;
        }[];
    };
}
