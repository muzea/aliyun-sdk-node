export interface ListQualityResultsByRuleRequest {
    /**
     * 使用的校验规则ID。您可以使用该规则ID与分区表达式等信息进行联合查询。
     * @example `152322134`
     */
    "RuleId": number;
    /**
     * 业务日期起始时间，格式为yyyy-MM-dd HH:mm:ss。
     * 该参数与EndDate配合使用，二者所取的时间区间不能大于7天。
     * @example `2020-09-20 00:00:00`
     */
    "StartDate": string;
    /**
     * 业务日期截止时间，格式为yyyy-MM-dd HH:mm:ss。
     * 该参数与StartDate配合使用，二者所取的时间区间不能大于7天。
     * @example `2020-09-22 00:00:00`
     */
    "EndDate": string;
    /**
     * 每页显示的条数，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 页码数。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 需要进行数据质量校验的引擎或者数据源名称。
     * @example `autotest`
     */
    "ProjectName": string;
    /**
     * DataWorks项目空间ID。
     * @example `12345`
     */
    "ProjectId": number;
}
