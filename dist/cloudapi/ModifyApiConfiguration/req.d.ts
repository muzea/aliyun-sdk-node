export interface ModifyApiConfigurationRequest {
    /**
     * API的ID标识
     * @example `baacc592e63a4cb6a41920d9d3f91f38`
     */
    "ApiId": string;
    /**
     * API名称
     * @example `testModifyApiName`
     */
    "ApiName"?: string;
    /**
     * api描述
     * @example `测试修改描述`
     */
    "Description"?: string;
    /**
     * API是否公开，可以取值：
     * - **PUBLIC**：公开，如选择此类型，该API的线上环境定义，会在所有用户的控制台“发现API”页面可见。
     * - **PRIVATE**：不公开，如选择此类型，当该组API在云市场上架时，私有类型的API不会上架。
     * @example `PUBLIC`
     */
    "Visibility"?: string;
    /**
     * - 设置**ForceNonceCheck**为**true**, 请求时强制检查X-Ca-Nonce，这个是请求的唯一标识，一般使用UUID来标识。API网关收到这个参数后会校验这个参数的有效性，同样的值，15分内只能被使用一次。可以有效防止API的重放攻击。
     * - 设置**ForceNonceCheck**为**false**, 则不检查。修改时，不设置则不修改原来的取值。
     * @example `true`
     */
    "ForceNonceCheck"?: boolean;
    /**
     * - 设置**DisableInternet**为**true**, 仅支持内网调用API。
     * - 设置**DisableInternet**为**false**, 则不限制调用。
     * @example `false`
     */
    "DisableInternet"?: boolean;
    /**
     * 当**AuthType**为**APP**认证时，可选值如下：
     * - **DEFAULT**：不传默认是DEFAULT（随分组设置）
     * - **DISABLE**：不允许
     * - **HEADER**：允许AppCode的Header认证
     * - **HEADER_QUERY**：允许AppCode的Header及Query认证
     * @example `DEFAULT`
     */
    "AppCodeAuthType"?: string;
    /**
     * 当**AuthType**为**APP**认证时，需要传该值明确签名算法。可选值如下，不传默认是HmacSHA256：
     * - HmacSHA256
     * - HmacSHA1,HmacSHA256
     * @example `HmacSHA256`
     */
    "AllowSignatureMethod"?: string;
    /**
     * API安全认证类型，目前可以取值：
     * - **APP**：只允许已授权的APP调用
     * - **ANONYMOUS**：允许匿名调用，设置为允许匿名调用需要注意：
     *      - 任何能够获取该API服务信息的人，都将能够调用该API。网关不会对调用者做身份认证，也无法设置按用户的流量控制，若开放该API请设置好按API的流量控制；
     *      - AppCodeAuthType的值不会生效。
     * @example `APP`
     */
    "AuthType"?: string;
    /**
     * API 支持的协议类型，可以多选，多选情况下以英文逗号隔开，如：”HTTP,HTTPS”，取值为：HTTP、HTTPS。
     * @example `HTTP`
     */
    "RequestProtocol"?: string;
    /**
     * HTTP Method，取值为：GET、POST、DELETE、PUT、HEADER、TRACE、PATCH、CONNECT、OPTIONS。
     * @example `GET`
     */
    "RequestHttpMethod"?: string;
    /**
     * API path，比如API的完全地址为`http://api.a.com：8080/object/add?key1=value1&key2=value2`，path是指`/object/add`这一部分。
     * @example `/test/api`
     */
    "RequestPath"?: string;
    /**
     * 入参请求的模式，取值为：
     * - MAPPING：入参映射（过滤未知参数）
     * - PASSTHROUGH：入参透传
     * - MAPPING_PASSTHROUGH：入参映射（透传未知参数）
     * @example `MAPPING`
     */
    "RequestMode"?: string;
    /**
     * 当**RequestMode**值为**MAPPING**时有效。
     * POST/PUT请求时，表示数据以何种方式传递给服务器，取值为：**FORM**、**STREAM**，分别表示表单形式(k-v对应)、字节流形式。
     * @example `STREAM`
     */
    "BodyFormat"?: string;
    /**
     * 请求body描述
     * @example `body描述`
     */
    "PostBodyDescription"?: string;
    /**
     * body模型
     * @example `https://apigateway.aliyun.com/models/f4e7333c****40dcbaf7c9da553ccd8d/3ab61f775b****d4bc35e993****87aa8`
     */
    "BodyModel"?: string;
    /**
     * 模型的名称
     * @example `Test`
     */
    "ModelName"?: string;
    /**
     * 后端服务名称
     * UseBackendService置为TRUE时才会生效
     * @example `testBackendService`
     */
    "BackendName"?: string;
    /**
     * 后端服务协议类型，目前支持：
     * - Http： http/https后端
     * - Vpc： Vpc后端
     * - FC： 函数计算后端
     * - OSS： 对象存储后端
     * - Mock： mock后端
     * - EventBridge： 事件总线后端
     * 需要指明对应后端服务的配置信息，即为对应的后端服务的config参数赋值。
     * @example `HTTP`
     */
    "ServiceProtocol"?: string;
    /**
     * http配置信息
     * @example `{"serviceAddress":"http://test.api.com","servicePath":"/test/api","serviceHttpMethod":"GET"}`
     */
    "HttpConfig"?: string;
    /**
     * vpc配置
     * @example `{"VpcId":"vpc-xxxxxxx","Name":"testVpc","InstanceId":"i-p0ssssss","Port":80,"servicePath":"/test/vpc","serviceHttpMethod":"HEAD"}`
     */
    "VpcConfig"?: string;
    /**
     * 函数计算配置信息
     * @example `{"FcType":"FCEvent","FcRegionId":"cn-hangzhou","RoleArn":"acs:ram::xxxxxxxx:role/aliyunserviceroleforapigateway","selectServiceName":"fcTest","FunctionName":"funcTest","selectFunctionName":"funcTest","Qualifier":"LATEST","Path":"","FcBaseUrl":"","ServiceName":"fcTest"}`
     */
    "FunctionComputeConfig"?: string;
    /**
     * OSS配置信息
     * @example `{"OssRegionId":"cn-hangzhou","Key":"/test.html","BucketName":"test-api-oss","Action":"GetObject"}`
     */
    "OssConfig"?: string;
    /**
     * Mock配置信息
     * @example `{"MockResult":"test","MockHeaders":[{"HeaderName":"testHeader","HeaderValue":"testHeader"}],"MockStatusCode":"400"}`
     */
    "MockConfig"?: string;
    /**
     * 后端服务超时时间，单位：毫秒
     * @example `10000`
     */
    "ServiceTimeout"?: number;
    /**
     * 后端请求ContentType配置
     * - DEFAULT：API网关默认
     * - CUSTOM：自定义
     * @example `DEFAULT`
     */
    "ContentTypeCategory"?: string;
    /**
     * 调用后端服务HTTP服务，ContentTypeCatagory的值为DEFAULT或者CUSTOM时，ContentType头的取值。
     * @example `application/x-www-form-urlencoded; charset=UTF-8`
     */
    "ContentTypeValue"?: string;
    /**
     * Consumer向网关发送API请求的参数描述。
     * 更多信息，请参见[RequestParameter](~~43986~~)。
     * @example `[{"ParameterLocation":{"name":"Head","orderNumber":2},"ParameterType":"String","Required":"OPTIONAL","isHide":false,"ApiParameterName":"header1","DefaultValue":"123124","Location":"Head"},{"ParameterLocation":{"name":"Head","orderNumber":2},"ParameterType":"String","Required":"REQUIRED","isHide":false,"ApiParameterName":"header2","DefaultValue":"","Location":"Head"},{"ParameterLocation":{"name":"Query","orderNumber":3},"ParameterType":"String","Required":"OPTIONAL","isHide":false,"ApiParameterName":"query1","DefaultValue":"1245","Location":"Query"},{"ApiParameterName":"CaClientIp","ParameterLocation":{"name":"Query","orderNumber":0},"Location":"Query","ParameterType":"String","Required":"REQUIRED","Description":"ClientIP"},{"ApiParameterName":"testConstant","ParameterLocation":{"name":"Head","orderNumber":0},"Location":"Head","ParameterType":"String","Required":"REQUIRED","DefaultValue":"111"}]`
     */
    "RequestParameters"?: string;
    /**
     * 网关向后端服务发送API请求的参数描述。
     * 更多信息，请参见[ServiceParameter](~~43988~~)。
     * @example `[{"ServiceParameterName":"header1","Location":"Head","Type":"String","ParameterCatalog":"REQUEST"},{"ServiceParameterName":"header2","Location":"Query","Type":"String","ParameterCatalog":"REQUEST"},{"ServiceParameterName":"query1","Location":"Head","Type":"String","ParameterCatalog":"REQUEST"},{"ServiceParameterName":"ipp","Location":"Query","Type":"String","ParameterCatalog":"SYSTEM"},{"ServiceParameterName":"testConstant","Location":"Head","Type":"String","ParameterCatalog":"CONSTANT"}]`
     */
    "ServiceParameters"?: string;
    /**
     * Consumer向网关发送请求的参数和网关向后端服务发送的请求的参数的映射关系。
     * 更多信息，请参见[ServiceParameterMap](~~43989~~)。
     * @example `[{"ServiceParameterName":"header1","RequestParameterName":"header1"},{"ServiceParameterName":"header2","RequestParameterName":"header2"},{"ServiceParameterName":"query1","RequestParameterName":"query1"},{"ServiceParameterName":"ipp","RequestParameterName":"CaClientIp"},{"ServiceParameterName":"testConstant","RequestParameterName":"testConstant"}]`
     */
    "ServiceParametersMap"?: string;
    /**
     * 后端服务返回应答的格式，目前可以设置为：JSON、TEXT、BINARY、XML、HTML。
     * 该值仅用于生成文档使用。不对返回结果产生影响。
     * @example `JSON`
     */
    "ResultType"?: string;
    /**
     * 后端服务返回应答的示例
     * 该值仅用于生成文档使用。不对返回结果产生影响。
     * @example `{\n  \"status\": 0,\n  \"data\": {\n    \"count\": 1,\n    \"list\": [\n      \"352\"\n    ]\n  },\n  \"message\": \"success\"\n}`
     */
    "ResultSample"?: string;
    /**
     * 后端服务失败返回应答的示例
     * 该值仅用于生成文档使用。不对返回结果产生影响。
     * @example `{"errorCode":"fail","errorMessage":"param invalid"}`
     */
    "FailResultSample"?: string;
    /**
     * 后端服务返回的错误码示例。
     * 更多信息，请参见[ErrorCodeSample](~~44392~~)。
     * @example `[{"Code":"400","Message":"Missing the userId","Description":"param invalid"}]`
     */
    "ErrorCodeSamples"?: string;
    /**
     * 是否使用创建的后端服务资源：
     * - TRUE：使用创建的后端服务
     * - FALSE：自定义后端服务信息
     * @example `TRUE`
     */
    "UseBackendService"?: boolean;
}
