export interface DescribeTrailsRequest {
    /**
     * 是否显示影子跟踪，取值：
     * - false（默认值）：不显示。
     * - true：显示。
     * @example `false`
     */
    "IncludeShadowTrails"?: boolean;
    /**
     * 需要查询的跟踪名称列表。多个名称之间用半角逗号（,）分隔。
     * @example `abc,def`
     */
    "NameList"?: string;
    /**
     * 是否查询多账号跟踪，取值：
     * - true：查询多账号跟踪。
     * - false（默认值）：查询单账号跟踪。
     * @example `false`
     */
    "IncludeOrganizationTrail"?: boolean;
}
