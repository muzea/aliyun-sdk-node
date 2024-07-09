export interface DescribeApplicationSlbsResponse {
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
         * 内网SLB配置。
         */
        Intranet: {
            /**
             * HTTPS协议对应的阿里云证书ID。
             * @example `1513561019707729_16f37aae5f3_-375882821_-169099****`
             */
            HttpsCertId: string;
            /**
             * 支持的协议。
             * @example `TCP`
             */
            Protocol: string;
            /**
             * 容器端口。
             * @example `8080`
             */
            TargetPort: number;
            /**
             * SLB监听端口。
             * @example `80`
             */
            Port: number;
            HttpsCaCertId: string;
            StickySession: boolean;
            StickySessionType: string;
            CookieTimeout: number;
            Cookie: string;
        }[];
        /**
         * 公网SLB地址。
         * @example `59.74.**.**`
         */
        InternetIp: string;
        /**
         * 公网SLB ID。
         * @example `lb-uf6xc7wybefehnv45****`
         */
        InternetSlbId: string;
        /**
         * 公网SLB配置。
         */
        Internet: {
            /**
             * HTTPS协议对应的阿里云证书ID。
             * @example `1513561019707729_16f37aae5f3_-375882821_-169099****`
             */
            HttpsCertId: string;
            /**
             * 支持的协议。
             * @example `TCP`
             */
            Protocol: string;
            /**
             * 容器端口。
             * @example `8080`
             */
            TargetPort: number;
            /**
             * SLB监听端口。
             * @example `80`
             */
            Port: number;
            HttpsCaCertId: string;
            StickySession: boolean;
            StickySessionType: string;
            CookieTimeout: number;
            Cookie: string;
        }[];
        /**
         * 内网SLB ID。
         * @example `lb-uf6xc7wybefehnv45****`
         */
        IntranetSlbId: string;
        /**
         * 内网SLB地址。
         * @example `192.168.0.0`
         */
        IntranetIp: string;
        InternetSlbExpired: boolean;
        IntranetSlbExpired: boolean;
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
     * 获取应用SLB配置信息是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
