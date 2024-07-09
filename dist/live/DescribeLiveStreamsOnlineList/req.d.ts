export interface DescribeLiveStreamsOnlineListRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 播流名称，仅支持输入单个StreamName。
     * @example `liveStream****`
     */
    "StreamName"?: string;
    /**
     * 是否只返回指定字段。取值：
     * - **yes**：结果只返回DomainName，AppName，StreamName，PublishTime 字段。
     * - **no**（默认值）：结果返回全部字段。
     * @example `no`
     */
    "OnlyStream"?: string;
    /**
     * 每页大小。取值范围：1~3000，默认值为2000。
     * @example `1500`
     */
    "PageSize"?: number;
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 流类型。取值：
     * - **all**（默认值）：查询所有流。
     *
     * - **raw**：查询原始流。
     *
     * - **trans**：查询转码流。
     * @example `all`
     */
    "StreamType"?: string;
    /**
     * 指定是否模糊匹配流名称。取值：
     * - **fuzzy**（默认值）：模糊匹配。
     * - **strict**：精准匹配。
     * @example `fuzzy`
     */
    "QueryType"?: string;
}
