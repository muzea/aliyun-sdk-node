export interface DescribeEntityInfoResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 实体逻辑ID。
         * @example `12345`
         */
        EntityId: number;
        /**
         * 实体类型。取值：
         * - ip：ip
         * - domain：域名
         * - url：url
         * - process：进程
         * - file：文件
         * - host：主机
         * @example `ip`
         */
        EntityType: string;
        /**
         * 实体信息。
         * @example `{ location: "xian", net_connect_dir: "in", malware_type: "${aliyun.siem.sas.alert_tag.login_unusual_account}" }`
         */
        EntityInfo: any;
        /**
         * 威胁情报信息。
         * @example `{
              "Ip": {
                    "queryHot": "0",
                    "country": "China",
                    "province": "shanxi",
                    "ip": "221.11.XX.XXX",
                    "asn": "4837",
                    "asn_label": "CHINAXXX-Backbone - CHINA UNICOM ChinaXXX Backbone, CN"
              }
        }`
         */
        TipInfo: any;
    };
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
}
