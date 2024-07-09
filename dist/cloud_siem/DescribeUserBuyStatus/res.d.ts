export interface DescribeUserBuyStatusResponse {
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 资源目录Master账号ID。
         * @example `123XXXXXX`
         */
        MasterUserId: number;
        /**
         * 资源目录Master账号显示名称。
         * @example `rd_master_xxx`
         */
        MasterUserName: string;
        /**
         * 购买威胁分析的阿里云账号ID。
         * @example `123XXXXXX`
         */
        MainUserId: number;
        /**
         * 购买威胁分析的阿里云账号名称。
         * @example `sas_account_xxx`
         */
        MainUserName: string;
        /**
         * 当前登录阿里云账号ID。
         * @example `123XXXXXX`
         */
        SubUserId: number;
        /**
         * 当前登录阿里云账号名称。
         * @example `sas_account_xxx`
         */
        SubUserName: string;
        /**
         * 购买威胁分析的SLS容量，单位GB。
         * @example `1024`
         */
        Capacity: number;
        /**
         * 云安全中心实例ID。
         * @example `sas-instance-xxxxx`
         */
        SasInstanceId: string;
        /**
         * 当前账号是否可以进行威胁分析订单操作。取值：
         * - true：可以购买、升级、变配等。
         * - false：不可以操作威胁分析订单。
         * @example `true`
         */
        CanBuy: boolean;
        /**
         * 威胁分析到期时间，毫秒级时间戳。
         * @example `1669823999000`
         */
        EndTime: number;
        /**
         * 距离威胁分析过期时间的天数。
         * @example `3`
         */
        DurationDays: number;
        /**
         *
         * @example `1`
         */
        RdOrder: number;
    };
    /**
     * 请求消息ID。
     * @example `81D8EC0C-0804-51AD-8C38-17ED0BC74892`
     */
    RequestId: string;
}
