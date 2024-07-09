export interface DeleteGrafanaWorkspaceRequest {
    /**
     * 地域ID。默认为cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可观测可视化 Grafana 版工作区ID。
     * @example `grafana-rnglkcdrntlhk0****`
     */
    "GrafanaWorkspaceId": string;
}
