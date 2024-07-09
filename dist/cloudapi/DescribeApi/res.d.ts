export interface DescribeApiResponse {
    /**
     * API的ID标识
     * @example `8afff6c8c4c6447abb035812e4d66b65`
     */
    ApiId: string;
    /**
     * 后端服务返回应答的格式，目前可以设置为：JSON、TEXT、BINARY、XML、HTML。
     * @example `JSON`
     */
    ResultType: string;
    /**
     * 双向通信API类型：
     * - **COMMON**：普通API
     * - **REGISTER**：注册API
     * - **UNREGISTER**：注销API
     * - **NOTIFY**：下行通知
     * @example `COMMON`
     */
    WebSocketApiType: string;
    /**
     * API是否仅支持内网调用, 取值：
     * - **true**：仅支持内网调用API
     * - **false**：不限制调用
     * @example `false`
     */
    DisableInternet: boolean;
    /**
     * api的返回结果
     * @example `{}`
     */
    ResultBodyModel: string;
    /**
     * 后端服务返回应答的示例
     * @example `200`
     */
    ResultSample: string;
    /**
     * 当**AuthType**为**APP**认证时，可选值如下：
     * - **DEFAULT**: 不传默认是DEFAULT(随分组设置)
     * - **DISABLE**: 不允许
     * - **HEADER**: 允许AppCode的Header认证
     * - **HEADER_QUERY**: 允许AppCode的Header及Query认证
     * @example `HEADER`
     */
    AppCodeAuthType: string;
    /**
     * 当**AuthType**为**APP**认证时，需要传该值明确签名算法。可选值如下，不传默认是HmacSHA256：
     * - HmacSHA256
     * - HmacSHA1,HmacSHA256
     * @example `HmacSHA256`
     */
    AllowSignatureMethod: string;
    /**
     * API所处的Region的ID
     * @example `cn-qingdao`
     */
    RegionId: string;
    /**
     * 调用API时是否必须携带header : X-Ca-Nonce, 这个是请求的唯一标识，一般使用UUID来标识。API网关收到这个参数后通过校验这个参数的有效性可以有效防止API的重放攻击，同样的值，15分内只能被使用一次。 取值：
     * - **true**: 请求API时强制检查这个字段，防止API的重放攻击
     * - **false**: 不检查这个字段
     * @example `true`
     */
    ForceNonceCheck: boolean;
    /**
     * API是否公开，目前可以取值：
     * - **PUBLIC**：公开，如选择此类型，该API的线上环境，会在所有用户的控制台“发现API”页面展示
     * - **PRIVATE**：不公开，如选择此类型，当该组API在云市场上架时，私有类型的API不会上架
     * @example `PUBLIC`
     */
    Visibility: string;
    /**
     * 后端服务失败返回应答的示例
     * @example `400`
     */
    FailResultSample: string;
    /**
     * API安全认证类型，目前可以取值：
     * - **APP**：只允许已授权的APP调用
     * - **ANONYMOUS**：允许匿名调用，设置为允许匿名调用需要注意：
     *     - 任何能够获取该API服务信息的人，都将能够调用该API。网关不会对调用者做身份认证，也无法设置按用户的流量控制，若开放该API请设置好按API的流量控制。
     *     - “ANONYMOUS”API不建议上架云市场，网关无法对调用者区分计量，也无法限制调用次数，若所在分组要上架云市场，建议将该API转移至其他分组，或将类型设置为“私有”，或选择“阿里云APP”认证方式。
     * - **APPOPENID**：支持第三方账号认证OpenID Connect，而且只允许已授权的APP调用；当设置此项时，参数OpenIdConnectConfig为必传。
     * @example `APP`
     */
    AuthType: string;
    /**
     * API最后一次修改的时间
     * @example `2016-07-28T13:13:12Z`
     */
    ModifiedTime: string;
    /**
     * 请求ID
     * @example `D0FF585F-7966-40CF-BC60-75DB070B23D5<`
     */
    RequestId: string;
    /**
     * API描述信息
     * @example `Api description`
     */
    Description: string;
    /**
     * API所在的分组名称
     * @example `ApiTest`
     */
    GroupName: string;
    /**
     * API所在的分组编号
     * @example `08ae4aa0f95e4321849ee57f4e0b3077`
     */
    GroupId: string;
    /**
     * 是否启用MOCK模式，目前可以取值：
     * -  OPEN：启用Mock模式
     * - CLOSED：不启用Mock模式
     * @example `CLOSED`
     */
    Mock: string;
    /**
     * Mock返回结果
     * @example `test result`
     */
    MockResult: string;
    /**
     * API创建的时间
     * @example `2016-07-28T09:50:43Z`
     */
    CreatedTime: string;
    /**
     * API的名称，组内不允许重复
     * @example `ApiName`
     */
    ApiName: string;
    /**
     * 是否启用后端服务
     * @example `true`
     */
    BackendEnable: boolean;
    /**
     * 后端配置
     */
    BackendConfig: {
        /**
         * 后端服务ID
         * @example `0038e00c3dca44fcba3a94015d8f5bbf`
         */
        BackendId: string;
        /**
         * 后端服务类型
         * @example `HTTP`
         */
        BackendType: string;
        /**
         * 后端服务名称
         * @example `testoss`
         */
        BackendName: string;
    };
    /**
     * Consumer向网关发送API请求的相关配置项
     */
    RequestConfig: {
        /**
         * body模型
         * @example `https://apigateway.aliyun.com/models/3a240a127dcc4afd9ab1bf7e947b4095/9e2df550e85b4121a79ec33e2619eaab`
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
         * 请求的模式，取值为：**MAPPING**、**PASSTHROUGH**，分别表示入参映射、入参透传
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
    /**
     * 网关向后端服务发送API请求的相关配置项
     */
    ServiceConfig: {
        /**
         * aone应用名称
         * @example `ib-blank`
         */
        AoneAppName: string;
        /**
         * Mock返回状态码
         * @example `200`
         */
        MockStatusCode: number;
        /**
         * 调用后端服务HTTP服务，ContentTypeCatagory的值为DEFAULT或者CUSTOM时，ContentType头的取值。
         * @example `application/x-www-form-urlencoded; charset=UTF-8`
         */
        ContentTypeValue: string;
        /**
         * 后端服务协议类型，目前只支持HTTP/HTTPS
         * @example `HTTP`
         */
        ServiceProtocol: string;
        /**
         * 调用后端服务path，比如后端服务完全地址为`http://api.a.com:8080/object/add?key1=value1&key2=value2`，**ServicePath**是指`/object/add`这一部分。
         * @example `/object/add`
         */
        ServicePath: string;
        /**
         * 调用后端服务HTTP服务时，ContentType头的取值策略：
         * - **DEFAULT**：使用API网关默认的值
         * - **CUSTOM**：自定义
         * - **CLIENT**：使用客户端上行的ContentType的头
         * @example `CUSTOM`
         */
        ContentTypeCatagory: string;
        /**
         * 调用后端服务地址，比如后端服务完全地址为`http://api.a.com:8080/object/add?key1=value1&key2=value2`，**ServiceAddress**是指`http://api.a.com:8080`这一部分。
         * @example `http://api.a.com:8080`
         */
        ServiceAddress: string;
        /**
         * 是否采取Mock模式，目前可以取值：
         * - **TRUE**：启用Mock模式
         * - **FALSE**：不启用Mock模式
         * @example `TRUE`
         */
        Mock: string;
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
                 * HTTP头参数的取值。
                 * @example `86400`
                 */
                HeaderValue: string;
                /**
                 * HTTP头参数的名字。
                 * @example `Content-Length`
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
             * VPC协议
             * @example `HTTP`
             */
            VpcScheme: string;
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
             * 请求方法。
             * @example `GET`
             */
            Method: string;
            /**
             * 函数计算服务根路径
             * @example `https://1227****64334133.ap-southeast-1-int***al.fc.aliyuncs.com/201****-15/proxy/test****ice.LATEST/testHttp/`
             */
            FcBaseUrl: string;
            /**
             * 调用后端服务函数计算服务，ContentTypeCatagory的值为DEFAULT或者CUSTOM时，ContentType头的取值。
             * @example `application/x-www-form-urlencoded; charset=UTF-8`
             */
            ContentTypeValue: string;
            /**
             * 函数计算所在Region
             * @example `cn-qingdao`
             */
            RegionId: string;
            /**
             * 后端只接收业务path
             * @example `false`
             */
            OnlyBusinessPath: boolean;
            /**
             * 函数计算定义的FunctionName
             * @example `edge_function`
             */
            FunctionName: string;
            /**
             * 调用后端服务函数计算服务时，ContentType头的取值策略：
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
        /**
         * 后端为OSS的信息
         */
        OssConfig: {
            /**
             * OSS内存储对象或文件夹路径
             * @example `/folder/test.json`
             */
            Key: string;
            /**
             * OSS的操作，目前可以取值
             *   - GetObject
             *   - PostObject
             *   - DeleteObject
             *   - PutObject
             *   - HeadObject
             *   - GetObjectMeta
             *   - AppendObject
             * @example `GetObject`
             */
            Action: string;
            /**
             * OSS服务所在地域ID。
             * @example `cn-hangzhou`
             */
            OssRegionId: string;
            /**
             * OSS存储Bucket。
             * @example `cbg-db`
             */
            BucketName: string;
        };
        /**
         * 事件总线设置
         */
        EventBridgeConfig: {
            /**
             * 事件总线
             * @example `testBus`
             */
            EventBus: string;
            /**
             * 事件来源。
             * @example `baas_driver`
             */
            EventSource: string;
            /**
             * 事件总线服务所在区域ID
             * @example `cn-beijing`
             */
            EventBridgeRegionId: string;
            /**
             * Ram授权给EventBridge的arn
             * @example `acs:ram::1933122015759***:role/adminoidcaliyun`
             */
            RoleArn: string;
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
         * 公钥
         * @example `EB1837F8693CCED0BF750B3AD48467BEB569E780A14591CF92`
         */
        PublicKey: string;
    };
    ErrorCodeSamples: {
        /**
         * 后端服务返回的错误码示例
         */
        ErrorCodeSample: {
            /**
             * 错误码
             * @example `400`
             */
            Code: string;
            /**
             * 模型
             * @example `[\"*\"]`
             */
            Model: string;
            /**
             * 错误信息
             * @example `Missing the parameter UserId`
             */
            Message: string;
            /**
             * 描述
             * @example `请求缺少参数 UserId`
             */
            Description: string;
        }[];
    };
    SystemParameters: {
        /**
         * 网关发送给后端服务的系统参数
         */
        SystemParameter: {
            /**
             * 示例
             * @example `192.168.1.1`
             */
            DemoValue: string;
            /**
             * 参数描述
             * @example `客户端IP`
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
             * 示例
             * @example `192.168.1.1`
             */
            DemoValue: string;
            /**
             * 参数描述
             * @example `客户端IP`
             */
            Description: string;
            /**
             * 系统参数名，取值为：CaClientIp、CaDomain、CaRequestHandleTime、CaAppId、CaRequestId、CaHttpSchema、CaProxy
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
    ConstantParameters: {
        /**
         * 网关发送给后端服务的常量参数
         */
        ConstantParameter: {
            /**
             * 参数描述
             * @example `constance`
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
             * 参数值
             * @example `constance`
             */
            ConstantValue: string;
        }[];
    };
    RequestParameters: {
        /**
         * Consumer向网关发送API请求的参数描述
         */
        RequestParameter: {
            /**
             * 当**ParameterType**=String，JSON验证(Json Scheme)
             * @example `JSON`
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
             * 参数名
             * @example `age`
             */
            ApiParameterName: string;
            /**
             * 当**ParameterType**=Int、Long、Float、Double或String，允许输入的散列值，不同的值用英文的逗号分隔，形如：1,2,3,4,9或A,B,C,E,F。
             * @example `boy,girl`
             */
            EnumValue: string;
            /**
             * 示例
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
             * @example `年龄`
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
         * 网关向后端服务发送API请求的参数描述
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
         * Consumer向网关发送请求的参数和网关向后端服务发送的请求的参数的映射关系
         */
        ServiceParameterMap: {
            /**
             * 对应前端入参名称，这个值必须存在于RequestParametersObject中，匹配于RequestParam.ApiParameterName。
             * @example `name`
             */
            RequestParameterName: string;
            /**
             * 后端参数名称
             * @example `name`
             */
            ServiceParameterName: string;
        }[];
    };
    DeployedInfos: {
        /**
         * API发布状态
         */
        DeployedInfo: {
            /**
             * 环境名称，取值为：RELEASE、TEST
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * 有效的版本
             * @example `xxx`
             */
            EffectiveVersion: string;
            /**
             * 部署状态，取值为：DEPLOYED、NONDEPLOYED，分别表示已部署、未部署
             * @example `DEPLOYED`
             */
            DeployedStatus: string;
        }[];
    };
    TagList: {
        /**
         * 标签列表
         */
        Tag: {
            /**
             * 标签键
             * @example `APP`
             */
            TagKey: string;
            /**
             * 标签值
             * @example `value3`
             */
            TagValue: string;
        }[];
    };
}
