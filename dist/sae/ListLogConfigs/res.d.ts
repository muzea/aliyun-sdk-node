export interface ListLogConfigsResponse {
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
     * @example `ac1d5e2c15671581252413581d****`
     */
    TraceId: string;
    /**
     * 文件日志信息。
     */
    Data: {
        /**
         * 日志配置。
         */
        LogConfigs: {
            /**
             * 日志服务配置名称。
             * @example `sae-1f240907a6faf58c653f09e81b7e****`
             */
            ConfigName: string;
            /**
             * 日志文件路径。
             * @example `/root/logs/hsf/hsf.log`
             */
            LogDir: string;
            /**
             * 日志服务日志存储名。
             * @example `sae-1f240907a6faf58c653f09e81b7e****`
             */
            SlsLogStore: string;
            /**
             * 日志配置创建时间。
             * @example `2019-08-29 17:18:00`
             */
            CreateTime: string;
            /**
             * 日志服务存储类型。
             * @example `sls`
             */
            StoreType: string;
            /**
             * 日志服务项目ID。
             * @example `sae-56f77b65-788d-442a-9885-7f20d91f****`
             */
            SlsProject: string;
            /**
             * 日志类型，当前只支持**file_log**。
             * @example `file_log`
             */
            LogType: string;
            /**
             * 地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
        }[];
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 总条数。
         * @example `1`
         */
        TotalSize: number;
        /**
         * 分页查询时设置的每页数量。
         * @example `10`
         */
        PageSize: number;
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
     * 获取应用日志列表是否成功。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
}
