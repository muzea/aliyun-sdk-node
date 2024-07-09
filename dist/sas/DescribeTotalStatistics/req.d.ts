export interface DescribeTotalStatisticsRequest {
    /**
     * 要查询的资产分组ID。
     * > 您可以调用[DescribeAllGroups](~~130972~~)接口获取该参数。
     * @example `8076980`
     */
    "GroupId"?: number;
    /**
     * 资产名称或公网IP。
     * @example `222.185.XX.XX`
     */
    "Remark"?: string;
    /**
     * 数据的请求来源。默认**aqs**。取值：
     * - **sas**：表示数据请求来源为云安全中心
     * - **aqs**：表示数据请求来源为安骑士
     * @example `sas`
     */
    "From"?: string;
}
