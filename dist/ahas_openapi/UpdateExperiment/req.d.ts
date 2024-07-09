export interface UpdateExperimentRequest {
    /**
     * 故障演练流程定义。更多信息，请参见[参数说明](~~203383~~)。
     * @example `{"runMode":"SEQUENCE","duration":600,"flowGroups":[{"hosts":["192.168.0.1"],"flows":[{"attack":{"appCode":"chaos.cpu.fullload","userCheck":true,"arguments":{"cpu-percent":"100","namespcae":"default"}}}],"appName":"demo","appGroups":["demo-group"]}]}`
     */
    "Definition"?: string;
    /**
     * 故障演练名称。
     * @example `CPU满载场景`
     */
    "Name"?: string;
    /**
     * 故障演练描述。
     * @example `描述`
     */
    "Description"?: string;
    /**
     * 演练所属的命名空间。
     * @example `default`
     */
    "NameSpace": string;
    /**
     * 故障演练ID。
     * @example `1234567890123456789`
     */
    "ExperimentId": string;
    /**
     * 演练所属地域ID。
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
    /**
     * 故障演练标签。
     * @example `标签`
     */
    "Tags"?: string[];
    /**
     * 工作空间ID列表。
     */
    "Workspaces"?: string[];
}
