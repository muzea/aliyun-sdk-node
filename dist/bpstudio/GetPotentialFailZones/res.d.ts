export interface GetPotentialFailZonesResponse {
    /**
     * 请求ID
     * @example `BFB7F5C8-FE7A-06CA-9F87-ABBF6B848F0C`
     */
    RequestId: string;
    /**
     * 报错信息
     * @example `The specified ResourceIds are not found in our records.`
     */
    Message: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 当前容灾服务可切换的可用区列表
     */
    Data: string[];
}
