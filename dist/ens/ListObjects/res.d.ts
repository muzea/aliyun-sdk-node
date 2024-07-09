export interface ListObjectsResponse {
    /**
     * 如果请求中指定了Delimiter参数，则会在返回的响应中包含CommonPrefixes元素。该元素表明以Delimiter结尾，并有共同前缀的Object名称的集合。
     */
    CommonPrefixes: string[];
    /**
     * 下次列举文件的ContinuationToken。
     * @example `CgJiYw--`
     */
    NextContinuationToken: string;
    /**
     * 此次列举文件操作使用ContinuationToken。
     * @example `test1.txt`
     */
    ContinuationToken: string;
    /**
     * 对文件名称进行分组的字符。
     * @example `/`
     */
    Delimiter: string;
    /**
     * 指明返回结果中编码使用的类型。
     * @example `不涉及`
     */
    EncodingType: string;
    /**
     * 本次查询结果的前缀。
     * @example `b`
     */
    Prefix: string;
    /**
     * 标明本次列举文件的起点。
     * @example `ceshi.txt1617853707991`
     */
    Marker: string;
    /**
     * Bucket名称。
     * @example `test`
     */
    BucketName: string;
    /**
     * Object元信息列表。
     */
    Contents: {
        /**
         * Object名称。
         * @example `ceshi.txt1617853706546`
         */
        Key: string;
        /**
         * Object最后被修改的时间。
         * @example `2021-04-08T03:48:47.488Z`
         */
        LastModified: string;
        /**
         * ETag在每个Object生成时创建，用于标识一个Object的内容。
         * - 对于PutObject请求创建的Object，ETag值是其内容的MD5值。
         * - 对于其他方式创建的Object，ETag值是其内容的UUID。
         * - ETag值可以用于检查Object内容是否发生变化。不建议使用ETag值作为Object内容的MD5校验数据完整性的依据。
         * @example `5B3C1A2E053D763E1B002CC607C5****`
         */
        ETag: string;
        /**
         * Object的字节数。
         * @example `15`
         */
        Size: number;
    }[];
    /**
     * 指明列举文件是否被截断。
     * - **false**：列举完没有截断。
     * - **true**：没列举完就有截断。
     * @example `true`
     */
    IsTruncated: boolean;
    /**
     * 此次请求返回的Key的个数。
     * @example `10`
     */
    KeyCount: number;
    /**
     * 下一次列举文件的起点。
     * @example `ceshi.txt1617853707991`
     */
    NextMarker: string;
    /**
     * 列举文件的最大个数。
     * @example `10`
     */
    MaxKeys: number;
    /**
     * 请求ID。
     * @example `4833C4AC-9396-458C-8F25-1D701334E560`
     */
    RequestId: string;
}
