export interface UnbindInstanceDomainsResponse {
    /**
     * 唯一请求识别码。
     * @example `123`
     */
    RequestId: string;
    /**
     * 域名解绑失败个数。
     * @example `0`
     */
    FailedCount: number;
    /**
     * 域名解绑成功个数。
     * @example `2`
     */
    SuccessCount: number;
}
