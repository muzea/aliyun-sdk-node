export interface UpdatePipelineRequest {
    /**
     * 需要更新的管道ID。可以通过**MPS控制台** > **全局设置** > **管道**获取。
     * @example `d1ce4d3efcb549419193f50f1fcd****`
     */
    "PipelineId": string;
    /**
     * 修改后的管道名称。支持中英文、数字、中划线（-）等，不能以特殊字符开头，最大长度128字节。
     * @example `example-pipeline-****`
     */
    "Name": string;
    /**
     * 修改后的管道状态。
     * - **Active**：管道开启。管道内的作业会被媒体转码服务调度转码执行。
     * - **Paused**：管道暂停。管道内的作业不再会被媒体转码调度转码执行，并且所有作业状态维持在已提交状态。已经处于转码中的任务将继续转码，不受影响。
     * @example `Paused`
     */
    "State": string;
    /**
     * 阿里云消息服务配置，即MNS队列或主题信息。更多信息，请参见[NotifyConfig详情](~~29253~~)。
     * @example `{"Topic":"example-topic-****"}`
     */
    "NotifyConfig"?: string;
    /**
     * 当前RAM用户关联的角色。可以通过**RAM控制台** > **身份管理** > **角色**获取。
     * @example `AliyunMTSDefaultRole`
     */
    "Role"?: string;
    /**
     * 扩展配置
     * @example `{\"IsBoostNew\":true,\"MultiSpeedDowngradePolicy\":\"NormalSpeed\",\"MaxMultiSpeed\":20}`
     */
    "ExtendConfig"?: string;
}
