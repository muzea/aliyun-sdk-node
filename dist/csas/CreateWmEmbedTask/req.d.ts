export interface CreateWmEmbedTaskRequest {
    /**
     * 水印类型。取值：
     * - **PureDocument**：文档水印。
     * - **PureImage**：图片水印。
     * - **PureAudio**：音频水印。
     * - **PureVideo**：视频水印。
     * - **AigcDocument**：AIGC文档水印。
     * - **AigcImage**：AIGC图片水印。
     * - **AigcAudio**：AIGC音频水印。
     * - **AigcVideo**：AIGC视频水印。
     * @example `PureDocument`
     */
    "WmType": string;
    /**
     * 待嵌入文件的文件名，后端需要根据文件名的后缀判断校验文件类型。
     * @example `abc****.pdf`
     */
    "Filename": string;
    /**
     * 可用于下载待嵌入文件的URL，需要可以公网访问。
     * @example `https://example.com/abc****.pdf`
     */
    "FileUrl": string;
    /**
     * 水印信息的容量位宽，默认为32。该参数嵌入和提取时需要保持一致。比如嵌入式使用的是 40 位的SDK，那么提取时也需要将该值设为 40。
     * @example `32`
     */
    "WmInfoSize"?: number;
    /**
     * 10进制数字格式水印信息。若设置该值，则 WmInfoBytesB64 不能设置。
     * 取值范围取决于 WmInfoSize 参数：
     * - 当 WmInfoSize 为32时，取值范围为 1~4294967295。
     * - 当 WmInfoSize 为40时，取值范围为 1~1099511627775。
     * - 当 WmInfoSize 为64时，取值范围为 1~18446744073709551615。
     * @example `123***`
     */
    "WmInfoUint"?: string;
    /**
     * Base64 编码后的字符串格式水印信息 。若设置该值，则 WmInfoUint 不能设置。
     * @example `aGVsbG8gc2F*****`
     */
    "WmInfoBytesB64"?: string;
    /**
     * 视频水印参数：是否使用长视频水印SDK，默认为false。取值：
     * - **true**: 是
     * - **false**: 否
     * @example `false`
     */
    "VideoIsLong"?: boolean;
    /**
     * 短视频水印参数：含义为视频的比特率，默认会自动获取视频的比特率，可以通过该参数强制指定提取时使用的比特率。通常无需设置该参数。
     * @example `3000k`
     */
    "VideoBitrate"?: string;
    /**
     * 图像水印参数：更大的值意味着更高的鲁棒性，但是视觉质量会下降。默认值2。取值：0~4。
     * @example `2`
     */
    "ImageEmbedLevel"?: number;
    /**
     * 图像水印参数：期望的输出图像jpeg压缩质量因子，默认值 95。取值：1~100。
     * @example `95`
     */
    "ImageEmbedJpegQuality"?: number;
    /**
     * 文档水印控制参数。
     */
    "DocumentControl"?: {
        /**
         * 是否启用零宽字符暗水印。零宽字符暗水印可以抵抗文档增、删、改、另存（格式不变）、部分文本复制粘贴、CopytoTxt攻击。不能抵抗格式转换toPDF攻击。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        InvisibleAntiTextCopy: boolean;
        /**
         * 是否启用组件暗水印。组件暗水印可以抵抗文档增、删、改、另存（格式不变）、docx全选复制拷贝到新docx文档，不能抵抗格式转换攻击。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        InvisibleAntiAllCopy: boolean;
        /**
         * 背景水印控制参数。
         */
        BackgroundControl: {
            /**
             * 是否启用背景明水印。取值：
             * - **true**：是
             * - **false**：否
             * @example `true`
             */
            BgAddVisible: boolean;
            /**
             * 背景明水印控制参数。
             */
            BgVisibleControl: {
                /**
                 * 背景明水印文案。格式为utf8字符串。
                 * @example `hello ****`
                 */
                VisibleText: string;
                /**
                 * 背景明水印模式。取值：
                 * - **pos**：在背景的特定位置嵌入一处明水印文案。
                 * - **repeat**：在文档背景中平铺嵌入多处明水印文案。
                 * @example `pos`
                 */
                Mode: string;
                /**
                 * 明水印文字字号。取值越大，字体越大。
                 * @example `30`
                 */
                FontSize: number;
                /**
                 * 明水印文字颜色。格式为 0xFFFFFF RGB颜色格式。如 0x000000 表示黑色。
                 * @example `0x000000`
                 */
                FontColor: string;
                /**
                 * 明水印文字逆时针旋转角度。取值范围1~360。
                 * @example `30`
                 */
                Angle: number;
                /**
                 * Mode为pos时生效。控制明水印水平位置的参数，以左下角为原点。数值在0～1之间时，为比例控制。数值大于1时，为精确的像素位置控制。
                 * @example `0.5`
                 */
                PosX: string;
                /**
                 * Mode为pos时生效。控制明水印垂直位置的参数，以左下角为原点。数值在0～1之间时，为比例控制，数值大于1时，为精确的像素位置控制。
                 * @example `0.5`
                 */
                PosY: string;
                /**
                 * Mode为repeat时生效。表示明水印在水平方向上重复出现的次数。
                 * @example `3`
                 */
                HorizontalNumber: number;
                /**
                 * Mode为repeat时生效。表示明水印在垂直方向上重复出现的次数。
                 * @example `3`
                 */
                VerticalNumber: number;
                /**
                 * 明水印透明度参数。取值范围1~255。取值越大，越不透明。
                 * @example `100`
                 */
                Opacity: number;
            };
            /**
             * 是否添加背景暗水印。取值：
             * - **true**：是
             * - **false**：否
             * @example `true`
             */
            BgAddInvisible: boolean;
            /**
             * 背景暗水印控制参数。
             */
            BgInvisibleControl: {
                /**
                 * 背景暗水印透明度参数。取值范围1~13。取值越大，越不透明。
                 * @example `10`
                 */
                Opacity: number;
            };
        };
    };
}
