export interface GetTranslateImageBatchResultResponse {
    /**
     * 请求结果状态码
     * @example `200`
     */
    Code: number;
    /**
     * 请求信息
     * @example `OK`
     */
    Message: string;
    /**
     * 请求标识
     * @example `DACD263C-C068-5116-83EC-117245AA35CF`
     */
    RequestId: string;
    /**
     * 数据内容
     */
    Data: {
        /**
         * 翻译结果，当改批量翻译任务没有执行完毕时，该字段为空数组
         */
        Result: {
            /**
             * 单张图片的译后编辑器背景图
             * @example `https://example.com/example.jpg`
             */
            InPaintingUrl: string;
            /**
             * 单张图片的翻译结果图 URL
             * @example `https://example.com/example.jpg`
             */
            FinalImageUrl: string;
            /**
             * 单张图片的译后编辑器模版数据
             * @example `{"TemplateJson": "Editor Template Json String	"}`
             */
            TemplateJson: string;
            /**
             * 单张图片的原图 URL
             * @example `https://example.com/example.jpg`
             */
            SourceImageUrl: string;
            /**
             * 单张图片的翻译状态码
             * @example `200`
             */
            Code: number;
            /**
             * 单张图片的翻译信息
             * @example `OK`
             */
            Message: string;
            /**
             * 单张图片是否翻译成功标识
             * @example `true`
             */
            Success: boolean;
        }[];
        /**
         * 标识当前任务的运行状态，可能的值及含义如下：
         * - `created`：批量翻译任务创建成功，等待运行
         * - `running`：批量翻译任务正在运行中
         * - `finished`：批量翻译任务运行结束，图片均已翻译完毕，此时 `Result` 字段会包含每张图片的翻译结果
         * - `invalid`：传入的任务 ID 非法，或者任务的翻译结果已经过期被清理
         * @example `finished`
         */
        Status: string;
    };
}
