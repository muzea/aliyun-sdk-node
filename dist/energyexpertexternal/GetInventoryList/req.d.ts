export interface GetInventoryListRequest {
    /**
     * 请求参数。
     */
    "body"?: {
        /**
         * 企业编码。
         * @example `C-20080808-1`
         */
        code: string;
        /**
         * 产品id。
         * @example `1024`
         */
        productId: number;
        /**
         * 产品类型: 1表示请求产品碳足迹，5表示请求供应链碳足迹。
         * @example `1`
         */
        productType: number;
        /**
         * 获取的环境影响类型：gwp为气候变化碳足迹，其他请见枚举值的type值，[参考附录](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/%E7%A2%B3%E8%B6%B3%E8%BF%B9%E9%99%84%E5%BD%95.pdf)。
         * @example `gwp`
         */
        methodType: string;
        /**
         * 排放类型
         * > 可选值有：footprint | emission。含义：footprint：所有的清单都参与计算；emission：只有排放为正数和零的清单参与计算，负数不参与计算。
         * @example `footprint`
         */
        emissionType: string;
        /**
         * 分组依据
         * > 可选值有：resource | process | resourceType | processType。含义：resource：按清单分组聚合，process：按工序分组聚合，resourceType：按清单类型分组聚合，processType：按环节分组聚合。
         * @example `resource`
         */
        group: string;
    };
}
