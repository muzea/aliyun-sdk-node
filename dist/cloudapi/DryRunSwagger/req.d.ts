export interface DryRunSwaggerRequest {
    /**
     * 是否覆盖现有API。
     * 覆盖检测条件为：API的HTTP请求类型+后端请求路径相同。
     * @example `true`
     */
    "Overwrite": boolean;
    /**
     * 全局条件。
     * @example `{}`
     */
    "GlobalCondition"?: any;
    /**
     * Swagger文本格式：
     * - json
     * - yaml
     * @example `yaml`
     */
    "DataFormat": string;
    /**
     * Swagger文本内容。
     * @example `"A Swagger API definition in YAML"`
     */
    "Data": string;
    /**
     * 指定要操作API所属分组ID
     * @example `d633cf5524f841b9950e245b191bdabf`
     */
    "GroupId": string;
}
