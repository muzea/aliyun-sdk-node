export interface ListConsumedServicesResponse {
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
     * 微服务列表信息。
     */
    Data: {
        /**
         * 发布的服务类型。
         * @example `RPC`
         */
        Type: string;
        /**
         * 消费的服务对应的组别。
         */
        Groups: string[];
        /**
         * 发布的服务版本。
         * @example `1.0.0`
         */
        Version: string;
        /**
         * 应用ID。
         * @example `b2a8a925-477a-4ed7-b825-d5e22500****`
         */
        AppId: string;
        /**
         * 保留字段。
         * @example `{}`
         */
        Group2Ip: string;
        /**
         * 服务订阅地址。
         */
        Ips: string[];
        /**
         * 发布的服务名称。
         * @example `com.alibaba.nodejs.ItemService`
         */
        Name: string;
    }[];
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
     * 获取订阅的微服务列表是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
