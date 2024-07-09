export interface ListCompliancePackTemplatesRequest {
    /**
     * 合规包模板ID。
     * @example `ct-d254ff4e06a300cf****`
     */
    "CompliancePackTemplateId"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 规则评估的资源类型。输入该参数时，只返回合规包模板中包括该资源类型的规则。
     * @example `ACS::ECS::Instance`
     */
    "ResourceTypes"?: string;
}
