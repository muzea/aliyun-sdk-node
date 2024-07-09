export interface GetAttachedMediaInfoRequest {
    /**
     * 辅助媒资ID。
     * - 多个ID之间使用半角逗号（,）分隔，最多支持20个ID。
     * - 调用[CreateUploadAttachedMedia](~~CreateUploadAttachedMedia~~)接口获取辅助媒资上传地址和凭证后，会返回。
     * @example `eb1861d2c9a842340e989dd56****,0222e203cf80f9c22870a4d2c****`
     */
    "MediaIds": string;
    /**
     * 辅助媒资地址过期时间，单位：秒。
     *  - 如果OutputType取值为**cdn**：
     *     - 只有开启了URL鉴权的辅助媒资地址才会过期失效，否则会永久有效。
     *     - 最小值：**1**。
     *     - 最大值：无限制。
     *     - 默认值：未设置时，取值为URL鉴权中设置的默认有效时长。
     * - 如果OutputType取值为**oss**：
     *     - 只有存储权限为私有，辅助媒资地址才会过期失效，否则会永久有效。
     *     - 最小值：**1**。
     *     - 最大值：为降低源站安全风险，当辅助媒资存储在点播系统Bucket上时，最大值为**2592000**（即30天），当辅助媒资存储在OSS自有Bucket上时，最大值为**129600**（即36小时）。
     *     - 默认值：未设置时，取值为**3600**。
     * @example `3600`
     */
    "AuthTimeout"?: number;
    /**
     * 输出地址类型。取值：
     * - **oss**：回源地址。
     * - **cdn**（默认）：加速地址。
     * @example `oss`
     */
    "OutputType"?: string;
}
