export interface GetSchemaResponse {
    /**
     * 数据。
     */
    Data: {
        /**
         * 实例ID。
         * @example `5e0964fd-951c-4e45-b518-d09d4d2db8ca`
         */
        InstanceId: string;
        /**
         * schema id
         * @example `profile`
         */
        Id: string;
        /**
         * 描述
         * @example `客户profile`
         */
        Description: string;
        /**
         * 字段列表
         */
        Properties: any;
        /**
         * 创建时间。
         * @example `2021-07-14 10:48:43.0`
         */
        CreatedTime: string;
        /**
         * 上次修改的时间。
         * @example `2021-07-14 10:48:43.0`
         */
        UpdatedTime: string;
        /**
         * 是否被删除
         * @example `false`
         */
        Deleted: boolean;
    };
    /**
     * 请求ID。
     * @example `19D09CCC-F298-4124-849A-AFA217819011`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `Service abnormal, the instance 0418 is ceased.`
     */
    Message: string;
    /**
     * 响应参数。
     */
    Params: string[];
}
