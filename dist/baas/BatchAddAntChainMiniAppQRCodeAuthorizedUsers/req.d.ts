export interface BatchAddAntChainMiniAppQRCodeAuthorizedUsersRequest {
    /**
     * 区块链ID
     * @example `bDXK6boZ`
     */
    "AntChainId": string;
    /**
     * 新增的授权用户列表，内容为支付宝账号对应的手机号
     * @example `["1380013****", "1380013****"]`
     */
    "PhoneList": any;
}
