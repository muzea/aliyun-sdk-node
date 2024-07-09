export interface ScanFileRequest {
    "domain_id": string;
    /**
     * 请求体
     */
    "body"?: {
        /**
         * 空间id
         * @example `1`
         */
        drive_id: string;
        /**
         * 限定此次返回资源的数量，取值范围\[1,100\]。
         * 返回结果可以小于指定的数量，但不能多于指定的数量。
         * @example `50`
         */
        limit: number;
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。
         * <br>默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        marker: string;
        /**
         * scan file 想要获取的文件属性，
         * -  如果想要获取所有属性使用‘*’，
         * - 不传默认返回以下属性：
         *       - file_id,
         *       - drive_id,
         *        - parent_file_id,
         *        - type,
         *        - created_at,
         *        - updated_at,
         *        - file_extention,
         *        - size,
         *        - starred,
         *        - status,
         *        - category,
         *        - permissions
         * - 用户也可以指定属性进行返回，多个属性之间用','隔开
         * @example `*`
         */
        fields: string;
    };
}
