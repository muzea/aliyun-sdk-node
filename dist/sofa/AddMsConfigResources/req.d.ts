export interface AddMsConfigResourcesRequest {
    /**
     * 应用名
     * @example `foo`
     */
    "AppName": string;
    /**
     * 资源的属性信息，以 JSON 字符串格式传入
     * @example `[  {  "attribute_name":"attName",  "desc":"some attribute comment" },  ...  ]`
     */
    "Attributes"?: string;
    /**
     * 资源描述信息
     * @example `测试资源类`
     */
    "Desc": string;
    /**
     * 系统字段：环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
    /**
     * 资源类所属的域
     * @example `Alipay`
     */
    "Region": string;
    /**
     * 资源 ID，类似于配置文件的文件名
     * @example `com.alipay.test.resource`
     */
    "ResourceId": string;
}
