export interface CreateWmExtractTaskRequest {
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
     * 用于下载待提取文件的URL，需要可以公网访问。
     * @example `https://example.com/test-****.pdf`
     */
    "FileUrl": string;
    /**
     * 待提取文件的文件名，后端需要根据文件名的后缀判断校验文件类型。
     * @example `test-****.pdf`
     */
    "Filename": string;
    /**
     * 水印信息的容量位宽，默认为32。该参数嵌入和提取时需要保持一致。比如嵌入式使用的是 40 位的SDK，那么提取时也需要将该值设为 40。
     * @example `32`
     */
    "WmInfoSize"?: number;
    /**
     * 长视频水印参数：含义为视频倍速，浮点数字符串。默认1，代表添加水印时的采用倍速，或者添加水印之后，视频时间轴拉伸的倍速。
     * @example `1`
     */
    "VideoSpeed"?: string;
    /**
     * 视频水印参数：是否使用长视频水印SDK，默认为false。取值：
     * - **true**：是
     * - **false**：否
     * @example `false`
     */
    "VideoIsLong"?: boolean;
    /**
     * 文档水印参数：指定待提取文件是否为添加了背景水文档的截图。服务会根据待提取文件是否为图像文件来判断是否走文档背景水印提取逻辑，因此默认无需设置该参数 。取值：
     * - **true**：是
     * - **false**：否
     * @example `false`
     */
    "DocumentIsCapture"?: boolean;
}
