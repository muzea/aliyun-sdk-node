export interface ExecuteMultiAccountSQLQueryRequest {
    /**
     * 待执行SQL语句。
     * 待执行SQL语句长度小于2000个字符。
     * 关于SQL语法的更多信息，请参见[SQL基本语法](~~2539395~~)。
     * @example `SELECT * FROM resources LIMIT 100;`
     */
    "Expression": string;
    /**
     * 搜索的账号范围。取值：
     * - 资源目录ID，表示搜索管理账号和所有成员中的资源。
     * - Root资源夹ID，表示搜索Root资源夹及子资源夹下的所有成员中的资源。
     * - 资源夹ID，表示搜索指定资源夹下所有成员中的资源。
     * - 成员ID，表示搜索指定成员中的资源。
     * - 成员ID/资源组ID，表示搜索指定成员的资源组中的资源。
     * 关于如何获取资源目录ID、Root资源夹ID、资源夹ID、成员ID和资源组ID，请分别参见[GetResourceDirectory](~~159995~~)、[ListFoldersForParent](~~159997~~)、[ListFoldersForParent](~~159997~~)、[ListAccounts](~~160016~~)和[ListResourceGroups](~~158855~~)。
     * @example `rd-r4****`
     */
    "Scope": string;
}
