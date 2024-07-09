export interface QueryMigrateEcuListRequest {
    /**
     * 命名空间ID。
     * - 自定义命名空间ID格式为：`地域ID:命名空间标示符`，例如：`cn-beijing:test`。
     * - 默认命名空间ID格式为：`地域ID`，例如：`cn-beijing`。
     * @example `cn-hangzhou或cn-hangzhou:test`
     */
    "LogicalRegionId"?: string;
}
