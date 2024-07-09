export interface DescribeExportProgressResponse {
    /**
     * 状态
     * @example `FINISHED`
     */
    Status: string;
    /**
     * 请求id
     * @example `b19af5ce5314ac08108d1b33fe20e15`
     */
    RequestId: string;
    /**
     * 文件url
     * @example `http://ssml-test.oss-cn-shanghai.aliyuncs.com/key`
     */
    FileHttpUrl: string;
}
