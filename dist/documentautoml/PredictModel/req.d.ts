export interface PredictModelRequest {
    /**
     * 图片或pdf文件访问URL地址
     * @example `https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/demo/extractBill.png`
     */
    "Content"?: string;
    /**
     * 模型对应的版本号，如果不传入版本号表示默认用模型最新生效的版本。
     * @example `1`
     */
    "ModelVersion"?: string;
    /**
     * 模型ID。模型列表页模型ID
     * @example `123`
     */
    "ModelId": number;
    /**
     * content字段是图片URL时：false
     * body为base64的内容时：true
     * @example `false：表示content传入的是url
    true：表示body是直接传入图片进行base64的内容`
     */
    "BinaryToText"?: boolean;
    /**
     * 图片base64编码内容
     * @example `data:image/png;base64,xxxxx
    `
     */
    "Body"?: string;
}
