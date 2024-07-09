export interface UpdateMsConfigAttributesRequest {
    /**
     * 属性名称
     * @example `age`
     */
    "AttributeName": string;
    /**
     * 属性描述信息
     * @example `年龄`
     */
    "Desc"?: string;
    /**
     * 属性自增长 ID
     * @example `1`
     */
    "Id": number;
    /**
     * 系统字段：环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
}
