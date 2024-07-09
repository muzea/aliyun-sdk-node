export interface ListAppServicesPageResponse {
    /**
     * 请求ID。
     * @example `2583E089-99C2-562E-8B7E-73512136****`
     */
    RequestId: string;
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0be3e0c816394483660457498e****`
     */
    TraceId: string;
    /**
     * 服务列表信息。
     */
    Data: {
        /**
         * 当前页数。
         * @example `1`
         */
        CurrentPage: string;
        /**
         * 页码总数。
         * @example `1`
         */
        TotalSize: string;
        /**
         * 列表页码。
         * @example `1`
         */
        PageNumber: string;
        /**
         * 页码大小。取值范围\[0, 9999]。
         * @example `9999`
         */
        PageSize: string;
        /**
         * 返回结果。
         */
        Result: {
            /**
             * 应用名称。
             * @example `cn-zhangjiakou-micro-service-******`
             */
            EdasAppName: string;
            /**
             * 服务版本。自定义。
             * @example `1.0.0`
             */
            Version: string;
            /**
             * 实例数量。
             * @example `1`
             */
            InstanceNum: number;
            /**
             * 应用ID。
             * @example `hc4fs1****@98314c8790b****`
             */
            EdasAppId: string;
            /**
             * 服务名称。
             * @example `edas.service.provider`
             */
            ServiceName: string;
            /**
             * 服务分组。自定义。
             * @example `springCloud`
             */
            Group: string;
        }[];
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
     *   - **2xx**：成功。
     *   - **3xx**：重定向。
     *   - **4xx**：请求错误。
     *   - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取服务列表是否成功。取值说明如下：
     *   - **true**：获取成功。
     *   - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
