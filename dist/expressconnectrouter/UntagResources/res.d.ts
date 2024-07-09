export interface UntagResourcesResponse {
    /**
     * 请求ID。
     * @example `6FABF516-FED3-5697-BDA2-B18C5D9A****
    `
     */
    RequestId: string;
    /**
     * 是否调用成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 判断调用是否成功。返回值为200表示加载成功，返回其他值表示加载失败，失败原因参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 接口返回信息
     * @example `OK`
     */
    Message: string;
}
