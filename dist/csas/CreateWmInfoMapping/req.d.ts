export interface CreateWmInfoMappingRequest {
    /**
     * 水印类型。取值：
     * - **PureWebappInvisible**：网页水印。
     * - **PureAppInvisible**：App水印。
     * - **PureScreenInvisible**：屏幕水印。
     * - **PureDocument**：文档水印。
     * - **PureImage**：图片水印。
     * - **PureAudio**：音频水印。
     * - **PureVideo**：视频水印。
     * - **AigcWebappInvisible**：AIGC网页水印。
     * - **AigcAppInvisible**：AIGC App水印。
     * - **AigcScreenInvisible**：AIGC屏幕水印。
     * - **AigcDocument**：AIGC文档水印。
     * - **AigcImage**：AIGC图片水印。
     * - **AigcAudio**：AIGC音频水印。
     * - **AigcVideo**：AIGC视频水印。
     * @example `PureDocument`
     */
    "WmType": string;
    /**
     * 水印信息的容量位宽，默认为32。该参数应该和实际嵌入或者生成透明图时的容量位宽保持一致。取值范围：32~64。
     * @example `32`
     */
    "WmInfoSize"?: number;
    /**
     * Base64编码后的字符串格式水印信息 。长度1～300个字符。
     * @example `aGVsbG8gc2F*****
    `
     */
    "WmInfoBytesB64": string;
}
