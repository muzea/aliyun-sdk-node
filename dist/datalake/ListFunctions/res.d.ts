export interface ListFunctionsResponse {
    /**
     * 状态码描述
     * @example `OK`
     */
    Code: string;
    /**
     * 函数详情列表
     */
    Functions: any[];
    /**
     * 提示相关错误信息
     * @example `.`
     */
    Message: string;
    /**
     * 翻页token
     * @example `2cb472ec1bf84f8d92f9c4baa0d21c19aa`
     */
    NextPageToken: string;
    /**
     * 请求ID
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
