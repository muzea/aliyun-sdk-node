export interface AddUserSourceLogConfigResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 需要接入日志的详细SLS信息。
         * @example `cn-shanghai.siem-project.siem-logstore`
         */
        DiplayLine: string;
        /**
         * 产品code。
         * @example `sas`
         */
        SourceProdCode: string;
        /**
         * 日志code。
         * @example `cloud_siem_aegis_proc`
         */
        SourceLogCode: string;
        /**
         * 返回接入详细信息。
         * 已返回 ：true
         * 未返回：false
         * @example `0`
         */
        Displayed: boolean;
        /**
         * 是否已经接入。
         *  已接入：true
         * 未接入：false
         * @example `0`
         */
        Imported: boolean;
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
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
