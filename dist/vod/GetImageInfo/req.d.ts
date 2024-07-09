export interface GetImageInfoRequest {
    /**
     * 图片ID。可通过以下方式获取：
     * - 可登录[点播控制台](https://vod.console.aliyun.com/)，选择**媒资库>图片**，查看ID。
     * - 调用[CreateUploadImage](~~CreateUploadImage~~)接口获取上传地址和凭证时会返回。
     * - 调用[SearchMedia](~~SearchMedia~~)接口查询图片时会返回。
     * @example `3e34733b40b9a96ccf5c1ff6f69****`
     */
    "ImageId": string;
    /**
     * 图片访问地址的过期时间。单位：秒。
     * - 当OutputType取值为cdn时：
     *     - 只有开启了URL鉴权的图片地址才会过期失效，否则会永久有效。
     *     - 最小值：1。
     *     - 最大值：无限制。
     *     - 默认值：未设置时，取值为URL鉴权中设置的默认有效时长。
     * - 当OutputType取值为oss时：
     *     - 只有存储权限为私有，播放地址才会过期失效，否则会永久有效。
     *     - 最小值：1。
     *     - 最大值：为降低源站安全风险，当图片存储在点播系统Bucket上时，最大值为**2592000**（即30天），当图片存储在OSS自有Bucket上时，最大值为**129600**（即36小时）。
     *     - 默认值：未设置时，取值为3600。
     * @example `3600`
     */
    "AuthTimeout"?: number;
    /**
     * 输出的图片访问地址的类型。取值范围 ：
     * - oss：回源地址。
     * - cdn（默认）：加速地址。
     * @example `cdn`
     */
    "OutputType"?: string;
}
