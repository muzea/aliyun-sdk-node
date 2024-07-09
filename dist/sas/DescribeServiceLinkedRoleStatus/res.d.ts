export interface DescribeServiceLinkedRoleStatusResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `39CE98F4-88C0-4539-B906-6B542E5C07B9`
     */
    RequestId: string;
    /**
     * 服务关联角色的状态信息。
     */
    RoleStatus: {
        /**
         * 服务关联角色的状态。取值：
         * - **true**：已创建
         * - **false**：未创建
         * @example `true`
         */
        Status: boolean;
    };
}
