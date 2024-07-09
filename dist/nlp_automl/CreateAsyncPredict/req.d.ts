export interface CreateAsyncPredictRequest {
    /**
     * 模型ID。根据服务名称和服务版本创建异步预测的时候，此参数不必传；否则必传。
     * @example `1`
     */
    "ModelId"?: number;
    /**
     * 预测内容，最大长度：1024字节。
     * @example `全国土地利用总体规划`
     */
    "Content"?: string;
    /**
     * 要获取的物模型版本号。不传入此参数，则返回已发布的最新版本。根据模型ID调用异步预测接口的时候传此参数。
     * @example `V1`
     */
    "ModelVersion"?: string;
    /**
     * 文本实体抽取类型模型，是否返回详细抽取结果。可选值：true/false。
     * @example `false`
     */
    "DetailTag"?: string;
    /**
     * 设置返回top结果数量。
     * @example `0,3`
     */
    "TopK"?: number;
    /**
     * 文件类型
     * @example `text,html,pdf,docx,doc`
     */
    "FileType"?: string;
    /**
     * 文件HTTP保存地址。
     * @example `http://127.0.0.1/example.docx`
     */
    "FileUrl"?: string;
    /**
     * 文件内容Base64编码。
     * @example `[base64 encode content]`
     */
    "FileContent"?: string;
    /**
     * 返回预测文本
     * @example `true`
     */
    "FetchContent"?: string;
    /**
     * 服务名称。
     * @example `ContractNERPretrain`
     */
    "ServiceName"?: string;
    /**
     * 服务版本。
     * @example `V1`
     */
    "ServiceVersion"?: string;
}
