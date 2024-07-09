export interface ListSupportResourceTypesRequest {
    /**
     * 地域ID。
     * 关于地域ID的详情，请参见[服务接入点](~~2330902~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 最大值：1000。默认值：50。
     * @example `50`
     */
    "MaxResult"?: number;
    /**
     * 下一个查询开始的Token。
     * @example `AAAAAYws9fJ0Ur4MGm/5OkDoW/Y3wDNwUdssyKODK+myOlBL`
     */
    "NextToken"?: string;
    /**
     * 云服务代码。用于查询的过滤条件。
     * 该参数从返回结果中获取。
     * @example `ecs`
     */
    "ProductCode"?: string;
    /**
     * 资源类型。用于查询的过滤条件。
     * 该参数从返回结果中获取。
     * @example `instance`
     */
    "ResourceTye"?: string;
    /**
     * 是否显示标签能力项。取值：
     * - true：显示。
     * - false（默认值）：不显示。
     * @example `false`
     */
    "ShowItems"?: boolean;
    /**
     * 标签能力项代码。用于查询的过滤条件。
     * 详情请参见下文的**标签能力项**。
     * @example `TAG_CONSOLE_SUPPORT`
     */
    "SupportCode"?: string;
}
