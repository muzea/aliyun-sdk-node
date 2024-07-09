export interface GetUserProvisioningRdAccountStatisticsResponse {
    /**
     * RAM用户同步的统计信息。
     */
    UserProvisioningStatistics: {
        /**
         * 实体ID，即资源目录成员ID。
         * @example `1743382******`
         */
        EntityId: string;
        /**
         * 实体类型，取值为`RD Account`。
         * @example `RD Account`
         */
        Type: string;
        /**
         * 目录ID。
         * @example `d-003qew84****`
         */
        DirectoryId: string;
        /**
         * 失败的RAM用户同步事件数量。
         * @example `4`
         */
        FailedEventCount: number;
        /**
         * 目录所属的主账号ID。
         * @example `1639738******`
         */
        OwnerPk: string;
        /**
         * 上次同步时间。
         * @example `2022-11-28T03:55:42Z`
         */
        LatestAsyncTime: string;
    };
    /**
     * 请求ID。
     * @example `F6F90F3D-4502-5877-B80B-97476F6AE2CC`
     */
    RequestId: string;
}
