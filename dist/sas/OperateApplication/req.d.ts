export interface OperateApplicationRequest {
    /**
     * 规则ID。
     * @example `300566`
     */
    "RuleId": number;
    /**
     * 容器防篡改应用列表。
     */
    "ContainerWebDefenseApplicationDTOS": {
        /**
         * 指定要查询的容器集群的ID。
         * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
         * @example `ceb68cc58234141828677e383bd21ff0c`
         */
        ClusterId: string;
        /**
         * 应用标签值。
         * @example `app:app-003`
         */
        Tag: string;
        /**
         * 应用配置标识。取值：
         * - **add**：对该资产生效。
         * - **del**：不对该资产生效。
         * @example `add`
         */
        Flag: string;
        /**
         * 应用唯一标识。新增不用填写。
         * @example `196`
         */
        Id: number;
    }[];
}
