export interface CreateAccessPageResponse {
    /**
     * 请求Id。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `找不到项目`
     */
    Message: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 创建成功时，返回的访问页面唯一id。
     * @example `a-06xnr5lyp77e7****`
     */
    Data: string;
}
