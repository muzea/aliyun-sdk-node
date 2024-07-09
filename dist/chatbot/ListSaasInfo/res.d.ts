export interface ListSaasInfoResponse {
    /**
     * Id of the request
     * @example `A629A28F-F25E-5572-A679-FA46FB0151D6`
     */
    RequestId: string;
    /**
     * SaaS被集成列表
     */
    Data: {
        /**
         * SaaS原子化页面唯一标识，可用来关联和查询原子页面的相关信息
         * @example `GLOBAL_SERVICE`
         */
        Code: string;
        /**
         * 原子页面的中文名称
         * @example `全局服务`
         */
        Name: string;
        /**
         * 原子页面的链接地址
         * @example `https://alime.console.aliyun.com/?productCode=p_beebot_public&switchAgent=1204001&saasCode=Robot&saasToken=06614fdb-c72f-436e-8003-dfe8a2854a15&saasName=123#/robot`
         */
        Url: string;
        /**
         * 原子页面的英文名称
         * @example `GLOBAL SERVICE`
         */
        EnName: string;
        /**
         * iframe嵌套SaaS页面链接
         * @example `https://pre-alime4service.console.aliyun.com/?productCode=p_beebot_public&switchAgent=1204001&saasCode=Robot&saasToken=06614fdb-c72f-436e-8003-dfe8a2854a15&saasName=123#/robot`
         */
        ServiceUrl: string;
    }[];
    /**
     * 云小蜜颁发的SaaS被集成Token
     * @example `06614fdb-c72f-436e-8003-dfe8a2854a15`
     */
    SaasToken: string;
}
