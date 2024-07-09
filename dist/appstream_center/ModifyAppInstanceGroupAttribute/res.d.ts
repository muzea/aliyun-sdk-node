export interface ModifyAppInstanceGroupAttributeResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 出错时的错误码。
     * @example `InvalidParameter.ProductType`
     */
    Code: string;
    /**
     * 出错时的错误消息。
     * @example `The parameter ProductType is invalid.`
     */
    Message: string;
}
