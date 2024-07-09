export interface AttachDataRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 数据Key唯一标识。
     * @example `0001_HB5jyvZWzwcM****_0X**_80aa976ac4d64a97bd45c71a509d****`
     */
    "Key": string;
    /**
     * 数据Value。
     * @example `某公司某业务数据。`
     */
    "Value": string;
    /**
     * 业务链编码。
     * @example `HB5jyvZWzwcM****`
     */
    "ProductKey": string;
    /**
     * 1. 用户业务ID，同一个Key，业务ID必须唯一。格式为64字符，合法字符范围\[0-9,a-f,A-F\]。
     * 2. 如果不包含该参数，则返回当前Key最新数据。
     * @example `000000000000000000000000000000000000000000000000000000000001****`
     */
    "BusinessId"?: string;
}
