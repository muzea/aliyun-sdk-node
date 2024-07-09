export interface CreateTrafficControlResponse {
    /**
     * 流控策略唯一ID
     * @example `tf123456`
     */
    TrafficControlId: string;
    /**
     * 本次请求编号
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
}
