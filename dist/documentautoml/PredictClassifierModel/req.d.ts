export interface PredictClassifierModelRequest {
    /**
     * 分类器ID
     * @example `1`
     */
    "ClassifierId"?: number;
    /**
     * 是否开启自动预测，false：不开启， true：开启，默认开启
     * @example `true`
     */
    "AutoPrediction"?: boolean;
    /**
     * 图片或pdf文件可访问地址
     * @example `https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/demo/table.png`
     */
    "Content"?: string;
    /**
     * 图片base64编码内容
     * @example `data:image/png;base64,xxxxx
    `
     */
    "Body"?: string;
    /**
     * content字段是图片URL时：false <br>body为base64的内容时：true
     * @example `false`
     */
    "BinaryToText"?: boolean;
}
