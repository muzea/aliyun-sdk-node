export interface GetFootprintListResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题。
     * @example `06DA2909-7736-5738-AA31-ACD617D828F1`
     */
    requestId: string;
    /**
     * 返回数据
     */
    data: {
        /**
         * 当前页码。
         * @example `1`
         */
        currentPage: number;
        /**
         * 分页大小。
         * @example `10`
         */
        pageSize: number;
        /**
         * 产品详情列表
         */
        records: {
            /**
             * 产品id
             * @example `1024`
             */
            id: number;
            /**
             * 产品名称
             * @example `演示产品`
             */
            name: string;
            /**
             * 认证状态枚举值，[参考附录](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/%E7%A2%B3%E8%B6%B3%E8%BF%B9%E9%99%84%E5%BD%95.pdf)。
             * @example `1`
             */
            authStatus: number;
            /**
             * 产品数量
             * @example `100.0000000000000000000000000`
             */
            amount: number;
            /**
             * 计算开始时间
             * @example `2024/01/01`
             */
            checkStartTime: string;
            /**
             * 计算结束时间
             * @example `2024/01/31`
             */
            checkEndTime: string;
            /**
             * 创建者
             * @example `Energy Expert`
             */
            createdBy: string;
            /**
             * 所属企业编码
             * @example `C-20080808-1`
             */
            code: string;
            /**
             * 是否是展示模型，1为真值，0为假值，真值表示系统内置的演示模型
             * @example `1`
             */
            isDemoModel: number;
            /**
             * 与lifeCycleType对应的文字表述，`从摇篮到大门`或者`从摇篮到坟墓`。
             * @example `从摇篮到大门`
             */
            lifeCycle: string;
            /**
             * 1是从摇篮到大门，2是从摇篮到坟墓。
             * @example `1`
             */
            lifeCycleType: number;
            /**
             * 产品分类枚举值，[参考附录](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/%E7%A2%B3%E8%B6%B3%E8%BF%B9%E9%99%84%E5%BD%95.pdf)。
             * @example `158-159`
             */
            type: string;
            /**
             * 单位枚举值，[参考附录](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/%E7%A2%B3%E8%B6%B3%E8%BF%B9%E9%99%84%E5%BD%95.pdf)。
             * @example `1-4`
             */
            unit: string;
        }[];
        /**
         * 总记录数。
         * @example `21`
         */
        total: number;
        /**
         * 总页数
         * @example `3`
         */
        totalPage: number;
    };
}
