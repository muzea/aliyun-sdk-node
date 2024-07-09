export interface ListExpressConnectRouterSupportedRegionResponse {
    /**
     * 请求ID。
     * @example `6FABF516-FED3-5697-BDA2-B18C5D9A****
    `
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - True：成功。
     * - False：失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * 判断调用是否成功。返回值为200表示加载成功，返回其他值表示加载失败，失败原因参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 操作返回信息。
     * @example `OK`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 开服地域列表。
     */
    SupportedRegionIdList: string[];
}
