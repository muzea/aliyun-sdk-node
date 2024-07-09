export interface DescribePendingMaintenanceActionsResponse {
    /**
     * 请求ID。
     * @example `314127C2-B6C1-4F58-B1F6-E6B645******`
     */
    RequestId: string;
    /**
     * 待处理事件的详情。
     */
    TypeList: {
        /**
         * 待处理事件的任务类型，取值范围如下：
         * * **DatabaseSoftwareUpgrading**：数据库软件升级
         * * **DatabaseHardwareMaintenance**：硬件维护与升级
         * * **DatabaseStorageUpgrading**：数据库存储升级
         * * **DatabaseProxyUpgrading**：代理小版本升级
         * @example `DatabaseSoftwareUpgrading`
         */
        TaskType: string;
        /**
         * 待处理事件的数量。
         * @example `1`
         */
        Count: number;
    }[];
}
