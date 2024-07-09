export interface ListCnameResponse {
    /**
     * 查询Cname信息列表的容器。
     */
    ListCnameResult: {
        /**
         * 存储空间名称。
         * @example `example-bucket`
         */
        Bucket: string;
        /**
         * Bucket拥有者的用户ID。
         * @example `133413***273506`
         */
        Owner: string;
        /**
         * 保存Cname信息的列表。
         */
        Cname: any[];
    };
}
