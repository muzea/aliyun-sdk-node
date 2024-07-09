export interface ModifyClearLogstoreStorageRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 请求来源标识，固定为**sas**。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 用户项目。
     * @example `sas-log-1234(uid)-cn-hangzhou`
     */
    "UserProject"?: string;
    /**
     * 用户日志存储LogStore名称。
     * @example `sas_sls_storage`
     */
    "UserLogStore"?: string;
}
