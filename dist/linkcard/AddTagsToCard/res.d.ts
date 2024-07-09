export interface AddTagsToCardResponse {
    /**
     * 接口返回码。
     * 200：表示成功。 其它：表示错误码。错误码详情，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 该卡已有标签的集合。
     */
    Data: {
        /**
         * 标签名称。
         * @example `测试标签`
         */
        TagName: string;
        /**
         * 标签ID。
         * @example `14`
         */
        TagId: string;
    }[];
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * true：调用成功。 false：调用失败。
     * @example `true`
     */
    Success: boolean;
}
