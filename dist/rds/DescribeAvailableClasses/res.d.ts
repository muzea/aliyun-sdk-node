export interface DescribeAvailableClassesResponse {
    /**
     * 请求ID。
     * @example `7E4448A6-9FE6-4474-A0C1-AA7CFC772CAC`
     */
    RequestId: string;
    /**
     * 当前实例可用规格列表。
     */
    DBInstanceClasses: {
        /**
         * 实例规格。
         * @example `rds.mysql.c1.large`
         */
        DBInstanceClass: string;
        /**
         * 实例存储空间范围。
         */
        DBInstanceStorageRange: {
            /**
             * 调整存储空间的最小粒度。当前为固定5 GB递增。
             * @example `5`
             */
            Step: number;
            /**
             * 最小存储空间，单位：GB。
             * @example `5`
             */
            MinValue: number;
            /**
             * 最大存储空间，单位：GB。
             * @example `2000`
             */
            MaxValue: number;
        };
    }[];
}
