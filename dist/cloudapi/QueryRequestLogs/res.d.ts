export interface QueryRequestLogsResponse {
    /**
     * 请求id
     * @example `CE5722A6-AE78-4741-A9B0-6C81********`
     */
    RequestId: string;
    RequestLogs: {
        /**
         * 请求日志集合
         */
        RequestLog: {
            /**
             * API的ID
             * @example `4b83229ebcab4ecd88956fb3********`
             */
            ApiId: string;
            /**
             * API名称
             * @example `ApiName`
             */
            ApiName: string;
            /**
             * 调用方的App Key
             * @example `20412****`
             */
            ConsumerAppKey: string;
            /**
             * 总耗时，单位：ms
             * @example `1345`
             */
            TotalLatency: string;
            /**
             * 请求使用的HTTP方法
             * @example `POST`
             */
            HttpMethod: string;
            /**
             * 请求的域名
             * @example `360bdd88695c48ae8085c7f2********-ap-southeast-1.alicloudapi.com`
             */
            Domain: string;
            /**
             * 调用失败时，返回的出错信息。
             * @example `Backend service connect failed `Timeout connecting to [/1XX.20.0.XX:8080]``
             */
            ErrorMessage: string;
            /**
             * 调用者应用ID
             * @example `11096****`
             */
            ConsumerAppId: string;
            /**
             * API服务所在的网关实例ID
             * @example `apigateway-bj-ab2b********`
             */
            InstanceId: string;
            /**
             * 客户端X-Ca-Nonce头
             * @example `d43df9db-3b05-4cd6-888a-1c0b********`
             */
            ClientNonce: string;
            /**
             * 请求大小，单位：字节
             * @example `1923`
             */
            RequestSize: string;
            /**
             * API环境ID
             * @example `8a305b7f10334052a52d9156********`
             */
            StageId: string;
            /**
             * API环境名称
             * @example `RELEASE`
             */
            StageName: string;
            /**
             * 请求的PATH
             * @example `/testPath`
             */
            HttpPath: string;
            /**
             * 请求ID
             * @example `95657ED9-2F6F-426F-BD99-79C8********`
             */
            RequestId: string;
            /**
             * API的分组ID
             * @example `dc024277fe6c4cada79ba0bd6********`
             */
            GroupId: string;
            /**
             * API分组名称
             * @example `GroupName`
             */
            GroupName: string;
            /**
             * 错误码
             * @example `X500ER`
             */
            ErrorCode: string;
            /**
             * 返回数据大小，单位：字节
             * @example `23441`
             */
            ResponseSize: string;
            /**
             * 区域
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 请求状态码
             * @example `200`
             */
            StatusCode: string;
            /**
             * 调用者客户端IP
             * @example `21.237.XXX.XXX`
             */
            ClientIp: string;
            /**
             * 访问后端资源耗时总和，包括申请连接资源耗时，建立连接耗时，调用后端服务耗时，单位：毫秒
             * @example `324`
             */
            ServiceLatency: string;
            /**
             * 请求时间，UTC
             * @example `2022-10-29T03:59:59Z`
             */
            RequestTime: string;
            /**
             * 后端返回的具体错信息
             * @example `error msg`
             */
            Exception: string;
            /**
             * 自定义API调用链id
             * @example `95657ED9-2F6F-426F-BD99-79C8********`
             */
            CustomTraceId: string;
            /**
             * 从JWT中解析出来的Claim，可以在分组上配置
             * @example `{}`
             */
            JwtClaims: string;
            /**
             * 客户端请求协议：HTTP/HTTPS/WS
             * @example `HTTP`
             */
            RequestProtocol: string;
            /**
             * 客户端请求的header内容
             * @example `content-type: application/x-www-form-urlencoded`
             */
            RequestHeaders: string;
            /**
             * 客户端请求的queryString
             * @example `username=name`
             */
            RequestQueryString: string;
            /**
             * 客户端请求的body内容，最多1024个字节
             * @example `param=paramName`
             */
            RequestBody: string;
            /**
             * API响应的header内容
             * @example `content-type: application/x-www-form-urlencoded
            `
             */
            ResponseHeaders: string;
            /**
             * API响应的response内容，最多1024个字节
             * @example `param=paramName
            `
             */
            ResponseBody: string;
            /**
             * API请求命中的插件列表及相关上下文
             * @example `[]`
             */
            plugin: string;
            /**
             * API网关自调用时，例如API-1调用API-2 ，那么API-2的日志中会用initialRequestId来记录API-1的requestid
             * @example `95657ED9-2F6F-426F-BD99-79C8********`
             */
            InitialRequestId: string;
            /**
             * APP名称
             * @example `VIPROOM_VIPROOM`
             */
            AppName: string;
            /**
             * API网关开始接收到客户端请求的时间点
             */
            FrontRequestStart: number;
            /**
             * API网关完成接收客户端请求的时间点
             */
            FrontRequestEnd: number;
            /**
             * API网关开始向后端服务发起请求的时间点
             */
            BackendRequestStart: number;
            /**
             * API网关完成向后端服务发起请求的时间点
             */
            BackendRequestEnd: number;
            /**
             * API网关开始接收到后端服务响应的时间点
             */
            BackendResponseStart: number;
            /**
             * API网关完成接收后端服务响应的时间点
             */
            BackendResponseEnd: number;
            /**
             * API网关开始向客户端发送响应的时间点
             */
            FrontResponseStart: number;
            /**
             * API网关完成向客户端发送响应的时间点
             */
            FrontResponseEnd: number;
        }[];
    };
}
