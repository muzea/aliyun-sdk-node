export interface RefundInstanceRequest {
    /**
     * 需要幂等场景必填。UUID生成的字符串。此字段用于幂等，多次调用传入同样的值，会返回第一次的结果。调用后如果返回了结果，可以解析到退款订单编号，代表调用成功。
     * @example `793F021C-B589-1225-82A9-99232AEBE494`
     */
    "ClientToken"?: string;
    /**
     * 退订场景必填。1：标识立即释放。0：标识先停机，根据停机策略停机。仅部分商品支持。默认都是立即释放。
     * @example `1`
     */
    "ImmediatelyRelease"?: string;
    /**
     * 退订场景必填，产品code。如果调用后错误码提示产品不支持，可提交工单申请云产品允许开通此功能。
     * @example `ecs`
     */
    "ProductCode"?: string;
    /**
     * 退订场景必填，实例id，非自定义名称。
     * @example `i-bp1etb69sqxgl4*******`
     */
    "InstanceId"?: string;
    /**
     * 退订场景必填，产品类型，无特殊说明传入空字符串。在调试工具上，无需手动输入，鼠标放到输入框上，会弹出"输入空字符串"的按钮，点击此按钮即可。通过代码发起退订时，传入英文字符下的空字符串 ""。
     * @example `空字符串`
     */
    "ProductType"?: string;
}
