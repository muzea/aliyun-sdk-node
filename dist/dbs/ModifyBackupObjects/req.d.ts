export interface ModifyBackupObjectsRequest {
    /**
     * 备份计划ID。
     * @example `dbs1h****usfa`
     */
    "BackupPlanId": string;
    /**
     * BackupObjects 的定义格式为 JSON 字符串，定义如下：
     * ```
     * [
     *     {
     *         "DBName":"待备份库名",
     *         "SchemaName":"待备份 Schema 名",
     *         "TableIncludes":[{
     *         	"TableName":"待备份表表名"
     *         }],
     *         "TableExcludes":[{
     *             "TableName":"待备份库名不需要备份表的表名"
     *         }]
     *     }
     * ]
     * ```
     * * 当用户只配置了`DBName`，不配置其他子对象的规则，那么表示迁移这个数据库下面的所有对象。
     * * 当用户配置了`DBName`，且配置了部分对象的规则，那么不配置的对象默认不迁移。各种对象名的定义可以支持如下的正则表达式：
     * 	* 点号`.`：表示匹配除`\r\n`之外的任何单个字符。
     * 	* 星号`*`：表示匹配前面子表达式任意次，`h*llo`匹配 `hllo`、`heeeello`等字符串。
     * 	* 问号`?`：表示匹配前面子表达式零次或1次，`h.?llo`匹配`hllo`、`hello`，但不能匹配`haello`。
     * 	* 字符集合`[characters]`：表示匹配方括号内任意一个字符，例如`h[aello]`匹配`hallo`、`hello`。
     * 	* 负值字符集合`[^characters]`：表示不匹配方括号内任意一个字符，例如`h[^ae]llo`匹配`hcllo`、`hdllo`，但是不能匹配`hallo`、`hello`。
     * 	* 字符范围`[character1-character2]`：表示 `character1-character2`范围内的字符都可以匹配，例如 `[0-9]`、`[a-z]`。
     * > `SchemaName` 和 `NewSchemaName`只用于 MSSQL，其他数据库的库名定义使用 `DBName`和`NewDBName`参数。
     * @example `[     {         "DBName":"17xxx92xxxx374",         "SchemaName":"gy9xnj8xxxxxx",         "TableIncludes":[{         	"TableName":"test1"         }],         "TableExcludes":[{             "TableName":"test2"         }]     } ]`
     */
    "BackupObjects": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
