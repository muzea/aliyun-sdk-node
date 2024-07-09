export interface CreateWmBaseImageRequest {
    /**
     * 水印类型。取值：
     * - **PureWebappInvisible**：网页水印。
     * - **PureAppInvisible**：App水印。
     * - **PureScreenInvisible**：屏幕水印。
     * - **AigcWebappInvisible**：AIGC网页水印。
     * - **AigcAppInvisible**：AIGC App水印。
     * - **AigcScreenInvisible**：AIGC屏幕水印。
     * @example `PureWebappInvisible`
     */
    "WmType": string;
    /**
     * 水印信息的容量位宽，默认为32。该参数嵌入和提取时需要保持一致。比如嵌入式使用的是 40 位的SDK，那么提取时也需要将该值设为 40。
     * @example `32`
     */
    "WmInfoSize"?: number;
    /**
     * 10进制数字格式水印信息。若设置该值，则 WmInfoBytesB64 不能设置。
     * 取值范围取决于  WmInfoSize 参数：
     * - 当 WmInfoSize 为**32**时，取值范围为 1~4294967295。
     * - 当 WmInfoSize 为**40**时，取值范围为 1~1099511627775。
     * - 当 WmInfoSize 为**64**时，取值范围为 1~18446744073709551615。
     * @example `12*****`
     */
    "WmInfoUint"?: string;
    /**
     * Base64编码后的字符串格式水印信息 。长度1～300个字符。若设置该值，则 WmInfoUint 参数不能设置。
     * @example `aGVsbG8gc2F*****`
     */
    "WmInfoBytesB64"?: string;
    /**
     * 水印图片的缩放比例。
     * @example `1`
     */
    "Scale": number;
    /**
     * 水印图片的宽度，单位为像素。取值：100~5000。
     * @example `1920`
     */
    "Width": number;
    /**
     * 水印图片的高度，单位为像素。取值：100~5000。
     * @example `1080`
     */
    "Height": number;
    /**
     * 水印图片的透明度。取值：1~255。取值越大，透明度越低。
     * @example `255`
     */
    "Opacity": number;
}
