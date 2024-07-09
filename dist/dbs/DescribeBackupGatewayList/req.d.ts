export interface DescribeBackupGatewayListRequest {
    /**
     * DBS地域，取值：
     * - **cn-hangzhou**：公有云杭州
     * - **cn-shanghai**：公有云上海
     * - **cn-qingdao**：公有云青岛
     * - **cn-beijing**：公有云北京
     * - **cn-shenzhen**：公有云深圳
     * - **cn-hongkong**：公有云中国香港
     * - **ap-southeat-1**：公有云新加坡
     * - **cn-hangzhou-finance**：金融云杭州
     * - **cn-shanghai-finance**：金融云上海
     * - **cn-shenzhen-finance**：金融云深圳
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 备份网关唯一标识，支持多个查询，用英文逗号（,）分隔。
     * @example `7213527653217`
     */
    "Identifier"?: string;
    /**
     * 每页的记录数，取值：
     * - **30**
     * - **50**
     * - **100**
     * > 默认为30。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，大于等于0且不超过Integer的最大值，默认值为：0。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
