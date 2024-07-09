export interface CreateDatabaseRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 数据库名称。
     * > * 长度为2~64个字符。
     * > * 以字母开头，以字母或数字结尾。
     * > * 由小写字母、数字、下划线或中划线组成。
     * > * 数据库名称在实例内必须是唯一的。
     * > * 其他非法字符，详见[禁用关键字表](~~26317~~)。
     * @example `rds_mysql`
     */
    "DBName": string;
    /**
     * 字符集，取值：
     * * MySQL/MariaDB：**utf8、gbk、latin1、utf8mb4**
     * * SQL Server：**Chinese_PRC_CI_AS、Chinese_PRC_CS_AS、SQL_Latin1_General_CP1_CI_AS、SQL_Latin1_General_CP1_CS_AS、Chinese_PRC_BIN**
     * * PostgreSQL：需要配置字符集、Collate和Ctype，格式为`字符集,<Collate>,<Ctype>`，例如：`UTF8,C,en_US.utf8`。
     *     - 字符集取值：**KOI8U、UTF8、WIN866、WIN874、WIN1250、WIN1251、WIN1252、WIN1253、WIN1254、WIN1255、WIN1256、WIN1257、WIN1258、EUC_CN、EUC_KR、EUC_TW、EUC_JP、EUC_JIS_2004、KOI8R、MULE_INTERNAL、LATIN1、LATIN2、LATIN3、LATIN4、LATIN5、LATIN6、LATIN7、LATIN8、LATIN9、LATIN10、ISO_8859_5、ISO_8859_6、ISO_8859_7、ISO_8859_8、SQL_ASCII**。
     *     - **Collate**取值：可通过`SELECT DISTINCT collname FROM pg_collation;`命令查询获取，不配置时默认为**C**。
     *     - **Ctype**取值：可通过`SELECT DISTINCT collctype FROM pg_collation;`命令查询获取，不配置时默认为**en_US.utf8**。
     * @example `gbk`
     */
    "CharacterSetName": string;
    /**
     * 数据库描述，长度为2~256个字符。以中文、英文字母开头，可以包含数字、中文、英文、下划线（_）、短横线（-）。
     * >不能以`http://`和`https://`开头。
     * @example `testdb`
     */
    "DBDescription"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
