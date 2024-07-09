export interface GetProjectResponse {
    /**
     * 请求ID。
     * @example `C33E160C-BFCA-5719-B958-942850E949F6`
     */
    RequestId: string;
    /**
     * 项目名称。
     * @example `project1`
     */
    Name: string;
    /**
     * 项目描述。
     * @example `This is a test.`
     */
    Description: string;
    /**
     * 离线数据源类型，目前仅支持Dataworks。
     * @example `MaxCompute`
     */
    OfflineDatasourceType: string;
    /**
     * 离线数据源ID。
     * @example `4`
     */
    OfflineDatasourceId: string;
    /**
     * 离线数据源名称。
     * @example `datasource1`
     */
    OfflineDatasourceName: string;
    /**
     * 在线数据源类型。
     * - Hologres
     * - GraphCompute
     * - Redis
     * @example `Hologres`
     */
    OnlineDatasourceType: string;
    /**
     * 在线数据源ID。
     * @example `5`
     */
    OnlineDatasourceId: string;
    /**
     * 在线数据源名称。
     * @example `datasource2`
     */
    OnlineDatasourceName: string;
    /**
     * 离线数据生命周期（天）。
     * @example `90`
     */
    OfflineLifecycle: number;
    /**
     * 项目所含特征实体个数。
     * @example `10`
     */
    FeatureEntityCount: number;
    /**
     * 项目所含特征视图个数。
     * @example `10`
     */
    FeatureViewCount: number;
    /**
     * 项目所含模型特征个数。
     * @example `5`
     */
    ModelCount: number;
    /**
     * 项目所有者的阿里云账号ID。
     * @example `1232132543543****`
     */
    Owner: string;
    /**
     * 创建时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2021-12-15T23:24:33.132+08:00`
     */
    GmtModifiedTime: string;
}
