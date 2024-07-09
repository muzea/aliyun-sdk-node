export interface GetPreSignedUrlResponse {
    /**
     * 无
     * @example `无`
     */
    Message: string;
    /**
     * 请求 ID
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4bad38`
     */
    RequestId: string;
    /**
     * 无
     * @example `http://shuanglu-pre.oss-cn-beijing.aliyuncs.com/13ba4081-84f3-42b0-af93-10a64319f8ef/test.txt`
     */
    Data: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
}
