export interface SetDataWithSignatureRequest {
    /**
     * API版本号，"1.0.0"。
     * @example `1.0.0`
     */
    "ApiVersion": string;
    /**
     * 数据Key唯一标识。
     * @example `0001_HB5jyvZWzwcMFSFg_0X58_80aa976ac4d64a97bd45c71a509d****`
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
     * IoT认证方式。
     * **ID2**：阿里云Link ID²。
     * @example `ID2`
     */
    "IotAuthType": string;
    /**
     * IoT设备唯一标识。
     * @example `00CCCC098D98F2BDD8BB****`
     */
    "IotId": string;
    /**
     * IoT设备服务提供方标识。
     * @example `kKpACh5****`
     */
    "IotIdServiceProvider": string;
    /**
     * IoT可信数据Value摘要：
     * 1.  Value数据UTF-8编码。
     * 2.  SHA256运算，结果为32字节数据。
     * 3.  转换为64字节字符串格式（大写字符）。
     * @example `31A200471049AEA3B8459455B4447D05DD1290A875A17792F71D5550F048****`
     */
    "IotDataDigest": string;
    /**
     * IoT设备数据签名。使用IoT设备安全SDK进行签名。
     * @example `3~2~010253040257****~1599722505821~50sZwIXt9jtTTIoGAkEs4THSyCMghVVaYO1w2AcvQf0vm51MQYt0nfHUT7jQ****`
     */
    "IotSignature": string;
    /**
     * IoT设备服务提供方。
     * - **1**：开放平台。
     * - **2**：物联网平台。
     * @example `2`
     */
    "IotIdSource": string;
}
