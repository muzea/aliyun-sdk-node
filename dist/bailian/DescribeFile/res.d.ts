export interface DescribeFileResponse {
    /**
     * 接口返回的状态码
     * @example `200`
     */
    Status: string;
    /**
     * 每次请求的唯一ID
     * @example `17204B98-xxxx-4F9A-8464-2446A84821CA`
     */
    RequestId: string;
    /**
     * 接口返回的业务字段
     */
    Data: {
        /**
         * 文件名称
         * @example `test.pdf`
         */
        FileName: string;
        /**
         * 解析该文档使用的解析器类型
         * @example `DASHSCOPE_DOCMIND`
         */
        Parser: string;
        /**
         * 文件实际添加到百炼中的时间戳，格式: yyyy-MM-dd HH:mm:ss，时区：UTC +8
         * @example `2024-05-26 12:45:43`
         */
        CreateTime: string;
        /**
         * 文件所属类目ID，取值请登录百炼页面获取
         * @example `cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX`
         */
        CategoryId: string;
        /**
         * 文件内容长度，单位字节
         * @example `1234`
         */
        SizeInBytes: number;
        /**
         * 文件类型，扩展名
         * @example `pdf`
         */
        FileType: string;
        /**
         * 文件唯一ID
         * @example `file_9a65732555b54d5ea10796ca5742ba22_XXXXXXXX`
         */
        FileId: string;
        /**
         * 文件状态，常用取值如下：
         * - INIT: 初始化状态，等待调度中。
         * - PARSING: 解析中
         * - PARSE_SUCCESS：解析完成
         * -  PARSE_FAILED：解析失败
         * @example `PARSE_SUCCESS`
         */
        Status: string;
    };
    /**
     * 接口调用是否成功：
     * - `true`：成功
     * - `false`：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息，有错误信息时可以从该值获取
     * @example `Requests throttling triggered.`
     */
    Message: string;
    /**
     * 响应code
     * @example `Success`
     */
    Code: string;
}
