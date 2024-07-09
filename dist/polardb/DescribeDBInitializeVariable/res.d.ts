export interface DescribeDBInitializeVariableResponse {
    Variables: {
        /**
         * 结果集。
         */
        Variable: {
            /**
             * 支持的字符集。
             * @example `EUC_CN`
             */
            Charset: string;
            /**
             * 语言环境设置，用于指定新建数据库的排序规则。
             * > - 语言环境必须与**CharacterSetName**参数设置的字符集兼容。
             * > - 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填。
             * 关于该参数的取值范围，请登录PolarDB控制台，在**配置与管理** > **数据库管理**页签，单击**创建数据库**进行查看。
             * @example `C`
             */
            Collate: string;
            /**
             * 语言环境设置，用于指定数据库的字符分类。
             * > - 语言环境必须与**CharacterSetName**参数设置的字符集兼容。
             * > - 与**Collate**传入信息一致。
             * > - 当集群为PolarDB PostgreSQL版（兼容Oracle）或PolarDB PostgreSQL版时，该参数必填。
             * 关于该参数的取值范围，请登录PolarDB控制台，在**配置与管理** > **数据库管理**页签，单击**创建数据库**进行查看。
             * @example `C`
             */
            Ctype: string;
        }[];
    };
    /**
     * 数据库版本。
     * @example `11`
     */
    DBVersion: string;
    /**
     * 请求ID。
     * @example `475F58B7-F394-4394-AA6E-4F1CBA******`
     */
    RequestId: string;
    /**
     * 数据库类型，取值如下：
     * - Oracle
     * - PostgreSQL
     * @example `PostgreSQL`
     */
    DBType: string;
}
