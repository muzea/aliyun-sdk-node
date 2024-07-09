export interface PredictPreTrainModelRequest {
    /**
     * 预测内容，格式为JSON字符串。
     * UIE抽取参数格式{"query":"xxx","schema":["字段1","字段2"]}, query对应图片URL，schema对应要抽取的字段数组
     * @example `{"query":"https://doc-automl-public.oss-cn-hangzhou.aliyuncs.com/demo/extractBill.png", "schema":["姓名", "住址"]}`
     */
    "Content"?: string;
    /**
     * 预置能力服务版本，默认V1
     * @example `V1`
     */
    "ServiceVersion"?: string;
    /**
     * 预置能力服务名称，必填
     * UIE抽取对应“FormUIE”
     * @example `FormUIE`
     */
    "ServiceName"?: string;
    /**
     * content字段内容为图片URL时：false，
     * body字段内容为图片base64时：true
     * @example `false`
     */
    "BinaryToText"?: boolean;
    /**
     * 图片传递base64编码时的预测内容，格式为json字符串。
     * UIE抽取参数格式{"query":"xxx","schema":["字段1","字段2"]}, query对应图片base64编码，schema对应要抽取的字段数组
     * @example `{"query":"data:image/png;base64,xxxxx","schema":["姓名", "住址"]}`
     */
    "Body"?: string;
}
