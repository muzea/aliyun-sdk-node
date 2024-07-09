export interface DescribeInstanceSourcesResponse {
    /**
     * 当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5A7E8FB9-5011-5A90-97D9-AE587047****`
     */
    RequestId: string;
    /**
     * 每页包含的资产数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的资产总数量。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 查询到的资产列表。
     */
    Items: {
        /**
         * 最近一次的编辑人员的账号ID。
         * @example `demo`
         */
        LastModifyUserId: string;
        /**
         * 密码的使用状态。取值：
         * - **1**：使用。
         * - **0**：不使用 。
         * @example `1`
         */
        PasswordStatus: number;
        /**
         * 引擎类型。取值： **MySQL，MariaDB，Oracle，PostgreSQL，SQLServer**等。
         * @example `MySQL`
         */
        EngineType: string;
        /**
         * 租户名。
         * @example `user1`
         */
        TenantName: string;
        /**
         * 实例ID。
         * @example `rm-****`
         */
        InstanceId: string;
        /**
         * 实例的描述。
         * @example `测试使用`
         */
        InstanceDescription: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 资产所属的数据库名称。
         * @example `demo`
         */
        DbName: string;
        /**
         * 最近一次的编辑时间。单位：毫秒。
         * @example `1625587423000`
         */
        LastModifyTime: number;
        /**
         * 地域名称。
         * @example `杭州`
         */
        RegionName: string;
        /**
         * 是否允许修改账号、密码。取值：
         * - **true**：允许。
         * - **false**：不允许。
         * @example `true`
         */
        CanModifyUserName: boolean;
        /**
         * 原始日志存储的时间。单位：天。
         * @example `30`
         */
        LogStoreDay: number;
        /**
         * 创建时间。格式：时间戳，单位：毫秒。
         * @example `1625587423000`
         */
        GmtCreate: number;
        /**
         * 是否开启自动扫描识别敏感数据。取值：
         * - **0**：未开启。
         * - **1**：已开启。
         * @example `0`
         */
        AutoScan: number;
        /**
         * 指定待查询产品类型ID。取值：**1**：MaxCompute，**2**：OSS，**3**：ADS，**4**：OTS，**5**：RDS等。
         * @example `2`
         */
        ProductId: number;
        /**
         * 实例的空间大小，只对OSS资产类型有效。单位：字节。
         * @example `409600`
         */
        InstanceSize: number;
        /**
         * 账号的用户名。
         * @example `User01`
         */
        UserName: string;
        /**
         * 审计授权状态。取值：
         * - **1**：已授权。
         * - **0**：未授权。
         * @example `1`
         */
        AuditStatus: number;
        /**
         * 资产的唯一标识ID。
         * @example `1`
         */
        Id: number;
        /**
         * 租户ID。
         * @example `11`
         */
        TenantId: string;
        /**
         * 资产是否开启敏感数据识别。取值：
         * - **1**：开启。
         * - **0**：未开启。
         * @example `1`
         */
        Enable: number;
        /**
         * 数据检测状态。取值：
         * - **0**：就绪。
         * - **1**：运行中。
         * - **2**：连通性测试中。
         * - **3**：连通性测试通过。
         * - **4**：连通性测试未通过。
         * @example `3`
         */
        CheckStatus: number;
        /**
         * 脱敏权限状态。取值：
         * - **1**：开启。
         * - **0**：关闭。
         * @example `1`
         */
        DatamaskStatus: number;
        /**
         * 失败原因。
         * @example `password error`
         */
        ErrorMessage: string;
        /**
         * 敏感数据采样。取值：**0**、**5**、**10**。单位：条。
         * @example `10`
         */
        SamplingSize: number;
    }[];
}
