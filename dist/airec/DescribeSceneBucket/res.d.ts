export interface DescribeSceneBucketResponse {
    /**
     * 返回结果
     */
    result: {
        /**
         * 总桶数
         * @example `2`
         */
        num: number;
        /**
         * 当前所有ab占用桶号，其余均为缺省实验占用
         * @example `1`
         */
        inUse: string;
        /**
         * 详情
         * @example `xxx`
         */
        detail: any;
    };
    /**
     * 请求ID
     * @example `E3D6FE3B-B7C2-43DA-9A13-5EA837ACED9B`
     */
    requestId: string;
}
