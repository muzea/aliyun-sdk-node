export interface BatchUpdateFileMetaResponse {
    /**
     * 请求ID。
     * @example `F5BF215E-3237-0852-B9C6-F233D44A****`
     */
    RequestId: string;
    /**
     * 本次更新的文件列表。
     */
    Files: {
        /**
         * 文件地址。
         * @example `oss://examplebucket/example.jpg`
         */
        URI: string;
        /**
         * 更新是否成功。
         * @example `false`
         */
        Success: boolean;
        /**
         * 当参数Success返回false时，返回的错误信息。
         * @example `*error.OpError : InvalidArgument | Index KV count exceeded, should be no more than 100.`
         */
        Message: string;
    }[];
}
