export interface UpdateHookConfigurationResponse {
    /**
     * 响应码
     * @example `200`
     */
    Code: number;
    /**
     * 信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `d498****-1dd8ec229862`
     */
    RequestId: string;
    /**
     * 挂载脚本配置
     */
    HooksConfiguration: {
        /**
         * 是否忽略失败，取值如下：
         * - **true**：忽略失败
         * - **false**：不忽略失败
         * @example `true`
         */
        IgnoreFail: boolean;
        /**
         * 挂载脚本名
         * @example `postprepareInstanceEnvironmentOnScaleOut`
         */
        Name: string;
        /**
         * 挂载脚本内容
         * @example `ls`
         */
        Script: string;
    }[];
}
