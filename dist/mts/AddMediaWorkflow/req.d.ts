export interface AddMediaWorkflowRequest {
    /**
     * 媒体工作流名称。
     * - 不能为空串。
     * - 同一账号下的工作流名称不可重复。
     * - 不超过64个字符。
     * - UTF-8编码。
     * @example `mediaworkflow-example`
     */
    "Name": string;
    /**
     * 媒体工作流拓扑结构。格式为JSON对象，包括活动列表及活动依赖。更多信息请参见下文**Topology示例**。
     * > OSS的地域需要与当前MPS所在地域保持一致。
     * @example `{"Activities": {"mediaworkflow-example": {"Parameters": {"Outputs": "[{\"OutputObject\":\"examplebucket/output/{RunId}/TRANSCODE_165941222****​/{FileName}\",\"TemplateId\":\"S00000001-200010\",\"TemplateName\":\"MP4-流畅\"}]","OutputBucket": "examplebucket","OutputLocation": "oss-cn-shanghai"},"Type": "Transcode"},"Act-Start": {"Parameters": {"PipelineId": "a7d481f07d8c45da88c71853ce7d****","InputFile": "{\"Bucket\":\"example-input\",\"Location\":\"oss-cn-shanghai\",\"ObjectPrefix\":\"mps-test/input/\"}"},"Type": "Start"},"Act-Report": {"Parameters": {"PublishType": "Manual"},"Type": "Report"}},"Dependencies": {"mediaworkflow-example": ["Act-Report"],"Act-Start": ["mediaworkflow-example"],"Act-Report": []}}`
     */
    "Topology": string;
    /**
     * 触发模式。 取值：
     * - **OssAutoTrigger**：自动触发。
     * - **NotInAuto**：不自动触发。
     * @example `OssAutoTrigger`
     */
    "TriggerMode"?: string;
}
