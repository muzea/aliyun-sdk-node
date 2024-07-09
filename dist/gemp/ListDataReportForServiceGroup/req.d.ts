export interface ListDataReportForServiceGroupRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 开始时间
         * @example `2021-09-09`
         */
        startTime: string;
        /**
         * 结束时间
         * @example `2021-09-30`
         */
        endTime: string;
        /**
         * 服务组名称
         * @example `A服务组`
         */
        serviceGroupName: string;
    };
}
