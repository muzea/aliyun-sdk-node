export interface BuySecretNoRequest {
    /**
     * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
     * @example `FC123456`
     */
    "PoolKey": string;
    /**
     * 号码类型。取值：
     * - **1**：虚商号码，即170或171。
     * - **2**：运营商号码。
     * - **3**：95号码。
     * @example `1`
     */
    "SpecId": number;
    /**
     * 指定号码的归属地。
     * > - 当前仅支持设置归属地为中国大陆地区。
     * > - 95号码不区分地区，如果购买95号码，则该参数应指定为**全国通用**。
     * @example `杭州`
     */
    "City": string;
    /**
     * 指定号码前缀。购买号码时，如果指定**SecretNo**，会根据指定的号码前缀模糊匹配手机号。
     * > 最长可指定18位号码前缀。
     * @example `130`
     */
    "SecretNo"?: string;
    /**
     * 是否将该号码置于显号池。
     * > 该参数仅对开通显号功能的客户生效。
     * @example `true`
     */
    "DisplayPool"?: boolean;
}
