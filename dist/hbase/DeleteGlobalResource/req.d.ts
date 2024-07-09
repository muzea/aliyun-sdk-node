export interface DeleteGlobalResourceRequest {
    /**
     * 集群Id。
     * @example `hb-t4naqsay5gn******`
     */
    "ClusterId": string;
    /**
     * 资源名称。
     * PubPhoenixSLBQueryServerVip 释放HBase SQL服务的外网地址。
     * @example `PubPhoenixSLBQueryServerVip`
     */
    "ResourceName": string;
    /**
     * 资源类型。
     * @example `GLOBAL_VIP`
     */
    "ResourceType": string;
    "RegionId"?: string;
}
