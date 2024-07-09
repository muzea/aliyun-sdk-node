export interface ListQualityRulesRequest {
    /**
     * 引擎或者数据源的名称。您可以从数据源配置中获取名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * 分区表达式的ID。您可以调用[GetQualityEntity](~~174003~~)获取分区表达式ID。
     * @example `1234`
     */
    "EntityId": number;
    /**
     * 页码数。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页显示的条数，默认为10条，最大为20条。
     * @example `20`
     */
    "PageSize": number;
    /**
     * DataWorks项目空间ID
     * @example `12345`
     */
    "ProjectId": number;
}
