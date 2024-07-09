export interface DeleteAntChainMiniAppQRCodeAuthorizedUserRequest {
    /**
     * 区块链ID
     * @example `bDXK6boZ`
     */
    "AntChainId": string;
    /**
     * 被取消授权的用户，内容为支付宝账号对应的手机号
     * @example `1380013****`
     */
    "Phone": string;
}
