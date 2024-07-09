export interface DescribeStsGrantStatusRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 要查询的RAM角色名称。取值固定为**AliyunDDoSCOODefaultRole**，表示DDoS高防服务的默认角色。
     * > DDoS高防服务默认使用此角色来访问您在其他云产品中的资源。
     * @example `AliyunDDoSCOODefaultRole`
     */
    "Role": string;
}
