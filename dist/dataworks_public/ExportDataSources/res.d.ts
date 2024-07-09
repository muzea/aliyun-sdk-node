export interface ExportDataSourcesResponse {
    /**
     * 此次调用的返回结果状态。取值如下：
     * - 200：表示此次调用的返回结果成功。
     * - 其他值：表示此次调用的返回结果异常。您可以根据对应错误码处理相关异常。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `0bc14115159376359****`
     */
    RequestId: string;
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 批量导出数据源的返回结果。
     */
    Data: {
        /**
         * 分页查询的页码。取值为大于等于1的正整数。
         * @example `10`
         */
        PageNumber: number;
        /**
         * 每页显示的数据条数。
         * @example `1`
         */
        PageSize: number;
        /**
         * 返回满足条件的数据源总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 批量导出的数据源的详细信息。
         * 此次调用的返回结果为导出数据源的详细信息数组，如下信息为数组中的一个数据源的详细信息示例。
         */
        DataSources: {
            /**
             * 数据源是否可用。取值如下：
             * - 1：表示数据源可用。
             * - 0：表示数据源不可用。
             * @example `1`
             */
            Status: number;
            /**
             * 数据源所属的DataWorks工作空间ID。
             * @example `123`
             */
            ProjectId: number;
            /**
             * 数据源的子类型。仅当DataSourceType参数配置为RDS时，该参数生效。
             * 当DataSourceType参数配置为RDS时，该参数可以取值为mysql、sqlserver或postgresql。
             * @example `mysql`
             */
            SubType: string;
            /**
             * 最近一次修改数据源的时间。格式示例为：Mar 17, 2021 4:09:32 PM。
             * @example `Mar 17, 2021 4:09:32 PM`
             */
            GmtModified: string;
            /**
             * 数据源所属的环境。取值如下：
             * - 0：开发环境。
             * - 1：生产环境。
             * @example `1`
             */
            EnvType: number;
            /**
             * 数据源与任意独享资源组的连通性状态。取值如下：
             * - 1：表示数据源至少与一个独享资源组连通。
             * - 0：表示数据源与所有独享资源组均未连通。
             * @example `1`
             */
            ConnectStatus: number;
            /**
             * 数据源的序列。
             * @example `300`
             */
            Sequence: number;
            /**
             * 数据源的描述信息。
             * @example `a connection`
             */
            Description: string;
            /**
             * 数据源的类型。常用的类型如下：
             * - odps
             * - mysql
             * - rds
             * - oss
             * - sqlserver
             * - polardb
             * - oracle
             * - mongodb
             * - emr
             * - postgresql
             * - analyticdb_for_mysql
             * - hybriddb_for_postgresql
             * - holo
             * @example `rds`
             */
            DataSourceType: string;
            /**
             * 数据源的创建时间。格式示例为：Mar 17, 2021 4:09:32 PM。
             * @example `Mar 17, 2021 4:09:32 PM`
             */
            GmtCreate: string;
            /**
             * 数据源所在的引擎是否为默认引擎。取值如下：
             * - true：是默认引擎。
             * - false：不是默认引擎。
             * @example `false`
             */
            DefaultEngine: boolean;
            /**
             * 数据源是否可以分享。取值如下：
             * - true：数据源可以分享。
             * - false：数据源不可以分享。
             * @example `false`
             */
            Shared: boolean;
            /**
             * 操作数据源的用户ID。
             * @example `193543050****`
             */
            Operator: string;
            /**
             * 数据源的名称。
             * @example `abc`
             */
            Name: string;
            /**
             * 数据源的详细配置。
             * @example `{"pubEndpoint":"http://service.cn.maxcompute.aliyun.com/api","accessId":"TMP.3KecGjvzy3i8MYfn2BGHgF7EHGyBFZcHm7GgngrABVRyvvKQrfF5kskR36xP361C3dqwbGo7SGYptAeGyiTwHXqLaBUvYC","securityToken":null,"endpoint":"http://service.cn.maxcompute.aliyun-inc.com/api","accessKey":"***","name":"PRE_PROJECT_A_engine","project":"PRE_PROJECT_A","vpcEndpoint":"http://service.cn.maxcompute.aliyun-inc.com/api","region":"cn-shanghai","authType":"2"}`
             */
            Content: string;
            /**
             * 数据源的ID。
             * @example `1`
             */
            Id: number;
            /**
             * 数据源所绑定的引擎ID。
             * @example `123`
             */
            BindingCalcEngineId: number;
            /**
             * 数据源所属租户的租户ID。
             * @example `1234567`
             */
            TenantId: number;
        }[];
    };
}
