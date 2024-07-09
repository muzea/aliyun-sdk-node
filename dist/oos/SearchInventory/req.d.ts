export interface SearchInventoryRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 翻页标记的Token。
     * @example `gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC`
     */
    "NextToken"?: string;
    /**
     * 分页大小。取值范围：1-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 组件过滤规则。
     */
    "Filter"?: {
        /**
         * 组件属性查询值列表。
         * @example `i-bp1cpoxxxxxxxxxxxxxx`
         */
        Value: string[];
        /**
         * 组件属性查询值比较符(N取值范围1-5)。
         * 取值范围：
         * - Equal
         * - NotEqual
         * - BeginWith
         * - LessThan
         * - GreaterThan
         * @example `Equal`
         */
        Operator: string;
        /**
         * 组件的属性名称(N取值范围1-5)。不同的组件内部属性的名称不同。使用[GetInventorySchema](https://api.aliyun.com/#/?product=oos&version=2019-06-01&api=GetInventorySchema)查询不同组件的属性名称。例如：组件ACS:InstanceInformation下有InstanceId这个属性，所以本参数则取值为ACS:InstanceInformation.InstanceId。
         * @example `ACS:InstanceInformation.InstanceId`
         */
        Name: string;
    }[];
    /**
     * 聚合器。可以使用一个或多个聚合器查询实例聚合信息。
     * 取值范围：
     * - ACS:Application.Name
     * - ACS:Application.Version
     * @example `ACS:Application.Name`
     */
    "Aggregator"?: string[];
}
