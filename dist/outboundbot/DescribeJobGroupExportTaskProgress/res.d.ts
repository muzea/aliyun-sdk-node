export interface DescribeJobGroupExportTaskProgressResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 文件地址
     * @example `http://xxx.xx.com/xx`
     */
    FileHttpUrl: string;
    /**
     * 导出进度
     * @example `45.0`
     */
    Progress: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
}
