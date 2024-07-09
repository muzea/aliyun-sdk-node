export interface ListNamespaceChangeOrdersResponse {
    /**
     * 请求ID。
     * @example `0bc3915638507554994370d****`
     */
    RequestId: string;
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**列表。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 获取发布单列表是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
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
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 调用链ID，用于精确查询调用信息。
     * @example `0bc3915638507554994370d****`
     */
    TraceId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 当前分页。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页大小。
         * @example `20`
         */
        PageSize: number;
        /**
         * 变更单总数。
         * @example `32`
         */
        TotalSize: number;
        /**
         * 发布单列表。
         */
        ChangeOrderList: {
            /**
             * 发布单状态。取值说明如下：
             * - **0**：准备。
             * - **1**：执行中。
             * - **2**：执行成功。
             * - **3**：执行失败。
             * - **6**：终止。
             * - **10**：系统异常执行失败。
             * @example `2`
             */
            Status: number;
            /**
             * 结束时间。
             * @example `2019-07-11 20:12:58`
             */
            FinishTime: string;
            /**
             * 命名空间ID。
             * @example `cn-shanghai:test`
             */
            NamespaceId: string;
            /**
             * 创建时间。
             * @example `2019-07-11 15:54:49`
             */
            CreateTime: string;
            /**
             * 用户ID。
             * @example `test_sae`
             */
            UserId: string;
            /**
             * 变更单操作入口来源。
             * @example `console`
             */
            Source: string;
            /**
             * 创建用户ID。
             * @example `test@aliyun.com`
             */
            CreateUserId: string;
            /**
             * 分批数。
             * @example `1`
             */
            BatchCount: number;
            /**
             * 发布单类型Code。取值说明如下：
             * - **CoBatchStartApplication**：批量启动应用。
             * - **CoBatchStopApplication**：批量停止应用。
             * @example `CoBatchStartApplication`
             */
            CoTypeCode: string;
            /**
             * 发布单ID。
             * @example `7fa5c0-9ebb-4bb4-b383-1f885447****`
             */
            ChangeOrderId: string;
            /**
             * 分批类型。取值说明如下：
             * - **自动**：分批间处理方式为自动。
             * - **手动**：分批间处理方式为手动。
             * @example `自动`
             */
            BatchType: string;
            /**
             * 发布单描述信息。
             * @example `批量启动应用`
             */
            Description: string;
            /**
             * 分组ID。
             * @example `c9ecd2-cf6c-46c3-9f20-525de202****`
             */
            GroupId: string;
            /**
             * 发布单类型，是对**CoTypeCode**的描述。
             * @example `msg.docker.app.actions.CoBatchStartApplication`
             */
            CoType: string;
            /**
             * 变更流水线。
             * @example `xxxx`
             */
            Pipelines: string;
        }[];
    };
}
