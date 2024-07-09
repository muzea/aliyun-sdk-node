export interface AddMsConfigAttributesRequest {
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
     * 环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
    /**
     * 所属的资源自增长 ID
     * @example `100`
     */
    "ResourceId": number;
}
