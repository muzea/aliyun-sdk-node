export interface GetResourceTypeResponse {
    /**
     * 请求ID。
     * @example `A28FBA2E-B6B3-5822-AA45-AB875EF23641`
     */
    RequestId: string;
    /**
     * 资源的返回值。
     * @example `参见示例`
     */
    Attributes: any;
    /**
     * 资源类型。
     * @example `ALIYUN::ROS::WaitConditionHandle`
     */
    ResourceType: string;
    /**
     * 资源的属性。
     * @example `参见示例`
     */
    Properties: any;
    /**
     * 该资源是否支持偏差检测。取值：
     * - true：支持。
     * - false：不支持。
     * @example `false`
     */
    SupportDriftDetection: boolean;
    /**
     * 该资源是否支持资源场景。取值：
     * - true：支持。
     * - false：不支持。
     * @example `false`
     */
    SupportScratchDetection: boolean;
    /**
     * 实体类型。取值：
     * - Resource：普通资源类型。更多信息，请参见[资源](~~28863~~)。
     * - DataSource：数据源资源类型。更多信息，请参见[数据源资源](~~404753~~)。
     * - Module：模块。
     * @example `Resource`
     */
    EntityType: string;
    /**
     * 资源类型提供者。取值：
     * - ROS：资源编排服务。
     * - Self：用户自己。
     * @example `ROS`
     */
    Provider: string;
    /**
     * 资源类型描述。
     * @example `It is a demo.`
     */
    Description: string;
    /**
     * 默认版本ID。
     * > 仅查询资源类型时返回。
     * @example `v1`
     */
    DefaultVersionId: string;
    /**
     * 最新版本ID。
     * > 仅查询资源类型时返回。
     * @example `v10`
     */
    LatestVersionId: string;
    /**
     * 创建时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ss。
     * @example `2023-02-24T08:25:21
    `
     */
    CreateTime: string;
    /**
     * 更新时间，按照ISO8601标准表示，并需要使用UTC时间。格式为：YYYY-MM-DDThh:mm:ss。
     * @example `2023-02-24T08:25:21
    `
     */
    UpdateTime: string;
    /**
     * 版本总数。
     * > 仅查询资源类型时返回。
     * @example `10`
     */
    TotalVersionCount: number;
    /**
     * 是否默认版本。取值：
     * - true：是默认版本。
     * - false：不是默认版本。
     * > 仅查询资源类型版本时返回。
     * @example `true`
     */
    IsDefaultVersion: boolean;
    /**
     * 模块的模板内容。
     * > 仅查询资源类型版本时返回。
     * @example `{"ROSTemplateFormatVersion":"2015-09-01"}`
     */
    TemplateBody: string;
}
