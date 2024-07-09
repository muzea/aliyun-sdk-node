export interface GetVersionResponse {
    /**
     * 当前版本对应的工作流定义
     * @example `{\"schemaVersion\":\"2018-12-12\",\"actions\":{},\"version\":\"1.0.0\",\"triggers\":{}}`
     */
    Definition: string;
    /**
     * 版本最后更新时间
     * @example `2018-12-12T07:36:22.992Z`
     */
    UpdateTime: string;
    /**
     * 请求ID
     * @example `ADB97A33-50E7-48A5-963D-ACBAE36D0BEC`
     */
    RequestId: string;
    /**
     * 版本状态，**Enabled**表示启用中。
     * @example `Enabled`
     */
    VersionStatus: string;
    /**
     * 版本创建时间
     * @example `2018-12-12T07:36:22.992Z`
     */
    CreateTime: string;
    /**
     * 版本ID
     * @example `ve-uf6bwdtvid7o25`
     */
    VersionId: string;
    /**
     * 版本名称
     * @example `5.3.6`
     */
    VersionName: string;
    /**
     * 版本描述
     * @example `这是版本描述`
     */
    VersionDescription: string;
    /**
     * 该版本所属工作流ID
     * @example `lc-uf6wvbsyvvl5sy`
     */
    FlowId: string;
    /**
     * 当前工作流所属地域
     * @example `cn-shanghai`
     */
    RegionId: string;
}
