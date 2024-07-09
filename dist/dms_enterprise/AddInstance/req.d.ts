export interface AddInstanceRequest {
    /**
     * 租户ID。
     * > 取自DMS控制台页面右上角头像处悬停展示的租户ID信息。
     * @example `23****`
     */
    "Tid"?: number;
    /**
     * 数据库类型，取值请参见[DbType参数说明](~~198106~~)。
     * @example `MySQL`
     */
    "InstanceType": string;
    /**
     * 实例来源，取值如下：
     * - **PUBLIC_OWN**：表示公网自建实例。
     * - **RDS**：表示RDS实例。
     * - **ECS_OWN**：表示ECS自建实例。
     * - **VPC_IDC**：表示VPC IDC自建实例。
     * @example `RDS`
     */
    "InstanceSource": string;
    /**
     * 网络类型，取值如下：
     * - **CLASSIC**：经典网络
     * - **VPC**：VPC网络
     * @example `VPC`
     */
    "NetworkType": string;
    /**
     * 环境类型，取值如下：
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
    "EnvType": string;
    /**
     * ECS的实例ID。
     * > 如果InstanceSource取值为ECS_OWN，此值必填。
     * @example `i-2zei9gs1t7h8l7ac****`
     */
    "EcsInstanceId"?: string;
    /**
     * 实例VPC ID。
     * > 如果InstanceSource取值为VPC_IDC时，此值必填。
     * @example `vpc-2zef4o1hu7ljd****`
     */
    "VpcId"?: string;
    /**
     * ECS实例所在地域。
     * > 如果InstanceSource取值为RDS、ECS\_OWN或VPC\_IDC，此值必填。
     * @example `cn-hangzhou`
     */
    "EcsRegion"?: string;
    /**
     * 目标数据库的主机地址。
     * @example `172.XX.XXX.254`
     */
    "Host": string;
    /**
     * 数据库的连接端口。
     * @example `3306`
     */
    "Port": number;
    /**
     * 实例Sid。
     * > 如果InstanceType为ORACLE，此项必填。
     * @example `testSid`
     */
    "Sid"?: string;
    /**
     * 数据库账号。
     * @example `testsdb`
     */
    "DatabaseUser": string;
    /**
     * 数据库密码。
     * @example `test***`
     */
    "DatabasePassword": string;
    /**
     * 实例别名，帮助用户快速区分定位该实例。
     * @example `测试实例`
     */
    "InstanceAlias": string;
    /**
     * 实例DBA角色的用户ID，可调用接口[ListUsers](~~141938~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `27****`
     */
    "DbaId": number;
    /**
     * 查询超时时间，单位：s（秒）。
     * @example `7200`
     */
    "QueryTimeout": number;
    /**
     * 导出超时时间，单位：s（秒）。
     * @example `86400`
     */
    "ExportTimeout": number;
    /**
     * 实例是否需要开启安全托管。
     * - Y：开启安全托管模式。
     * - NULL或其它：不开启安全托管模式。
     * @example `Y`
     */
    "EnableSellTrust": string;
    /**
     * 实例是否需要开通稳定变更功能。
     * - Y：开通。
     * - NULL或其它：不开通。
     * @example `NULL`
     */
    "EnableSellStable"?: string;
    /**
     * 实例是否需要开通安全协同功能。
     * - Y：开启。
     * - NULL或其它：不开启。
     * @example `Y`
     */
    "EnableSellCommon"?: string;
    /**
     * 若您需要开通安全协同功能包，则需要为该实例设置安全规则集（GroupName）。您可调用[ListStandardGroups](~~465940~~)或[GetInstance](~~465826~~)接口获取该参数的值。
     * @example `金融线-生产`
     */
    "SafeRule"?: string;
    /**
     * 是否需要为该实例开启敏感数据保护功能。
     * - Y：开启。
     * - NULL或其它：不开启。
     * @example `Y`
     */
    "EnableSellSitd"?: string;
    /**
     * 输入跨库查询datalink名称。
     * > - 如果UseDsql取值为1，此值必填。
     * > - DBLink名称只能使用小写字母和下划线（_）。
     * >- DBLink名称需要在租户内保持全局唯一性。
     * @example `dblink_test`
     */
    "DataLinkName"?: string;
    /**
     * 是否开启DMS结构变更优先，取值如下：
     * - **0** ：不使用。
     * - **1** ：原生Online DDL优先。
     * - **2** ：DMS无锁表结构变更优先。
     * > 支持的数据库类型：RDS MySQL、PolarDB MySQL引擎、MyBase MySQL、其他来源MySQL。
     * @example `2`
     */
    "DdlOnline"?: number;
    /**
     * 是否启用跨实例查询，取值如下：
     * - **0**：不开启。
     * - **1**：开启。
     * > 支持的数据库类型：MySQL、SQL Server、PostgreSQL、PolarDB O引擎、Redis。
     * @example `1`
     */
    "UseDsql"?: number;
    /**
     * 实例是否忽略测试连通性。取值如下：
     * - **true**：忽略。
     * - **false**：不忽略。
     * @example `false`
     */
    "SkipTest"?: boolean;
    /**
     * 分类分级模板ID。您可调用[ListClassificationTemplates](~~465947~~)接口获取该参数的值。
     * @example `31***`
     */
    "TemplateId"?: number;
    /**
     * 分类分级模板类型。您可调用[ListClassificationTemplates](~~465947~~)获取该参数的值。
     * @example `INNER`
     */
    "TemplateType"?: string;
    /**
     * 选择是否开启SSL连接，开启后，DMS将通过SSL连接到数据库。使用该参数的前提是数据库已开启SSL连接，当前支持如下选项：
     * - **0**：默认值（DMS与数据库服务自动协商是否开启）系统将自动识别目标数据库是否已开启SSL连接，若数据库已开启SSL连接，则DMS将通过SSL连接数据库；若数据库未开启SSL连接，则通过普通方式进行连接。
     * - **1**：开启SSL连接。若数据库未开启SSL连接，则该参数无效。
     * - **-1**：关闭SSL连接。
     * > - 该配置项仅在数据库为MySQL或Redis时出现。
     * > - SSL（Secure Sockets Layer）能在传输层对网络连接进行加密，提升通信数据的安全性和完整性，但会增加网络连接响应时间。
     * @example `0`
     */
    "UseSsl"?: number;
}
