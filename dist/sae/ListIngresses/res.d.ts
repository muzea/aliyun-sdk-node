export interface ListIngressesResponse {
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
     * @example `0a98a02315955564772843261e****`
     */
    TraceId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 路由规则列表。
         */
        IngressList: {
            /**
             * SLB ID。
             * @example `lb-uf62****6d13tq2u5`
             */
            SlbId: string;
            /**
             * 命名空间ID。
             * @example `cn-shanghai`
             */
            NamespaceId: string;
            /**
             * 路由规则名称。
             * @example `test`
             */
            Description: string;
            /**
             * SLB监听端口。
             * @example `80`
             */
            ListenerPort: string;
            /**
             * SLB类型。取值说明如下：
             * - **internet**：公网。
             * - **intranet**：私网。
             * @example `internet`
             */
            SlbType: string;
            /**
             * **CLB**证书ID。
             * @example `13624*****73809_16f8e549a20_1175189789_12****3210`
             */
            CertId: string;
            /**
             * **ALB**多证书ID。
             * @example `87***35-cn-hangzhou,812***3-cn-hangzhou`
             */
            CertIds: string;
            /**
             * 路由规则名称。
             * @example `lb-uf6jt0nu4z6ior943****-80-f5****`
             */
            Name: string;
            /**
             * 路由规则ID。
             * @example `18`
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
             * 负载均衡SLB支持的请求转发协议。取值说明如下：
             * - **HTTP**：适用于需要对数据内容进行识别的应用。
             * - **HTTPS**：适用于需要加密传输的应用。
             * 在**CreateIngress**和**UpadateIngress**中，该参数非必填项，如果创建或更新网关路由规则时未填写该参数，则调用该API时不返回。
             * @example `HTTP`
             */
            ListenerProtocol: string;
            /**
             * MSE云原生网关实例ID。
             * @example `gw-d5df01a1bae748f1a7c4e325d2fd****`
             */
            MseGatewayId: string;
            /**
             * 服务对应的端口。
             * @example `80`
             */
            MseGatewayPort: string;
            /**
             * MSE云原生网关支持的请求转发协议。取值说明如下：
             * - **HTTP**：适用于需要对数据内容进行识别的应用。
             * - **HTTPS**：适用于需要加密传输的应用。
             * @example `HTTP`
             */
            MseGatewayProtocol: string;
        }[];
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
     * 获取Ingress列表是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
