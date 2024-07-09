export interface DeleteUserRequest {
    /**
     * 指定要删除的用户所在堡垒机的实例ID。
     * >您可以调用[describeinstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要删除的用户所在堡垒机的地域ID。
     * >地域id和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要删除的用户ID。
     * > 您可以调用[ListUsers](~~204522~~)接口获取该参数。
     * @example `1`
     */
    "UserId": string;
}
