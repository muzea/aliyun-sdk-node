export interface ListInstanceRequest {
    /**
     * 指定页码，默认为：1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 指定每页展示条数，默认为10，限制:[1-50]。
     * @example `10`
     */
    "size"?: number;
    /**
     * 通过实例运行状态进行过滤。
     * 取值：
     * - **Initializing**：初始化中。
     * - **Ready**：待数据导入。
     * - **Running**：运行中。
     * @example `Running`
     */
    "status"?: string;
    /**
     * 通过实例名称进行过滤，支持模糊匹配。
     * @example `实例1`
     */
    "name"?: string;
    /**
     * 秒级时间戳，通过过期时间过滤，大于当前时间会过滤出即将过期的实例（不包含已经过期的实例）。
     * @example `1608533404`
     */
    "expiredTime"?: string;
    /**
     * 通过实例ID进行过滤，支持模糊匹配。
     * @example `airec-cn-****`
     */
    "instanceId"?: string;
}
