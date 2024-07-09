export interface DescribeApiDocResponse {
    /**
     * API编号
     * @example `b24be7e59a104e52bffbf432cc9272af`
     */
    ApiId: string;
    /**
     * 返回类型
     * @example `JSON`
     */
    ResultType: string;
    /**
     * - 设置**DisableInternet**为**true**, 仅支持内网调用API。
     * - 设置**DisableInternet**为**false**, 则不限制调用。创建API时默认为false。
     * @example `true`
     */
    DisableInternet: boolean;
    /**
     * 返回示例
     * @example `{\n  \"status\": 0,\n  \"data\": {\n    \"count\": 1,\n    \"list\": [\n      \"352\"\n    ]\n  },\n  \"message\": \"success\"\n}`
     */
    ResultSample: string;
    /**
     * API分组所在的地域ID
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * - 设置**ForceNonceCheck**为**true**, 请求时强制检查X-Ca-Nonce，这个是请求的唯一标识，一般使用UUID来标识。API网关收到这个参数后会校验这个参数的有效性，同样的值，15分内只能被使用一次。可以有效防止API的重放攻击。
     * - 设置**ForceNonceCheck**为**false**，则不检查。创建API时默认为false。
     * @example `true`
     */
    ForceNonceCheck: boolean;
    /**
     * 可见性，取值为：**PUBLIC**、**PRIVATE**，分别表示公开、私有
     * @example `PUBLIC`
     */
    Visibility: string;
    /**
     * 后端服务失败返回应答的示例
     * @example `{"errorCode":"fail","errorMessage":"param invalid"}`
     */
    FailResultSample: string;
    /**
     * 安全认证方式，取值为：APP、ANONYMOUS，分别表示阿里云APP、匿名
     * @example `APP`
     */
    AuthType: string;
    /**
     * 请求ID
     * @example `F253FB5F-9AE1-5DDA-99B5-46BE00A3719E`
     */
    RequestId: string;
    /**
     * API分组编号
     * @example `f51d08c5b7c84342905544ebaec26d35`
     */
    GroupId: string;
    /**
     * API分组名称
     * @example `会员时代交易服务`
     */
    GroupName: string;
    /**
     * API描述
     * @example `领克数字商城OMS-UAT`
     */
    Description: string;
    /**
     * 发布时间
     * @example `2022-07-13T16:00:33Z`
     */
    DeployedTime: string;
    /**
     * 环境名称，可选值：
     * - **RELEASE**: 线上
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    StageName: string;
    /**
     * API名称
     * @example `获取关键词二维码地址`
     */
    ApiName: string;
    /**
     * 由 RequestConfig 组成的格式，返回API前端定义信息
     */
    RequestConfig: {
        /**
         * API path，比如API的完全地址为`http://api.a.com：8080/object/add?key1=value1&key2=value2`，path是指`/object/add`这一部分。
         * @example `/api/billing/test/[type]`
         */
        RequestPath: string;
        /**
         * HTTP Method，取值为：GET、POST、DELETE、PUT、HEADER、TRACE、PATCH、CONNECT、OPTIONS。
         * @example `POST`
         */
        RequestHttpMethod: string;
        /**
         * 当**RequestMode**值为**MAPPING**时有效。
         * POST/PUT请求时，表示数据以何种方式传递给服务器，取值为：**FORM**、**STREAM**，分别表示表单形式(k-v对应)、字节流形式。
         * @example `STREAM`
         */
        BodyFormat: string;
        /**
         * 入参请求的模式，取值为：
         * - MAPPING：入参映射（过滤未知参数）
         * - PASSTHROUGH：入参透传
         * - MAPPING_PASSTHROUGH：入参映射（透传未知参数）
         * @example `MAPPING`
         */
        RequestMode: string;
        /**
         * Body描述
         * @example `fwefwef`
         */
        PostBodyDescription: string;
        /**
         * API 支持的协议类型，可以多选，多选情况下以英文逗号隔开，如：”HTTP,HTTPS”，取值为：HTTP、HTTPS。
         * @example `HTTP`
         */
        RequestProtocol: string;
        EscapePathParam: boolean;
    };
    ErrorCodeSamples: {
        /**
         * 后端服务返回的错误码示例
         */
        ErrorCodeSample: {
            /**
             * 错误码
             * @example `Error`
             */
            Code: string;
            /**
             * 错误消息
             * @example `error message`
             */
            Message: string;
            /**
             * 错误码描述
             * @example `未授权`
             */
            Description: string;
        }[];
    };
    RequestParameters: {
        /**
         * 由 RequestParameter 组成的数组格式，返回API中前端入参信息项
         */
        RequestParameter: {
            /**
             * JSON scheme
             * @example `{}`
             */
            JsonScheme: string;
            /**
             * 最大值
             * @example `200`
             */
            MaxValue: number;
            /**
             * 数组元素的类型
             * @example `String`
             */
            ArrayItemsType: string;
            /**
             * 最小值
             * @example `123456`
             */
            MinValue: number;
            /**
             * 文档可见，取值为：**PUBLIC**、**PRIVATE**
             * @example `PUBLIC`
             */
            DocShow: string;
            /**
             * 最大长度
             * @example `123456`
             */
            MaxLength: number;
            /**
             * 默认值
             * @example `20`
             */
            DefaultValue: string;
            /**
             * API 参数名称
             * @example `Length`
             */
            ApiParameterName: string;
            /**
             * 当**ParameterType**=Int、Long、Float、Double或String，允许输入的散列值，不同的值用英文的逗号分隔，形如：1,2,3,4,9或A,B,C,E,F。
             * @example `boy,girl`
             */
            EnumValue: string;
            /**
             * 示例值
             * @example `20`
             */
            DemoValue: string;
            /**
             * 是否必填
             * @example `OPTIONAL`
             */
            Required: string;
            /**
             * 描述信息
             * @example `参数说明`
             */
            Description: string;
            /**
             * 参数类型
             * @example `String`
             */
            ParameterType: string;
            /**
             * 当**ParameterType**=String，参数验证（正则表达式）
             * @example `xxx`
             */
            RegularExpression: string;
            /**
             * 最小长度
             * @example `2`
             */
            MinLength: number;
            /**
             * 文档中顺序
             * @example `0`
             */
            DocOrder: number;
            /**
             * 参数位置，取值为：BODY、HEAD、QUERY、PATH
             * @example `HEAD`
             */
            Location: string;
        }[];
    };
}
