export interface DescribeExposedCheckWarningRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 设置基线所属的类型。
     * > 调用[DescribeRiskType](~~DescribeRiskType~~)接口返回的**TypeName**字段。
     * @example `weak_password`
     */
    "TypeName"?: string;
    /**
     * 指定要查询的服务器的UUID。多个UUID使用半角逗号（,）分隔。
     * > 您可调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     * @example `6541631a-7d47-41fd-9fef-9518113f****`
     */
    "Uuids"?: string;
}
