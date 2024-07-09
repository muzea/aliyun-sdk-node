export interface GetContentAnalyzeConfigResponse {
    /**
     * 请求ID。
     * @example `31FEC819-2344-5771-9366-9172DB0D26C9`
     */
    RequestId: string;
    /**
     * 智能内容分析配置。
     */
    ContentAnalyzeConfig: {
        /**
         * 媒资注册完成后是否自动发起智能内容分析。
         * 取值：
         * - true：开启
         * - false：不开启，默认为false
         * @example `true`
         */
        Auto: boolean;
        /**
         * 分析结果入库类型，仅当Auto = true 时可配置。默认值为空。
         * - TEXT: 标签
         * - FACE：人脸
         * - DNA：相似图
         * 支持多值，多值以半角逗号（,）分隔。如果此字段为空，智能内容分析的结果默认不入任何搜索库，后续也无法进行任何形式的内容搜索。
         * @example `TEXT,FACE`
         */
        SaveType: string;
        /**
         * 智能内容分析模板ID。各模板包含以下AI分析功能：
         * - S00000101-100040 : 文字识别
         * - S00000101-100060 : 视频分类+人脸识别
         * - S00000101-100070 : 文字识别+视频分类+人脸识别
         * @example `S00000101-100070`
         */
        TemplateId: string;
    };
}
