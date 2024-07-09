export interface ListChatRecordDetailRequest {
    /**
     * 客户请求唯一ID。用于幂等校验，可以用UUID生成。
     * @example `46c1341e-2648-447a-9b11-70b6a298d94d`
     */
    "ClientToken"?: string;
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre***`
     */
    "InstanceId": string;
    /**
     * 会话结束的时间范围右区间。时间戳格式，单位：毫秒。
     * @example `1614582000000`
     */
    "CloseTimeEnd"?: number;
    /**
     * 当前页。默认为：1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页大小。默认为：**500**。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 会话结束的时间范围左区间。时间戳格式，单位：毫秒。
     * @example `1614578400000`
     */
    "CloseTimeStart"?: number;
}
