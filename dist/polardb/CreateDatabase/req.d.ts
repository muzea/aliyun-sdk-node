export interface CreateDatabaseRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 数据库名称，名称需满足如下要求：
     * * 由小写字母、数字、中划线（-）、下划线（_）组成。
     * * 以字母开头，以字母或数字结尾，最长64个字符。
     * > - 下划线（_）占2个字符。
     * > - 请勿使用保留关键字作为数据库名称，如`test`、`mysql`等。
     * @example `testDB`
     */
    "DBName": string;
    /**
     * 字符集。关于字符集的取值范围，请参见[字符集表](~~99716~~)。
     * @example `utf8`
     */
    "CharacterSetName": string;
    /**
     * 数据库备注信息，备注信息需满足如下要求：
     * * 不能以`http://`或`https://`开头。
     * * 长度为2~256个字符。
     * > 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填；当集群为PolarDB MySQL版时，该参数非必填。
     * @example `testdesc`
     */
    "DBDescription"?: string;
    /**
     * 授权访问该数据库的账号名。可通过接口[DescribeAccounts](~~98107~~)查询账号信息。
     * > - 只支持输入普通账号，高权限账号默认拥有数据库全部权限无需授权。
     * > - 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填；当集群为PolarDB MySQL版时，该参数非必填。
     * @example `testacc`
     */
    "AccountName"?: string;
    /**
     * 账号权限，取值范围如下：
     * *  **ReadWrite**：读写。
     * * **ReadOnly**：只读。
     * * **DMLOnly**：只允许DML。
     * * **DDLOnly**：只允许DDL。
     * * **ReadIndex**：只读+索引。
     * 若该参数不填，则默认为**ReadWrite**。
     * > - 该参数仅当**AccountName**为非空值时生效。
     * > - 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填；
     * > - 当集群为PolarDB MySQL版时，该参数非必填。
     * @example `ReadWrite`
     */
    "AccountPrivilege"?: string;
    /**
     * 语言环境设置，用于指定新建数据库的排序规则。
     * > - 语言环境必须与**CharacterSetName**参数设置的字符集兼容。
     * > - 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填；当集群为PolarDB MySQL版时，不支持该参数。
     * 关于该参数的取值范围，请登录PolarDB控制台，在**配置与管理** > **数据库管理**页签，单击**创建数据库**进行查看。
     * @example `C`
     */
    "Collate"?: string;
    /**
     * 语言环境设置，用于指定数据库的字符分类。
     * > - 语言环境必须与**CharacterSetName**参数设置的字符集兼容。
     * > - 与**Collate**传入信息一致。
     * > - 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填；当集群为PolarDB MySQL版时，该参数非必填。
     * 关于该参数的取值范围，请登录PolarDB控制台，在**配置与管理** > **数据库管理**页签，单击**创建数据库**进行查看。
     * @example `C`
     */
    "Ctype"?: string;
}
