export interface CreateHealthCheckTemplateRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `5A2CFF0E-5718-45B5-9D4D-70B******`
     */
    "ClientToken"?: string;
    /**
     * 健康检查模板名称。
     * 长度为2~128个英文或中文字符，必须以大小写英文字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `HealthCheckTemplate1`
     */
    "HealthCheckTemplateName": string;
    /**
     * 健康检查使用的端口。
     * 取值范围：**0~65535**。
     * 默认值：**0**，表示使用后端服务器的端口进行健康检查。
     * @example `80`
     */
    "HealthCheckConnectPort"?: number;
    /**
     * 用于健康检查的域名。取值：
     * - **$SERVER_IP**：后端服务器的私网IP。当指定了IP或该参数未指定时，负载均衡会使用后端服务器的私网IP当做健康检查使用的域名。
     * - **domain**：域名长度为1~80字符，只能包含字母、数字、半角句号（.）和短划线（-）。
     * > 只有`HealthCheckProtocol`设置为**HTTP**或**HTTPS**时该参数生效。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
     * @example `$SERVER_IP`
     */
    "HealthCheckHost"?: string;
    /**
     * 健康检查正常的状态码列表。
     * @example `5`
     */
    "HealthCheckCodes"?: string[];
    /**
     * 健康检查的时间间隔。
     * 取值范围：**1~50**秒。
     * 默认值：**2**秒。
     * @example `2`
     */
    "HealthCheckInterval"?: number;
    /**
     * 接收来自运行状况检查的响应需要等待的时间。如果后端服务器在指定的时间内没有正确响应，则判定为健康检查失败。
     * 取值范围：**1~300**秒。
     * 默认值：**5**秒。
     * > 如果`HealthCHeckTimeout`的值小于`HealthCheckInterval`的值，则`HealthCHeckTimeout`无效，超时时间为`HealthCheckInterval`的值。
     * @example `5`
     */
    "HealthCheckTimeout"?: number;
    /**
     * 用于健康检查的URL。
     * 长度限制为1~80，支持使用字母、数字和短划线（-）、正斜线（/）、半角句号（.）、百分号（%）、半角问号（?）、井号（#）和and（&）以及扩展字符集`_;~!（)*[]@$^:',+`。URL必须以正斜线（/）开头。
     * > 只有`HealthCheckProtocol`为**HTTP**或**HTTPS**时才有该参数。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
     * @example `/test/index.html`
     */
    "HealthCheckPath"?: string;
    /**
     * 健康检查方法。取值：
     * - **HEAD**（默认值）：HTTP和HTTPS监听健康检查默认采用HEAD方法。
     * - **POST**：gRPC监听健康检查默认采用POST方法。
     * - **GET**：如果响应报文长度超过8KB，会被截断，但不会影响健康检查结果的判定。
     * > 只有**HealthCheckProtocol**为**HTTP**或**HTTPS**或**gRPC**时才有该参数。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
     * @example `HEAD`
     */
    "HealthCheckMethod"?: string;
    /**
     * 健康检查采用的协议。取值：
     * - **HTTP**（默认值）：通过发送HEAD或GET请求模拟浏览器的访问行为来检查服务器应用是否健康。
     * - **HTTPS**：通过发送HEAD或GET请求模拟浏览器的访问行为来检查服务器应用是否健康。（数据加密，相比HTTP更安全。）
     * - **TCP**：通过发送SYN握手报文来检测服务器端口是否存活。
     * - **gRPC**：通过发送POST或GET请求来检查服务器应用是否健康。
     * > HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。
     * @example `HTTP`
     */
    "HealthCheckProtocol"?: string;
    /**
     * 健康检查HTTP协议版本。
     * 取值：**HTTP 1.0**或**HTTP 1.1**。
     * 默认值：**HTTP 1.1**。
     * > 只有`HealthCheckProtocol`为**HTTP**或**HTTPS**时才有该参数。（HTTPS协议默认不开放，如需使用，请登录负载均衡控制台的配额管理页面，在**应用型负载均衡ALB**页签申请权益配额。）
     * @example `HTTP 1.0`
     */
    "HealthCheckHttpVersion"?: string;
    /**
     * 健康检查连续成功多少次后，将后端服务器的健康检查状态由**失败**判定为**成功**。
     * 取值范围：**2~10**。
     * 默认值：**3**。
     * @example `4`
     */
    "HealthyThreshold"?: number;
    /**
     * 健康检查连续失败多少次后，将后端服务器的健康检查状态由**成功**判定为**失败**。
     * 取值范围：**2~10**。
     * 默认值：**3**。
     * @example `4`
     */
    "UnhealthyThreshold"?: number;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会创建资源。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回**http_2xx**状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。最多支持128个字符，不能以aliyun或acs:开头，不能包含http://或https://。
         * @example `product`
         */
        Value: string;
    }[];
}
