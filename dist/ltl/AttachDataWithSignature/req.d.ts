export interface AttachDataWithSignatureRequest {
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
     * 数据value。
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
     * @example `183329761572****`
     */
    "IotId": string;
    /**
     * IoT设备服务提供方标识。
     * @example `g9R4ghe****`
     */
    "IotIdServiceProvider": string;
    /**
     * IoT数据Value摘要。
     * 1. Value数据UTF-8编码。
     * 2. SHA256运算，结果为32字节数据。
     * 3. 转换为64字节字符串格式（大写字符）。
     * @example `94894989498FDDABD51698BD1A49BF1AFB0AA94FAA8DB65A689164BEED******`
     */
    "IotDataDigest": string;
    /**
     * IoT设备数据签名。
     * 使用 IoT 设备安全 SDK 进行签名。
     * @example `2~2~192ADFB498AA****~1579198300000~J8E891NAgAhwHBHm8******​/hnswr698HSb09ahS8709bn9s03jg98u4jg******`
     */
    "IotSignature": string;
    /**
     * IoT设备服务提供方。
     * - **1**：开放平台。
     * - **2**：物联网平台。
     * @example `2`
     */
    "IotIdSource": string;
    /**
     * 1. 用户业务ID，同一个Key，业务ID必须唯一。格式为64字符，合法字符范围\[0-9,a-f,A-F\]。
     * 2. 如果不包含该参数，则返回当前Key最新数据。
     * @example `000000000000000000000000000000000000000000000000000000000001****`
     */
    "BusinessId"?: string;
}
