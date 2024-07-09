export interface DescribeDataCollctionResponse {
    /**
     * 请求ID
     * @example `72FAD77B-83F9-F393-BA8E-5834E2427BF8`
     */
    requestId: string;
    /**
     * 数据采集信息
     */
    result: {
        /**
         * 创建时间
         * @example `1581065837`
         */
        created: number;
        /**
         * 数据采集的类型
         * - behavior 行为
         * - item_info 项目信息
         * - industry_specific 工业特性
         * @example `BEHAVIOR`
         */
        dataCollectionType: string;
        /**
         * 数据采集端的类型
         * - server
         * - web
         * - app
         * 注：目前只支持 server
         * @example `server`
         */
        type: string;
        /**
         * 行业名称
         * - general 通用
         * - ecommerce 电商
         * @example `GENERAL`
         */
        industryName: string;
        /**
         * 状态
         * - 0 未开通
         * - 1 开通中
         * - 2 开通成功
         * - 3 开通失败
         * @example `2`
         */
        status: number;
        /**
         * 更新时间
         * @example `1581065904`
         */
        updated: number;
        /**
         * 数据采集名称
         * @example `os_function_test_v1`
         */
        name: string;
        /**
         * sundial的ID
         * @example `1755`
         */
        sundialId: string;
        /**
         * 数据采集ID
         * @example `286`
         */
        id: string;
    };
}
