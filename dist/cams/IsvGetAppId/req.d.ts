export interface IsvGetAppIdRequest {
    /**
     * App类型，取值：WHATSAPP。
     * @example `WHATSAPP`
     */
    "Type": string;
    /**
     * 权限。
     * @example `catalog_management`
     */
    "Permissions"?: string;
}
