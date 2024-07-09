export interface DescribeInstanceTypeFamiliesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    InstanceTypeFamilies: {
        /**
         * 由实例规格族InstanceTypeFamily组成的集合。
         */
        InstanceTypeFamily: {
            /**
             * 实例规格族所属代数。
             * @example `ecs-5`
             */
            Generation: string;
            /**
             * 实例规格族ID。
             * @example `ecs.g6`
             */
            InstanceTypeFamilyId: string;
        }[];
    };
}
