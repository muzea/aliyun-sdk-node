export interface CreateDataTrackOrderRequest {
    /**
     * 业务背景，以减少沟通成本。
     * @example `业务测试。`
     */
    "Comment": string;
    /**
     * 工单相关人ID列表。
     */
    "RelatedUserList"?: string[];
    /**
     * 工单参数。
     */
    "Param": {
        /**
         * 数据库ID，可调用[SearchDatabases](~~141876~~)接口获取。
         * > 当前仅支持物理库，暂不支持逻辑库。
         * @example `123***`
         */
        DbId: string;
        /**
         * 数据追踪范围的起始时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2023-04-23 00:00:00`
         */
        JobStartTime: string;
        /**
         * 数据追踪范围的终止时间，格式为yyyy-MM-dd HH:mm:ss。
         * @example `2023-04-23 10:00:00`
         */
        JobEndTime: string;
        /**
         * 追踪的表名列表。
         */
        TableNames: string[];
        /**
         * 追踪类型列表。
         */
        TrackTypes: string[];
    };
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
}
