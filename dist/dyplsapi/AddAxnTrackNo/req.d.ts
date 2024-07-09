export interface AddAxnTrackNoRequest {
    /**
     * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
     * @example `FC2235****`
     */
    "PoolKey": string;
    /**
     * 绑定关系中的隐私号码，即X号码。
     * 您可以通过[BindAxn](~~110258~~)接口获取。
     * @example `1700000****`
     */
    "PhoneNoX": string;
    /**
     * 运单号。
     * @example `abcde*****`
     */
    "trackNo": string;
    /**
     * 订购关系ID。
     * 您可以通过[BindAxn](~~110258~~)接口获取。
     * @example `15678890****`
     */
    "SubsId": string;
}
