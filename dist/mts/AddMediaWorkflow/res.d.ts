export interface AddMediaWorkflowResponse {
    /**
     * 请求ID。
     * @example `F1D21261-ADB9-406A-1234-491382139D59`
     */
    RequestId: string;
    /**
     * 媒体工作流详细信息。
     */
    MediaWorkflow: {
        /**
         * 创建时间。
         * @example `016-04-01T05:29:37Z`
         */
        CreationTime: string;
        /**
         * 媒体工作流ID。建议您保存此ID便于后续对此工作流进行其他操作。
         * @example `e00732b977da427d9177a4deb1aa****`
         */
        MediaWorkflowId: string;
        /**
         * 媒体工作流状态。新建的工作流默认为**Active**（激活）状态。
         * @example `Active`
         */
        State: string;
        /**
         * 触发模式。取值：
         * - **OssAutoTrigger**：自动触发。
         * - **NotInAuto**：不自动触发。
         * @example `OssAutoTrigger`
         */
        TriggerMode: string;
        /**
         * 媒体工作流名称。
         * @example `mediaworkflow-example`
         */
        Name: string;
        /**
         * 媒体工作流拓扑结构。格式为JSON对象，包括活动列表及活动依赖。
         * @example `{"Activities": {"mediaworkflow-example": {"Parameters": {"Outputs": "[{\"OutputObject\":\"examplebucket/output/{RunId}/TRANSCODE_165941222****​/{FileName}\",\"TemplateId\":\"S00000001-200010\",\"TemplateName\":\"MP4-流畅\"}]","OutputBucket": "examplebucket","OutputLocation": "oss-cn-shanghai"},"Type": "Transcode"},"Act-Start": {"Parameters": {"PipelineId": "a7d481f07d8c45da88c71853ce7d****","InputFile": "{\"Bucket\":\"example-input\",\"Location\":\"oss-cn-shanghai\",\"ObjectPrefix\":\"mps-test/input/\"}"},"Type": "Start"},"Act-Report": {"Parameters": {"PublishType": "Manual"},"Type": "Report"}},"Dependencies": {"mediaworkflow-example": ["Act-Report"],"Act-Start": ["mediaworkflow-example"],"Act-Report": []}}`
         */
        Topology: string;
    };
}
