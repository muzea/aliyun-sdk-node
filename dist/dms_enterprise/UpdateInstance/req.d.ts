export interface UpdateInstanceRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 数据库类型，取值请参见[DbType参数说明](~~198106~~)。
     * @example `mysql`
     */
    "InstanceType": string;
    /**
     * 数据库实例来源，取值如下：
     * - **PUBLIC_OWN**：代表公网自建实例
     * - **RDS**：代表RDS实例
     * - **ECS_OWN**：代表ECS自建实例
     * - **VPC_IDC**：代表VPC IDC自建实例
     * @example `ECS_OWN`
     */
    "InstanceSource": string;
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
     * @example `vpc-xxx`
     */
    "VpcId"?: string;
    /**
     * 实例所在地域。
     * > 如果InstanceSource取值为RDS、ECS\_OWN或VPC\_IDC，此值必填。
     * @example `cn-hangzhou`
     */
    "EcsRegion"?: string;
    /**
     * 实例连接地址。
     * @example `192.XXX.0.56`
     */
    "Host": string;
    /**
     * 实例访问端口。
     * @example `3306`
     */
    "Port": number;
    /**
     * 实例Sid。
     * > 如果InstanceType为ORACLE，此项必填。
     * @example `XXX`
     */
    "Sid"?: string;
    /**
     * 数据库账号。
     * @example `dbuser`
     */
    "DatabaseUser": string;
    /**
     * 数据库访问密码。
     * @example `******`
     */
    "DatabasePassword": string;
    /**
     * 实例别名，帮助用户快速区分定位该实例。
     * @example `instance_test`
     */
    "InstanceAlias": string;
    /**
     * 实例DBA角色的用户ID，可通过调用接口[ListUsers](~~141938~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `27****`
     */
    "DbaId": string;
    /**
     * 实例的安全规则集（GroupName），可通过调用接口[ListStandardGroups](~~417891~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `3****`
     */
    "SafeRuleId": string;
    /**
     * 实例查询超时时间。
     * @example `60`
     */
    "QueryTimeout": number;
    /**
     * 实例导出超时时间。
     * @example `600`
     */
    "ExportTimeout": number;
    /**
     * 输入跨库查询datalink名称。
     * > - 如果UseDsql取值为1，此值必填。
     * > - DBLink名称只能使用小写字母和下划线（_）。
     * > - DBLink名称需要在租户内保持全局唯一性。
     * @example `datalink_test`
     */
    "DataLinkName"?: string;
    /**
     * 实例是否开启无锁结构变更，取值如下：
     * - **0** ：不使用
     * - **1** ：原生无锁优先，失败转DMS执行
     * - **2** ：DMS无锁变更执行
     * @example `0`
     */
    "DdlOnline"?: number;
    /**
     * 是否启用跨实例查询，取值如下：
     * - **0**：不开启
     * - **1**：开启
     * > 支持的数据库类型：MySQL、SQL Server、PostgreSQL、PolarDB PostgreSQL版（兼容Oracle）、Redis。
     * @example `0`
     */
    "UseDsql"?: number;
    /**
     * 实例ID，可通过调用接口[GetInstance](~~141567~~)获取该参数的值。
     * @example `126****`
     */
    "InstanceId": string;
    /**
     * 实例是否忽略测试连通性。取值如下：
     * - **true**：忽略
     * - **false**：不忽略
     * @example `false`
     */
    "SkipTest"?: boolean;
    /**
     * - **Y**：开启敏感数据保护
     * - **N**：关闭敏感数据保护
     * - **NULL或其它**：不更新敏感数据保护的状态，即保持原始的开启或关闭状态。
     * @example `Y`
     */
    "EnableSellSitd"?: string;
    /**
     * 更新分类分级模板ID。您可以调用[ListClassificationTemplates](~~460613~~)接口获取该参数的值。
     * @example `3***`
     */
    "TemplateId"?: number;
    /**
     * 更新分类分级模板类型。您可以调用[ListClassificationTemplates](~~460613~~)接口获取该参数的值。
     * @example `INNER`
     */
    "TemplateType"?: string;
}
