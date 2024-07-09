export interface ModifyDiskSpecResponse {
    /**
     * 订单ID。您可以在阿里云用户中心的<props="china">[订单管理](https://usercenter2.aliyun.com/order/list?pageIndex=1&pageSize=20)中获取。</props>
     * <props="intl">[订单管理](https://usercenter2-intl.aliyun.com/order/list?pageIndex=1&pageSize=20&spm=5176.12818093.top-nav.ditem-ord.36f016d0OQFmJa)中获取。</props>
     * @example `219861020660568`
     */
    OrderId: string;
    /**
     * 本次请求的ID。
     * @example `F89BBB13-8B3B-5C8A-A700-EEFDC17B8227`
     */
    RequestId: string;
}
