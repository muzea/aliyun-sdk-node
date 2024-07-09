export interface ListAPNsResponse {
    /**
     * 请求ID。
     * @example `A175C091-3910-51AF-8D84-D5717B9B8D38`
     */
    RequestId: string;
    /**
     * 运营商APN列表。
     */
    APNs: {
        /**
         * 5G高速上云实例的运营商。取值：
         * - **telecom**：中国电信。
         * - **mobile**：中国移动。
         * - **unicom**：中国联通。
         * @example `unicom`
         */
        ISP: string;
        /**
         * 运营商接入点APN ID。
         * @example `zjhzaliyun01s.5gjs.njiot`
         */
        APN: string;
        /**
         * 名称。
         * 当前现实APN支持网断。
         * @example `10.0.0.0/13`
         */
        Name: string;
        /**
         * 描述。
         * 当前线上APN描述暂未使用此字段，此APN描述信息为空。
         * @example `空`
         */
        Description: string;
        /**
         * 可用区列表。
         */
        Zones: string[];
    }[];
    /**
     * 分页token，从返回结果中获取。
     * @example `vhNxI+jwQfkLCUChCQ+iOoiRkyUbtAilGSvWuwktFBxF+bar2HpV0efI6n1+GkMv`
     */
    NextToken: string;
    /**
     * 分页大小，范围1-100。
     * @example `20`
     */
    MaxResults: string;
    /**
     * 总条目数。
     * @example `2`
     */
    TotalCount: string;
}
