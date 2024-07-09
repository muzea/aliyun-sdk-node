export interface GetDataServiceApiResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID，一次请求的唯一标识。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 超时时间，单位为毫秒（ms）。
         * @example `10000`
         */
        Timeout: number;
        /**
         * API的状态，可选枚举值包括0（未发布）和1（已发布）。
         * @example `0`
         */
        Status: number;
        /**
         * 数据服务API的ID。
         * @example `10000`
         */
        ApiId: number;
        /**
         * API的类型，可选枚举值包括0（向导API）、1（脚本API）和2（注册API）。
         * @example `0`
         */
        ApiMode: number;
        /**
         * 工作空间的ID。
         * @example `10001`
         */
        ProjectId: number;
        /**
         * API的返回数据类型，可选枚举值包括0（JSON）和1（XML）。向导和脚本API支持JSON，注册API支持JSON和XML。
         * @example `0`
         */
        ResponseContentType: number;
        /**
         * 创建人的阿里云ID。
         * @example `1234567`
         */
        CreatorId: string;
        /**
         * 可见范围，可选枚举值包括0（工作空间）和1（私有）。
         * @example `0`
         */
        VisibleRange: number;
        /**
         * 最新修改时间。
         * @example `2020-06-23T00:21:01+0800`
         */
        ModifiedTime: string;
        /**
         * 最新编辑人的阿里云ID。
         * @example `2345678`
         */
        OperatorId: string;
        /**
         * 分组ID。
         * @example `ab123****`
         */
        GroupId: string;
        /**
         * 描述信息。
         * @example `测试API描述`
         */
        Description: string;
        /**
         * 文件夹ID
         * @example `0`
         */
        FolderId: number;
        /**
         * API的请求方式，可选枚举值包括0（GET）、1（POST）、2（PUT）和3（DELETE）。向导和脚本API支持GET和POST。注册API支持GET、POST、PUT和DELETE。
         * @example `0`
         */
        RequestMethod: number;
        /**
         * 创建时间。
         * @example `2020-06-23T00:21:01+0800`
         */
        CreatedTime: string;
        /**
         * API的名称。
         * @example `测试API名称`
         */
        ApiName: string;
        /**
         * 租户ID。
         * @example `10002`
         */
        TenantId: number;
        /**
         * API的路径。
         * @example `/test/1`
         */
        ApiPath: string;
        /**
         * 字段列表
         */
        Protocols: number[];
        /**
         * 注册API的详情，只有注册API返回。
         */
        RegistrationDetails: {
            /**
             * 后端服务地址
             * @example `http://example.aliyundoc.com`
             */
            ServiceHost: string;
            /**
             * API返回数据类型，可选枚举值：
             * - 0：JSON
             * - 1：XML
             * 向导和脚本API只支持JSON；注册API支持JSON和XML。
             * @example `0`
             */
            ServiceContentType: number;
            /**
             * 后端服务路径
             * @example `/index`
             */
            ServicePath: string;
            /**
             * 正常返回示例
             * @example `{"success": true}`
             */
            SuccessfulResultSample: string;
            /**
             * 错误返回示例。
             * @example `{"success": false}`
             */
            FailedResultSample: string;
            /**
             * 后端请求body内容描述
             * @example `{"abc":1}`
             */
            ServiceRequestBodyDescription: string;
            /**
             * 注册API的错误码列表。
             */
            RegistrationErrorCodes: {
                /**
                 * 错误信息。
                 * @example `fail to call`
                 */
                ErrorMessage: string;
                /**
                 * 错误码。
                 * @example `1001`
                 */
                ErrorCode: string;
                /**
                 * 错误解决方案。
                 * @example `retry`
                 */
                ErrorSolution: string;
            }[];
            /**
             * 注册API的请求参数列表。
             */
            RegistrationRequestParameters: {
                /**
                 * 绑定的表字段名称，仅向导模式支持。
                 * @example `column1`
                 */
                ColumnName: string;
                /**
                 * 参数的名称。
                 * @example `name1`
                 */
                ParameterName: string;
                /**
                 * 参数位置，可选枚举值有：
                 * - 0：Path
                 * - 1：Query
                 * - 2：Head
                 * - 3：Body
                 * 向导和脚本API，只支持Query；注册API，GET、DELETE方法支持Query、Head，PUT、POST方法支持Query、Head、Body。
                 * @example `0`
                 */
                ParameterPosition: number;
                /**
                 * 描述信息。
                 * @example `description1`
                 */
                ParameterDescription: string;
                /**
                 * 默认值。
                 * @example `default1`
                 */
                DefaultValue: string;
                /**
                 * 运算符，可选枚举值有：
                 * - 0：Equal
                 * - 1：Like
                 * - 2：Const
                 * - 3：In
                 * 向导API支持Equal、Like、In；脚本API支持Equal；注册API支持Equal、Const。
                 * @example `0`
                 */
                ParameterOperator: number;
                /**
                 * 数据类型，可选枚举值：
                 * - 0：String
                 * - 1：Int
                 * - 2：Long
                 * - 3：Float
                 * - 4：Double
                 * - 5：Boolean
                 * - 6：StringList
                 * - 7：IntList
                 * - 8：LongList
                 * - 9：FloatList
                 * - 10：DoubleList
                 * - 11：BooleanList
                 * @example `0`
                 */
                ParameterDataType: number;
                /**
                 * 示例值。
                 * @example `example1`
                 */
                ExampleValue: string;
                /**
                 * 是否必填。
                 * @example `true`
                 */
                IsRequiredParameter: boolean;
            }[];
        };
        /**
         * 脚本API的详情，只有脚本API返回。
         */
        ScriptDetails: {
            /**
             * SQL脚本。
             * @example `select a from t`
             */
            Script: string;
            /**
             * 返回是否分页。
             * @example `true`
             */
            IsPagedResponse: boolean;
            /**
             * 脚本API的请求参数列表。
             */
            ScriptRequestParameters: {
                /**
                 * 绑定的表字段名称，仅向导模式支持。
                 * @example `column1`
                 */
                ColumnName: string;
                /**
                 * 参数的名称。
                 * @example `param1`
                 */
                ParameterName: string;
                /**
                 * 参数的位置，可选枚举值包括0（Path）、1（Query）、2（Head）和3（Body）。向导和脚本API仅支持Query。注册API中的GET、DELETE方法支持Query、Head，PUT、POST方法支持Query、Head和Body。
                 * @example `0`
                 */
                ParameterPosition: number;
                /**
                 * 描述信息。
                 * @example `description1`
                 */
                ParameterDescription: string;
                /**
                 * 默认值。
                 * @example `default1`
                 */
                DefaultValue: string;
                /**
                 * 运算符，可选枚举值包括0（Equal）、1（Like）、2（Const）和3（In）。向导模式API支持Equal、Like和In，脚本模式API支持Equal，注册API支持Equal和Const。
                 * @example `0`
                 */
                ParameterOperator: number;
                /**
                 * 数据类型，可选枚举值：
                 * - 0：String
                 * - 1：Int
                 * - 2：Long
                 * - 3：Float
                 * - 4：Double
                 * - 5：Boolean
                 * - 6：StringList
                 * - 7：IntList
                 * - 8：LongList
                 * - 9：FloatList
                 * - 10：DoubleList
                 * - 11：BooleanList
                 * @example `0`
                 */
                ParameterDataType: number;
                /**
                 * 示例值。
                 * @example `example1`
                 */
                ExampleValue: string;
                /**
                 * 是否必填。
                 * @example `true`
                 */
                IsRequiredParameter: boolean;
            }[];
            /**
             * 脚本API的返回参数列表。
             */
            ScriptResponseParameters: {
                /**
                 * 描述信息。
                 * @example `description2`
                 */
                ParameterDescription: string;
                /**
                 * 绑定的表字段名称，仅向导模式支持。
                 * @example `column2`
                 */
                ColumnName: string;
                /**
                 * 参数的名称。
                 * @example `param2`
                 */
                ParameterName: string;
                /**
                 * 数据类型，可选枚举值：
                 * - 0：String
                 * - 1：Int
                 * - 2：Long
                 * - 3：Float
                 * - 4：Double
                 * - 5：Boolean
                 * - 6：StringList
                 * - 7：IntList
                 * - 8：LongList
                 * - 9：FloatList
                 * - 10：DoubleList
                 * - 11：BooleanList
                 * @example `0`
                 */
                ParameterDataType: number;
                /**
                 * 示例值。
                 * @example `example2`
                 */
                ExampleValue: string;
            }[];
            /**
             * 脚本API的数据源信息。
             */
            ScriptConnection: {
                /**
                 * 数据源表的名称。
                 * @example `t`
                 */
                TableName: string;
                /**
                 * 数据源ID。
                 * @example `123`
                 */
                ConnectionId: number;
            };
        };
        /**
         * 向导API详情，只有向导API返回。
         */
        WizardDetails: {
            /**
             * 返回是否分页。
             * @example `true`
             */
            IsPagedResponse: boolean;
            /**
             * 向导API的请求参数列表。
             */
            WizardRequestParameters: {
                /**
                 * 绑定的表字段名称，仅向导模式支持。
                 * @example `column1`
                 */
                ColumnName: string;
                /**
                 * 参数的名称。
                 * @example `param1`
                 */
                ParameterName: string;
                /**
                 * 参数的位置，可选枚举值包括0（Path）、1（Query）、2（Head）和3（Body）。向导和脚本API仅支持Query。注册API中的GET、DELETE方法支持Query、Head，PUT、POST方法支持Query、Head和Body。
                 * @example `0`
                 */
                ParameterPosition: number;
                /**
                 * 描述信息。
                 * @example `description1`
                 */
                ParameterDescription: string;
                /**
                 * 默认值。
                 * @example `default1`
                 */
                DefaultValue: string;
                /**
                 * 运算符，可选枚举值包括0（Equal）、1（Like）、2（Const）和3（In）。向导模式API支持Equal、Like和In，脚本模式API支持Equal，注册API支持Equal和Const。
                 * @example `0`
                 */
                ParameterOperator: number;
                /**
                 * 数据类型，可选枚举值：
                 * - 0：String
                 * - 1：Int
                 * - 2：Long
                 * - 3：Float
                 * - 4：Double
                 * - 5：Boolean
                 * - 6：StringList
                 * - 7：IntList
                 * - 8：LongList
                 * - 9：FloatList
                 * - 10：DoubleList
                 * - 11：BooleanList
                 * @example `0`
                 */
                ParameterDataType: number;
                /**
                 * 示例值。
                 * @example `example1`
                 */
                ExampleValue: string;
                /**
                 * 是否必填。
                 * @example `true`
                 */
                IsRequiredParameter: boolean;
            }[];
            /**
             * 向导模式的返回参数列表。
             */
            WizardResponseParameters: {
                /**
                 * 描述信息。
                 * @example `description2`
                 */
                ParameterDescription: string;
                /**
                 * 绑定的表字段名称，仅向导模式支持。
                 * @example `column2`
                 */
                ColumnName: string;
                /**
                 * 参数的名称。
                 * @example `param2`
                 */
                ParameterName: string;
                /**
                 * 数据类型，可选枚举值：
                 * - 0：String
                 * - 1：Int
                 * - 2：Long
                 * - 3：Float
                 * - 4：Double
                 * - 5：Boolean
                 * - 6：StringList
                 * - 7：IntList
                 * - 8：LongList
                 * - 9：FloatList
                 * - 10：DoubleList
                 * - 11：BooleanList
                 * @example `0`
                 */
                ParameterDataType: number;
                /**
                 * 示例值。
                 * @example `example2`
                 */
                ExampleValue: string;
            }[];
            /**
             * 向导API的数据源信息。
             */
            WizardConnection: {
                /**
                 * 数据源的表名称。
                 * @example `t`
                 */
                TableName: string;
                /**
                 * 数据源ID。
                 * @example `123`
                 */
                ConnectionId: number;
            };
        };
    };
}
