export interface StartWorkflowRequest {
    /**
     * 工作流模板ID。您可通过[智能媒体服务控制台](https://ims.console.aliyun.com/settings/workflow/list)> 配置管理 > 工作流模板，查看模板ID。
     * @example `******f0e54971ecbffd472190******`
     */
    "WorkflowId": string;
    /**
     * 工作流输入，目前仅支持媒资类型。
     * @example `{
          "Type": "Media",
          "Media": "******30706071edbfe290b488******"
    }`
     */
    "TaskInput"?: string;
    /**
     * 自定义设置，Json格式，长度限制为512字节。支持[自定义回调地址配置](https://help.aliyun.com/document_detail/451631.htm)。
     * @example `{"NotifyAddress":"https://xx.xx.xxx"}或{"NotifyAddress":"ice-callback-demo"}`
     */
    "UserData"?: string;
}
