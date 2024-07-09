export interface PushInterventionDictionaryEntriesRequest {
    /**
     * 干预词典名称
     * @example `my_dict`
     */
    "name": string;
    /**
     * 是否校验入参数据合法性，默认false。
     * 取值：
     * - **true**：只校验参数合法性。
     * - **false**：校验参数合法性，创建归因配置。
     * @example `false`
     */
    "dryRun"?: boolean;
    /**
     * 请求体。
     */
    "body"?: any[];
}
