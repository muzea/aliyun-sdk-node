export interface GetDatasourceResponse {
    /**
     * 请求ID。
     * @example `AD7D9E95-BD31-53F2-B710-6C01866FCB05`
     */
    RequestId: string;
    /**
     * 数据源ID。
     * @example `3`
     */
    DatasourceId: string;
    /**
     * 数据源名称。
     * @example `datasource1`
     */
    Name: string;
    /**
     * 数据源类型，包含以下可选值：
     * ● Hologres
     * ● Redis
     * ● GraphCompute
     * ● MaxCompute
     * @example `Hologres`
     */
    Type: string;
    /**
     * 资源地址。
     * @example `igraph_instance1`
     */
    Uri: string;
    /**
     * 资源配置。
     * @example `{"address": ""}`
     */
    Config: string;
    /**
     * 工作空间ID。
     * @example `32244`
     */
    WorkspaceId: string;
    /**
     * 创建时间。
     * @example `2023-07-04T11:26:09.036+08:00`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2023-07-04T11:26:09.036+08:00`
     */
    GmtModifiedTime: string;
}
