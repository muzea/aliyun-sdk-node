export interface GetCallsPerDayResponse {
    /**
     * 错误信息
     * @example `phoneNum and havePhoneNum must be either empty or not empty at the same time`
     */
    Message: string;
    /**
     *
     * 阿里云请求ID
     * @example `45FAB8AB-CFB3-4582-B1A5-9010DEADD8F9`
     */
    RequestId: string;
    /**
     * 错误码
     * @example `InvalidPhone`
     */
    Code: string;
    /**
     * 请求结果
     * @example `true`
     */
    Success: string;
    /**
     * data
     */
    Data: {
        /**
         * 总条数
         * @example `13`
         */
        TotalNum: number;
        /**
         * 页大小
         * @example `10`
         */
        PageSize: number;
        /**
         * 当前页
         * @example `1`
         */
        PageNo: string;
        /**
         * array
         */
        CallsPerdayResponseList: {
            /**
             * 按天分组
             * @example `-1`
             */
            DataId: string;
            /**
             * 按小时分组
             * @example `-1`
             */
            HourId: string;
            /**
             * 租户id
             * @example `0`
             */
            TenantId: string;
            /**
             * 租户名称
             * @example `50`
             */
            TenantName: string;
            /**
             * 手机号
             * @example `1583709xxxx`
             */
            PhoneNum: string;
            /**
             * 外呼次数
             * @example `1`
             */
            CallOutCnt: string;
            /**
             * 来电次数
             * @example `1`
             */
            CallInCnt: string;
            /**
             * 按分钟分组
             * @example `-1`
             */
            MinuteId: string;
        }[];
    };
}
