export interface MigrateEcuRequest {
    /**
     * 实例ID，多个实例之间可用英文逗号（,）分隔。
     * @example `i-2zej4i2jdf3ntwhj****`
     */
    "InstanceIds": string;
    /**
     * 命名空间ID：
     * - 自定义命名空间ID格式为：`地域ID:命名空间标示符`，例如：cn-beijing:tdy218。
     * - 默认命名空间ID格式为：`地域ID`，例如：cn-beijing。
     * @example `cn-hangzhou:test_region`
     */
    "LogicalRegionId"?: string;
}
