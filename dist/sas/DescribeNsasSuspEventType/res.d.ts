export interface DescribeNsasSuspEventTypeResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9FBC6E47-7508-58C9-9E76-528E118CB1CC`
     */
    RequestId: string;
    /**
     * 安全告警类型信息列表。
     */
    EventTypes: {
        /**
         * 安全告警类型。
         * @example `Unusual Logon`
         */
        Type: string;
        /**
         * 安全告警资产数量。
         * @example `22`
         */
        SuspEventCount: number;
        /**
         * 安全告警类型名称。
         * @example `Unusual Logon`
         */
        Name: string;
    }[];
}
