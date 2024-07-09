export interface SetDataShareInstanceRequest {
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 在数据共享中添加或移除实例。取值说明：
     * - **add**：将实例添加至数据共享中。
     * - **remove**：将实例从数据共享中移除。
     * @example `add`
     */
    "OperationType": string;
    /**
     * 实例列表。
     */
    "InstanceList": string[];
}
