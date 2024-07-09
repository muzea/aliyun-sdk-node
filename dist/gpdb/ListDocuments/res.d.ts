export interface ListDocumentsResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 接口返回详细信息。
     * @example `Successful`
     */
    Message: string;
    /**
     * API执行状态，取值说明：
     * - **success**：执行成功。
     * - **fail**：执行失败。
     * @example `success`
     */
    Status: string;
    Items: {
        /**
         * 文档列表。
         */
        DocumentList: {
            /**
             * 文件名。
             * @example `music.txt`
             */
            FileName: string;
            /**
             * 文档来源。
             * @example `http://oss.xxx/music.txt`
             */
            Source: string;
        }[];
    };
}
