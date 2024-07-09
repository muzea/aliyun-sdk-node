export interface ListRdUsersResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 是否已被威胁分析多账号管控纳管。取值：
         *  - true：已被纳管。
         *  - false：未被纳管。
         * @example `true`
         */
        Joined: boolean;
        /**
         * 被纳管时间。
         * @example `2013-10-01 00:00:00`
         */
        JoinedTime: string;
        /**
         * 是否被委派查看自己的资源
         * @example `true`
         */
        DelegatedOrNot: boolean;
        /**
         * 购买威胁分析的阿里云账号ID。
         * @example `123XXXXXXXXX`
         */
        MainUserId: number;
        /**
         * 威胁分析阿里云账号ID。
         * @example `123XXXXXXXX`
         */
        SubUserId: number;
        /**
         * 威胁分析阿里云账号名字。
         * @example `sas_account_xxx`
         */
        SubUserName: string;
    }[];
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
