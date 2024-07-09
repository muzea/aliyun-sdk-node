export interface AddLogPathResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `3616cdca-4f92-4413**********`
     */
    RequestId: string;
}
