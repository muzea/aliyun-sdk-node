export interface BindSlbResponse {
    /**
     * 接口响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `bind slb success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `23DR4FDXXXXXXXXXX`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 私网虚拟服务组ID。
         * @example `“”`
         */
        VServerGroupId: string;
        /**
         * 私网SLB实例ID。
         * @example `lb-wz96ph63r************`
         */
        SlbId: string;
        /**
         * 公网SLB IP地址。
         * @example `“”`
         */
        ExtSlbIp: string;
        /**
         * SLB监听端口。
         * @example `80`
         */
        SlbPort: number;
        /**
         * 公网SLB名称。
         * @example `“”`
         */
        ExtSlbName: string;
        /**
         * 公网SLB实例ID。
         * @example `“”`
         */
        ExtSlbId: string;
        /**
         * 公网SLB虚拟服务器组ID。
         * @example `“”`
         */
        ExtVServerGroupId: string;
        /**
         * 私网SLB名称。
         * @example `test**********`
         */
        SlbName: string;
        /**
         * 私网SLB IP地址。
         * @example `192.16*.*.*`
         */
        SlbIp: string;
    };
}
