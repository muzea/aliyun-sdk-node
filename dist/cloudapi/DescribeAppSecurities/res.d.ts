export interface DescribeAppSecuritiesResponse {
    /**
     * 请求ID
     * @example `EF924FE4-2EDD-4CD3-89EC-34E4708574E7`
     */
    RequestId: string;
    AppSecuritys: {
        /**
         * 关联的安全策略信息
         */
        AppSecurity: {
            /**
             * 应用AppSecret
             * @example `ea5291a7aff343769eb3139a2f6de8c9`
             */
            AppSecret: string;
            /**
             * 修改时间（格林威治时间）
             * @example `2023-08-14T18:03:00+08:00`
             */
            ModifiedTime: string;
            /**
             * App的key
             * @example `34379343`
             */
            AppKey: string;
            /**
             * 创建时间
             * @example `2021-09-14T18:50:59`
             */
            CreatedTime: string;
            /**
             * 应用的AppCode
             * @example `d2350ecd62c44cbfbe35a7f182e35105`
             */
            AppCode: string;
        }[];
    };
}
