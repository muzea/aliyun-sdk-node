export interface UpdateMsConfigResourcesRequest {
    /**
     * 应用名
     * @example `foo`
     */
    "AppName": string;
    /**
     * 资源的属性信息，以 JSON 字符串格式传入
     * @example `[{"attributeName":"age","desc":"描述信息"}]`
     */
    "Attributes"?: string;
    /**
     * 资源描述信息
     * @example `测试资源`
     */
    "Desc": string;
    /**
     * 更新的资源自增长 ID
     * @example `1`
     */
    "Id": number;
    /**
     * 系统字段：环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
    /**
     * 资源搜索的域
     * @example `Alipay`
     */
    "Region": string;
    /**
     * 资源唯一标识
     * @example `com.test.resource`
     */
    "ResourceId": string;
    /**
     * 是否全量更新属性，默认为 false
     * @example `false`
     */
    "UpdateAttribute"?: boolean;
}
