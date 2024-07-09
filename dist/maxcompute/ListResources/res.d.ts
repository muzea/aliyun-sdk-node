export interface ListResourcesResponse {
    /**
     * 请求id。
     * @example `0bc3b4ae16685836687916212e7850`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 资源列表。
         */
        resources: {
            /**
             * 显示名称
             * @example `res_1
            `
             */
            displayName: string;
            /**
             * 资源名称。
             * @example `res_1`
             */
            name: string;
            /**
             * 资源的拥有者。
             * @example `1265860483008101`
             */
            owner: string;
            /**
             * 资源类型。
             * @example `file`
             */
            type: string;
            /**
             * 所属schema。
             * @example `schemaA`
             */
            schema: string;
            /**
             * 最后更新人。
             * @example `ALIYUN$xxx@test.aliyunid.com`
             */
            lastUpdator: string;
            /**
             * 创建时间。
             * @example `2022-01-29T03:34:09Z`
             */
            creationTime: number;
            /**
             * 修改时间。
             * @example `2023-04-18T06:15:05Z`
             */
            lastModifiedTime: number;
            /**
             * 备注。
             * @example `filr类型资源`
             */
            comment: string;
            /**
             * 大小。
             * @example `10`
             */
            size: number;
            /**
             * HTTP请求正文的128-bit MD5散列值转换成BASE64编码的结果。
             * @example `MACiECZtnLiNkNS1v5****=1`
             */
            contentMD5: string;
        }[];
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。
         * @example `ZmN0X21vbnRoX3Rhb2Jhb19pbmRleCE=`
         */
        marker: string;
        /**
         * 每页返回的最大结果数。
         * @example `10`
         */
        maxItem: number;
    };
}
