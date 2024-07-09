export interface GetTransitRouterFlowTopNRequest {
    /**
     * 查询起始时间的毫秒时间戳。最大支持查24小时跨度的数据。
     * @example `1684373600099`
     */
    "BeginTime": number;
    /**
     * 查询结束时间的毫秒时间戳。最大支持查24小时跨度的数据。
     * @example `1638239093000`
     */
    "EndTime": number;
    /**
     * 取最大多少条数据。默认值：**10**。最大值：**100**。
     * @example `20`
     */
    "TopN"?: number;
    /**
     * 对于当前地域或IP的流量方向。取值：
     * - **in**：入流量。
     * - **out**：出流量。
     * @example `in`
     */
    "Direction": string;
    /**
     * 指定跨域流量排名的维度，大小写敏感，请注意区分大小写。取值：
     * - **1Tuple**：查询跨域流量中当前地域、云企业网CEN（Cloud Enterprise Network）、IP维度的排名。
     * - **2Tuple**：查询跨域流量中两端地域、两端IP维度的排名。
     * - **5Tuple**：查询跨域流量中两端IP、两端端口和协议维度的排名。
     * - **Cen**：查询跨域流量中云企业网CEN实例维度的排名。
     * - **RegionPair**：查询跨域流量中两端地域维度的排名。
     * - **Port**：查询跨域流量中端口维度的排名。
     * - **Protocol**：查询跨域流量中协议维度的排名。
     * @example `1Tuple`
     */
    "GroupBy": string;
    /**
     * 当前地域，即**ThisIp**所在地域。
     * @example `cn-shanghai`
     */
    "ThisRegion"?: string;
    /**
     * 本端IP地址。
     * @example `1.8.XX.XX`
     */
    "ThisIp"?: string;
    /**
     * 本端端口。
     * @example `80`
     */
    "ThisPort"?: string;
    /**
     * 对端地域。
     * @example `ap-southeast-1`
     */
    "OtherRegion"?: string;
    /**
     * 对端IP地址。
     * @example `122.112.XX.XX`
     */
    "OtherIp"?: string;
    /**
     * 对端端口。
     * @example `10869`
     */
    "OtherPort"?: string;
    /**
     * 协议号。
     * > 支持全部协议，仅**GroupBy**配置为**5Tuple**或**Protocol**时，才需要配置该参数。
     * @example `6`
     */
    "Protocol"?: string;
    /**
     * 数据排序的指标。默认值：Bytes，表示按流量排序。
     * @example `Bytes`
     */
    "OrderBy"?: string;
    /**
     * 流量数据的排序方式。
     * - **desc**：降序。
     * - **asc**：升序。
     * @example `desc`
     */
    "Sort"?: string;
    /**
     * CEN实例ID。
     * @example `cen-ia8kw1zjv4hyal****`
     */
    "CenId"?: string;
    /**
     * CEN带宽包ID。
     * @example `cenbwp-ia8kw1zjv4hyal****`
     */
    "BandwithPackageId"?: string;
    /**
     * 成员账号ID列表。
     */
    "AccountIds"?: number[];
    /**
     * 是否使用多账号管理功能。默认值：**false**。表示不使用。
     * > 多账号管理功能默认不开放，如需使用，请联系商务经理申请使用权限。
     * @example `false`
     */
    "UseMultiAccount"?: boolean;
}
