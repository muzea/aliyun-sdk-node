export interface DescribeSuspEventQuaraFilesRequest {
    /**
     * 访问源的IP地址。
     * @example `59.82.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 分页查询时，每页显示数据的最大条数。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 设置需要查询的隔离文件的状态。取值：
     * - **quaraFailed**：隔离失败
     * - **quaraDone**：隔离成功
     * - **quaraing**：隔离中
     * - **rollbackFailed**：撤销隔离失败
     * - **rollbackDone**：撤销隔离成功
     * - **rollbacking**：撤销隔离中
     * @example `quaraDone`
     */
    "Status"?: string;
    /**
     * 资产分组的ID。
     * @example `10541428`
     */
    "GroupId"?: string;
    /**
     * 隔离文件唯一标识。
     * @example `a31337789f64d39b2219733ec99f9af7`
     */
    "QuaraTag"?: string;
    /**
     * 设置需要查看的文件列表的页码。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 请求来源标识，固定为**sas**。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 隔离文件所在的服务器分组ID。
     * @example `11472451`
     */
    "GroupingId"?: number;
}
