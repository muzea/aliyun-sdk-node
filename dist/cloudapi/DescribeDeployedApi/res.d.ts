export interface DescribeDeployedApiResponse {
    /**
     * API编号
     * @example `4eed13a57d4e42fbb51316be8a5329ff`
     */
    ApiId: string;
    /**
     * 后端服务返回应答的格式，目前可以设置为：JSON、TEXT、BINARY、XML、HTML。默认为JSON。
     * @example `HTML`
     */
    ResultType: string;
    /**
     * - 设置DisableInternet为**true**, 仅支持内网调用API。
     * - 设置DisableInternet为**false**, 则不限制调用。
     * > 修改API时，不设置则不修改原来的取值。
     * @example `true`
     */
    DisableInternet: boolean;
    /**
     * api的返回结果
     */
    ResultBodyModel: string;
    /**
     * 后端服务返回应答的示例
     * @example `{code: 200, message:'success', data: ''}`
     */
    ResultSample: string;
    /**
     * API的客户端请求签名方法，可选值：
     * - HmacSHA256
     * - HmacSHA1,HmacSHA256
     * @example `HmacSHA256`
     */
    AllowSignatureMethod: string;
    /**
     * 分组所在区域
     * @example `cn-beijing`
     */
    RegionId: string;
    /**
     * - 设置**ForceNonceCheck**为**true**, 请求时强制检查X-Ca-Nonce，这个是请求的唯一标识，一般使用UUID来标识。API网关收到这个参数后会校验这个参数的有效性，同样的值，15分内只能被使用一次。可以有效防止API的重放攻击。
     * - 设置**ForceNonceCheck**为**false**，则不检查。创建API时默认为false。
     * @example `true`
     */
    ForceNonceCheck: boolean;
    /**
     * API是否公开，可以取值：
     * - **PUBLIC**：公开，如选择此类型，该API的线上环境定义，会在所有用户的控制台“发现API”页面可见。
     * - **PRIVATE**：不公开，如选择此类型，当该组API在云市场上架时，私有类型的API不会上架。
     * @example `PUBLIC`
     */
    Visibility: string;
    /**
     * 后端服务失败返回应答的示例
     * @example `{"errorCode":"fail","errorMessage":"param invalid"}`
     */
    FailResultSample: string;
    /**
     * API安全认证类型，目前可以取值：
     * - **APP**：只允许已授权的APP调用
     * - **ANONYMOUS**：允许匿名调用，设置为允许匿名调用需要注意：
     *      - 任何能够获取该API服务信息的人，都将能够调用该API。网关不会对调用者做身份认证，也无法设置按用户的流量控制，若开放该API请设置好按API的流量控制。
     * @example `APP`
     */
    AuthType: string;
    /**
     * 本次请求的ID。
     * @example `EF924FE4-2EDD-4CD3-89EC-34E4708574E7`
     */
    RequestId: string;
    /**
     * 描述信息
     * @example `Api description`
     */
    Description: string;
    /**
     * API分组名称
     * @example `Weather`
     */
    GroupName: string;
    /**
     * 分组编号
     * @example `bc77f5b49c974437a9912ea3755cd834`
     */
    GroupId: string;
    /**
     * 部署时间，格式为yyyy-mm-ddhh:mm:ss
     * @example `2022-07-25T17:47:51Z`
     */
    DeployedTime: string;
    /**
     * 指定要操作API的环境。
     * - **RELEASE**: 线上
     * - **PRE**: 预发
     * - **TEST**: 测试
     * @example `RELEASE`
     */
    StageName: string;
    /**
     * API名称
     * @example `weather`
     */
    ApiName: string;
    /**
     * Consumer向网关发送API请求的相关配置项。
     * 更多信息，请参见[RequestConfig](~~43985~~)。
     */
    RequestConfig: {
        /**
         * body模型
         */
        BodyModel: string;
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
         * 请求body描述
         * @example `fwefwef`
         */
        PostBodyDescription: string;
        /**
         * API 支持的协议类型，可以多选，多选情况下以英文逗号隔开，如："HTTP,HTTPS"，取值为：HTTP、HTTPS、WebSocket
         * @example `HTTP`
         */
        RequestProtocol: string;
    };
    /**
     * 网关向后端服务发送API请求的相关配置项。
     * 更多信息，请参见[ServiceConfig](~~43987~~)。
     */
    ServiceConfig: {
        /**
         * 专有网络ID。
         * @example `vpc-uf6kg9x8sx2tbxxxx`
         */
        VpcId: string;
        /**
         * Mock返回状态码
         * @example `200`
         */
        MockStatusCode: number;
        /**
         * 调用后端服务path，比如后端服务完全地址为`http://api.a.com:8080/object/add?key1=value1&key2=value2`，**ServicePath**是指`/object/add`这一部分。
         * @example `/object/add`
         */
        ServicePath: string;
        /**
         * 是否采取Mock模式，目前可以取值：
         * - **TRUE**：启用Mock模式
         * - **FALSE**：不启用Mock模式
         * @example `TRUE`
         */
        Mock: string;
        /**
         * 调用后端服务地址，比如后端服务完全地址为`http://api.a.com:8080/object/add?key1=value1&key2=value2`，**ServiceAddress**是指`http://api.a.com:8080`这一部分。
         * @example `http://api.a.com:8080`
         */
        ServiceAddress: string;
        /**
         * 是否启用VPC通道，目前可以取值：
         * - **TRUE**：启用VPC通道，必须先添加VPC授权成功后才能启用
         * - **FALSE**：不启用VPC通
         * @example `TRUE`
         */
        ServiceVpcEnable: string;
        /**
         * 如果启用Mock模式，返回的结果
         * @example `test result`
         */
        MockResult: string;
        /**
         * 调用后端服务HTTP协议时的Method，取值为：GET、POST、DELETE、PUT、HEADER、TRACE、PATCH、CONNECT、OPTIONS。
         * @example `POST`
         */
        ServiceHttpMethod: string;
        /**
         * 后端服务协议类型，目前只支持HTTP/HTTPS/FunctionCompute
         * @example `HTTP`
         */
        ServiceProtocol: string;
        /**
         * 后端服务超时时间，单位：毫秒
         * @example `1000`
         */
        ServiceTimeout: number;
        MockHeaders: {
            /**
             * 模拟 Headers
             */
            MockHeader: {
                /**
                 * HTTP头参数值
                 * @example `86400`
                 */
                HeaderValue: string;
                /**
                 * HTTP头参数名
                 * @example `Content-Type`
                 */
                HeaderName: string;
            }[];
        };
        /**
         * VPC通道相关配置项
         */
        VpcConfig: {
            /**
             * 专用网络ID
             * @example `vpc-2zeafsc3fygk1***`
             */
            VpcId: string;
            /**
             * 专用网络中的实例ID（Ecs/负载均衡）
             * @example `i-bp1h497hkijewv2***`
             */
            InstanceId: string;
            /**
             * 实例对应的端口号
             * @example `8080`
             */
            Port: number;
            /**
             * VPC授权名称
             * @example `glmall-app-test`
             */
            Name: string;
        };
        /**
         * 后端为函数计算时的后端配置项
         */
        FunctionComputeConfig: {
            /**
             * 函数计算服务类型
             * @example `HttpTrigger`
             */
            FcType: string;
            /**
             * Ram授权给API网关访问函数计算的arn
             * @example `acs:ram::111***:role/aliyunserviceroleforsas`
             */
            RoleArn: string;
            /**
             * 请求方法
             * @example `GET`
             */
            Method: string;
            /**
             * 函数计算服务根路径
             * @example `https://122xxxxxxx.fc.aliyun.com/2016xxxx/proxy/testSxxx.xxx/testHttp/`
             */
            FcBaseUrl: string;
            /**
             * 调用后端服务HTTP服务，ContentTypeCatagory的值为DEFAULT或者CUSTOM时，ContentType头的取值。
             * @example `application/x-www-form-urlencoded; charset=UTF-8
            `
             */
            ContentTypeValue: string;
            /**
             * 所在的region
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 后端只接收业务path
             * @example `false`
             */
            OnlyBusinessPath: boolean;
            /**
             * 函数计算定义的FunctionName
             * @example `domain_business_control`
             */
            FunctionName: string;
            /**
             * 调用后端服务HTTP服务时，ContentType头的取值策略：
             * - **DEFAULT**：使用API网关默认的值
             * - **CUSTOM**：自定义
             * - **CLIENT**：使用客户端上行的ContentType的头
             * @example `DEFAULT`
             */
            ContentTypeCatagory: string;
            /**
             * API请求路径
             * @example `/api/offline/cacheData`
             */
            Path: string;
            /**
             * 函数计算定义的ServiceName
             * @example `fcservicename`
             */
            ServiceName: string;
            /**
             * 函数别名
             * @example `2`
             */
            Qualifier: string;
        };
    };
    /**
     * 第三方账号认证OpenID Connect相关配置项
     */
    OpenIdConnectConfig: {
        /**
         * OpenID Connect模式，目前可以取值：
         * - **IDTOKEN**：获取授权API，颁发Token，当设置此项时，参数PublicKeyId和PublicKey为必传。
         * - **BUSINESS**：业务API，Token验证，当设置此项时，参数IdTokenParamName为必传。
         * @example `IDTOKEN`
         */
        OpenIdApiType: string;
        /**
         * Token对应的参数名称
         * @example `xxx`
         */
        IdTokenParamName: string;
        /**
         * 公钥ID
         * @example `88483727556929326703309904351185815489`
         */
        PublicKeyId: string;
        /**
         * api公钥
         * @example `EB1837F8693CCED0BF750B3AD48467BEB569E780A14591CF92`
         */
        PublicKey: string;
    };
    ErrorCodeSamples: {
        /**
         * 后端服务返回的错误码示例。
         * 更多信息，请参见[ErrorCodeSample](~~44392~~)。
         */
        ErrorCodeSample: {
            /**
             * 错误码
             * @example `Error`
             */
            Code: string;
            /**
             * 错误信息。
             * @example `error message`
             */
            Message: string;
            /**
             * 描述信息
             * @example `错误描述`
             */
            Description: string;
        }[];
    };
    ResultDescriptions: {
        /**
         * api的返回说明
         */
        ResultDescription: {
            Type: string;
            Key: string;
            /**
             *
             * @example `false`
             */
            HasChild: boolean;
            /**
             * 描述信息
             * @example `result description`
             */
            Description: string;
            Pid: string;
            /**
             * 是否必填。
             * @example `true`
             */
            Mandatory: boolean;
            Name: string;
            Id: string;
        }[];
    };
    SystemParameters: {
        /**
         * 系统参数列表。
         */
        SystemParameter: {
            /**
             * 示例
             * @example `192.168.1.1`
             */
            DemoValue: string;
            /**
             * 描述信息
             * @example `QueryParamDTO`
             */
            Description: string;
            /**
             * 系统参数名，取值为：CaClientIp、CaDomain、CaRequestHandleTime、CaAppId、CaRequestId、CaHttpSchema、CaProxy。
             * @example `CaClientIp`
             */
            ParameterName: string;
            /**
             * 参数位置，取值为：BODY、HEAD、QUERY、PATH
             * @example `HEAD`
             */
            Location: string;
            /**
             * 对应后端参数名称
             * @example `clientIp`
             */
            ServiceParameterName: string;
        }[];
    };
    CustomSystemParameters: {
        /**
         * 自定义系统参数列表
         */
        CustomSystemParameter: {
            /**
             * 示例值
             * @example `192.168.1.1`
             */
            DemoValue: string;
            /**
             * 描述信息
             * @example `123`
             */
            Description: string;
            /**
             * 自定义系统参数名
             * @example `appid`
             */
            ParameterName: string;
            /**
             * 参数位置，取值为：BODY、HEAD、QUERY、PATH
             * @example `HEAD`
             */
            Location: string;
            /**
             * 对应后端参数名称
             * @example `clientIp`
             */
            ServiceParameterName: string;
        }[];
    };
    ConstantParameters: {
        /**
         * 常量参数列表
         */
        ConstantParameter: {
            /**
             * 描述信息
             * @example `123`
             */
            Description: string;
            /**
             * 参数位置，取值为：BODY、HEAD、QUERY、PATH
             * @example `HEAD`
             */
            Location: string;
            /**
             * 后端参数名称
             * @example `constance`
             */
            ServiceParameterName: string;
            /**
             * 常量值
             * @example `constance`
             */
            ConstantValue: string;
        }[];
    };
    RequestParameters: {
        /**
         * Consumer向网关发送API请求的参数描述。
         * 更多信息，请参见[RequestParameter](~~43986~~)。
         */
        RequestParameter: {
            /**
             * JSON scheme
             * @example `{}`
             */
            JsonScheme: string;
            /**
             * 当**ParameterType**=Int、Long、Float、Double，参数的最大值限定
             * @example `123456`
             */
            MaxValue: number;
            /**
             * 数组元素的类型
             * @example `String`
             */
            ArrayItemsType: string;
            /**
             * 当**ParameterType**=Int、Long、Float、Double，参数的最小值限定
             * @example `123456`
             */
            MinValue: number;
            /**
             * 文档可见，取值为：**PUBLIC**、**PRIVATE**
             * @example `PUBLIC`
             */
            DocShow: string;
            /**
             * 当**ParameterType**=String，参数的最大长度限定
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
             * @example `age`
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
             * 是否必填，取值为：**REQUIRED**、**OPTIONAL**，分别表示必填、不必填
             * @example `OPTIONAL`
             */
            Required: string;
            /**
             * 参数描述
             * @example `parameter description`
             */
            Description: string;
            /**
             * 参数类型，取值为：String、Int、Long、Float、Double、Boolean，分别表示字符、整型、长整型、单精度浮点型、双精度浮点型、布尔。
             * @example `String`
             */
            ParameterType: string;
            /**
             * 当**ParameterType**=String，参数验证（正则表达式）
             * @example `xxx`
             */
            RegularExpression: string;
            /**
             * 当**ParameterType**=String，参数的最小长度限定
             * @example `123456`
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
    ServiceParameters: {
        /**
         * 网关向后端服务发送API请求的参数描述。
         * 更多信息，请参见[ServiceParameter](~~43988~~)。
         */
        ServiceParameter: {
            /**
             * 参数位置，取值为：BODY、HEAD、QUERY、PATH
             * @example `HEAD`
             */
            Location: string;
            /**
             * 后端参数数据类型，取值为：STRING、NUMBER、BOOLEAN，分别表示字符、数值、布尔。
             * @example `String`
             */
            ParameterType: string;
            /**
             * 后端参数名称
             * @example `clientIp`
             */
            ServiceParameterName: string;
        }[];
    };
    ServiceParametersMap: {
        /**
         * Consumer向网关发送请求的参数和网关向后端服务发送的请求的参数的映射关系。
         * 更多信息，请参见[ServiceParameterMap](~~43989~~)。
         */
        ServiceParameterMap: {
            /**
             * 前端入参名称
             * @example `sex`
             */
            RequestParameterName: string;
            /**
             * 后端参数名称
             * @example `sex`
             */
            ServiceParameterName: string;
        }[];
    };
}
