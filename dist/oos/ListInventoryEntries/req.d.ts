export interface ListInventoryEntriesRequest {
    /**
     * 实例ID。
     * @example `i-bp1cpoxxxwxxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 组件名称。
     * 取值范围：
     * - ACS:InstanceInformation
     * - ACS:Application
     * - ACS:File
     * - ACS:Network
     * - ACS:WindowsRole
     * - ACS:Service
     * - ACS:WindowsRegistry
     * - ACS:WindowsUpdate
     * @example `ACS:InstanceInformation`
     */
    "TypeName": string;
    /**
     * 分页大小。取值范围：1-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token。
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzA`
     */
    "NextToken"?: string;
    /**
     * 组件过滤规则。
     */
    "Filter"?: {
        /**
         * 组件返回结果的名称都对应的值(第一个N的取值范围1-5，第二个N的取值范围为1-20)。
         * @example `test`
         */
        Value: string[];
        /**
         * 组件的比较符(N取值范围1-5)。
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
         * 某个组件下的返回内容里面的单个值的名称(N取值范围1-5)。
         * @example `PlatformName`
         */
        Name: string;
    }[];
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
