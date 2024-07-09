export interface LaunchSurveyRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起满意度的坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `device`
     */
    "DeviceId"?: string;
    /**
     * 通话ID。
     * @example `job-6580466654649****`
     */
    "JobId": string;
    /**
     * IVR满意度流程的联系流ID，请确保填入的联系流ID是可用的满意度调查流程。
     * @example `4685b65a-eb8f-11ec-8ea0-0242ac120002`
     */
    "ContactFlowId": string;
    /**
     * 传递给联系流的变量，这里配置的变量，可以在IVR流程中拿到并使用，格式为JSON字符串格式的键值对集合，非必填，默认为空。
     * @example `{
          "customerID": "208880281831****",
          "operateType": "cipherCode",
          "taskId": "1234567890",
          "crmOther": "123"
    }`
     */
    "ContactFlowVariables"?: string;
    /**
     * 满意度采集渠道，非必填，默认为语音满意度。
     * @example `IVR`
     */
    "SurveyChannel"?: string;
    /**
     * 短信满意度配置ID，只有收集渠道为SMS时才需要填写此参数，非必填，默认为空。
     * @example `4685b65a-eb8f-11ec-8ea0-0242ac120002`
     */
    "SmsMetadataId"?: string;
    "SurveyTemplateId"?: string;
    "SurveyTemplateVariables"?: string;
}
