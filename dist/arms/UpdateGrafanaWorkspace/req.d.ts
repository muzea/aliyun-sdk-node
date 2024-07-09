export interface UpdateGrafanaWorkspaceRequest {
    /**
     * 地域ID。默认为`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 工作区 ID。
     * @example `grafana-cn-4xl3g******`
     */
    "GrafanaWorkspaceId": string;
    /**
     * 工作区名称。
     * @example `testGrafana`
     */
    "GrafanaWorkspaceName"?: string;
    /**
     * 工作区描述。
     * @example `线上生产环境Grafana`
     */
    "Description"?: string;
    /**
     * 语言环境，默认为中文：zh， 英文： en。
     * @example `zh`
     */
    "AliyunLang"?: string;
}
