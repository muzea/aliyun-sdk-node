export interface AddAssetSelectionCriteriaRequest {
    /**
     * 本次资产选择的唯一标识。
     * @example `5196d280-5bfa-496a-ba70-8a3935e3****`
     */
    "SelectionKey": string;
    /**
     * 设置搜索资产的条件。该参数JSON格式，输入参数时注意大小写。
     * > 支持使用资产的实例ID、实例名称、所属VPC ID、地域、公网IP地址等条件搜索资产。您可以调用[DescribeCriteria](~~DescribeCriteria~~)接口查询支持的搜索条件。
     * @example `{"LogicalExp":"AND","Criteria":"[{\"name\":\"osType\",\"value\":\"linux\",\"logicalExp\":\"AND\"},{\"name\":\"alarmStatus\",\"value\":\"YES\",\"logicalExp\":\"AND\"}]"}`
     */
    "Criteria"?: string;
    /**
     * 对criteria的操作类型，取值：
     * - **add**：添加资产
     * - **del**：删除资产
     * @example `add`
     */
    "CriteriaOperation"?: string;
    /**
     * 资产列表。
     */
    "TargetOperationList"?: {
        /**
         * 资产ID。按机器选择时，取值为机器的uuid，按分组选择时，取值为分组ID，按VPC选择时，取值为VPC ID。
         * @example `1188****`
         */
        Target: string;
        /**
         * 操作类型。取值：
         * - **add**：增加。
         * - **del**：删除。
         * @example `del`
         */
        Operation: string;
    }[];
}
