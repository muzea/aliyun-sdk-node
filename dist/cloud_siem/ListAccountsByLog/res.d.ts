export interface ListAccountsByLogResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 威胁分析云账号ID。
         * @example `123XXXXXXXX`
         */
        SubUserId: number;
        /**
         * 购买威胁分析的云账号ID。
         * @example `123XXXXXXXXX`
         */
        MainUserId: number;
        /**
         * 云账号ID。
         * @example `123xxxxxxx`
         */
        AccountId: string;
        /**
         * 云账号名称。
         * @example `sas_account_xxx`
         */
        AccountName: string;
        /**
         * 该账号是否已经接入。取值：
         *  -1：已接入。
         *  -0：未接入。
         * @example `123xxxxxxx`
         */
        Imported: number;
        /**
         * 日志code。
         * @example `cloud_siem_waf_xxxxx`
         */
        LogCode: string;
        /**
         * 日志对应的产品code。
         * @example `qcloud_waf`
         */
        ProdCode: string;
    }[];
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
