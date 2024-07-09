export interface UpdateFunctionRequest {
    /**
     * 云函数描述。
     * @example `description`
     */
    "Desc"?: string;
    /**
     * 云函数名称。
     * @example `demoFunction`
     */
    "Name": string;
    /**
     * 服务空间ID。
     * @example `dece4ea0-d432-4cfa-8514-8a88d205e2b8`
     */
    "SpaceId": string;
    /**
     * 函数内存规格，取值为64的倍数，至少128，至多2048。单位：MB。
     * @example `256`
     */
    "Memory"?: number;
    /**
     * 函数超时时间，单位为秒，默认值为5，取值范围1-7200。
     * @example `5`
     */
    "Timeout"?: number;
    /**
     * HTTP触发的路径，设置为空字符串表示取消该功能。必须以`/http`开头，不能以`/`结尾，同一个Space下不允许重复，只支持（/）、（-）、（_）、（.）、字母和数字组合，最长不超过128个字符。
     * @example `/http/hello`
     */
    "HttpTriggerPath"?: string;
    /**
     * 定时触发配置，设置为空字符串表示取消该功能，配置规则请参见[使用云函数定时触发功能](https://help.aliyun.com/document_detail/160666.htm)。
     * >公测版：cron:0 0 *​/2 * * * ；商业版：0 0 *​/2 * * *。
     * @example `cron:0 0 * * * *`
     */
    "TimingTriggerConfig"?: string;
    /**
     * 定时函数任务自定义参数
     * >仅商业版支持该功能。
     * @example `hello`
     */
    "TimingTriggerUserPayload"?: string;
    /**
     * 单实例允许的最大并发度，默认值为1，取值范围1-20。设置单实例多并发可以降低冷启动的频率，适用于函数中有较多时间在等待下游服务响应的场景，不适用于函数中有共享状态且不能并发访问的场景，也不适用于单个请求的执行要消耗大量CPU及内存资源的场景。
     * >
     * > - 当设置大于1时要求内存不低于512MB
     * @example `1`
     */
    "InstanceConcurrency"?: number;
    /**
     * 云函数执行环境，可选值nodejs12,nodejs14等，具体请参见文档[《运行时支持列表》](https://help.aliyun.com/document_detail/2717618.html)
     * @example `nodejs14`
     */
    "Runtime"?: string;
}
