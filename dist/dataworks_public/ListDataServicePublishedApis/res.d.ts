export interface ListDataServicePublishedApisResponse {
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
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * API发布态信息返回。
     */
    Data: {
        /**
         * 页码，和请求中的PageNumber一致。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * API发布态信息列表。
         */
        Apis: {
            /**
             * 超时时间，单位毫秒ms
             * @example `10000`
             */
            Timeout: number;
            /**
             * API的状态，可选枚举值包括0（未发布）和1（已发布）。
             * @example `1`
             */
            Status: number;
            /**
             * API的ID。
             * @example `10002`
             */
            ApiId: number;
            /**
             * API的类型，可选枚举值包括0（向导API）、1（脚本API）和2（注册API）。
             * @example `0`
             */
            ApiMode: number;
            /**
             * 工作空间的ID。
             * @example `10000`
             */
            ProjectId: number;
            /**
             *
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
             * 最新编辑人阿里云ID
             * @example `2345678`
             */
            OperatorId: string;
            /**
             * 分组ID。
             * @example `ab123`
             */
            GroupId: string;
            /**
             * 描述信息。
             * @example `测试API描述`
             */
            Description: string;
            /**
             * API的请求方式，可选枚举值包括0（GET）、1（POST）、2（PUT）和3（DELTE）。向导和脚本API支持GET和POST。注册API支持GET、POST、PUT和DELETE。
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
             * @example `我的API名称`
             */
            ApiName: string;
            /**
             * 租户ID。
             * @example `10001`
             */
            TenantId: number;
            /**
             * API的路径。
             * @example `/test/1`
             */
            ApiPath: string;
            /**
             * API协议，可选枚举值包括0（HTTP）和1（HTTPS）。
             */
            Protocols: number[];
            /**
             * 注册API详情，只有注册API返回。
             */
            RegistrationDetails: {
                /**
                 * 后端服务地址。
                 * @example `http://www.abc.com`
                 */
                ServiceHost: string;
                /**
                 * API的返回数据类型，可选枚举值包括0（JSON）和1（XML）。向导和脚本API支持JSON，注册API支持JSON和XML。
                 * @example `0`
                 */
                ServiceContentType: number;
                /**
                 * 后端服务路径。
                 * @example `/index`
                 */
                ServicePath: string;
                /**
                 * 正常返回示例。
                 * @example `{"success": true}`
                 */
                SuccessfulResultSample: string;
                /**
                 * 错误返回示例。
                 * @example `{"success": false}`
                 */
                FailedResultSample: string;
                /**
                 * 后端请求body内容的描述。
                 * @example `{"abc":1}`
                 */
                ServiceRequestBodyDescription: string;
                /**
                 * 注册API的错误码列表。
                 */
                RegistrationErrorCodes: {
                    /**
                     * 错误信息
                     * @example `fail to call`
                     */
                    ErrorMessage: string;
                    /**
                     * 错误码
                     * @example `1001`
                     */
                    ErrorCode: string;
                    /**
                     * 错误解决方案
                     * @example `retry`
                     */
                    ErrorSolution: string;
                }[];
                /**
                 * 注册API的请求参数列表。
                 */
                RegistrationRequestParameters: {
                    /**
                     * 参数名称
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
                     * 描述
                     * @example `description1`
                     */
                    ParameterDescription: string;
                    /**
                     * 默认值
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
                     * 示例值
                     * @example `example1`
                     */
                    ExampleValue: string;
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
                     * 是否必填
                     * @example `true`
                     */
                    IsRequiredParameter: boolean;
                }[];
            };
            /**
             * 脚本API详情，只有脚本API返回。
             */
            ScriptDetails: {
                /**
                 * 返回是否分页
                 * @example `true`
                 */
                IsPagedResponse: boolean;
                /**
                 * 正常返回示例
                 * @example `{"success": true}`
                 */
                SuccessfulResultSample: string;
                /**
                 * 错误返回示例
                 * @example `{"success": false}`
                 */
                FailedResultSample: string;
                /**
                 * SQL脚本
                 * @example `select a from t`
                 */
                Script: string;
                /**
                 * 脚本API错误码列表
                 */
                ScriptErrorCodes: {
                    /**
                     * 错误信息
                     * @example `fail to call`
                     */
                    ErrorMessage: string;
                    /**
                     * 错误码
                     * @example `1001`
                     */
                    ErrorCode: string;
                    /**
                     * 错误解决方案
                     * @example `retry`
                     */
                    ErrorSolution: string;
                }[];
                /**
                 * 脚本API请求参数列表
                 */
                ScriptRequestParameters: {
                    /**
                     * 参数名称
                     * @example `param1`
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
                     * 描述
                     * @example `description1`
                     */
                    ParameterDescription: string;
                    /**
                     * 默认值
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
                     * 示例值
                     * @example `example1`
                     */
                    ExampleValue: string;
                    /**
                     * 数据类型，可选枚举值：
                     * - 0：String
                     * - 1：Int
                     * - 2：Long
                     * - 3：Float
                     * - 4：Double
                     * - 5：Boolean
                     * 高级脚本还有以下数据类型：
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
                     * 是否必填
                     * @example `true`
                     */
                    IsRequiredParameter: boolean;
                }[];
                /**
                 * 脚本API返回参数列表
                 */
                ScriptResponseParameters: {
                    /**
                     * 描述
                     * @example `description2`
                     */
                    ParameterDescription: string;
                    /**
                     * 参数名称
                     * @example `param2`
                     */
                    ParameterName: string;
                    /**
                     * 示例值
                     * @example `example2`
                     */
                    ExampleValue: string;
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
                }[];
                /**
                 * 脚本API数据源信息
                 */
                ScriptConnection: {
                    /**
                     * 数据源表名
                     * @example `t`
                     */
                    TableName: string;
                    /**
                     * 数据源ID
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
                 * 正常返回示例。
                 * @example `{"success": true}`
                 */
                SuccessfulResultSample: string;
                /**
                 * 错误返回示例。
                 * @example `{"success": false}`
                 */
                FailedResultSample: string;
                /**
                 * 向导API的错误码列表。
                 */
                WizardErrorCodes: {
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
                 * 向导API的请求参数列表。
                 */
                WizardRequestParameters: {
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
                     * 示例值。
                     * @example `example1`
                     */
                    ExampleValue: string;
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
                     * 是否必填。
                     * @example `true`
                     */
                    IsRequiredParameter: boolean;
                }[];
                /**
                 * 向导API的返回参数列表。
                 */
                WizardResponseParameters: {
                    /**
                     * 描述信息。
                     * @example `description2`
                     */
                    ParameterDescription: string;
                    /**
                     * 参数的名称。
                     * @example `param2`
                     */
                    ParameterName: string;
                    /**
                     * 示例值。
                     * @example `example2`
                     */
                    ExampleValue: string;
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
        }[];
    };
}
