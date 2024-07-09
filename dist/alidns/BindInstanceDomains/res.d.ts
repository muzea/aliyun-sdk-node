export interface BindInstanceDomainsResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    /**
     * 绑定失败个数。
     * @example `0`
     */
    FailedCount: number;
    /**
     * 绑定成功个数。
     * @example `2`
     */
    SuccessCount: number;
}
