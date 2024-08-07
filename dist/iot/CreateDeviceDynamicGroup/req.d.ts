export interface CreateDeviceDynamicGroupRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * @example `iot-***`
     */
    "IotInstanceId": string;
    /**
     * 分组描述。长度不超过100个字符，一个中文占一个字符。
     * @example `test`
     */
    "GroupDesc"?: string;
    /**
     * 分组名称。名称长度为4~30个字符，可包含中文、英文字母、数字和下划线（_）。一个中文占两个字符。
     * @example `grouptest`
     */
    "GroupName": string;
    /**
     * 动态分组规则，用于查询并动态匹配设备到分组。规则表达式编写方法，请参见[类SQL语法说明](~~185713~~)。
     * @example `product_key = "a1***" and name LIKE "test%"`
     */
    "DynamicGroupExpression": string;
}
