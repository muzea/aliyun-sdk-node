export interface ExecuteScriptRequest {
    /**
     * 数据库ID。
     * > 该参数对应为[SearchDatabase](~~141876~~)、[ListDatabases](~~141873~~)、[GetDatabase](~~141869~~)等接口中的DatabaseId参数，您可以调用这些接口获取。
     * @example `123`
     */
    "DbId": number;
    /**
     * 要执行的具体SQL脚本。包括DQL、DDL和DML，其中DDL和DML是否允许依赖于实例的安全管控配置。
     * @example `select dt from report_daily`
     */
    "Script": string;
    /**
     * 是否逻辑库。
     * @example `false`
     */
    "Logic": boolean;
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `234`
     */
    "Tid"?: number;
}
