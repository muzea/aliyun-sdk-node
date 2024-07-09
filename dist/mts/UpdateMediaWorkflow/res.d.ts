export interface UpdateMediaWorkflowResponse {
    /**
     * 请求ID。
     * @example `7D752035-97DA-54E5-88E2-E8405EEA****`
     */
    RequestId: string;
    /**
     * 媒体工作流详细信息。
     */
    MediaWorkflow: {
        /**
         * 创建时间。
         * @example `2016-04-01T05:29:38Z`
         */
        CreationTime: string;
        /**
         * 更新的媒体工作流ID。
         * @example `6307eb0d3f85477882d205aa040f****`
         */
        MediaWorkflowId: string;
        /**
         * 媒体工作流状态。可取值：
         * - **Inactive**：已停用。
         * - **Active**：已启用。
         * @example `Active`
         */
        State: string;
        /**
         * 触发模式。可取值：
         * - **OssAutoTrigger**：自动触发。
         * - **NotInAuto**：不自动触发。
         * @example `OssAutoTrigger`
         */
        TriggerMode: string;
        /**
         * 媒体工作流名称。
         * @example `examp-mediaworkflow-****`
         */
        Name: string;
        /**
         * 媒体工作流拓扑结构。
         * @example `{
              "Activities": {
                    "Act-Start": {
                          "Parameters": {
                                "PipelineId": "130266f58161436a80bf07cb12c8****",
                                "InputFile": "{\"Bucket\": \"example-bucket-****\",\"Location\": \"cn-shanghai\"}"
                          },
                          "Type": "Start"
                    },
                    "Act-Report": {
                          "Parameters": {},
                          "Type": "Report"
                    },
                    "Act-Transcode-M3U8": {
                          "Parameters": {
                                "Outputs": "[{\"Object\":\"transcode/{ObjectPrefix}{FileName}\",\"TemplateId\": \"957d1719ee85ed6527b90cf62726****\"}]",
                                "OutputBucket": "example-bucket-****",
                                "OutputLocation": "cn-shanghai"
                          },
                          "Type": "Transcode"
                    }
              },
              "Dependencies": {
                    "Act-Start": [
                          "Act-Transcode-M3U8"
                    ],
                    "Act-Report": [],
                    "Act-Transcode-M3U8": [
                          "Act-Report"
                    ]
              }
        }`
         */
        Topology: string;
    };
}
