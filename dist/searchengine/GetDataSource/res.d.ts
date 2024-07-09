export interface GetDataSourceResponse {
    /**
     * Id of the request
     * @example `FE03180A-0E29-5474-8A86-33F0683294A4`
     */
    requestId: string;
    /**
     * 数据源信息列表
     */
    result: {
        /**
         * 数据源名称
         * @example `ha-cn-pl32rf0****_test_api`
         */
        name: string;
        /**
         * 数据源类型
         * @example `odps`
         */
        type: string;
        /**
         * 离线部署
         * @example `vpc_hz_domain_1`
         */
        domain: string;
        /**
         * 索引列表
         */
        indexes: string[];
        /**
         * 上一次全量时间
         * @example `1718787219`
         */
        lastFulTime: number;
        /**
         * 数据源状态：new: 创建中； publish: 正常； trash: 删除中
         * @example `new`
         */
        status: string;
    };
}
