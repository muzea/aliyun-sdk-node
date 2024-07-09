export interface ListTagResourcesResponse {
    /**
     * 请求ID。
     * @example `7414187F-4F59-4585-9BCF-5F0804E4****`
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
     * 调用链ID，可用于精确查询调用信息。
     * @example `0bc5f84e15916043198032146d****`
     */
    TraceId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 一次查询最多返回50条结果，当结果超过50条时，会同时返回一个NextToken，下一次查询使用该NextToken即可查询前50条结果之外的结果。
         * @example `""`
         */
        NextToken: string;
        /**
         * 应用和标签的对应关系。
         */
        TagResources: {
            /**
             * 资源类型，仅支持`application`。
             * @example `ALIYUN::SAE::APPLICATION`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `v1`
             */
            TagValue: string;
            /**
             * 应用ID。
             * @example `d42921c4-5433-4abd-8075-0e536f8b****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `k1`
             */
            TagKey: string;
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
     * 查询应用和标签的对应关系是否成功。取值说明如下：
     * - **true**：查询成功。
     * - **false**：查询失败。
     * @example `true`
     */
    Success: boolean;
}
