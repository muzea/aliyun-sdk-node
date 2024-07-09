export interface LookupWmInfoMappingRequest {
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
     * 水印信息的容量位宽，默认为32。该参数应该和实际嵌入或者生成透明图时的容量位宽保持一致。取值范围：32~64。该参数的值应当和创建映射关系时保持一致。否则会导致查询不到映射关系。
     * @example `32`
     */
    "WmInfoSize"?: number;
    /**
     * 数字格式的水印信息。取值来源：
     * - [CreateWmInfoMapping](~~CreateWmInfoMapping~~)：创建水印信息映射关系接口的**WmInfoUint**返回值。
     * @example `123***`
     */
    "WmInfoUint": string;
}
