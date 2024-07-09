export interface QueryUserNeedAuthResponse {
    /**
     * 请求id
     * @example `2C859C36-886C-5BE7-A606-01F38A5374D6`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 是否需要认证
     * @example `True`
     */
    NeedAuth: boolean;
}
