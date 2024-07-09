export interface OpenAlimtServiceRequest {
    /**
     * - 机器翻译 alimt
     * - 定制化翻译服务 type = automl
     * - 证件翻译 type=ct
     * - 文档翻译 type=dt
     * - 语种识别type=id
     * @example `id`
     */
    "Type"?: string;
}
