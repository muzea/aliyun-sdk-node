export interface UpdateWarningConfigRequest {
    /**
     * 完整JSON字符串信息，具体内容参见下方详细信息。
     * @example `{"ridList":[18130],"configName":"0310","channels":[{"type":1,"url":"https://sca.console.aliyun.com/#/warningConfig"}],"configId":29}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
