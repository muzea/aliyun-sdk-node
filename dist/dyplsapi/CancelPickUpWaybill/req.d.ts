export interface CancelPickUpWaybillRequest {
    /**
     * HTTP请求内容类型。
     * 非必填，如果填，请填写application/json;chatset=UTF-8
     * @example `application/json;chatset=UTF-8`
     */
    "Content-Type"?: string;
    /**
     * 外部订单号。
     * @example `1145678823****`
     */
    "OuterOrderCode": string;
    /**
     * 取消原因。
     * @example `不想退货了`
     */
    "CancelDesc": string;
}
