export interface EditNewBuyStatusRequest {
    /**
     * 客户uid
     * @example `1133166938931507`
     */
    "Uid"?: number;
    /**
     * 新购状态
     * cancelBan:取消禁止新购
     * ban:禁止新购
     * @example `cancelBan`
     */
    "NewBuyStatus"?: string;
}
