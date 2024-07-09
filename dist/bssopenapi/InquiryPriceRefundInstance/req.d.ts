export interface InquiryPriceRefundInstanceRequest {
    /**
     * 需要幂等场景必填。UUID生成的字符串。此字段用于幂等，多次调用传入同样的值，会返回第一次的结果。
     * @example `793F021C-B589-1225-82A9-99232AEBE494`
     */
    "ClientToken"?: string;
    /**
     * 退订场景必填，产品code
     * @example `ecs`
     */
    "ProductCode"?: string;
    /**
     * 退订场景必填，实例id
     * @example `i-bp1etb69sqxgl4*******`
     */
    "InstanceId"?: string;
    /**
     * 退订场景必填，产品类型，无特殊说明传入“” 空字符串。
     * @example `”“`
     */
    "ProductType"?: string;
}
