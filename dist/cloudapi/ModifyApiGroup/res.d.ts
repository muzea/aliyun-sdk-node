export interface ModifyApiGroupResponse {
    /**
     * 请求唯一标识
     * @example `4CF287C6-CE5B-477B-BE27-C48F99EADBC8`
     */
    RequestId: string;
    /**
     * api根路径
     * @example `/test`
     */
    BasePath: string;
    /**
     * API分组ID，系统生成，全局唯一
     * @example `523e8dc7bbe04613b5b1d726c2a7889d`
     */
    GroupId: string;
    /**
     * API分组名称
     * @example `NewWeather`
     */
    GroupName: string;
    /**
     * API分组描述
     * @example `New weather informations.`
     */
    Description: string;
    /**
     * 系统为API分组分配的二级域名
     * @example `523e8dc7bbe04613b5b1d726c2a7889d-cn-hangzhou.alicloudapi.com`
     */
    SubDomain: string;
}
