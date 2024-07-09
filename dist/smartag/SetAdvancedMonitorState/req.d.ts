export interface SetAdvancedMonitorStateRequest {
    /**
     * 智能接入网关实例所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~69813~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-****`
     */
    "SagId": string;
    /**
     * 是否启用深度监控开关。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "Enable": boolean;
}
