export interface ListUserDrawRecordByPkRequest {
    /**
     * 阿里云账号ID
     * @example `1789095186553536`
     */
    "aliyunPk"?: string;
    /**
     * draw任务组
     * @example `task_group_0000`
     */
    "drawGroup"?: string;
    /**
     * draw奖池
     * @example `developer-award-draw-pool_123`
     */
    "drawPoolName"?: string;
}
