export interface GetUserRequest {
    /**
     * 租户ID，可通过调用接口[GetUserActiveTenant](~~198073~~)获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 用户UID。您可以通过DMS控制台右上角头像处查看您的UID。
     * @example `22973492647626****`
     */
    "Uid"?: string;
    /**
     * 用户ID，可通过调用接口[ListUsers](~~141938~~)获取该参数的值。
     * @example `51****`
     */
    "UserId"?: string;
}
