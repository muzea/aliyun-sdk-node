export interface WhiteIpListRequest {
    /**
     * 自建数据库或第三方云数据库的接入方式，取值为
     * - **internet**：通过公网接入。
     * - **vpc**：通过专线/VPN网关/智能网关接入。
     * @example `vpc`
     */
    "Type": string;
    /**
     * 源实例所属地域ID，详情请参见[支持的地域列表](~~141033~~)。
     * > 如果源实例为有公网IP的自建数据库或第三方云数据库，则可以传入**cn-hangzhou**或者离该类数据库物理距离最近的区域ID。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 目标实例所属地域ID，详情请参见[支持的地域列表](~~141033~~)。
     * > -  如果目标实例为有公网IP的自建数据库或第三方云数据库，则可以传入**cn-hangzhou**或者离该类数据库物理距离最近的区域ID。
     * -  当DTS任务为迁移或同步时，本参数必须传入。
     * @example `cn-hangzhou`
     */
    "DestinationRegion"?: string;
    /**
     * DTS实例所属的地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    "ZeroEtlJob"?: boolean;
    "ResourceGroupId"?: string;
}
