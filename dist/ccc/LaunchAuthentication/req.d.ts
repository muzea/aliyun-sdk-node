export interface LaunchAuthenticationRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 发起核身的坐席ID。
     * @example `agent@ccc-test`
     */
    "UserId"?: string;
    /**
     * 设备ID，无意义，可以随便填写。
     * @example `ACC-YUNBS-1.0.10-****`
     */
    "DeviceId"?: string;
    /**
     * 通话ID。
     * @example `job-6538214103685****`
     */
    "JobId": string;
    /**
     * IVR核身流程的联系流ID。
     * @example `af145gfc-1108-4d55-8fca-f719bd512ebb`
     */
    "ContactFlowId": string;
    /**
     * 传递给联系流的变量，选填，这里配置的变量，可以在IVR流程中拿到并使用，格式为JSON字符串格式的键值对集合。
     * @example `{
          "customerID": "208880281831****",
          "operateType": "cipherCode",
          "taskId": "1234567890",
          "crmOther": "123"
    }`
     */
    "ContactFlowVariables"?: string;
}
