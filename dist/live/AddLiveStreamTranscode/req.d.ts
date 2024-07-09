export interface AddLiveStreamTranscodeRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 播流所属应用名称。
     * - App取值必须与推流地址中的AppName名称一样，转码模板才能生效。取值不超过256字符，支持数字、大小写字母、短划线（-）、下划线（_）。
     * - App也支持取值为单个星号（*）字符，表示匹配任意字符串（包括空字符串）。
     * > 如果配置了App为单个星号（\*）的转码模板：当用户拉流转码时，优先匹配和推流地址中AppName名称一样的转码模板；若不存在和推流地址中AppName名称一样的转码模板，则会匹配App为单个星号（*）的转码模板。
     * @example `liveApp****`
     */
    "App": string;
    /**
     * 转码模版。取值：
     * - 标准质量模板：
     *     - **lld**：流畅。
     *     -  **lsd**：标清。
     *     -  **lhd**：高清。
     *     -  **lud** ：超清。
     *
     * - 窄带高清™转码模板：
     *     - **ld**：流畅。
     *
     *     - **sd**：标清。
     *
     *     - **hd**：高清。
     *
     *     - **ud**：超清。
     * @example `lsd`
     */
    "Template": string;
    /**
     * 加密配置。JSON格式，各字段说明如下：
     * - EncryptType：加密类型。固定取值**aliyun**。
     * - KmsKeyID：用户KMS主密钥ID。
     * - KmsKeyExpireInterval：换Key周期。取值范围：**60~3600**，单位：秒。
     * @example `{"EncryptType": "aliyun", "KmsKeyID":"afce5722-81d2-43c3-9930-7601da11****","KmsKeyExpireInterval":"3600"}`
     */
    "EncryptParameters"?: string;
    /**
     * 是否采用懒加载的模式进行转码。默认取值为**yes**。
     * @example `yes`
     */
    "Lazy"?: string;
}
