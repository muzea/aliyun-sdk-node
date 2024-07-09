export interface UpdateConfigRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * Logtail配置的名称。
     * @example `test-sample`
     */
    "configName": string;
    /**
     * 请求消息体。
     */
    "body"?: any;
}
