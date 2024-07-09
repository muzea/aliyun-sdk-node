export interface DeleteTagWithUuidRequest {
    /**
     * 标签名称。
     * @example `abc`
     */
    "TagName": string;
    /**
     * 服务器的UUID列表。
     * > 如果设置了UuidList，调用本接口时云安全中心只删除UuidList涉及到的服务器上的该标签。如果UuidList为空，云安全中心会删除所有服务器上的该标签。
     * @example `111-xx,aa-bb`
     */
    "UuidList"?: string;
}
