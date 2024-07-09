export interface DescribeApiGroupResponse {
    /**
     * 分组状态
     * - **NORMAL**：正常
     * - **DELETE**：删除
     * @example `NORMAL`
     */
    Status: string;
    /**
     * 关联的标签列表，多个用逗号（,）分隔
     * @example `depart:dep1`
     */
    CompatibleFlags: string;
    /**
     * api根路径
     * @example `/qqq`
     */
    BasePath: string;
    /**
     * ipv6状态
     * @example `UNBIND`
     */
    Ipv6Status: string;
    /**
     * 用户日志设置
     * @example `{\"requestBody\":true,\"responseBody\":true,\"queryString\":\"test\",\"requestHeaders\":\"test\",\"responseHeaders\":\"test\",\"jwtClaims\":\"test\"}`
     */
    UserLogConfig: string;
    /**
     * 自定义配置项列表
     * @example `removeResponseServerHeader`
     */
    CustomerConfigs: string;
    /**
     * 请求ID
     * @example `03442A3D-3B7D-434C-8A95-A5FEB989B519`
     */
    RequestId: string;
    /**
     * API分组描述
     * @example `New weather informations.`
     */
    Description: string;
    /**
     * https策略
     * @example `HTTPS2_TLS1_0`
     */
    HttpsPolicy: string;
    /**
     * 系统为分组分配的二级域名
     * @example `27d50c0f2e54b359919923d908bb015-cn-hangzhou.alicloudapi.com`
     */
    SubDomain: string;
    /**
     * 创建时间，格林威治时间
     * @example `2016-08-01T06:53:02Z`
     */
    CreatedTime: string;
    /**
     * 默认域名
     * @example `mkt.api.gaore.com`
     */
    DefaultDomain: string;
    /**
     * 云监控应用分组
     * @example `217008423`
     */
    CmsMonitorGroup: string;
    /**
     * 计费状态
     * - **NORMAL**：正常
     * - **LOCKED**：欠费锁定
     * @example `NORMAL`
     */
    BillingStatus: string;
    /**
     * 分组最高QPS限制，默认500，可申请提高
     * @example `500`
     */
    TrafficLimit: number;
    /**
     * 透传 Headers
     * @example `eagleeye-rpcid,x-b3-traceid`
     */
    PassthroughHeaders: string;
    /**
     * 实例ID
     * @example `apigateway-cn-v6419k43xxxxx`
     */
    InstanceId: string;
    /**
     * vpc域名
     * @example `e4****7151954***acbd9f7****1058a-ap-southeast-1-vpc.alicloudapi.com`
     */
    VpcDomain: string;
    /**
     * 实例类型
     * - CLASSIC_SHARED：共享实例经典网络
     * - VPC_SHARED：共享实例(VPC)
     * - VPC_DEDICATED：专享实例(VPC)
     * @example `VPC_SHARED`
     */
    InstanceType: string;
    /**
     * 自定义trace配置
     * @example `{\"parameterLocation\":\"HEADER\",\"parameterName\":\"traceId\"}`
     */
    CustomTraceConfig: string;
    /**
     * 分组所在区域
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 最后修改时间，格林威治时间
     * @example `2016-08-01T06:54:32Z`
     */
    ModifiedTime: string;
    /**
     * API分组 ID，系统生成，全局唯一
     * @example `523e8dc7bbe04613b5b1d726c2a7889d`
     */
    GroupId: string;
    /**
     * API分组名称
     * @example `NewWeather`
     */
    GroupName: string;
    /**
     * 违法锁定
     * - **NORMAL**：正常
     * - **LOCKED**：违法锁定
     * @example `NORMAL`
     */
    IllegalStatus: string;
    /**
     * 内网VPC SLB域名
     * @example `257e9d450e924d00b976b0ecfb7184c2-cn-beijing-intranet.alicloudapi.com`
     */
    VpcSlbIntranetDomain: string;
    CustomDomains: {
        /**
         * 自定义域名信息
         */
        DomainItem: {
            /**
             * 绑定的运行环境名称
             * @example `TEST`
             */
            BindStageName: string;
            /**
             * 域名合法状态，取值：
             * - **NORMAL**：正常
             * - **ABNORMAL**：异常，该状态会影响API调用，需尽快解决
             * @example `ABNORMAL`
             */
            DomainLegalStatus: string;
            /**
             * SSL证书名称
             * @example `myCertificate`
             */
            CertificateName: string;
            /**
             * 自定义域名类型
             * @example `intranet`
             */
            CustomDomainType: string;
            /**
             * 域名解析情况，取值：
             * - **RESOLVED**：已解析
             * - **UNRESOLVED**：未解析
             * @example `RESOLVED`
             */
            DomainCNAMEStatus: string;
            /**
             * 通配域名模式
             * @example `[\"{test}.test.com\"]`
             */
            WildcardDomainPatterns: string;
            /**
             * 自定义域名绑定状态，取值：
             * - **BINDING**：正常
             * - **BOUND**：未生效
             * @example `BINDING`
             */
            DomainBindingStatus: string;
            /**
             * 域名名称
             * @example `api.demo.com`
             */
            DomainName: string;
            /**
             * 域名相关备注，如描述域名异常状态原因
             * @example `该域名未备案`
             */
            DomainRemark: string;
            /**
             * 使用WebSocket功能的域名状态
             * @example `CLOSE`
             */
            DomainWebSocketStatus: string;
            /**
             * SSL证书ID，系统自动生成唯一编号
             * @example `6EF60BEC-0242-43AF-BB20-270359FB54A7`
             */
            CertificateId: string;
            /**
             * 是否将http重定向到https
             * @example `false`
             */
            IsHttpRedirectToHttps: boolean;
            /**
             * 证书生效时间
             * @example `1689043476000`
             */
            CertificateValidStart: number;
            /**
             * 证书失效时间
             * @example `2635123476000`
             */
            CertificateValidEnd: number;
            /**
             * 绑定的运行环境别名
             * @example `TEST1`
             */
            BindStageAlias: string;
        }[];
    };
    StageItems: {
        /**
         * 运行环境信息
         */
        StageInfo: {
            /**
             * 运行环境编号
             * @example `123e8dc7bbe01613b5b1d726c2a7888e`
             */
            StageId: string;
            /**
             * 运行环境名称
             * @example `TEST`
             */
            StageName: string;
            /**
             * 运行环境描述
             * @example `MYTEST`
             */
            Description: string;
        }[];
    };
    /**
     * 云市场商品
     * @example `false`
     */
    CloudMarketCommodity: boolean;
    /**
     * 分组所在专享实例的类型
     *   - VPC融合类型专享实例：vpc_connect
     *   - 传统类型专享实例：normal
     * @example `normal`
     */
    DedicatedInstanceType: string;
    /**
     * 分组迁移实例任务状态
     *   - 运行中：Running
     *   - 成功：Success
     *   - 失败：Fail
     * @example `Fail`
     */
    MigrationStatus: string;
    /**
     * 分组迁移实例任务失败时，失败的原因。
     * 当MigrationStatus参数值为Fail时，不为空。
     * @example `The current instance conflicts with the target instance.`
     */
    MigrationError: string;
    /**
     * 是否禁止公网二级域名的访问
     * - true：禁止公网二级域名访问
     * - false：允许公网二级域名访问
     * @example `false`
     */
    DisableInnerDomain: boolean;
}
