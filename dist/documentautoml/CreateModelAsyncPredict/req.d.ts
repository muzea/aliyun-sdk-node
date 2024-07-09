export interface CreateModelAsyncPredictRequest {
    /**
     * 模型对应的版本号，如果不传入版本号表示默认用模型最新生效的版本。
     * @example `V1`
     */
    "ModelVersion"?: string;
    /**
     * content字段是图片URL时：false
     * body为base64的内容时：true
     * @example `false：表示content传入的是url
    true：表示body是直接传入图片进行base64的内容
    `
     */
    "BinaryToText"?: boolean;
    /**
     * 图片或pdf文件访问URL地址
     * @example `https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/3/1559855998794593/stage/upload/20230206/oss-hlfCRJ1SorSWs10MkqxK6YcL4OVAFSv4.png?Expires=1675665563&OSSAccessKeyId=XXXX&Signature=WLKghBc3zKzWJ3Td69%2B4C21jrbE%3D`
     */
    "Content"?: string;
    /**
     * 模型ID。模型列表页模型ID
     * @example `123`
     */
    "ModelId"?: number;
    /**
     * 预训练服务名称
     * @example `pre_train_service`
     */
    "ServiceName"?: string;
    /**
     * 预训练服务版本
     * @example `V1`
     */
    "ServiceVersion"?: string;
    /**
     * 图片base64编码内容
     * @example `data:image/png;base64,xxxxx`
     */
    "Body"?: string;
}
