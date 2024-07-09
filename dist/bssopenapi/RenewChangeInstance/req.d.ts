export interface RenewChangeInstanceRequest {
    /**
     * 产品代码，可通过接口**QueryProductList**查询产品代码，或查看**阿里云产品Code速查手册**。
     * @example `rds`
     */
    "ProductCode": string;
    /**
     * 产品类型
     * @example `rds`
     */
    "ProductType"?: string;
    /**
     * 实例ID。
     * @example `rm-skjdhaskjdh`
     */
    "InstanceId": string;
    /**
     * 模块列表
     */
    "Parameter"?: {
        /**
         * 第n个模块属性value配置，n的取值范围为（1~100）。
         * @example `disk`
         */
        Value: string;
        /**
         * 第n个模块属性code配置，n的取值范围为（1~100），如有多个模块属性参数，按照n=1,2,3…n的形式拼接多个参数。
         * @example `Bandwidth`
         */
        Code: string;
    }[];
    /**
     * 用于保证请求的幂等性。
     * @example `JASIOFKVNVIXXXXXX`
     */
    "ClientToken"?: string;
    /**
     * 预付费续费时长，单位：月。取值：
     * - 1~9。
     * - 12。
     * - 24。
     * - 36。
     * @example `2`
     */
    "RenewPeriod": number;
}
