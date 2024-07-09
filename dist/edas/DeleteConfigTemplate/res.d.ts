export interface DeleteConfigTemplateResponse {
    /**
     * 请求ID。
     * @example `D16979DC-4D42-************`
     */
    RequestId: string;
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
}
