export interface ListDirectionalDetailRequest {
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在物联网SIM服务控制台的卡管理页面，查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid": string;
    /**
     * 查询的页数，不能为0。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 每页的数量，支持10、15、25、40。
     * @example `10`
     */
    "PageSize": number;
}
