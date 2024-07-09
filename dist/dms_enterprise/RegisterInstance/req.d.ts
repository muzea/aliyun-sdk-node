export interface RegisterInstanceRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 数据库类型，取值请参见[DbType参数说明](~~198106~~)。
     * @example `MySQL`
     */
    "InstanceType": string;
    /**
     * 数据库实例来源，取值如下：
     * - **PUBLIC_OWN**：代表公网自建实例
     * - **RDS**：代表RDS实例
     * - **ECS_OWN**：代表ECS自建实例
     * - **VPC_IDC**：代表VPC IDC自建实例
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
     * - product：生产环境
     * - dev：开发环境
     * - pre：预发环境
     * - test：测试环境
     * - sit：SIT环境
     * - uat：UAT环境
     * - pet：压测环境
     * - stag：STAG环境
     * @example `product`
     */
    "EnvType": string;
    /**
     * ECS的实例ID。
     * >如果InstanceSource取值为ECS_OWN，此值必填。
     * @example `i-2zei9gs1t7h8l7ac****`
     */
    "EcsInstanceId"?: string;
    /**
     * VPC ID。
     * > 如果InstanceSource取值为VPC_IDC时，此值必填。
     * @example `vpc-xxxxxxxxxxxxxxxxxxxxx`
     */
    "VpcId"?: string;
    /**
     * 实例所在区域。
     * >如果InstanceSource取值为RDS、ECS\_OWN或VPC_IDC，此值必填。
     * @example `cn-hangzhou`
     */
    "EcsRegion"?: string;
    /**
     * 目标数据库的主机地址。
     * @example `172.XX.XXX.254`
     */
    "Host": string;
    /**
     * 目标数据库的访问端口。
     * @example `3306`
     */
    "Port": number;
    /**
     * 数据库SID。
     * >如果InstanceType为ORACLE，此项必填。
     * @example `XXX`
     */
    "Sid"?: string;
    /**
     * 数据库访问账号。
     * @example `dmstest`
     */
    "DatabaseUser": string;
    /**
     * 数据库访问密码。
     * @example `******`
     */
    "DatabasePassword": string;
    /**
     * 实例别名，可以帮助用户快速区分定位实例。
     * @example `测试实例`
     */
    "InstanceAlias": string;
    /**
     * 实例DBA角色的用户UID，可通过调用接口[ListUsers](~~141938~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `22275482072787****`
     */
    "DbaUid": number;
    /**
     * 实例的安全规则集（GroupName），可通过调用接口[ListStandardGroups](~~417891~~)或[GetInstance](~~141567~~)获取该参数的值。
     * @example `测试使用`
     */
    "SafeRule": string;
    /**
     * 查询超时时间，单位：s（秒）。
     * @example `60`
     */
    "QueryTimeout": number;
    /**
     * 导出超时时间，单位：s（秒）。
     * @example `600`
     */
    "ExportTimeout": number;
    /**
     * 输入跨库查询datalink名称。
     * > - 如果UseDsql取值为1，此值必填。
     * > - DBLink名称只能使用小写字母和下划线（_）。
     * > - DBLink名称需要在租户内保持全局唯一性。
     * @example `dblink_test`
     */
    "DataLinkName"?: string;
    /**
     * 是否开启结构变更优先，取值如下：
     * - **0** ：不使用
     * - **1** ：原生无锁优先，失败转DMS执行
     * - **2** ：DMS无锁变更执行
     * > 支持的数据库类型：RDS MySQL、PolarDB MySQL引擎、MyBase MySQL、其他来源MySQL。
     * @example `2`
     */
    "DdlOnline"?: number;
    /**
     * 是否启用跨实例查询，取值如下：
     * - **0**：不开启
     * - **1**：开启
     * > 支持的数据库类型：MySQL、SQL Server、PostgreSQL、PolarDB PostgreSQL版（兼容Oracle）、Redis。
     * @example `1`
     */
    "UseDsql"?: number;
    /**
     * 实例是否忽略测试连通性。取值如下：
     * - **true**：忽略
     * - **false**：不忽略
     * @example `true`
     */
    "SkipTest"?: boolean;
    /**
     * - **Y**：开启敏感数据保护
     * - **NULL或其它**：不开启敏感数据保护
     * @example `Y`
     */
    "EnableSellSitd"?: string;
    /**
     * 分类分级模板ID。您可以调用[ListClassificationTemplates](~~460613~~)接口获取该参数的值。
     * @example `31***`
     */
    "TemplateId"?: number;
    /**
     * 分类分级模板类型。您可以调用[ListClassificationTemplates](~~460613~~)接口获取该参数的值。
     * @example `INNER`
     */
    "TemplateType"?: string;
    /**
     * 用于替换DbaUid字段，可输入角色账号等非数字DbaUid
     * @example `22275482072787****`
     */
    "DbaUidByString"?: string;
}
