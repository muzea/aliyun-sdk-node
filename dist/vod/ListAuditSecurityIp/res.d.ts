export interface ListAuditSecurityIpResponse {
    /**
     * 请求ID。
     * @example `664BBD08-C7DB-4E*****73-9D0958D9A899`
     */
    RequestId: string;
    /**
     * 审核安全IP详情。
     */
    SecurityIpList: {
        /**
         * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-05-22T06:54:23Z`
         */
        CreationTime: string;
        /**
         * 安全IP列表。
         * @example `30.27.14.0/24,30.39.127.245`
         */
        Ips: string;
        /**
         * 更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-05-22T06:55:14Z`
         */
        ModificationTime: string;
        /**
         * 安全IP组名称。
         * @example `Default`
         */
        SecurityGroupName: string;
    }[];
}
