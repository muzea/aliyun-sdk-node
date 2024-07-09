export interface CreateProductTagsResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功，表示产品绑定标签成功。
     * - **false**：调用失败，表示产品绑定标签失败。
     * @example `true`
     */
    Success: boolean;
    InvalidProductTags: {
        /**
         * 调用失败时，返回不合法的产品标签列表。
         */
        ProductTag: {
            /**
             * 标签值。
             * @example `123$`
             */
            TagValue: string;
            /**
             * 标签键。
             * @example `room`
             */
            TagKey: string;
        }[];
    };
}
