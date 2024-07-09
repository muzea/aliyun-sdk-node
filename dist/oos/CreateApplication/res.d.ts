export interface CreateApplicationResponse {
    /**
     * 请求ID。
     * @example `274917E8-8E74-5928-A82F-4940F52F7ACB`
     */
    RequestId: string;
    /**
     * 应用信息。
     */
    Application: {
        /**
         * 标签。
         * @example `{"k1":"v1","k2":"v2"}`
         */
        Tags: any;
        /**
         * 应用名称。
         * @example `Myapplication`
         */
        Name: string;
        /**
         * 更新时间。
         * @example `2021-09-07T09:17:46Z`
         */
        UpdateDate: string;
        /**
         * 描述信息。
         * @example `application`
         */
        Description: string;
        /**
         * 创建时间。
         * @example `2021-09-07T09:17:46Z`
         */
        CreateDate: string;
    };
}
