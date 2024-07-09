export interface AddStoryFilesResponse {
    /**
     * 请求ID。
     * @example `6E93D6C9-5AC0-49F9-914D-E02678D3****`
     */
    RequestId: string;
    /**
     * 添加的文件列表。
     */
    Files: {
        /**
         * 文件地址。
         * 地址规则为`oss://{bucketname}/{objectname}`，其中`bucketname`为和当前项目处于同一地域的OSS Bucket名称，`objectname`为包含文件名称的文件路径。
         * @example `oss://test-bucket/test-object`
         */
        URI: string;
        /**
         * 错误码。
         * @example `ResourceNotFound`
         */
        ErrorCode: string;
        /**
         * 错误信息。
         * @example `The specified resource %s is not found.`
         */
        ErrorMessage: string;
    }[];
}
