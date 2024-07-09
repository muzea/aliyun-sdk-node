export interface ListRevisionRequest {
    /**
     * A short description of struct
     */
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 空间 id
         * @example `1`
         */
        drive_id: string;
        /**
         * 文件 id
         * @example `9520943DC264`
         */
        file_id: string;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * 默认值：无
         * @example `40CB7794C929`
         */
        marker: string;
        /**
         * 限定此次返回资源的数量，取值范围\[1,100\]。
         * 默认值为50
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `100`
         */
        limit: number;
        /**
         * 筛选返回字段
         * 默认为空。当填 * 时，返回所有字段，会比为空时多返回创建者名称。
         * @example `*`
         */
        fields: string;
    };
}
