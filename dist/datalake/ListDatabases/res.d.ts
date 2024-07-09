export interface ListDatabasesResponse {
    /**
     * 状态描述
     * @example `OK`
     */
    Code: string;
    /**
     * 元数据库列表
     * @example `[{"name":"test"}]`
     */
    Databases: any[];
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
     * @example `558D764F-8C55-49CA-BF38-80EA532FC08F`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
