export interface QueryDatasetInfoResponse {
    /**
     * 接口是否成功返回，取值范围：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `a4d1a221d-41za1-****`
     */
    RequestId: string;
    /**
     * 数据集信息。
     */
    Result: {
        /**
         * 数据集最新修改时间。
         * @example `1629450382000`
         */
        GmtModify: string;
        /**
         * 数据源名称。
         * @example `odps`
         */
        DsName: string;
        /**
         * 数据源唯一ID。
         * @example `a201c85c-******`
         */
        DsId: string;
        /**
         * 数据集所有者名称。
         * @example `大娃`
         */
        OwnerName: string;
        /**
         * 数据集所处空间名称。
         * @example `测试空间`
         */
        WorkspaceName: string;
        /**
         * 数据集所有者在Quick BI的用户ID。
         * @example `b8494aab26124*****`
         */
        OwnerId: string;
        /**
         * 数据集名称。
         * @example `opds_40`
         */
        DatasetName: string;
        /**
         * 行级权限是否开启，取值范围：
         * - true：开启
         * - false：关闭
         * @example `false`
         */
        RowLevel: boolean;
        /**
         * 数据集所属工作空间唯一ID。
         * @example `420abef4-a79b-4289-b12****`
         */
        WorkspaceId: string;
        /**
         * 是否自定义SQL，取值范围：
         * - true：是
         * - false：否
         * @example `false`
         */
        CustimzeSql: boolean;
        /**
         * 数据集创建时间。
         * @example `1629450382000`
         */
        GmtCreate: string;
        /**
         * 数据源类型，取值范围：
         * - mysql
         * - odps
         * - oracle
         * - …等Quick BI支持的数据源类型
         * @example `odps`
         */
        DsType: string;
        /**
         * 数据集唯一ID。
         * @example `a201c85c-******`
         */
        DatasetId: string;
        /**
         * 是否开启抽取加速，取值范围：
         * - true：开启
         * - false：关闭
         * @example `false`
         */
        OpenOfflineAcceleration: boolean;
        /**
         * 数据集所使用的表的列表。
         */
        CubeTableList: {
            /**
             * 表名称。
             * @example `viewdasb8494aab2612473cb74992159fe****`
             */
            TableName: string;
            /**
             * 数据源ID。
             * @example `dfefd7f4-fc6e-42c9-b4******`
             */
            DatasourceId: string;
            /**
             * 数据源类型，取值范围：
             * - mysql
             * - odps
             * - oracle
             * - ...等Quick BI支持的数据源类型
             * @example `maxcompute`
             */
            DsType: string;
            /**
             * 表唯一ID。
             * @example `7a62530b36`
             */
            UniqueId: string;
            /**
             * 是否是数据源表，取值范围：
             * - true：数据源表
             * - false：自定义表
             * @example `true`
             */
            FactTable: boolean;
            /**
             * 表的显示名称。
             * @example `odps_40`
             */
            Caption: string;
            /**
             * 是否是自定义SQL表，取值范围：
             * - true：自定义SQL表
             * - false：非自定义SQL表
             * @example `false`
             */
            Customsql: boolean;
            /**
             * 当为自定义SQL表时，此为具体SQL。
             * @example `select * from ****`
             */
            Sql: string;
        }[];
        /**
         * 数据集中所有维度的列表。
         */
        DimensionList: {
            /**
             * 数据类型； 取值范围：
             * - string：字符
             * - number：数字
             * - datetime：时间
             * @example `string`
             */
            DataType: string;
            /**
             * 计算维度的表达式；仅对计算维度有效。
             * @example `example_expression`
             */
            Expression: string;
            /**
             * 实际物理字段。
             * @example `city`
             */
            FactColumn: string;
            /**
             * 维度类型，取值范围：
             * - standard_dimension：普通维度
             * - calculate_dimension：计算维度
             * - group_dimension：分组维度
             * @example `group_dimension`
             */
            DimensionType: string;
            /**
             * 粒度。
             * @example `example_granularity`
             */
            Granularity: string;
            /**
             * 分组度量，引用的字段唯一ID。当且仅当该度量为分组度量时非NULL。
             * @example `308f7****`
             */
            RefUid: string;
            /**
             * 维度显示名称。
             * @example `city`
             */
            Caption: string;
            /**
             * 唯一ID。
             * @example `a69774***`
             */
            Uid: string;
            /**
             * 所属表的唯一ID，对应CubeTypeList的UniqueId。
             * @example `7a62530***`
             */
            TableUniqueId: string;
        }[];
        /**
         * 数据集所有度量的列表。
         */
        MeasureList: {
            /**
             * 数据类型； 取值范围：
             * - string：字符
             * - number：数字
             * - datetime：时间
             * @example `string`
             */
            DataType: string;
            /**
             * 计算度量的表达式；仅对计算度量有效。
             * @example `example_expression`
             */
            Expression: string;
            /**
             * 度量类型，取值范围：
             * - standard_measure：普通度量
             * - calculate_measure：计算度量
             * @example `calculate_measure`
             */
            MeasureType: string;
            /**
             * 实际物理字段。
             * @example `profit_amt`
             */
            FactColumn: string;
            /**
             * 度量显示名称。
             * @example `profit_amt`
             */
            Caption: string;
            /**
             * 所属表的唯一ID，对应CubeTypeList的UniqueId。
             * @example `7a62530b36`
             */
            TableUniqueId: string;
            /**
             * 度量唯一ID。
             * @example `88b680****`
             */
            Uid: string;
        }[];
        /**
         * 数据集所属目录信息。
         */
        Directory: {
            /**
             * 目录ID的路径，例如：aa/bb/cc/dd。
             * @example `88b680****`
             */
            PathId: string;
            /**
             * 目录ID的路径名称，例如：一层目录/二层目录。
             * @example `测试目录`
             */
            PathName: string;
            /**
             * 目录名称。
             * @example `测试目录`
             */
            Name: string;
            /**
             * 目录ID。
             * @example `a3eecab7-618d-4f9f-*****`
             */
            Id: string;
        };
    };
}
