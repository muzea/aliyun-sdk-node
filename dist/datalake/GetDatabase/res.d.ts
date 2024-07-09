export interface GetDatabaseResponse {
    /**
     * 状态描述
     * @example `OK`
     */
    Code: string;
    /**
     * 元数据库详情
     */
    Database: any;
    /**
     * 提示相关错误信息
     * @example `.`
     */
    Message: string;
    /**
     * 请求ID
     * @example `D659761F-29C3-409D-805A-0CF33A320128`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
