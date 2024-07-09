export interface UpdatePolarDBXInstanceNodeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例名称ID。
     * @example `pxc-hzjasdyuoo`
     */
    "DBInstanceName": string;
    /**
     * 实例目标节点数，取值范围：0-99。
     * @example `3`
     */
    "DbInstanceNodeCount"?: string;
    /**
     * 客户端token，任意随机字符串。
     * @example `FEA5DC20-6D8A-5979-97AA-FC57546ADC20`
     */
    "ClientToken"?: string;
    /**
     * 计算节点个数。
     * @example `2`
     */
    "CNNodeCount"?: string;
    /**
     * 存储节点个数。
     * @example `2`
     */
    "DNNodeCount"?: string;
    "StoragePoolName"?: string;
    "DeleteDNIds"?: string;
    "AddDNSpec"?: string;
}
