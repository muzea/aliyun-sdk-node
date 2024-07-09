export interface GetVbrFlowTopNRequest {
    /**
     * 云端地域。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 查询起始时间的毫秒时间戳。最大支持查24小时跨度的数据。
     * @example `1638239092000`
     */
    "BeginTime": number;
    /**
     * 查询结束时间的毫秒时间戳。最大支持查24小时跨度的数据。
     * @example `1638239093000`
     */
    "EndTime": number;
    /**
     * 对于当前地域或IP的流量方向。
     * - **in**：从IDC访问阿里云。
     * - **out**：从阿里云访问IDC。
     * @example `in`
     */
    "Direction": string;
    /**
     * 指定混合云流量排名的维度，大小写敏感，注意区分大小写。取值：
     * - **1Tuple**：查询混合云流量中云企业网CEN（Cloud Enterprise Network）、连接、改为边界路由器VBR（Virtual Border Router）、IP维度的排名。
     * - **2Tuple**：查询混合云流量中两端IP维度的排名。
     * - **5Tuple**：查询混合云流量中两端IP、两端端口和协议维度的排名。
     * - **CloudPort**：查询混合云流量中云端端口的排名。
     * - **OtherPort**：查询混合云流量中IDC端端口的排名。
     * - **Protocol**：查询混合云流量中协议维度的排名。
     * @example `1Tuple`
     */
    "GroupBy": string;
    /**
     * 数据排序的指标。默认值：Bytes，表示按流量排序。
     * @example `Bytes`
     */
    "OrderBy"?: string;
    /**
     * 排序方式。取值：
     * - **desc**：降序。
     * - **asc**：升序。
     * @example `desc`
     */
    "Sort"?: string;
    /**
     * 展示排序靠前的数据。默认值：**10**。表示默认展示排序前10的数据。最大**100**。
     * @example `10`
     */
    "TopN"?: number;
    /**
     * CEN实例ID。
     * @example `cen-ia8kw1zjv4hyal****`
     */
    "CenId"?: string;
    /**
     * 专线VBR实例ID。
     * @example `vbr-k1atj46citwuek42j****`
     */
    "VirtualBorderRouterId"?: string;
    /**
     * CEN的连接ID。
     * @example `tr-attach-dnv870gmqzmb5u****`
     */
    "AttachmentId"?: string;
    /**
     * 协议号。
     * > 支持全部协议，仅**GroupBy**配置为**5Tuple**或**Protocol**时，才需要配置该参数。
     * @example `6`
     */
    "Protocol"?: string;
    /**
     * 云端IP。
     * @example `112.74.XX.XX`
     */
    "CloudIp"?: string;
    /**
     * IDC侧IP。
     * @example `122.112.XX.XX`
     */
    "OtherIp"?: string;
    /**
     * 云端端口号。
     * > 仅**GroupBy**配置为**CloudPort**时，才需要配置该参数。
     * @example `443`
     */
    "CloudPort"?: string;
    /**
     * IDC侧端口号。
     * > 仅**GroupBy**配置为**OtherPort**时，才需要配置该参数。
     * @example `40002`
     */
    "OtherPort"?: string;
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
