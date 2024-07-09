export interface DescribeWebInstanceRelationsResponse {
    /**
     * 本次请求的ID。
     * @example `0222382B-5FE5-4FF7-BC9B-97EE31D58818`
     */
    RequestId: string;
    /**
     * 网站业务关联的DDoS高防实例信息。
     */
    WebInstanceRelations: {
        /**
         * 网站域名。
         * @example `www.aliyun.com`
         */
        Domain: string;
        /**
         * 关联的DDoS高防实例信息。
         */
        InstanceDetails: {
            /**
             * 功能套餐类型。取值：
             * - **default**：标准功能
             * - **enhance**：增强功能
             * @example `enhance`
             */
            FunctionVersion: string;
            /**
             * DDoS高防实例ID。
             * @example `ddoscoo-cn-0pp163pd****`
             */
            InstanceId: string;
            /**
             * DDoS高防IP列表。
             */
            EipList: string[];
        }[];
    }[];
}
