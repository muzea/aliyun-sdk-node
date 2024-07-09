export interface GetImageTranslateResponse {
    /**
     * 状态码，200 表示正常
     * @example `200`
     */
    Code: number;
    /**
     * 错误的时候，返回的错误信息
     * @example `ok`
     */
    Message: string;
    /**
     * 请求的唯一串
     * @example `A41F6E25-8520-4AF0-90EF-AF7E32840108`
     */
    RequestId: string;
    /**
     * 返回的数据内容
     */
    Data: {
        /**
         * 翻译后的图片链接
         * @example `https://ae01.alicdn.com/kf/xxxxx.jpeg`
         */
        Url: string;
        /**
         * orc 识别后的内容
         * @example `{"text":"P翼-至草款","width":750,"wordNum":10}`
         */
        Orc: string;
        /**
         * 用于图片编辑器渲染的psd数据
         * @example `{"text":"P翼-至草款","width":750,"wordNum":10}`
         */
        PictureEditor: string;
    };
}
