export interface ListMultipartUploadsResponse {
    /**
     * 保存ListMultipartUpload请求结果的容器。
     */
    ListMultipartUploadsResult: {
        /**
         * Bucket名称。
         * @example `example-bucket`
         */
        Bucket: string;
        /**
         * 指明返回结果中编码使用的类型。如果请求参数中指定了encoding-type，那返回的结果会对Delimiter、KeyMarker、Prefix、NextKeyMarker和Key这些元素进行编码。
         * @example `url`
         */
        EncodingType: string;
        /**
         * 列表的起始Object位置。
         * @example `abc`
         */
        KeyMarker: string;
        /**
         * 列表的起始UploadId位置。
         * @example `0004B999EF5A239BB9138C6227D6****`
         */
        UploadIdMarker: string;
        /**
         * 如果本次没有返回全部结果，响应请求中将包含NextKeyMarker元素，用于表示接下来请求的KeyMarker值。
         * @example `oss.avi`
         */
        NextKeyMarker: string;
        /**
         * 如果本次没有返回全部结果，响应请求中将包含NextUploadMarker元素，用于表示接下来请求的UploadMarker值。
         * @example `0004B99B8E707874FC2D692FA5D77D3F`
         */
        NextUploadIdMarker: string;
        /**
         * 返回的最大Upload个数。
         * @example `20`
         */
        MaxUploads: number;
        /**
         * 表示本次返回的MultipartUpload结果列表是否被截断。取值范围如下：
         * true：表示本次没有返回全部结果。
         * false（默认）：表示本次已经返回了全部结果。
         * @example `true`
         */
        IsTruncated: boolean;
        /**
         * 本次查询所用的前缀。
         * @example `logs/`
         */
        Prefix: string;
        /**
         * 本次查询所用的Object名称分组字符。
         * @example `/`
         */
        Delimiter: string;
        /**
         * 保存Multipart Upload事件信息的列表。
         */
        Upload: any[];
        /**
         * 保存列举结果中Object名称公共前缀的列表。
         */
        CommonPrefixes: any[];
    };
}
