export interface ListInstancesResponse {
    /**
     * 满足条件的实例总个数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `B4B07137-F6AE-4756-8474-7F92BB6C4E04`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    InstanceList: {
        /**
         * 实例列表。
         */
        Instance: {
            /**
             * 实例所属VPC的ID。
             * @example `vpc-o6wrloqsdqc9io3mg****`
             */
            VpcId: string;
            /**
             * 数据库用户名。
             * @example `dbUser`
             */
            DatabaseUser: string;
            /**
             * 实例DBA ID。
             * @example `31****`
             */
            DbaId: string;
            /**
             * 实例是否开启跨库查询：
             * - **0**：不开启
             * - **1**：开启
             * @example `1`
             */
            UseDsql: number;
            /**
             * 实例连接端口。
             * @example `3306`
             */
            Port: number;
            /**
             * 实例ECS ID。
             * @example `150****`
             */
            EcsInstanceId: string;
            /**
             * 实例环境类型，返回值如下：
             * - **product**：生产环境
             * - **dev**：开发环境
             * - **pre**：预发环境
             * - **test**：测试环境
             * - **sit**：SIT环境
             * - **uat**：UAT环境
             * - **pet**：压测环境
             * - **stag**：STAG环境
             * @example `product`
             */
            EnvType: string;
            /**
             * 实例Sid。
             * @example `test`
             */
            Sid: string;
            OwnerIdList: {
                /**
                 * 实例Owner UserId列表。
                 */
                OwnerIds: string[];
            };
            /**
             * 实例安全规则ID。
             * @example `1`
             */
            SafeRuleId: string;
            OwnerNameList: {
                /**
                 * 实例Owner昵称列表。
                 */
                OwnerNames: string[];
            };
            /**
             * 实例DBA昵称。
             * @example `dbaName`
             */
            DbaNickName: string;
            /**
             * 实例查询超时时间。
             * @example `60`
             */
            QueryTimeout: number;
            /**
             * 实例来源。
             * @example `RDS`
             */
            InstanceSource: string;
            /**
             * 实例连接地址。
             * @example `****.mysql.rds.aliyuncs.com`
             */
            Host: string;
            /**
             * 实例状态。
             * @example `NORMAL`
             */
            State: string;
            /**
             * DataLink名称。
             * @example `dblink_test`
             */
            DataLinkName: string;
            /**
             * 导出超时时间。
             * @example `86400`
             */
            ExportTimeout: number;
            /**
             * 实例ID。
             * @example `150***`
             */
            InstanceId: string;
            /**
             * 实例DB类型。
             * @example `mysql`
             */
            InstanceType: string;
            /**
             * 数据库用户密码。
             * @example `******`
             */
            DatabasePassword: string;
            /**
             * 实例别名。
             * @example `test`
             */
            InstanceAlias: string;
            /**
             * 实例DdlOnline配置。
             * @example `1`
             */
            DdlOnline: number;
            /**
             * 实例所属地域。
             * @example `cn-hangzhou`
             */
            EcsRegion: string;
            /**
             * 实例对应的管控模式信息。
             */
            StandardGroup: {
                /**
                 * 管控模式对应的安全规则名称。
                 * @example `test`
                 */
                GroupName: string;
                /**
                 * 管控模式类型，取值如下：
                 * - **COMMON**：安全协同模式
                 * - **NONE_CONTROL**： 自由操作模式
                 * - **STABLE**：稳定变更模式
                 * @example `COMMON`
                 */
                GroupMode: string;
            };
            /**
             * 敏感数据保护是否开启，取值：
             * - **true**：开启
             * - **false**：关闭
             * @example `true`
             */
            SellSitd: boolean;
        }[];
    };
    /**
     * 请求是否成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
