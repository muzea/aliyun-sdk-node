export interface GetServiceLinkedRoleDeletionStatusResponse {
    /**
     * 任务状态。
     * - SUCCEEDED：删除成功。
     * - IN_PROGRESS：正在删除中。
     * - FAILED：删除失败。
     * - NOT_STARTED：删除未开始。
     * - INTERNAL_ERROR：内部异常错误。
     * @example `FAILED`
     */
    Status: string;
    /**
     * 请求ID。
     * @example `07194EB1-DB50-4513-A51D-99B30D635AEF`
     */
    RequestId: string;
    /**
     * 删除任务失败的原因。
     */
    Reason: {
        /**
         * 失败信息。
         * @example `Service-Linked Role acs:ram::196813227629****:role/aliyunserviceroleforhdr cannot be deleted as it is in use by hdr.aliyuncs.com.`
         */
        Message: string;
        RoleUsages: {
            /**
             * 使用服务关联角色的资源信息。
             */
            RoleUsage: {
                /**
                 * 地域。
                 * @example `global`
                 */
                Region: string;
                Resources: {
                    /**
                     * 资源列表。
                     */
                    Resource: string[];
                };
            }[];
        };
    };
}
