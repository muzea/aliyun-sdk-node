export interface ListPartsResponse {
    /**
     * 保存List Part请求结果的容器。
     */
    ListPartResult: {
        /**
         * Bucket名称。
         * @example `example-bucket`
         */
        Bucket: string;
        /**
         * Object名称。
         * @example `multipart.data`
         */
        Key: string;
        /**
         * Upload事件ID。
         * @example `0004B999EF5A239BB9138C6227D69F95`
         */
        UploadId: string;
        /**
         * 本次List结果的Part Number起始位置。
         * @example `10`
         */
        PartNumberMarker: number;
        /**
         * 如果本次没有返回全部结果，响应请求中将包含NextPartNumberMarker元素，用于标明接下来请求的PartNumberMarker值。
         * @example `5`
         */
        NextPartNumberMarker: number;
        /**
         * 返回请求中最大的Part数目。
         * @example `20`
         */
        MaxParts: number;
        /**
         * 标明本次返回的ListParts结果列表是否被截断。“true”表示本次没有返回全部结果；“false”表示本次已经返回了全部结果。
         * @example `true`
         */
        IsTruncated: boolean;
        /**
         * 保存Part信息的列表。
         */
        Part: any[];
    };
}
