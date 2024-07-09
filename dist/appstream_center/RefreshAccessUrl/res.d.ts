export interface RefreshAccessUrlResponse {
    /**
     * Id of the request
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 状态码：
     * - `200`：成功。
     * - `400`：出错。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `找不到访问页`
     */
    Message: string;
    /**
     * 请求成功与否，成功返回为true，失败为false
     * @example `true`
     */
    Success: string;
    /**
     * 访问页面的超链接
     * @example `https://wuying.aliyun.com/native-solution/cloud-flow/view?id=a-075nu7b9ynrpugvbm&token=67C7557D25540A9130B1ED81E806D4772A7DE693E6F377E3594179772B******`
     */
    AccessUrl: string;
}
