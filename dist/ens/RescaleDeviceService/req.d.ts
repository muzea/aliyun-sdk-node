export interface RescaleDeviceServiceRequest {
    /**
     * 扩容资源方式。枚举类型，取值：Add（生产新资源）。
     * @example `Add`
     */
    "RescaleType": string;
    /**
     * 扩容区域级别。枚举类型，取值：RegionId（指定边缘节点ID）。
     * @example `RegionId`
     */
    "RescaleLevel": string;
    /**
     * 异步扩容资源的超时时间，单位秒，默认300。
     * @example `1800`
     */
    "Timeout"?: number;
    /**
     * 服务ID。
     * @example `service-01c6dd6e93f040698566`
     */
    "ServiceId"?: string;
    /**
     * 扩容资源区域需求，Json数组格式的字符串。
     * @example `[{\"regionCode\": \"cn-wuxi-telecom_unicom_cmcc-3\",    \"ispCode\": \"telecom\",    \"count\": 2	},{    \"regionCode\": \"cn-shanghai-cmcc\",    \"count\": 4	}]`
     */
    "ResourceSelector": string;
    /**
     * 资源规格名。
     * @example `ens.a6e.large`
     */
    "ResourceSpec"?: string;
    /**
     * 网络类型。枚举类型，取值：
     * - **1**（默认值）：公网
     * - **2**：内网
     * @example `1`
     */
    "IpType"?: number;
    /**
     * 应用ID。
     * @example `7aedc50b-b1cb-4a7c-9e3d-4cf3c9ee55a4`
     */
    "AppId"?: string;
    /**
     * 镜像ID。
     * @example `m-5rynw9g1ow1e928lb83bqmbnf`
     */
    "ImageId"?: string;
    /**
     * 资源规格模版信息，Json格式的字符串。
     * @example `{\"imageId\":\"m-5s4z4c10avgwvwtn33gl2vgob\",\"ipType\":2,\"specName\":\"ens.pfb-c3m7.medium\"}`
     */
    "ResourceInfo"?: string;
}
