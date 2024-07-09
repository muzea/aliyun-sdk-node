export interface AllocateInstancePublicConnectionRequest {
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 新增连接地址的网络类型，固定为Public（公网）。
     * @example `Public`
     */
    "NetType": string;
    /**
     * 目标连接地址的前缀，即**ConnectionString**参数的前缀部分。
     * @example `selectdb-cn-h033cn****-pub-i3`
     */
    "ConnectionStringPrefix": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
