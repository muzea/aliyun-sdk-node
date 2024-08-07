export interface SubmitAnalysisJobRequest {
    /**
     * 作业输入，JSON对象。需在OSS控制台Bucket授权页面将Bucket读权限授权给媒体转码服务。更多信息请参见[参数详情](~~29253~~)。
     * > OSS的地域需要与当前MPS所在地域保持一致。
     * @example `{"Bucket":"example-bucket","Location":"oss-cn-hangzhou","Object":"example.flv"}`
     */
    "Input": string;
    /**
     * 模板分析作业配置，根据您的实际需要按需设置。更多参数信息请参见[参数详情](~~29253~~)。
     * @example `{"QualityControl":{"RateQuality":25,"MethodStreaming":"network"}}`
     */
    "AnalysisConfig"?: string;
    /**
     * 用户自定义数据，可以使用中英文、数字、中划线（-）等，不能以特殊字符开头，最大长度1024个字节。
     * @example `testid-001`
     */
    "UserData"?: string;
    /**
     * 管道ID，可以通过**MPS控制台**>**全局设置**>**管道**查看。如果需要异步通知，须保证此管道绑定了可用的消息主题。
     * @example `bb558c1cc25b45309aab5be44d19****`
     */
    "PipelineId": string;
    /**
     * 任务在其对应管道内的转码优先级。
     * - 取值范围：**\[1,10\]**，10为最高优先级。
     * - 默认值：**6**。
     * @example `10`
     */
    "Priority"?: string;
}
