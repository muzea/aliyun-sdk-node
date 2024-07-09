export interface GetWhatsappConnectionCatalogRequest {
    /**
     * WABA账号ID。可在Chat App消息服务控制台WABA注册完成后查看WabaId。
     * @example `29293939****`
     */
    "WabaId": string;
    /**
     * ISV子客户的SpaceId。
     * @example `C20209399229****`
     */
    "CustSpaceId"?: string;
}
