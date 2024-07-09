export interface DescribeDTSIPRequest {
    /**
     * DTS任务实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 源实例所属地域ID，详情请参见[支持的地域列表](~~141033~~)。
     * > 如果源实例为有公网IP的自建数据库，则可以传入**cn-hangzhou**或者离自建数据库物理距离最近的区域ID。
     * @example `cn-hangzhou`
     */
    "SourceEndpointRegion": string;
    /**
     * 目标实例所属地域ID，详情请参见[支持的地域列表](~~141033~~)。
     * > 如果目标实例为有公网IP的自建数据库，则可以传入**cn-hangzhou**或者离自建数据库物理距离最近的区域ID。
     * @example `cn-hangzhou`
     */
    "DestinationEndpointRegion"?: string;
}
