export interface DeleteContainerPluginRuleResponse {
    /**
     * 手动删除容器插件是否成功。取值：
     * - **true** ：成功
     * - **false** ：失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7`
     */
    RequestId: string;
}
