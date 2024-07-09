export interface AddCustomLineRequest {
    /**
     * 用户语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 自定义线路名称。
     * @example `北京线路`
     */
    "LineName": string;
    /**
     * IP段列表。
     */
    "IpSegment": {
        /**
         * Ip段的结束IP。
         * @example `192.0.2.254`
         */
        EndIp: string;
        /**
         * IP段的开始IP。
         * @example `192.0.2.0`
         */
        StartIp: string;
    }[];
}
