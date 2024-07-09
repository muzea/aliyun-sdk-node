export interface QueryMsConfigAttributesRequest {
    /**
     * 应用名
     * @example `demo-app`
     */
    "AppName": string;
    /**
     * 属性名称
     * @example `age`
     */
    "AttributeName": string;
    /**
     * 系统字段：环境实例 ID
     * @example `abcdEFGH1234`
     */
    "InstanceId": string;
    /**
     * 资源所属域
     * @example `Alipay`
     */
    "Region": string;
    /**
     * 资源 ID，类似于文件名
     * @example `com.alipay.test`
     */
    "ResourceId": string;
}
