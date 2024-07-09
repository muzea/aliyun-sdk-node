export interface ListDataSourcesResponse {
    /**
     * 请求ID
     * @example `93A9E542-8CF8-5BA6-99AB-94C0FE520429`
     */
    requestId: string;
    /**
     * 返回参数
     */
    result: {
        /**
         * 数据源名称。
         * @example `ha-cn-pl32rf0****_test_api`
         */
        name: string;
        /**
         * 类型
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
         * @example `1718787785`
         */
        lastFulTime: number;
        /**
         * 数据源状态：new: 创建中； publish: 正常； trash: 删除中
         * @example `new`
         */
        status: string;
    }[];
}
