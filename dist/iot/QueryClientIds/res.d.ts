export interface QueryClientIdsResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `89F22330-BAEE-****-****-41BA46D6E267`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：表示调用成功。
     * - **false**：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 设备包含标识ID时，返回的标识列表。详细内容，请参见**DynamicRegClientIds**信息。
     */
    Data: {
        /**
         * 设备ID。
         * @example `y4u2weAI********HMle1234`
         */
        IotId: string;
        /**
         * 设备标识列表。
         */
        DynamicRegClientIds: {
            /**
             * 设备标识创建时间。
             * @example `1636514022424`
             */
            CreateTime: number;
            /**
             * 设备标识。
             * @example `9rSzYt4js92********f000112`
             */
            ClientId: string;
        }[];
    };
}
