export interface GetTokenResponse {
    /**
     * 请求ID，用于诊断和答疑。
     * @example `473469C7-AA6F-4DC5-B3DB-xxxxxxxx`
     */
    RequestId: string;
    /**
     * 任务分享令牌，可作为API GetJob的参数Token，查看分享的任务的信息
     * @example `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9*****`
     */
    Token: string;
}
