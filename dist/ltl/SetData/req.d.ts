export interface SetDataRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 数据Key唯一标识。
     * @example `0001_HB5jyvZWzwcMFSFg_0X58_80aa976ac4d64a97b******a509d4c0b`
     */
    "Key": string;
    /**
     * 数据Value。
     * @example `某公司某业务数据。`
     */
    "Value": string;
    /**
     * 业务链编码。
     * @example `HB5jyvZWz******g`
     */
    "ProductKey": string;
}
