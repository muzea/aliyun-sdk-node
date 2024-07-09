export interface PredictTemplateModelRequest {
    /**
     * 任务ID
     * @example `1`
     */
    "TaskId": number;
    /**
     * 图片或pdf文件访问URL地址
     * @example `https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/demo/demo.png`
     */
    "Content"?: string;
    /**
     * content字段是图片URL时：false
     * body为base64的内容时：true
     * @example `false：表示content传入的是url
    true：表示body是直接传入图片进行base64的内容
    `
     */
    "BinaryToText"?: boolean;
    /**
     * 图片base64编码内容
     * @example `data:image/png;base64,xxxxx`
     */
    "Body"?: string;
}
