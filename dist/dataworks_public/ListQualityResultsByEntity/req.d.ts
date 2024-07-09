export interface ListQualityResultsByEntityRequest {
    /**
     * 分区表达式ID。您可以调用[GetQualityEntity](~~174003~~)获取分区表达式ID。
     * @example `152322134`
     */
    "EntityId": number;
    /**
     * 业务日期起始时间，格式为yyyy-MM-dd HH:mm:ss。
     * @example `2020-09-20 00:00:00`
     */
    "StartDate": string;
    /**
     * 业务日期截止时间，格式为yyyy-MM-dd HH:mm:ss。
     * @example `2020-09-21 00:00:00`
     */
    "EndDate": string;
    /**
     * 每页显示的条数，默认为10条，最大20条。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页码数。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 引擎或者数据源的名称。您可以从数据源配置中获取名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * DataWorks项目空间ID。
     * @example `12345`
     */
    "ProjectId": number;
}
