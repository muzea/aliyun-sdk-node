export interface CreateSitePairResponse {
    /**
     * 请求ID
     * @example `D14F1EB0-30B7-5A38-92E7-C2D11077D5CA`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 站点对ID
     * @example `s-000bvn4shsuhq4cph5i8`
     */
    SitePairId: string;
    /**
     * 从站站点ID
     * @example `si-000imvpcegvbh6i5kd2u`
     */
    SecondarySiteId: string;
    /**
     * 主站站点ID
     * @example `si-0001jntih0phb0i2w1ya`
     */
    PrimarySiteId: string;
}
