export interface RoamClientUserRequest {
    /**
     * 目的智能接入网关App实例所在的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 源智能接入网关App实例ID。
     * @example `sag-m9uhqekwnqcnyy****`
     */
    "OriginSmartAGId": string;
    /**
     * 目的智能接入网关App实例ID。
     * @example `sag-ghwa10ko6ndwug****`
     */
    "TargetSmartAGId": string;
    /**
     * 源智能接入网关App实例所在的地域ID。
     * @example `ap-southeast-1`
     */
    "OriginRegionId": string;
    /**
     * 要漫游的客户端账号的用户名。
     * @example `nametest`
     */
    "UserName": string;
}
