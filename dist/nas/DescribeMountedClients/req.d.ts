export interface DescribeMountedClientsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时，每个分页包含的客户端IP的个数。
     * 取值范围：1~100
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 文件系统ID。
     * @example `31a8e4****`
     */
    "FileSystemId": string;
    /**
     * 客户端IP地址。
     * - 当您指定客户端IP时，调用接口会判断客户端列表是否包含该客户端IP。若包含，则返回该客户端IP；若不包含，则返回空列表。
     * - 当您未指定客户端IP时，调用接口会返回近1分钟使用NAS文件系统的所有客户端IP列表。
     * @example `10.10.10.1`
     */
    "ClientIP"?: string;
    /**
     * 挂载点。
     * @example `1111222****95.cn-hangzhou.nas.aliyuncs.com`
     */
    "MountTargetDomain": string;
    /**
     * 客户端列表的分页页码。
     * 起始值（默认值）：1
     * @example `1`
     */
    "PageNumber"?: number;
}
