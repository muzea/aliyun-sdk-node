export interface DescribeActiveOperationMaintainConfResponse {
    /**
     * 请求ID。
     * @example `1A586DCB-39A6-4050-81CC-C7BD4CCDB49F`
     */
    RequestId: string;
    /**
     * 配置信息。
     */
    Config: {
        /**
         * 创建时间。
         * @example `2021-08-11T10:08:27Z`
         */
        CreatedTime: string;
        /**
         * 循环时间。
         * @example `1,2,3,4,5,6,7`
         */
        CycleTime: string;
        /**
         * 循环类型。
         * @example `Week`
         */
        CycleType: string;
        /**
         * 运维结束时间。
         * @example `04:00:00Z`
         */
        MaintainEndTime: string;
        /**
         * 运维开始时间。
         * @example `04:00:00Z`
         */
        MaintainStartTime: string;
        /**
         * 修改时间。
         * @example `2021-08-11T10:08:27Z`
         */
        ModifiedTime: string;
        /**
         * 状态。
         * @example `1`
         */
        Status: number;
    };
    /**
     * 是否已配置：
     * - 1：已经配置；
     * - 0：未配置。
     * @example `1`
     */
    HasConfig: number;
}
