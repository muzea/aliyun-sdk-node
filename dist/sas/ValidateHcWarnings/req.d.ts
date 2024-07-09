export interface ValidateHcWarningsRequest {
    /**
     * 需要进行验证操作的风险项ID列表。如果有多个风险项ID，使用英文逗号（,）隔开。
     * >  您可以调用[DescribeCheckWarnings](~~DescribeCheckWarnings~~)接口获取该参数。
     * @example `43`
     */
    "RiskIds"?: string;
    /**
     * 要验证的服务器的UUID。多个UUID使用半角逗号（,）分隔。
     * >  您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `78645c8e-2e89-441b-8eb***,a9622a6b-adb5-4dd3-929e,0136460a-1cb5-44e8-****`
     */
    "Uuids"?: string;
    /**
     * 检查项的ID。多个检查项ID使用半角逗号（,）分隔。
     * > 您可调用[DescribeCheckWarningSummary](~~116179~~)接口获取检查项ID。
     * @example `695,234`
     */
    "CheckIds"?: string;
    "Status"?: number;
}
