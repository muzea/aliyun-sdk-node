export interface DescribeIngressResponse {
    /**
     * 请求ID。
     * @example `91F93257-7A4A-4BD3-9A7E-2F6EAE6D****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：
     * - 请求正常，返回**success**。
     * - 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0a981dd515966966104121683d****`
     */
    TraceId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * SLB ID。
         * @example `lb-uf62****6d13tq2u5`
         */
        SlbId: string;
        /**
         * 命名空间ID。
         * @example `cn-beijing:sae-test`
         */
        NamespaceId: string;
        /**
         * 路由规则名称。
         * @example `ingress-sae-test`
         */
        Description: string;
        /**
         * SLB监听端口。
         * @example `443`
         */
        ListenerPort: number;
        /**
         * SLB类型。取值说明如下：
         * - **internet**：公网。
         * - **intranet**：私网。
         * @example `internet`
         */
        SlbType: string;
        /**
         * **CLB**证书ID。
         * @example `13623****809_16cad216b32_845_-419427029`
         */
        CertId: string;
        /**
         * 路由规则名称。
         * @example `lb-uf6jt0nu4z6ior943****-80-f5****`
         */
        Name: string;
        /**
         * 默认规则。
         */
        DefaultRule: {
            /**
             * 默认规则应用的后端端口。
             * @example `8080`
             */
            ContainerPort: number;
            /**
             * 默认规则的应用名称。
             * @example `app1`
             */
            AppName: string;
            /**
             * 默认规则的应用。
             * @example `395b60e4-0550-458d-9c54-a265d036****`
             */
            AppId: string;
            /**
             * 后端协议。取值说明如下：
             * - **http**：适用于需要对数据内容进行识别的应用。
             * - **https**：适用于需要加密传输的应用。
             * - **grpc**：适用于.net等多语言用户gRPC的负载均衡场景。
             * 该参数仅在参数**LoadBalanceType**取值为**ALB**，且参数**ListenerProtocol**取值为**HTTPS**时返回。
             * @example `http`
             */
            BackendProtocol: string;
        };
        /**
         * 转发规则。
         */
        Rules: {
            /**
             * 目标应用名称。
             * @example `app1`
             */
            AppName: string;
            /**
             * 应用后端端口。
             * @example `8080`
             */
            ContainerPort: number;
            /**
             * 应用域名。
             * @example `edas.site`
             */
            Domain: string;
            /**
             * 目标应用ID。
             * @example `395b60e4-0550-458d-9c54-a265d036****`
             */
            AppId: string;
            /**
             * URL路径。
             * @example `/path1`
             */
            Path: string;
            /**
             * 后端协议。取值说明如下：
             * - **http**：适用于需要对数据内容进行识别的应用。
             * - **https**：适用于需要加密传输的应用。
             * - **grpc**：适用于.net等多语言用户gRPC的负载均衡场景。
             * 该参数仅在参数**LoadBalanceType**取值为**ALB**，且参数**ListenerProtocol**取值为**HTTPS**时返回。
             * @example `http`
             */
            BackendProtocol: string;
            /**
             * 重写路径。
             * @example `/${1}`
             */
            RewritePath: string;
        }[];
        /**
         * 路由规则ID。
         * @example `87`
         */
        Id: number;
        /**
         * 负载均衡SLB的类型。取值说明如下：
         * - **clb**：传统型负载均衡CLB（原SLB）。
         * - **alb**：应用型负载均衡ALB。
         * @example `clb`
         */
        LoadBalanceType: string;
        /**
         * 请求转发协议。取值说明如下：
         * - **HTTP**：适用于需要对数据内容进行识别的应用。
         * - **HTTPS**：适用于需要加密传输的应用。
         * 在**CreateIngress**和**UpadateIngress**中，该参数非必填项，如果创建或更新网关路由规则时未填写该参数，则调用该API时不返回。
         * @example `HTTP`
         */
        ListenerProtocol: string;
        /**
         * **ALB**多证书ID。
         * @example `87***35-cn-hangzhou,812***3-cn-hangzhou`
         */
        CertIds: string;
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 查询Ingress详情是否成功。取值说明如下：
     * - **true**：查询成功。
     * - **false**：查询失败。
     * @example `true`
     */
    Success: boolean;
}
