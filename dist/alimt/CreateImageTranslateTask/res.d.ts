export interface CreateImageTranslateTaskResponse {
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
         * 异步图片翻译返回的任务ID，后面根据这个ID获取翻译结果
         * @example `A41F6E25-8520-4AF0-90EF-111111`
         */
        TaskId: string;
    };
}
