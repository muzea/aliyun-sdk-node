export interface ModifyCreateVulWhitelistResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6B23A612-D997-5176-8C3B-D640DFD65772`
     */
    RequestId: string;
    /**
     * 漏洞白名单列表信息。
     */
    VulWhitelistList: {
        /**
         * 漏洞白名单Id。
         * @example `30376`
         */
        Id: number;
    }[];
}
