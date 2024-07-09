export interface ListSwimmingLaneGroupRequest {
    /**
     * 命名空间ID。
     * 自定义命名空间ID格式为：`地域ID:命名空间标示符`，例如：`cn-beijing:test`。
     * 默认命名空间ID格式为：地域ID，例如：cn-beijing。
     * @example `cn-shenzhen:publish`
     */
    "LogicalRegionId": string;
    /**
     * 泳道组ID。
     * @example `0`
     */
    "GroupId"?: number;
}
