export interface ExecuteExperimentRequest {
    /**
     * 故障演练ID
     * @example `1234567890123456789`
     */
    "ExperimentId": string;
    /**
     * 演练所属的命名空间
     * @example `default`
     */
    "NameSpace"?: string;
    /**
     * 演练动态参数定义。更多信息，请参见[参数说明](~~203383~~)。
     * @example `{"param":[{"groupId":"1234567890123456789","appName":"ahas-default-node","appGroups":["AHAS杭州预发环境"],"hosts":["192.168.0.205"],"activityParam":[{"flowId":"1234567890123456789","appCode":"chaos.cpu.fullload","arguments":{"cpu_count":"1","namespace":"default"}}]}]}`
     */
    "Definition"?: string;
    /**
     * 演练所属地域ID
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
