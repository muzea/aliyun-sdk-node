export interface KickOutClientsRequest {
    /**
     * 智能接入网关APP实例所在的地域。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关APP实例ID。
     * @example `sag-ehjfb*******`
     */
    "SmartAGId": string;
    /**
     * 用户名，同一个智能接入网关APP实例下的用户名不可以重复。
     * 用户名和密码相互依赖，若指定用户名则必须指定密码，反之，若指定密码则必须指定用户名。
     * @example `doctest`
     */
    "Username": string;
}
