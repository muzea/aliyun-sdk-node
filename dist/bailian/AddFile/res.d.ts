export interface AddFileResponse {
    /**
     * 每次请求的唯一ID
     * @example `778C0B3B-xxxx-5FC1-A947-36EDD13606AB`
     */
    RequestId: string;
    /**
     * 接口返回的业务字段
     */
    Data: {
        /**
         * 文件唯一ID字段，后续查询等接口操作时使用
         * @example `file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX`
         */
        FileId: string;
        /**
         * 解析该文档使用的解析器类型
         * @example `DASHSCOPE_DOCMIND`
         */
        Parser: string;
    };
    /**
     * 接口返回的状态码
     * @example `200`
     */
    Status: string;
    /**
     * 调用是否成功
     * @example `true`
     */
    Success: string;
    /**
     * 错误信息，有错误信息时返回该值
     * @example `User not authorized to operate on the specified resource.`
     */
    Message: string;
    /**
     * 错误状态码
     * @example `DataCenter.FileTooLarge`
     */
    Code: string;
}
