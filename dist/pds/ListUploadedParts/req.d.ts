export interface ListUploadedPartsRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。如果不设定，则从头开始返回数据。 默认值：无
         * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
         */
        part_number_marker: number;
        /**
         * 限定此次返回资源的数量。如果不设定，默认返回100，最大不能超过100。
         * @example `100`
         */
        limit: number;
        /**
         * 上传id
         * @example `00166D06127B413BA1EC8ABB1144D101`
         */
        upload_id: string;
        /**
         * 文件id
         * @example `322fb07b975f4b0ae1b543fe8475eee4c19eb2b2`
         */
        file_id: string;
        /**
         * 空间 id，除根据分享链接上传之外的其他场景，必填
         * @example `1`
         */
        drive_id: string;
        /**
         * 分享 id，当根据分享链接上传时必填
         * @example `7JQX1FswpQ8`
         */
        share_id: string;
    };
}
