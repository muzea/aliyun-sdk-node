export interface TagResourcesRequest {
    /**
     * 实例所属的地域ID，您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例和标签信息列表。
     * @example `dds-bpxxxxxxxx`
     */
    "ResourceId": string[];
    /**
     * 标签信息列表。
     */
    "Tag": {
        /**
         * 标签的键。
         * N表示传入第几个标签的键，N的取值范围为1~20。例如：
         * - **Tag.1.Key**表示传入第一个标签的键。
         * - **Tag.2.Key**表示传入第二个标签的键。
         * @example `开发组`
         */
        Key: string;
        /**
         * 标签的值。
         * N表示传入第几个标签的值，N的取值范围为1~20。例如：
         * - **Tag.1.Value**表示传入第一个标签的值。
         * - **Tag.2.Value**表示传入第二个标签的值。
         * @example `4.0环境`
         */
        Value: string;
    }[];
}
