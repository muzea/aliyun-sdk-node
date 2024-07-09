export interface TranslateImageResponse {
    /**
     * 请求标识
     * @example `D774D33D-F1CB-5A2C-A787-E0A2179239CE`
     */
    RequestId: string;
    /**
     * 请求结果状态码
     * @example `200`
     */
    Code: number;
    /**
     * 请求错误信息
     * @example `Error Message`
     */
    Message: string;
    /**
     * 图片翻译结果结构体
     */
    Data: {
        /**
         * 图片译后编辑器背景图
         * @example `https://example.com/example.jpg`
         */
        InPaintingUrl: string;
        /**
         * 图片译后编辑器模版数据
         * @example `Editor Template Json String`
         */
        TemplateJson: string;
        /**
         * 最终翻译结果图片 URL
         * @example `https://example.com/example.jpg`
         */
        FinalImageUrl: string;
    };
}
