export interface ImportSwaggerRequest {
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
     * Swagger将被导入的分组编号
     * @example `0009db9c828549768a200320714b****`
     */
    "GroupId": string;
    /**
     * 预检验
     * @example `true`
     */
    "DryRun"?: boolean;
}
