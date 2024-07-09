export interface CreateConfigTemplateRequest {
    /**
     * 配置模板名称，不限字符类型，最长不超过64个字符。
     * @example `my-template`
     */
    "Name"?: string;
    /**
     * 模板数据格式，支持以下格式：
     * - JSON：JSON格式；
     * - XML：XML格式；
     * - YAML：YAML格式；
     * - Properties：Properties格式；
     * - KeyValue：键值对；
     * - Custom：自定义格式。
     * @example `JSON`
     */
    "Format"?: string;
    /**
     * 模板描述，不限字符类型，最长不超过255个字符。
     * @example `我的配置模板`
     */
    "Description"?: string;
    /**
     * 模板内容，需要与Format标注的格式相匹配。
     * @example `[{"Key":"name","Value":"william"},{"Key":"age","Value":"12"}]`
     */
    "Content"?: string;
}
