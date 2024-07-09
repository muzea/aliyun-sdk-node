export interface DescribeEnumItemsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `E7698CFB-4E1C-5840-8EC9-691B86729E94`
     */
    RequestId: string;
    /**
     * 枚举信息。
     */
    Data: {
        /**
         * 枚举的KEY值。
         * @example `system_xxxxx_process_book`
         */
        Key: string;
        /**
         * 枚举的VALUE值。
         * @example `system_xxxxx_process_book`
         */
        Value: string;
    }[];
}
