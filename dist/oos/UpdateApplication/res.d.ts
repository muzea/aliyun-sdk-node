export interface UpdateApplicationResponse {
    /**
     * 请求ID。
     * @example `F1F00F41-D24C-5377-831B-C97F739CE1AB`
     */
    RequestId: string;
    /**
     * 应用信息。
     */
    Application: {
        /**
         * 应用描述。
         * @example `test application`
         */
        Description: string;
        /**
         * 更新时间。
         * @example `2021-09-07T10:17:46Z`
         */
        UpdatedDate: string;
        /**
         * 资源组ID。
         * @example `rg-acfmxsn4m*****`
         */
        ResourceGroupId: string;
        /**
         * 创建时间。
         * @example `2021-09-07T09:17:46Z`
         */
        CreatedDate: string;
        /**
         * 标签。
         * @example `{"k1":"v1","k2":"v2"}`
         */
        Tags: any;
        /**
         * 应用名称。
         * @example `My-Application`
         */
        Name: string;
    };
}
