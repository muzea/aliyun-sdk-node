export interface GetInstanceResponse {
    /**
     * 请求ID。
     * @example `F6C80B69-3203-56AC-8021-18BA72A6F4E1`
     */
    RequestId: string;
    /**
     * 实例详细信息。
     */
    Instance: {
        /**
         * 实例所属VPC的ID。
         * @example `vpc-o6wrloqsdqc9io3mg****`
         */
        VpcId: string;
        /**
         * 实例登录用户名。
         * @example `dbuser`
         */
        DatabaseUser: string;
        /**
         * 实例DBA ID。
         * @example `29****`
         */
        DbaId: string;
        /**
         * 实例是否开启跨库查询：
         * - **0**：不开启
         * - **1**：开启
         * @example `0`
         */
        UseDsql: number;
        /**
         * 实例连接端口。
         * @example `5432`
         */
        Port: number;
        /**
         * 实例ECS ID。
         * @example `i-bp124ldpklqz59y3****`
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
         * @example `test`
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
         * @example `3****`
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
         * @example `dbaname`
         */
        DbaNickName: string;
        /**
         * 实例查询超时时间。
         * @example `7200`
         */
        QueryTimeout: number;
        /**
         * 实例来源。
         * @example `ECS_OWN`
         */
        InstanceSource: string;
        /**
         * 实例连接地址。
         * @example `192.168.XXX.XXX`
         */
        Host: string;
        /**
         * 实例状态，返回值如下：
         * - **NORMAL**：正常使用
         * - **DISABLE**：禁用
         * @example `NORMAL`
         */
        State: string;
        /**
         * 实例Datalink名称。
         * @example `test`
         */
        DataLinkName: string;
        /**
         * 实例导出超时时间。
         * @example `86400`
         */
        ExportTimeout: number;
        /**
         * 实例ID。
         * @example `188****`
         */
        InstanceId: string;
        /**
         * 实例DB类型。
         * @example `postgresql`
         */
        InstanceType: string;
        /**
         * 数据库用户密码。
         * @example `******`
         */
        DatabasePassword: string;
        /**
         * 实例别名。
         * @example `测试`
         */
        InstanceAlias: string;
        /**
         * 实例DdlOnline配置。
         * @example `0`
         */
        DdlOnline: number;
        /**
         * 实例所属地域。
         * @example `cn-beijing`
         */
        EcsRegion: string;
        /**
         * 实例对应的管控模式信息。
         */
        StandardGroup: {
            /**
             * 管控模式对应的安全规则名称。
             * @example `自由操作`
             */
            GroupName: string;
            /**
             * 管控模式类型，返回值如下：
             * - **COMMON**：安全协同模式
             * - **NONE_CONTROL**：自由操作模式
             * - **STABLE**：稳定变更模式
             * @example `NONE_CONTROL`
             */
            GroupMode: string;
        };
        /**
         * 敏感数据保护是否开启，取值：
         * - **true**：开启
         * - **false**：关闭
         * @example `false`
         */
        SellSitd: string;
    };
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
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
