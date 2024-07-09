export interface ExecuteSQLQueryRequest {
    /**
     * 待执行SQL语句。
     * 待执行SQL语句长度小于2000个字符。
     * 关于SQL语法的更多信息，请参见[SQL基本语法](~~2539395~~)。
     * @example `SELECT * FROM resources LIMIT 100;`
     */
    "Expression": string;
    /**
     * 搜索的范围。
     * 取值为资源组ID，表示搜索资源组中的资源。
     * 关于如何获取资源组ID，请参见[ListResourceGroups](~~158855~~)。
     * @example `rg-acfmzawhxxc****`
     */
    "Scope"?: string;
}
