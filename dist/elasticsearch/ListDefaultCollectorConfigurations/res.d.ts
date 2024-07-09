export interface ListDefaultCollectorConfigurationsResponse {
    /**
     * 请求ID。
     * @example `8BAE3C32-8E4A-47D6-B4B0-95B5DE643BF5`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 配置文件内容。
         * @example `- key: log\n  title: Log file content\n  description: >\n    Contains log file lines.\n  fields:\n ......`
         */
        content: string;
        /**
         * 配置文件名称。
         * @example `fields.yml`
         */
        fileName: string;
    }[];
}
