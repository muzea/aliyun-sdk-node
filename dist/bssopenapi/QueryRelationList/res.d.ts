export interface QueryRelationListResponse {
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
     * @example `7FC5D662-37FD-40A6-85B1-33442D815184`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 消息体
     */
    Data: {
        /**
         * 页码
         * @example `1`
         */
        PageNum: number;
        /**
         * 页大小
         * @example `20`
         */
        PageSize: number;
        /**
         * 总数
         * @example `100`
         */
        TotalCount: number;
        /**
         * 关系列表
         */
        FinancialRelationInfoList: {
            /**
             * 关系失效时间。为空表示没有失效
             * @example `2021-03-08T15:12Z`
             */
            EndTime: string;
            /**
             * 关系策略：FinancialManagement表示财务管理，FinancialTrusteeship表示财务托管
             * @example `FinancialManagement`
             */
            RelationType: string;
            /**
             * 用户显示名称
             * @example `test4`
             */
            AccountNickName: string;
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
             * 阿里云账号UID
             * @example `1851253838840762`
             */
            AccountId: number;
            /**
             * 关系建立时间。符合ISO8601标准的utc时间格式，如2016-05-23T12:00:00Z（为北京时间2016年5月23日20点0分0秒）
             * @example `2021-03-02T15:12Z`
             */
            SetupTime: string;
            /**
             * 企业财务账号类型：MASTER和MEMBER。
             * @example `MEMBER`
             */
            AccountType: string;
            /**
             * 阿里云账号登录名
             * @example `caiwuyun_test4`
             */
            AccountName: string;
            /**
             * 关系ID
             * @example `51463`
             */
            RelationId: number;
        }[];
    };
}
