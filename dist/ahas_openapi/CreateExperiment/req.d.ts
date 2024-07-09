export interface CreateExperimentRequest {
    /**
     * 演练定义。更多信息，请参见[参数说明](~~203383~~)。
     * @example `{"runMode":"SEQUENCE","duration":600,"flowGroups":[{"hosts":["192.168.0.1"],"flows":[{"attack":{"appCode":"chaos.cpu.fullload","userCheck":true,"arguments":{"cpu-percent":"100","namespcae":"default"}}}],"appName":"demo","appGroups":["demo-group"]}]}`
     */
    "Definition": string;
    /**
     * 演练名称。
     * @example `新建演练`
     */
    "Name": string;
    /**
     * 演练描述。
     * @example `演练描述`
     */
    "Description"?: string;
    /**
     * 演练所属的命名空间（Namespace）。
     * @example `default`
     */
    "NameSpace": string;
    /**
     * 所属Region。当且仅当用户为公网地域（Region）时需要填写，默认为public。
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
    /**
     * 演练标签列表。
     * @example `标签`
     */
    "Tags"?: string[];
    /**
     * 演练空间列表。
     */
    "Workspaces"?: string[];
}
