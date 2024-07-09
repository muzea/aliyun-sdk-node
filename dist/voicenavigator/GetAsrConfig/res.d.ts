export interface GetAsrConfigResponse {
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 热词ID。请在[ASR热词管理页面](https://aiccs.console.aliyun.com/sentence/vocab?spm=a2c4g.11186623.0.0.7f9bf965IKBpsi)查看ASR热词ID。
         * @example `3b1d3031-8b6e-460a-8640-d330f2ca50b8`
         */
        AsrVocabularyId: string;
        /**
         * asr数据集id
         * @example `3b1d3031-8b6e-460a-8640-d330f2ca50b8`
         */
        AsrCustomizationId: string;
        /**
         * asracoustic模型id
         * @example `3b1d3031-8b6e-460a-8640-d330f2ca50b8`
         */
        AsrAcousticModelId: string;
        /**
         * asr热词id
         * @example `3b1d3031-8b6e-460a-8640-d330f2ca50b8`
         */
        AsrClassVocabularyId: string;
    };
    /**
     * 请求id
     * @example `14C39896-AE6D-4643-9C9A-E0566B2C2DDD`
     */
    RequestId: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 错误信息
     * @example `Not Found`
     */
    ErrorMsg: string;
}
