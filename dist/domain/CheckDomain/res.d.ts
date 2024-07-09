export interface CheckDomainResponse {
    /**
     * 唯一请求识别码。
     * @example `BA7A4FD4-EB9A-4A20-BB0C-9AEB15634DC1`
     */
    RequestId: string;
    /**
     * 域名是否可以注册。取值：
     * - **1**：可注册。
     * - **3**：预登记。
     * - **4**：可删除预订。
     * - **0**：不可注册。
     * - **-1**：异常。
     * - **-2**：暂停注册。
     * - **-3**：黑名单。
     *
     * @example `1`
     */
    Avail: string;
    /**
     * 溢价词注册价格。
     * @example `1286`
     */
    Price: number;
    /**
     * 查询的域名名称。
     * @example `test**.xin`
     */
    DomainName: string;
    /**
     * 是否是溢价词。取值：
     * - **true**：是。
     * - **false**：否。
     *
     * @example `true`
     */
    Premium: string;
    /**
     * 是否动态询价。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    DynamicCheck: boolean;
    /**
     * 由注册局返回的不可注册原因。
     * >根据注册局的不同，返回的不可注册原因不一致。
     * @example `In use`
     */
    Reason: string;
    StaticPriceInfo: {
        /**
         * 静态价格信息
         */
        PriceInfo: {
            /**
             * 操作类型
             * - activate：新购
             * @example `activate`
             */
            action: string;
            /**
             * 金额，单位元。
             * @example `78.0`
             */
            money: number;
            /**
             * 周期，单位月。
             * @example `12`
             */
            period: number;
        }[];
    };
}
