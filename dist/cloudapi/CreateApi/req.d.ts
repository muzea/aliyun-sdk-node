export interface CreateApiRequest {
    /**
     * 指定的分组编号
     * @example `08ae4aa0f95e4321849ee57f4e0b3077`
     */
    "GroupId": string;
    /**
     * 设置API的名称，组内不允许重复。支持汉字，英文，数字，下划线，且只能以英文和汉字开头，4~50个字符
     * @example `ApiName`
     */
    "ApiName": string;
    /**
     * API是否公开，可以取值：
     * - **PUBLIC**：公开，如选择此类型，该API的线上环境定义，会在所有用户的控制台“发现API”页面可见。
     * - **PRIVATE**：不公开，如选择此类型，当该组API在云市场上架时，私有类型的API不会上架。
     * @example `PUBLIC`
     */
    "Visibility": string;
    /**
     * API描述信息，最多180个字符
     * @example `Api description`
     */
    "Description"?: string;
    /**
     * API安全认证类型，目前可以取值：
     * - **APP**：只允许已授权的APP调用
     * - **ANONYMOUS**：允许匿名调用，设置为允许匿名调用需要注意：
     *   任何能够获取该API服务信息的人，都将能够调用该API。网关不会对调用者做身份认证，也无法设置按用户的流量控制，若开放该API请设置好按API的流量控制。
     * @example `APP`
     */
    "AuthType"?: string;
    /**
     * Consumer向网关发送API请求的相关配置项。
     * 更多信息，请参见[RequestConfig](~~43985~~)。
     * @example `{"RequestProtocol":"HTTP","RequestHttpMethod":"GET","RequestPath":"/v3/getUserTest/[userId]","BodyFormat":"FORM","PostBodyDescription":""}`
     */
    "RequestConfig": string;
    /**
     * 网关向后端服务发送API请求的相关配置项。
     * 更多信息，请参见[ServiceConfig](~~43987~~)。
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
     * 后端服务返回应答的格式，目前可以设置为：JSON、TEXT、BINARY、XML、HTML。默认为JSON。
     * @example `HTML`
     */
    "ResultType"?: string;
    /**
     * 后端服务返回应答的示例，该值仅用于生成文档使用。不对返回结果产生影响。
     * @example `{}`
     */
    "ResultSample"?: string;
    /**
     * 后端服务失败返回应答的示例
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
     * ip访问控制的开关状态，取值：-**on**：打开-**off**：关闭
     * @example `{\"openIdApiType\":null,\"idTokenParamName\":null,\"publicKeyId\":null,\"publicKey\":null}`
     */
    "OpenIdConnectConfig"?: string;
    /**
     * 当**AuthType**为**APP**认证时，需要传该值明确签名算法。可选值如下，不传默认是HmacSHA256：
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
     * - 设置**ForceNonceCheck**为**false**，则不检查。创建API时默认为false。
     * @example `true`
     */
    "ForceNonceCheck"?: boolean;
    /**
     * - 设置**DisableInternet**为**true**, 仅支持内网调用API。
     * - 设置**DisableInternet**为**false**, 则不限制调用。创建API时默认为false。
     * @example `true`
     */
    "DisableInternet"?: boolean;
    /**
     * 当**AuthType**为**APP**认证时，可选值如下：
     * - **DEFAULT**：不传默认是DEFAULT（随分组设置）
     * - **DISABLE**：不允许
     * - **HEADER**：允许AppCode的Header认证
     * - **HEADER_QUERY**：允许AppCode的Header及Query认证
     * @example `HEADER`
     */
    "AppCodeAuthType"?: string;
    /**
     * 后端服务ID
     * @example `a0305308908c4740aba9cbfd63ba99b7`
     */
    "BackendId"?: string;
    /**
     * 是否启用后端服务
     * @example `true`
     */
    "BackendEnable"?: boolean;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     */
    "Tag"?: {
        /**
         * 标签的键
         * @example `env`
         */
        Key: string;
        /**
         * 标签的value
         * @example `value`
         */
        Value: string;
    }[];
}
