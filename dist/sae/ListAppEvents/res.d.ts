export interface ListAppEventsResponse {
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B4D805CA-926D-41B1-8E63-7AD0C1ED****`
     */
    RequestId: string;
    /**
     * 事件列表。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 事件。
         */
        AppEventEntity: {
            /**
             * 对象种类。
             * @example `Pod`
             */
            ObjectKind: string;
            /**
             * 事件类型。
             * @example `Normal`
             */
            EventType: string;
            /**
             * 最后出现时间。
             * @example `2020-02-19T05:01:28Z`
             */
            LastTimestamp: string;
            /**
             * 事件信息。
             * @example `Created container`
             */
            Message: string;
            /**
             * 对象名称。
             * @example `errew-b86bf540-b4dc-47d8-a42f-b4997c14bd8f-5595cbddd6-2****`
             */
            ObjectName: string;
            /**
             * 事件原因。
             * @example `Created`
             */
            Reason: string;
            /**
             * 首次出现时间。
             * @example `2020-02-19T05:01:28Z`
             */
            FirstTimestamp: string;
        }[];
        /**
         * 应用事件总数。
         * @example `20`
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
     * 查看应用事件是否成功。取值说明如下：
     * - **true**：查看成功。
     * - **false**：查看失败。
     * @example `true`
     */
    Success: boolean;
}
