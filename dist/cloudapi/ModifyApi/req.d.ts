export interface ModifyApiRequest {
    /**
     * 指定的分组编号
     * @example `927d50c0f2e54b359919923d908bb015`
     */
    "GroupId"?: string;
    /**
     * API编号
     * @example `8afff6c8c4c6447abb035812e4d66b65`
     */
    "ApiId": string;
    /**
     * API的名称，组内不允许重复。支持汉字，英文，数字，下划线，且只能以英文和汉字开头，4~50个字符
     * @example `ApiName`
     */
    "ApiName": string;
    /**
     * API描述信息，最多180个字符
     * @example `Api description`
     */
    "Description"?: string;
    /**
     * API是否公开，目前可以取值：
     * - **PUBLIC**：公开，如选择此类型，该API的线上环境，会在所有用户的控制台“发现API”页面展示
     * - **PRIVATE**：不公开，如选择此类型，当该组API在云市场上架时，私有类型的API不会上架
     * @example `PUBLIC`
     */
    "Visibility": string;
    /**
     * API安全认证类型，目前可以取值：
     * - **APP**：只允许已授权的APP调用
     * - **ANONYMOUS**：允许匿名调用，设置为允许匿名调用需要注意：
     *      - 任何能够获取该API服务信息的人，都将能够调用该API。网关不会对调用者做身份认证，也无法设置按用户的流量控制，若开放该API请设置好按API的流量控制。
     *      - “ANONYMOUS”API**不建议上架云市场**，网关无法对调用者区分计量，也无法限制调用次数，若所在分组要上架云市场，建议将该API转移至其他分组，或将类型设置为“私有”，或选择“阿里云APP”认证方式。
     * @example `APP`
     */
    "AuthType"?: string;
    /**
     * Consumer向网关发送API请求的相关配置项
     * @example `{"RequestProtocol":"HTTP","RequestHttpMethod":"GET","RequestPath":"/v3/getUserTest/[userId]","BodyFormat":"FORM","PostBodyDescription":""}`
     */
    "RequestConfig": string;
    /**
     * 网关向后端服务发送API请求的相关配置项
     * @example `{"ServiceProtocol":"HTTP","ServiceHttpMethod":"GET","ServiceAddress":"http://www.customerdomain.com","ServiceTimeout":"1000","ServicePath":"/v3/getUserTest/[userId]"}`
     */
    "ServiceConfig": string;
    /**
     * Consumer向网关发送API请求的参数描述。
     * 更多信息，请参见[RequestParameter](~~43986~~)。
     * @example `[
          {
                "ParameterLocation": {
                      "name": "Head",
                      "orderNumber": 2
                },
                "ParameterType": "String",
                "Required": "OPTIONAL",
                "isHide": false,
                "ApiParameterName": "header1",
                "DefaultValue": "123124",
                "Location": "Head"
          },
          {
                "ParameterLocation": {
                      "name": "Head",
                      "orderNumber": 2
                },
                "ParameterType": "String",
                "Required": "REQUIRED",
                "isHide": false,
                "ApiParameterName": "header2",
                "DefaultValue": "",
                "Location": "Head"
          },
          {
                "ParameterLocation": {
                      "name": "Query",
                      "orderNumber": 3
                },
                "ParameterType": "String",
                "Required": "OPTIONAL",
                "isHide": false,
                "ApiParameterName": "query1",
                "DefaultValue": "1245",
                "Location": "Query"
          },
          {
                "ApiParameterName": "CaClientIp",
                "ParameterLocation": {
                      "name": "Query",
                      "orderNumber": 0
                },
                "Location": "Query",
                "ParameterType": "String",
                "Required": "REQUIRED",
                "Description": "ClientIP"
          },
          {
                "ApiParameterName": "testConstant",
                "ParameterLocation": {
                      "name": "Head",
                      "orderNumber": 0
                },
                "Location": "Head",
                "ParameterType": "String",
                "Required": "REQUIRED",
                "DefaultValue": "111"
          }
    ]`
     */
    "RequestParameters"?: string;
    /**
     * 网关发送给后端服务的系统参数
     * @example `[{\"location\":\"HEAD\",\"parameterName\":\"CaDomain\",\"serviceParameterName\":\"host\"}]`
     */
    "SystemParameters"?: string;
    /**
     * 网关发送给后端服务的常量参数
     * @example `[{\"ConstantValue\":\"123\",\"Description\":\"常量参数\",\"Location\":\"HEAD\",\"ServiceParameterName\":\"test\"}]`
     */
    "ConstantParameters"?: string;
    /**
     * 网关向后端服务发送API请求的参数描述。
     * 更多信息，请参见[ServiceParameter](~~43988~~)。
     * @example `[
          {
                "ServiceParameterName": "header1",
                "Location": "Head",
                "Type": "String",
                "ParameterCatalog": "REQUEST"
          },
          {
                "ServiceParameterName": "header2",
                "Location": "Query",
                "Type": "String",
                "ParameterCatalog": "REQUEST"
          },
          {
                "ServiceParameterName": "query1",
                "Location": "Head",
                "Type": "String",
                "ParameterCatalog": "REQUEST"
          },
          {
                "ServiceParameterName": "ipp",
                "Location": "Query",
                "Type": "String",
                "ParameterCatalog": "SYSTEM"
          },
          {
                "ServiceParameterName": "testConstant",
                "Location": "Head",
                "Type": "String",
                "ParameterCatalog": "CONSTANT"
          }
    ]`
     */
    "ServiceParameters"?: string;
    /**
     * Consumer向网关发送请求的参数和网关向后端服务发送的请求的参数的映射关系。
     * 更多信息，请参见[ServiceParameterMap](~~43989~~)。
     * @example `[
          {
                "ServiceParameterName": "header1",
                "RequestParameterName": "header1"
          },
          {
                "ServiceParameterName": "header2",
                "RequestParameterName": "header2"
          },
          {
                "ServiceParameterName": "query1",
                "RequestParameterName": "query1"
          },
          {
                "ServiceParameterName": "ipp",
                "RequestParameterName": "CaClientIp"
          },
          {
                "ServiceParameterName": "testConstant",
                "RequestParameterName": "testConstant"
          }
    ]`
     */
    "ServiceParametersMap"?: string;
    /**
     * 后端服务返回应答的格式，目前可以设置为：JSON、TEXT、BINARY、XML、HTML。
     * 该值仅用于生成文档使用。不对返回结果产生影响。
     * @example `HTML`
     */
    "ResultType"?: string;
    /**
     * 后端服务返回应答的示例 该值仅用于生成文档使用。不对返回结果产生影响。
     * @example `{}`
     */
    "ResultSample"?: string;
    /**
     * 后端服务失败返回应答的示例。
     * 该值仅用于生成文档使用。不对返回结果产生影响。
     * @example `{\"requestId\":\"3b9b8b31-93c3-489e-8ebb-cab35a1aee51\",\"errCode\":500,\"errMsg\":\"connection refused\"}`
     */
    "FailResultSample"?: string;
    /**
     * 后端服务返回的错误码示例。
     * 更多信息，请参见[ErrorCodeSample](~~44392~~)。
     * @example `[{\"Code\":\"400\",\"Message\":\"Login failed\",\"Description\":\"Invalid user name or password\"}]`
     */
    "ErrorCodeSamples"?: string;
    /**
     * api的返回说明
     * @example `{}`
     */
    "ResultDescriptions"?: string;
    /**
     * 第三方账号认证OpenID Connect相关配置项
     * @example `{\"OpenIdApiType\":\"IDTOKEN\",\"PublicKey\":\"lzlj1573\",\"IdTokenParamName\":\"\",\"PublicKeyId\":\"lzljorders\"}`
     */
    "OpenIdConnectConfig"?: string;
    /**
     * API的客户端请求签名方法，可选值：
     * - HmacSHA256
     * - HmacSHA1,HmacSHA256
     * @example `HmacSHA256`
     */
    "AllowSignatureMethod"?: string;
    /**
     * 双向通信API类型：
     * - **COMMON**：普通API
     * - **REGISTER**：注册API
     * - **UNREGISTER**：注销API
     * - **NOTIFY**：下行通知
     * @example `COMMON`
     */
    "WebSocketApiType"?: string;
    /**
     * api的返回结果
     * @example `{}`
     */
    "ResultBodyModel"?: string;
    /**
     * - 设置**ForceNonceCheck**为**true**, 请求时强制检查X-Ca-Nonce，这个是请求的唯一标识，一般使用UUID来标识。API网关收到这个参数后会校验这个参数的有效性，同样的值，15分内只能被使用一次。可以有效防止API的重放攻击。
     * - 设置**ForceNonceCheck**为**false**, 则不检查。修改时，不设置则不修改原来的取值。
     * @example `true`
     */
    "ForceNonceCheck"?: boolean;
    /**
     * - 设置DisableInternet为**true**，仅支持内网调用API。
     * - 设置DisableInternet为**false**，则不限制调用。
     * > 修改API时，不设置则不修改原来的取值。
     * @example `true`
     */
    "DisableInternet"?: boolean;
    /**
     * 支持AppCode的认证类型。可选值：
     * - DEFAULT：默认值：上架云市场后支持
     * - DISABLE： 不支持AppCode调用方式
     * - HEADER  ：仅在Header中支持
     * - HEADER_QUERY ：可以在Header或者Query中支持
     * @example `DEFAULT`
     */
    "AppCodeAuthType"?: string;
    /**
     * 后端服务ID
     * @example `0d105f80a8f340408bd34954d4e4ff22`
     */
    "BackendId"?: string;
    /**
     * 是否启用后端服务
     * @example `true`
     */
    "BackendEnable"?: boolean;
}
