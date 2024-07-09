export interface GetAllowedIpListResponse {
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 请求的ID。
     * @example `A421CCD7-5BC5-4B32-8DD8-64668A8FCB56`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 白名单。
     */
    AllowedList: {
        /**
         * 部署类型。取值：
         * - **4**：公网/VPC
         * - **5**：VPC
         * >普通用户无需关心该字段，集成商客户可以了解一下。
         * @example `4`
         */
        DeployType: number;
        /**
         * VPC白名单。
         */
        VpcList: {
            /**
             * 端口范围。取值：
             * **9092/9092**。
             * @example `9092/9092`
             */
            PortRange: string;
            /**
             * ip白名单。
             */
            AllowedIpList: string[];
            /**
             * ip白名单。
             */
            AllowedIpGroup: any;
        }[];
        /**
         * 公网白名单。
         */
        InternetList: {
            /**
             * 端口范围。取值：
             * **9093/9093**。
             * @example `9093/9093`
             */
            PortRange: string;
            /**
             * ip白名单。
             */
            AllowedIpList: string[];
            /**
             * IP白名单分组。
             */
            AllowedIpGroup: any;
        }[];
    };
}
