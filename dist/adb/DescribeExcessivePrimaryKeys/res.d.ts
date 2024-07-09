export interface DescribeExcessivePrimaryKeysResponse {
    /**
     * 返回的结果总数，取值为：大于等于0且不超过Integer数据类型的最大值，默认值为0。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 页码，取值为：大于0且不超过Integer数据类型的最大值，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页记录数，取值：
     * - **30**（默认值）
     * - **50**
     * - **100**
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * 集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查看数仓版（3.0）集群的集群ID。
     * @example `am-bp11q28kvl688****`
     */
    DBClusterId: string;
    /**
     * 表列表。
     */
    Tables: {
        /**
         * 表名。
         * @example `test`
         */
        TableName: string;
        /**
         * 数据库名。
         * @example `adb_demo`
         */
        SchemaName: string;
        /**
         * 总列数。
         * @example `26`
         */
        ColumnCount: number;
        /**
         * 主键字段个数。
         * @example `1`
         */
        PrimaryKeyCount: number;
        /**
         * 主键字段列表。
         * @example `id,date`
         */
        PrimaryKeyColumns: string;
        /**
         * 表空间占比，单位：%。
         * > 计算公式为：表空间占比 = (表总数据量 / 实例总数据量) * 100。
         * @example `20`
         */
        SpaceRatio: number;
        /**
         * 冷数据总量，单位：Byte。
         * > 计算公式为：冷数据总量 = 表记录数据量 + 普通索引数据量 + 主键索引数据量 + 其他。
         * @example `1073741824`
         */
        TotalSize: number;
        /**
         * 主键索引数据量，单位：Byte。
         * @example `2345`
         */
        PrimaryKeyIndexSize: number;
    }[];
    /**
     * 检测项及检测结果列表。
     */
    DetectionItems: {
        /**
         * 检测项名。
         * @example `主键字段过多`
         */
        Name: string;
        /**
         * 检测结果。
         * @example `检测到表存在主键过多的情况`
         */
        Message: string;
        /**
         * 检测结果状态程度。
         * @example `NORMAL
        WARNING
        CRITICAL`
         */
        Status: string;
    }[];
    /**
     * 访问被拒绝详细信息。
     * @example `{
        "PolicyType": "AccountLevelIdentityBasedPolicy",
        "AuthPrincipalOwnerId": "1906102576997697",
        "EncodedDiagnosticMessage": "AQIBIAAAAOPdwKY2QLOvgMEc7SkkoJfj1kvZwsaRqNYMh10Tv0wTe0fCzaCdrvgazfNb0EnJKETgXyhR+3BIQjx9WAqZryejBsp1Bl4qI5En/D9dEhcXAtKCxCmE2kZCiEzpy8BoEUt+bs0DmlaGWO5xkEpttypLIB4rUhDvZd+zwPg4EXk4KSSWSWsurxtqDkKEMshKlQFBTKvJcNqPqHV6lwR4INiAGjIvK1ngXxN1O+6ORRB6A8YvztEOGywOk81ZmuNk0YrNy+qk7+UVDTHeXKsy8h9e/ePY/LMidj0RCmDpo/YpCumd0UGe0qEPe2U+UJAm/+UHlnEFLVg6BP3yIB5D++MCy7mgWm8Kwyhk62IeYly4hQ+5IpXjkh1GQXuDgLVVPVpxEek9n30vnCUL4KsaMgfa7dgojb+3TM8xGsD2zVK5STJNrsXclscIJEqyNXd7CBYiRJVZi1HPO6drN9WW0chLpCSTgjO8n0bNanZaxXKumW9PSwV58UoSFASeMWfZK3TLngX+oq8nGmnTwcJosVjfF4RGzAnS1IXt0Q9N2WHDnpwyLBU/nOz7Hsy8IZ+h+OVjsBTXSM9688/vOF707a5mNzpETvQeGRcua3A5livcKAM2cML0yeUs/Zyj/+BGqtVa+wektspDHC/CECh6R5lxQjRmUdPawY8VDs2onmdLuEH8DdmYt+Yv/jBFBUMWOyAluzkPYcX5nuQKouCIUJUFTSbsJsuH5CTIh7Ls5rbmkj+T1qTVz8gnDR8LxwaqoMSna+elXgVyOOxXtMkenVntsmoC3p/4G7yTPL1hu8JyWGIIvZHZGGLXGEH7FeSuMV8buKxPGFWG3arG8e9LGvDdz5dgTien4y6G5AQ0o1iQdXDos5VWdH3u7k5PrsvdEOpvMi6uSd8a42na80FsYlgGlwM5upydcWUC5Un2HCkJpT1xgk2L6shdVTrK6bidRrqE784FhW9bBQePzGaxSupPENZya0VUctRt+7uq3QwIn4y5jzjgX0E0jgmqPrgiVDjBesMQZYfGPCGysWYWYzfoh+G6V7N2VVGtNnGUwNWzM0WJBPONAgxPv+AmixFRCQ==",
        "AuthPrincipalType": "SubUser",
        "AuthPrincipalDisplayName": "202515810214480629",
        "NoPermissionType": "ImplicitDeny",
        "AuthAction": "adb:DescribeExcessivePrimaryKeys"
      }`
     */
    AccessDeniedDetail: string;
}
