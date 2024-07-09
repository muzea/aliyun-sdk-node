export interface DescribeHanaDatabasesResponse {
    /**
     * 请求ID。
     * @example `DAAB6A29-34EB-5F56-962F-D5BDBFE8A5C2`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页页码。从1开始，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小。最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `10`
     */
    TotalCount: number;
    HanaDatabases: {
        /**
         * SAP HANA数据库列表。
         */
        HanaDatabase: {
            /**
             * 主机名。
             * @example `izbp1jbf3zy******antqmz`
             */
            Host: string;
            /**
             * 端口。
             * @example `30013`
             */
            SqlPort: number;
            /**
             * 数据库名称。
             * @example `SYSTEMDB`
             */
            DatabaseName: string;
            /**
             * 服务名。
             * @example `indexserver`
             */
            ServiceName: string;
            /**
             * 启动状态。取值包括：
             * - **YES**：启动
             * - **NO**：未启动
             * @example `YES`
             */
            ActiveStatus: string;
            /**
             * 详细信息。
             * @example `master`
             */
            Detail: string;
        }[];
    };
}
