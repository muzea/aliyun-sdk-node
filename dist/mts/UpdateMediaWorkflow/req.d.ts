export interface UpdateMediaWorkflowRequest {
    /**
     * 需要更新的媒体工作流ID，可以通过**MPS控制台** > **工作流管理** > **工作流设置**获取。
     * @example `6307eb0d3f85477882d205aa040f****`
     */
    "MediaWorkflowId": string;
    /**
     * 更新的媒体工作流拓扑结构。JSON对象，包括活动列表及活动依赖。
     * > OSS的地域需要与当前MPS所在地域保持一致。
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
    "Topology": string;
    "Name"?: string;
    "TriggerMode"?: string;
}
